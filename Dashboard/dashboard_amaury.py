from enum import auto
import base64
from inspect import trace
from multiprocessing.dummy import JoinableQueue
from operator import contains
from queue import Empty
from tkinter import CENTER, font
import dash
import dash_core_components as dcc
import dash_html_components as html
import plotly.graph_objs as go
import pandas as pd 
import plotly.express as px
import dash_bootstrap_components as dbc
from dash.dependencies import Input, Output



app = dash.Dash(external_stylesheets=[dbc.themes.BOOTSTRAP])

df = pd.read_csv("/Users/amauryrichard/Desktop/Projet-Datas-Handball/Dashboard/data2.csv")
print(df.columns)  

# -----------listes utiles-------------
matchs = df['Match'].unique()
issue = ['Victoire', 'Défaite']
mitemps = df['Mi-temps'].unique()
joueuses=df["Nom joueuse"].unique()
fautes = ['Zone','Marcher','Reprise de dribbles','Passage en force']
zones_terrain = df['Zone terrain (1 à 10)'].unique()
zones_cage = df['Zone cage (1 à 9)'].unique()

# -----------Analyse des attaques (attaques placées / contre-attaques)-------------
df_sans_but_enc = df[df['But encaissé']<1]
df_attaques = df_sans_but_enc[df_sans_but_enc['Arrêt Jeu']<1]
df_type_attaques = df_attaques[['Attaque placée','Contre-attaque']]
tab1 = df_type_attaques.sum()

# -----------Analyse des fautes-------------
tab2 = df[fautes].sum().tolist()



# -----------Analyse des buts------------------
nb_buts = df['Buts'].sum()
nb_tirs = df['Tirs'].sum()+df['7m'].sum()
efficacite = nb_buts/nb_tirs*100


# -----------Analyse des buts proportion et efficacite par zone terrain------------------
y_buts = []
y_rate = []
y_prop=[]

for x in zones_terrain :
    dffb = df.copy()
    dffb = df[df['Zone terrain (1 à 10)']==x]
    dffb = dffb[dffb['Tirs']==1]
    y_buts.append(dffb[dffb['Buts']==1].count()["Buts"])
    y_rate.append(dffb[dffb['Buts']==0].count()["Buts"])
    y_prop=(y_buts/nb_buts)*100

# -----------Analyse des buts proportion et efficacite par zone cage------------------
c_buts = []
c_rate = []
c_prop=[]

for x in zones_cage :
    dffb = df.copy()
    dffb = df[df['Zone cage (1 à 9)']==x]
    dffb = dffb[dffb['Tirs']==1]
    c_buts.append(dffb[dffb['Buts']==1].count()["Buts"])
    c_rate.append(dffb[dffb['Buts']==0].count()["Buts"])
    c_prop=(c_buts/nb_buts)*100


# -----------Analyse des opportunités offensives------------------
print(df.columns)

nb_7m_provoque=df["7m provoqué"].sum()
nb_2min_provoque=df['2min provoqué'].sum()
nb_duel_gagne=df["Duel gagné"].sum()


logo_file="/Users/amauryrichard/Desktop/Projet-Datas-Handball/Dashboard/logo.png"
encoded_logo = base64.b64encode(open(logo_file, 'rb').read()).decode('ascii')

Schema_cage="/Users/amauryrichard/Desktop/Projet-Datas-Handball/Dashboard/Schema_cage.png"
encoded_schema_cage = base64.b64encode(open(Schema_cage, 'rb').read()).decode('ascii')

Schema_terrian="/Users/amauryrichard/Desktop/Projet-Datas-Handball/Dashboard/Schema_Terrain.png"
encoded_schema_terrain =base64.b64encode(open(Schema_terrian, 'rb').read()).decode('ascii')


colors = {
    'jaune' : '#F9EB3C',
    'blanc' : '#FFFFFF',    
    'noir' : '#383338',
    'vert' : '#05602F'
}


