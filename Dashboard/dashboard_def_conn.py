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



app = dash.Dash(external_stylesheets=[dbc.themes.BOOTSTRAP])

# ------------Récupération de la base de données------------

connection = pymysql.connect(host='localhost', user='root', passwd='1234', database='projet-hand')

SQL_Query = pd.read_sql_query('''select * from actions''', connection)
df_db = pd.DataFrame(SQL_Query)

connection.close() 

# ------------Données de la partie défense--------------------

df = df_db[df_db['attaque']==0]

# -----------listes utiles-------------
matchs = df['id_match'].unique()
temps = df['temps'].unique()
joueuses=df["nom_joueuse"].unique()
fautes = ['faute_7m','faute_9m', 'faute_zone']
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


# -----------Sélection des gardiennes et calcul efficacité------------------
df_tir = df[(df['tir']==1) | (df['7m']==1)]

gardiennes = df_tir["nom_joueuse"].unique()

efficacite_7m = []
efficacite_jeu = []

for x in gardiennes:
    df_gar = df[df['nom_joueuse']==x]

    df_7m = df_gar[df_gar['7m']==1]
    df_jeu = df_gar[df_gar['tir']==1]

    nb_buts_jeu = df_jeu['but'].sum()
    nb_tirs_jeu = df_jeu['tir'].sum()
    if nb_tirs_jeu == 0:
        eff_jeu = 0
    else:
        eff_jeu = (1-(nb_buts_jeu/nb_tirs_jeu))*100

    efficacite_jeu.append(eff_jeu)

    nb_buts_7m = df_7m['but'].sum()
    nb_tirs_7m = df_7m['7m'].sum()
    if nb_tirs_7m == 0:
        eff_7m = 0
    else:
        eff_7m = (1-(nb_buts_7m/nb_tirs_7m))*100

    efficacite_7m.append(eff_7m)

# ------------------Sanctions------------------------

sanctions = ['carton_rouge', 'carton_jaune', '2min_concede']

df_sanc = df[sanctions]



logo_file="Dashboard/logo.png"
encoded_logo = base64.b64encode(open(logo_file, 'rb').read()).decode('ascii')

Schema_cage="Dashboard/Schema_cage.png"
encoded_schema_cage = base64.b64encode(open(Schema_cage, 'rb').read()).decode('ascii')

