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
import pymysql

import datetime



app = dash.Dash(external_stylesheets=[dbc.themes.BOOTSTRAP])

# ------------Récupération de la base de données------------

connection = pymysql.connect(host='localhost', user='amau', passwd='291298', database='Projet_Handball',unix_socket="/Applications/MAMP/tmp/mysql/mysql.sock")

SQL_Query = pd.read_sql_query('''select * from actions''', connection)
df_db = pd.DataFrame(SQL_Query)

connection.close() 

#--------------Données de la partie attaque--------------------

df = df_db[df_db['attaque']==1]

# -----------listes utiles-------------
matchs = df['id_match'].unique()
temps = df['temps'].unique()
joueuses=df["nom_joueuse"].unique()
fautes = ['faute_zone','marcher','reprise_dribble','passage_en_force']
zones_terrain = df['zone_terrain'].unique()
zones_cage = df['zone_cage'].unique()

# -----------Analyse des attaques (attaques placées / contre-attaques)-------------

#df_sans_but_enc = df[df['But encaissé']<1]
#df_attaques = df_sans_but_enc[df_sans_but_enc['Arrêt Jeu']<1]
nb_att_placee = df[df['attaque_placee']==1].count()['attaque_placee']
nb_contre_att = df[df['attaque_placee']==0].count()['attaque_placee']

df_type_attaques = pd.DataFrame({'Attaque placée':[nb_att_placee],'Contre-attaque':[nb_contre_att]})

tab1 = df_type_attaques.copy()

# -----------Analyse des fautes-------------
tab2 = df[fautes].sum().tolist()

fautes_bis = fautes.copy()
fautes_bis.append('zone_terrain')
y_fautes = []

tab3 = df[fautes_bis]
for x in zones_terrain:
    tab = tab3.copy()
    tab = tab[tab['zone_terrain']==x]        
    y_fautes.append(sum(tab[fautes].sum().tolist()))





# -----------Analyse des buts------------------
nb_buts = df['but'].sum()
nb_tirs = df['tir'].sum()+df['7m'].sum()

if nb_tirs == 0:
    efficacite = 0
else:
    efficacite = nb_buts/nb_tirs*100
print(efficacite)


# -----------Analyse des buts proportion et efficacite par zone terrain------------------
y_buts = []
y_rate = []
y_prop=[]

for x in zones_terrain :
    dffb = df.copy()
    dffb = df[df['zone_terrain']==x]
    dffb = dffb[dffb['tir']==1]
    y_buts.append(dffb[dffb['but']==1].count()["but"])
    y_rate.append(dffb[dffb['but']==0].count()["but"])
    if nb_buts == 0:
        y_prop = 0
    else:
        y_prop=(y_buts/nb_buts)*100

print(y_buts)

# -----------Analyse des buts proportion et efficacite par zone cage------------------
c_buts = []
c_rate = []
c_prop=[]

for x in zones_cage :
    dffb = df.copy()
    dffb = df[df['zone_cage']==x]
    dffb = dffb[dffb['tir']==1]
    c_buts.append(dffb[dffb['but']==1].count()["but"])
    c_rate.append(dffb[dffb['but']==0].count()["but"])
    if nb_buts == 0:
        c_prop = 0
    else:
        c_prop=(c_buts/nb_buts)*100


# -----------Analyse des opportunités offensives------------------
#print(df.columns)

nb_7m_provoque=df["faute_7m"].sum()
nb_2min_provoque=df['2min_provoque'].sum()
nb_duel_gagne=df["duel_gagne"].sum()


logo_file="/Users/amauryrichard/Desktop/Projet-Datas-Handball/Dashboard/logo.png"
encoded_logo = base64.b64encode(open(logo_file, 'rb').read()).decode('ascii')

Schema_cage="/Users/amauryrichard/Desktop/Projet-Datas-Handball/Dashboard/Schema_cage.png"
encoded_schema_cage = base64.b64encode(open(Schema_cage, 'rb').read()).decode('ascii')

Schema_terrian="/Users/amauryrichard/Desktop/Projet-Datas-Handball/Dashboard/Schema_Terrain.png"
encoded_schema_terrain =base64.b64encode(open(Schema_terrian, 'rb').read()).decode('ascii')