# -----------Structure du dashboard (Composants HTML + Graphiques)-----------------
app.layout = html.Div(id="Dashboard_global",children=[
        dbc.Row(
            [
                dbc.Col(html.Div (id="Bloc_gauche",children=[
                    dbc.Row([ #Header 
                        dbc.Col(html.Img(src='data:image/png;base64,{}'.format(encoded_logo),style={"height":"85%","width":"85%"}),width="auto"),
                        dbc.Col(html.Div(id="Contenu_header",children=[
                            html.H1(children="Dashboard - Analyse Attaque",style={'textAlign': 'center',"margin-bottom":"25px"}),
                            dbc.Row([
                                dbc.Col(html.Div(children="Filtres",style={"text-align":"center","vertical-align":"middle"}),width=True),
                                dbc.Col(html.Div(id="filtre_match",children=[dcc.Dropdown(id ='match',options=[{'label':i, 'value': i} for i in matchs],value = 1)]),width=True),
                                dbc.Col(html.Div(id="filtre_vic_def",children=[dcc.Dropdown(id ='issue',options=[{'label':i, 'value': i} for i in issue],value = 1)]),width=True),
                                dbc.Col(html.Div(id="filtre_mi_temps",children=[dcc.Dropdown(id ='mitemps',options=["Totalité","1T","2T"],value = 'Totalité',clearable=False)]),width=True)
                            ])
                        ]),width=True)
                    ]),
                    dbc.Row([ #Stats générales
                        dbc.Col(html.Div(id="proportion_types_attaques",children=[
                            dcc.Graph(
                                    id='pie1',
                                    figure={
                                        'data': [go.Pie(
                                                    name = 'Attaques',
                                                    labels = ['Attaque placée', 'Contre-attaque'],
                                                    values = tab1.values)
                                                ],
                                        'layout': go.Layout(title = 'Ratio attaques placées / contre-attaques',font=dict(size=9.5))
                                            }
                                    )]),width=5),

                        dbc.Col(html.Div(id="autres_stats_gen",children=[
                            dbc.Row([
                                    dbc.Col(html.Div(id="nb_attaques_label",children="Attaques placées",style={'textAlign': 'center'}),width=True),
                                    dbc.Col(html.Div(children=[html.P(id="nb_attaques",children = str(int(tab1.values[0])),style = {'color' : colors['jaune']})]),width=1),
                            
                    
                                    dbc.Col(html.Div(id="nb_contre_attaque_label",children="Contre-Attaque",style={'textAlign': 'center'}),width=True),
                                    dbc.Col(html.Div(id="nb_contre_attaque",children=[html.P(children = str(int(tab1.values[1])),style = {'color' : colors['jaune']})]),width=1)
                            ]),

                            dbc.Row([
                                
                                    dbc.Col(html.Div(id="nb_victoire_label",children="Total Victoire",style={'textAlign': 'center'}),width=True),
                                    dbc.Col(html.Div(id="nb_victoire",children="3"),width=1),
                                
                                    dbc.Col(html.Div(id="nb_defaites_label",children="Total défaites",style={'textAlign': 'center'}),width=True),
                                    dbc.Col(html.Div(id="nb_defaites",children="2"),width=1)
                            ]),

                            dbc.Row([
                                dbc.Col(html.Div(id="Buts_marque_label",children="Buts marqués",style={'textAlign': 'center',"margin-top":"15px"}),width=True),
                                dbc.Col(html.Div(id="Tirs_label",children="Tirs",style={'textAlign': 'center',"margin-top":"15px"}),width=True),
                                dbc.Col(html.Div(id="Efficacite_label",children="Efficacité",style={'textAlign': 'center',"margin-top":"15px"}),width=True)
                            ]),
                            dbc.Row([
                                dbc.Col(html.Div(id="Buts_marque",children=[html.P(children = str(int(nb_buts)),style = {'textAlign' : 'center','color' : colors['jaune']})],style={'textAlign': 'center'}),width=True),
                                dbc.Col(html.Div(id="Tirs",children=[html.P(children = str(int(nb_tirs)),style = {'textAlign' : 'center','color' : colors['jaune']})],style={'textAlign': 'center'}),width=True),
                                dbc.Col(html.Div(id="Efficacite",children=[html.P(children = str(int(efficacite))+"%",style = {'textAlign' : 'center','color' : colors['jaune']})],style={'textAlign': 'center'}),width=True)
                            ])
                        ]),width=True)
                    ],align="center"),
                    dbc.Row([  #Section Stats zones terrain & cage
                            dbc.Col(html.Div(id="Section_stats_zone",children=[
                                dbc.Row([
                                    dbc.Col(html.Div(id="Filtres_section_zones",children=[
                                        dcc.Dropdown(id="Filtre_Joueuse",options=joueuses,multi=True,placeholder="Filtre joueuses",value="")],style={"margin-bottom":"20px"}),width=6),
                                    dbc.Col(html.Div(id="Cage_et_terrain",children=[
                                        html.H2(children="Stats zones terrain & cage",style={"text-align":"center"}),
                                        dcc.Dropdown(id="filtre_prop_eff",options=["Proportion","Efficacité"],value="Efficacité"),

                                        dbc.Row([  #Graph Stack Zones terrain + Schéma légende
                                            dbc.Col(dcc.Graph(id='bar2',figure = go.Figure(data=[ go.Bar(name='marqué', x=zones_terrain, y=y_buts),go.Bar(name='raté', x=zones_terrain, y=y_rate) ],layout = {'barmode' : 'stack'}))), 
                                            dbc.Col(html.Img(src='data:image/png;base64,{}'.format(encoded_schema_terrain),style={"height":"40%","width":"100%"}),width=4)

                                        ],align="center"),

                                        dbc.Row([ #Graph Stack Zones cage + Schéma légende
                                            dbc.Col(dcc.Graph(id='bar3',figure = go.Figure(data=[ go.Bar(name='marqué', x=zones_cage, y=c_buts),go.Bar(name='raté', x=zones_cage, y=c_rate) ],layout = {'barmode' : 'stack'})),width=8),
                                            dbc.Col(html.Img(src='data:image/png;base64,{}'.format(encoded_schema_cage),style={"height":"40%","width":"100%"}),width=4)
                                        
                                            ],align="center")
                                        

                                    ]),width=12),
                                    dbc.Col(html.Div(id="Section_opportunites_off",children=[
                                        html.H2(children="Opportunités offensives",style={"text-align":"center"}),
                                        dbc.Row([
                                                dbc.Col(html.Div(id="7m_provoque_label",children="7m provoqué",style={'textAlign': 'center'}),width=True),
                                                dbc.Col(html.Div(id="7m_provoque_data",children=str(int(nb_7m_provoque)),style={'textAlign': 'center'}),width=True),

                                                dbc.Col(html.Div(id="2min_provoque_label",children="2min provoqué",style={'textAlign': 'center'}),width=True),
                                                dbc.Col(html.Div(id="2min_provoque_data",children=str(int(nb_2min_provoque)),style={'textAlign': 'center'}),width=True),

                                                dbc.Col(html.Div(id="duel_gagne_label",children="Duel gagné",style={'textAlign': 'center'}),width=True),
                                                dbc.Col(html.Div(id="duel_gagne_data",children=str(int(nb_duel_gagne)),style={'textAlign': 'center'}),width=True),
                                        ])

                                    ]))
                                ])
                            ],style={"margin-top":"30px"})),

                            
                            
                    ])
                ]),width=7),
                    
                dbc.Col(html.Div (id="Bloc_droit",children=[

                    dbc.Row(html.H2(children="Fautes offensives"),style={"text-align":"center"}),
                    dbc.Row(html.Div(id="contenu_bloc_fautes",children=[
                        dbc.Row([
                            dcc.Graph(
                                    id='Fautes_offensives_barplot',
                                    figure={
                                        "data":[go.Bar(x=fautes, y=tab2)],
                                            
                                    }),
                            html.Div(id="test")
                        ]),
                        
                        html.H2(children="Fautes offensives par zone terrain",style={"text-align":"center", "margin-top":"190px"}),
                        dcc.Graph(id="Fautes_off_by_zone"),
                        
                    ])
                         
                        
    
                    )]))
                    
                    
            ])
    ]
)