Schema_terrian="Dashboard/Schema_Terrain.png"
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
                            html.H1(children="Dashboard - Analyse Défense",style={'textAlign': 'center',"margin-bottom":"25px", "color":couleurs['jaune']}),
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
                                    dbc.Col(html.Div(id="nb_attaques_label",children="Attaques placées subies",style={'textAlign': 'center', 'fontWeight':'bold'}),width=True),              
                                    dbc.Col(html.Div(id="nb_contre_attaque_label",children="Contre-attaques subies",style={'textAlign': 'center', 'fontWeight':'bold'}),width=True)       
                            ]),
                            dbc.Row([
                                dbc.Col(html.Div(children=[html.P(id="nb_attaques",children = str(int(tab1.values[0, 0])),style = {'color' : couleurs['jaune'], "textAlign":"center", 'fontWeight':'bold'})]),width=True),
                                dbc.Col(html.Div(id="nb_contre_attaque",children=[html.P(children = str(int(tab1.values[0, 1])),style = {'color' : couleurs['jaune'], "textAlign":"center", 'fontWeight':'bold'})]),width=True)
                            ]),

                            dbc.Row([
                                dbc.Col(html.Div(id="Buts_marque_label",children="Buts encaissés",style={'textAlign': 'center',"margin-top":"15px", 'fontWeight':'bold'}),width=True),
                                dbc.Col(html.Div(id="Tirs_label",children="Tirs reçus",style={'textAlign': 'center',"margin-top":"15px", 'fontWeight':'bold'}),width=True),
                                dbc.Col(html.Div(id="Efficacite_label",children="Efficacité adverse",style={'textAlign': 'center',"margin-top":"15px", 'fontWeight':'bold'}),width=True)
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
                                dbc.Row([
                                    dbc.Col(html.Div(id="Cage_et_terrain",children=[
                                        html.H2(children="Statistiques gardiennes",style={"text-align":"center"}),
                                        dbc.Row([
                                            dbc.Col(html.Div([dcc.Dropdown(id="Filtre_Gardienne",options=gardiennes,multi=True,placeholder="Filtre gardiennes",value="")])),
                                            dbc.Col(html.Div([dcc.Dropdown(id="filtre_prop_eff",options=["Proportion","Efficacité"],value="Efficacité")]))
                                        ]),
                                        dbc.Row([  #Graph Stack Zones terrain + Schéma légende
                                            dbc.Col(dcc.Graph(id='bar2',figure = go.Figure(data=[ go.Bar(name='marqué', x=zones_terrain, y=y_buts),go.Bar(name='raté', x=zones_terrain, y=y_rate) ],layout = {'barmode' : 'stack', 'xaxis' : dict(ticklabelstep = 10)}))), 
                                            dbc.Col(html.Img(src='data:image/png;base64,{}'.format(encoded_schema_terrain),style={"height":"40%","width":"100%"}),width=4)

                                        ],align="center"),

                                        dbc.Row([ #Graph Stack Zones cage + Schéma légende
                                            dbc.Col(dcc.Graph(id='bar3',figure = go.Figure(data=[ go.Bar(name='marqué', x=zones_cage, y=c_buts),go.Bar(name='raté', x=zones_cage, y=c_rate) ],layout = {'barmode' : 'stack'})),width=8),
                                            dbc.Col(html.Img(src='data:image/png;base64,{}'.format(encoded_schema_cage),style={"height":"40%","width":"100%"}),width=4)
                                        
                                            ],align="center")
                                        

                                    ]),width=12)
                                    
                                ])
                            ],style={"margin-top":"30px"})),
                    ], style={"margin-top":"50px"}),
                    dbc.Row([
                        dbc.Col(
                            dcc.Graph(id='efficacite_gardienne_barplot', figure=go.Figure(data=[go.Bar(name='Jeu', x=gardiennes, y=efficacite_jeu), go.Bar(name='7m', x=gardiennes, y=efficacite_7m) ])),
                        width = 6)

                    ])


                ]),width=7),
                    
                dbc.Col(html.Div (id="Bloc_droit",children=[

                    dbc.Row([
                            dcc.Graph(
                                id='sanctions', figure={"data":[go.Bar(x=sanctions, y=df_sanc[sanctions].sum().tolist())],
                                                        "layout":{'title':'Sanctions'}
                                    })
                        ], style = {'height' : '350px'}),
                    dbc.Row(html.P(children="Fautes défensives"),style={"text-align":"center", 'fontSize':'30px'}),
                    dbc.Row(html.Div(id="contenu_bloc_fautes",children=[
                        dbc.Row([
                            dcc.Graph(
                                    id='Fautes_defensives_barplot',
                                    figure={
                                        "data":[go.Bar(x=fautes, y=tab2)],
                                            
                                    }),
                            #html.Div(id="test")
                        ], style = {'height' : '350px'}),

                        
                        html.H2(children="Fautes défensives par zone terrain",style={"text-align":"center", "margin-top":"10px"}),
                        dcc.Dropdown(id="Filtre_Joueuse",options=joueuses,multi=True,placeholder="Filtre joueuses",value=""),
                        dcc.Dropdown(id="filtre_fautes",options=fautes,value="",multi=True,placeholder="Filtre fautes"),
                        dcc.Graph(id="Fautes_def_by_zone", figure = {"data":[go.Bar(x=zones_terrain, y=y_fautes)]})
                        
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
        df_attaque_tp = df_temps[df_temps['attaque']==0]

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
    Output("Fautes_defensives_barplot","figure"), 
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
    Output('bar2','figure'),
    Output('bar3','figure'),
    Input('Filtre_Gardienne','value')
)
def update_graph(gardienne_slctd):

    if len(gardienne_slctd)>0:

        dff_2 = df.copy()
        dff_2 = dff_2[(dff_2['nom_joueuse'].isin(gardienne_slctd))]
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
        


    
        trace1 = go.Bar(x=zones, y=y_buts_f, name = 'but encaissé')
        trace2 = go.Bar(x=zones, y=y_buts_rate_f, name = 'but arrêté')

        trace3=go.Bar(x=cages,y=c_buts_f,name="but encaissé")
        trace4=go.Bar(x=cages,y=c_buts_rate_f,name="but arrêté")


        data = [trace1, trace2]
        data2= [trace3,trace4]

        layout = {'barmode' : 'stack'} #zones)

        figure1 = go.Figure(data=data, layout=layout)
        figure2= go.Figure(data=data2,layout=layout)
        

    else:
        figure1 = go.Figure(data=[go.Bar(name='but encaissé', x=zones_terrain, y=y_buts),go.Bar(name='but arrêté', x=zones_terrain, y=y_rate)],layout = {'barmode' : 'stack'})

        figure2=go.Figure(data=[go.Bar(name='but encaissé', x=zones_cage, y=c_buts),go.Bar(name='but arrêté', x=zones_cage, y=c_rate)],layout = {'barmode' : 'stack'})

    
    return (figure1,figure2)

@app.callback(
    Output('Fautes_def_by_zone','figure'),
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