couleurs = {
    'jaune' : '#F5E73C',
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
                        dbc.Col(html.Img(src='data:image/png;base64,{}'.format(encoded_logo),style={"height":"85%","width":"85%", "marginTop":"10px", "marginLeft":"10px"}),width="auto"),
                        dbc.Col(html.Div(id="Contenu_header",children=[
                            html.H1(children="Dashboard - Analyse Attaque",style={'textAlign': 'center',"margin-bottom":"25px", "color":couleurs['jaune']}),
                            dbc.Row([
                                dbc.Col(html.Div(children="Filtres",style={"text-align":"center","vertical-align":"middle"}),width=True),
                                dbc.Col(html.Div(id="filtre_match",children=[dcc.Dropdown(id ='match',options=[{'label':i, 'value': i} for i in matchs],value = 1)]),width=True),
                                dbc.Col(html.Div(id="filtre_mi_temps",children=[dcc.Dropdown(id ='temps',options=["Totalité","0'-15'", "15'-30'","30'-45'","45'-60'"],value = '',clearable=False)]),width=True)
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
                                                    labels = ['Attaques placées', 'Contre-attaques'],
                                                    # marker = {'colors' : [couleurs['jaune'], couleurs['noir']]},
                                                    values = tab1.values[0])
                                                ],
                                        'layout': go.Layout(title = 'Ratio attaques placées / contre-attaques',font=dict(size=9.5), colorway = [couleurs['jaune'], couleurs['noir']])
                                            }
                                    )]),width=6),

                        dbc.Col(html.Div(id="autres_stats_gen",children=[
                            dbc.Row([
                                    dbc.Col(html.Div(id="nb_attaques_label",children="Attaques placées",style={'textAlign': 'center', 'fontWeight':'bold'}),width=True),              
                                    dbc.Col(html.Div(id="nb_contre_attaque_label",children="Contre-attaques",style={'textAlign': 'center', 'fontWeight':'bold'}),width=True)       
                            ]),
                            dbc.Row([
                                dbc.Col(html.Div(children=[html.P(id="nb_attaques",children = str(int(tab1.values[0, 0])),style = {'color' : couleurs['jaune'], "textAlign":"center", 'fontWeight':'bold'})]),width=True),
                                dbc.Col(html.Div(id="nb_contre_attaque",children=[html.P(children = str(int(tab1.values[0, 1])),style = {'color' : couleurs['jaune'], "textAlign":"center", 'fontWeight':'bold'})]),width=True)
                            ]),

                            dbc.Row([
                                dbc.Col(html.Div(id="Buts_marque_label",children="Buts marqués",style={'textAlign': 'center',"margin-top":"15px", 'fontWeight':'bold'}),width=True),
                                dbc.Col(html.Div(id="Tirs_label",children="Tirs",style={'textAlign': 'center',"margin-top":"15px", 'fontWeight':'bold'}),width=True),
                                dbc.Col(html.Div(id="Efficacite_label",children="Efficacité",style={'textAlign': 'center',"margin-top":"15px", 'fontWeight':'bold'}),width=True)
                            ]),
                            dbc.Row([
                                dbc.Col(html.Div(id="Buts_marque",children=[html.P(children = str(int(nb_buts)),style = {'textAlign' : 'center','color' : couleurs['jaune']})],style={'textAlign': 'center', 'fontWeight':'bold'}),width=True),
                                dbc.Col(html.Div(id="tir",children=[html.P(children = str(int(nb_tirs)),style = {'textAlign' : 'center','color' : couleurs['jaune']})],style={'textAlign': 'center', 'fontWeight':'bold'}),width=True),
                                dbc.Col(html.Div(id="Efficacite",children=[html.P(children = str(int(efficacite))+"%",style = {'textAlign' : 'center','color' : couleurs['jaune']})],style={'textAlign': 'center', 'fontWeight':'bold'}),width=True)
                            ])
                        ]),width=True)
                    ],align="center", style = {'height':'370px'}),
                    dbc.Row([  #Section Stats zones terrain & cage
                            dbc.Col(html.Div(id="Section_stats_zone",children=[
                                dbc.Row(dbc.Col(html.Div(id="Filtres_section_zones",children=[
                                    dcc.Dropdown(id="Filtre_Joueuse",options=joueuses,multi=True,placeholder="Filtre joueuses",value="")],style={"margin-bottom":"10px"}), width = {'size': 6, 'offset' : 3})),
                                dbc.Row([
                                    dbc.Col(html.Div(id="Cage_et_terrain",children=[
                                        html.H2(children="Stats zones terrain & cage",style={"text-align":"center"}),
                                        dcc.Dropdown(id="filtre_prop_eff",options=["Proportion","Efficacité"],value="Efficacité"),

                                        dbc.Row([  #Graph Stack Zones terrain + Schéma légende
                                            dbc.Col(dcc.Graph(id='bar2',figure = go.Figure(data=[ go.Bar(name='marqué', x=zones_terrain, y=y_buts),go.Bar(name='raté', x=zones_terrain, y=y_rate) ],layout = {'barmode' : 'stack', 'xaxis' : dict(ticklabelstep = 10)}))), 
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
                            #html.Div(id="test")
                        ]),
                        
                        html.H2(children="Fautes offensives par zone terrain",style={"text-align":"center", "margin-top":"190px"}),
                        dcc.Dropdown(id="filtre_fautes",options=fautes,value="",multi=True,placeholder="Filtre fautes"),
                        dcc.Graph(id="Fautes_off_by_zone", figure = {"data":[go.Bar(x=zones_terrain, y=y_fautes)]})
                        
                    ])
                         
                        
    
                    )]))
                    
                    
            ])
    ]
)