# -----------Callbacks ------------------

@app.callback(
    Output('pie1','figure'),Output('nb_attaques','children'),
    Input('mitemps','value'))

def maj_filtre(mi_temps_value):
    if mi_temps_value=="Totalité":
        df_sans_but_enc = df[df['But encaissé']<1]
        df_attaques = df_sans_but_enc[df_sans_but_enc['Arrêt Jeu']<1]
        df_type_attaques = df_attaques[['Attaque placée','Contre-attaque']]
        tab1 = df_type_attaques.sum()

    else:
        df_mt=df[df["Mi-temps"] == mi_temps_value]
        df_sans_but_enc = df_mt[df_mt['But encaissé']<1]
        df_attaques = df_sans_but_enc[df_sans_but_enc['Arrêt Jeu']<1]
        df_type_attaques = df_attaques[['Attaque placée','Contre-attaque']]
        tab1 = df_type_attaques.sum()
    fig={
        'data': [go.Pie(name = 'Attaques',labels = ['Attaque placée', 'Contre-attaque'],values = tab1.values)],
        'layout': go.Layout(title = 'Ratio attaques placées / contre-attaques',font=dict(size=9.5))
        }
    
    children=str(int(tab1.values[0]))

    return (fig, children)


@app.callback(
    Output("Fautes_offensives_barplot","figure"), 
    [Input("Filtre_Joueuse","value")]
)
def maj_filtre_joueuse(joueuse_value): 

    if len(joueuse_value)>0:
        df_j=df[(df["Nom joueuse"].isin(joueuse_value))]
        tab2_j=df_j[fautes].sum()

        fig={"data":[go.Bar(x=fautes,y=tab2_j)]} 
    else:
        fig={"data":[go.Bar(x=fautes,y=tab2)]} 


    return fig 


        
