# -----------Callbacks ------------------

@app.callback(
    Output('pie1','figure'),Output('nb_attaques','children'),
    Input('temps','value'))

def maj_filtre(temps_value):
    if temps_value=="Totalité":

        nb_att_placee = df[df['attaque_placee']==1].count()['attaque_placee']
        nb_contre_att = df[df['attaque_placee']==0].count()['attaque_placee']

        df_type_attaques = pd.DataFrame({'Attaque placée':[nb_att_placee],'Contre-attaque':[nb_contre_att]})

        tab1 = df_type_attaques.copy()

    else:
        df_temps=df[df["temps"] == temps_value]
        df_attaque_tp = df_temps[df_temps['attaque']==1]

        nb_att_placee_tp = df_attaque_tp[df_attaque_tp['attaque_placee']==1].count()['attaque_placee']
        nb_contre_att_tp = df_attaque_tp[df_attaque_tp['attaque_placee']==0].count()['attaque_placee']

        tab1 = pd.DataFrame({'Attaque placée':[nb_att_placee_tp],'Contre-attaque':[nb_contre_att_tp]})

    
    fig={
        'data': [go.Pie(name = 'Attaques',labels = ['Attaque placée', 'Contre-attaque'],values = tab1.values[0])],
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
        df_j=df[(df["nom_joueuse"].isin(joueuse_value))]
        tab2_j=df_j[fautes].sum()

        fig={"data":[go.Bar(x=fautes,y=tab2_j)]} 
    else:
        fig={"data":[go.Bar(x=fautes,y=tab2)]} 


    return fig 

@app.callback(
    Output('bar2','figure'),Output('bar3','figure'),
    Input('Filtre_Joueuse','value')
)
def update_graph(joueuse_slctd):

    if len(joueuse_slctd)>0:

        dff_2 = df.copy()
        dff_2 = dff_2[(dff_2['nom_joueuse'].isin(joueuse_slctd))]
        dff_2 = dff_2[dff_2['tir']==1]

        zones = dff_2['zone_terrain'].unique()
        cages=dff_2['zone_cage'].unique()

        y_buts_f = []
        y_buts_rate_f = []
        c_buts_f=[]
        c_buts_rate_f =[]


        for x in zones :
            dffb = dff_2.copy()
            dffb = dff_2[dff_2['zone_terrain']==x]
            y_buts_f.append(dffb[dffb['but']==1].count()['but'])
            y_buts_rate_f.append(dffb[dffb['but']==0].count()['but'])
        
        for x in cages:
            dffb = dff_2.copy()
            dffb = dff_2[dff_2['zone_cage']==x]
            c_buts_f.append(dffb[dffb['but']==1].count()['but'])
            c_buts_rate_f.append(dffb[dffb['but']==0].count()['but'])
        


    
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

@app.callback(
    Output('Fautes_off_by_zone','figure'),
    Input('filtre_fautes','value')
)
def update_graph(faute_slctd):

    if len(faute_slctd)>0:

        y_fautes_cb = []
        fautes_cb = []

        for k in fautes:
            if k in faute_slctd:
                fautes_cb.append(k)

        fautes_bis_cb = fautes_cb.copy()
        fautes_bis_cb.append('zone_terrain')

        tab3_cb = df[fautes_bis_cb]
        for x in zones_terrain:
            tab = tab3_cb.copy()
            tab = tab[tab['zone_terrain']==x]        
            y_fautes_cb.append(sum(tab[fautes_cb].sum().tolist()))

        figure = {"data":[go.Bar(x=zones_terrain, y=y_fautes_cb)]}

    else: 
        figure = {"data":[go.Bar(x=zones_terrain, y=y_fautes)]}
    
    return figure




if __name__ == '__main__':
    app.run_server()