# @app.callback(
#     Output('Fautes_offensives_barplot','figure'),
#     # Input('mitemps','value'),
#     Input('slct_zone_terrain','value'),
#     Input('type_fautes','value')
# )
# def update_graph(zone_slctd_terrain, type_faute):

#     dff_1 = df.copy()
#     dff_1 = dff_1[dff_1['Zone terrain (1 à 10)'] == zone_slctd_terrain]

#     # Plotly Express
#     fig = px.bar(dff_1, x='Zone terrain (1 à 10)', y=type_faute)

#     return fig

# @app.callback(
#     Output('bar2','figure'),
#     Input('slct_zone_cage','value')
# )
# def update_graph(zone_slctd_cage):

#     dff_2 = df.copy()
#     dff_2 = dff_2[dff_2['Zone cage (1 à 9)'] == str(zone_slctd_cage)]

#     # Plotly Express
#     fig = px.bar(dff_2, x='Zone terrain (1 à 10)', y=['Buts','Tirs'])

#     return fig


@app.callback(
    Output('bar2','figure'),Output('bar3','figure'),
    Input('Filtre_Joueuse','value')
)
def update_graph(joueuse_slctd):

    if len(joueuse_slctd)>0:

        dff_2 = df.copy()
        dff_2 = dff_2[(dff_2['Nom joueuse'].isin(joueuse_slctd))]
        dff_2 = dff_2[dff_2['Tirs']==1]

        zones = dff_2['Zone terrain (1 à 10)'].unique()
        cages=dff_2['Zone cage (1 à 9)'].unique()

        y_buts_f = []
        y_buts_rate_f = []
        c_buts_f=[]
        c_buts_rate_f =[]


        for x in zones :
            dffb = dff_2.copy()
            dffb = dff_2[dff_2['Zone terrain (1 à 10)']==x]
            y_buts_f.append(dffb[dffb['Buts']==1].count()['Buts'])
            y_buts_rate_f.append(dffb[dffb['Buts']==0].count()['Buts'])
        
        for x in cages:
            dffb = dff_2.copy()
            dffb = dff_2[dff_2['Zone cage (1 à 9)']==x]
            c_buts_f.append(dffb[dffb['Buts']==1].count()['Buts'])
            c_buts_rate_f.append(dffb[dffb['Buts']==0].count()['Buts'])
        


    
        trace1 = go.Bar(x=zones, y=y_buts_f, name = 'marqué')
        trace2 = go.Bar(x=zones, y=y_buts_rate_f, name = 'raté')

        trace3=go.Bar(x=cages,y=c_buts_f,name="marqué")
        trace4=go.Bar(x=cages,y=c_buts_rate_f,name="raté")


        data = [trace1, trace2]
        data2= [trace3,trace4]

        layout = {'barmode' : 'stack'} #zones)

        figure1 = go.Figure(data=data, layout=layout)
        figure2= go.Figure(data=data2,layout=layout)
        

    else:
        figure1 = go.Figure(data=[go.Bar(name='marqué', x=zones_terrain, y=y_buts),go.Bar(name='raté', x=zones_terrain, y=y_rate)],layout = {'barmode' : 'stack'})

        figure2=go.Figure(data=[go.Bar(name='marqué', x=zones_cage, y=c_buts),go.Bar(name='raté', x=zones_cage, y=c_rate)],layout = {'barmode' : 'stack'})

    
    return (figure1,figure2)



if __name__ == '__main__':
    app.run_server()