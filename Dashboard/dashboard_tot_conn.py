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
SQL_Query2 = pd.read_sql_query('''select * from matchs''', connection)
df_db_match = pd.DataFrame(SQL_Query2)

connection.close() 

#----------------------------Dataframes de la partie attaque et défense-----------------------------
#------------------------------------------------------------------------------------------------
#------------------------------------------------------------------------------------------------

df = df_db[df_db['attaque']==1]
df_d = df_db[df_db['attaque']==0]

#------------------------------------Variables attaques------------------------------------------
#------------------------------------------------------------------------------------------------

# -----------listes utiles-------------
matchs = df['id_match'].unique()
temps = df['temps'].unique()
joueuses=df["nom_joueuse"].unique()
fautes = ['faute_zone','marcher','reprise_dribble','passage_en_force']
zones_terrain = df['zone_terrain'].unique()
zones_cage = df['zone_cage'].unique()
periodes = ['0-15', '15-30', '30-45', '45-60']

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

# ---------------------------Analyse des opportunités offensives-----------------------------
#print(df.columns)

nb_7m_provoque=df["faute_7m"].sum()
nb_2min_provoque=df['2min_provoque'].sum()
nb_duel_gagne=df["duel_gagne"].sum()

# ----------------------------------------Variables défense------------------------------------
# ---------------------------------------------------------------------------------------------

# -----------listes utiles-------------
matchs_d = df_d['id_match'].unique()
temps_d = df_d['temps'].unique()
joueuses_d=df_d["nom_joueuse"].unique()
fautes_d = ['faute_7m','faute_9m', 'faute_zone']
zones_terrain_d = df_d['zone_terrain'].unique()
zones_cage_d = df_d['zone_cage'].unique()
periodes_d = ['0-15', '15-30', '30-45', '45-60']

# -----------Analyse des attaques (attaques placées / contre-attaques)-------------

#df_sans_but_enc = df[df['But encaissé']<1]
#df_attaques = df_sans_but_enc[df_sans_but_enc['Arrêt Jeu']<1]
nb_att_placee_d = df_d[df_d['attaque_placee']==1].count()['attaque_placee']
nb_contre_att_d = df_d[df_d['attaque_placee']==0].count()['attaque_placee']

df_type_attaques_d = pd.DataFrame({'Attaque placée':[nb_att_placee_d],'Contre-attaque':[nb_contre_att_d]})

tab1_d = df_type_attaques_d.copy()

# ----------------Sélection des joueuses ayant fait des fautes--------------------

df_fautes = df_d[(df_d['tir']==0) & (df_d['7m']==0)]
joueuses_fautes = df_fautes['nom_joueuse'].unique()

# -----------Analyse des fautes-------------
tab2_d = df_d[fautes_d].sum().tolist()

fautes_bis_d = fautes_d.copy()
fautes_bis_d.append('zone_terrain')
y_fautes_d = []

tab3_d = df_d[fautes_bis_d]
for x in zones_terrain_d:
    tab_d = tab3_d.copy()
    tab_d = tab_d[tab_d['zone_terrain']==x]        
    y_fautes_d.append(sum(tab_d[fautes_d].sum().tolist()))

# -----------Analyse des buts------------------
nb_buts_d = df_d['but'].sum()
nb_tirs_d = df_d['tir'].sum()+df_d['7m'].sum()

if nb_tirs_d == 0:
    efficacite_d = 0
else:
    efficacite_d = nb_buts_d/nb_tirs_d*100


# -----------Analyse des buts proportion et efficacite par zone terrain------------------
y_buts_d = []
y_rate_d = []
y_prop_d = []

for x in zones_terrain_d :
    dffb = df_d.copy()
    dffb = df_d[df_d['zone_terrain']==x]
    dffb = dffb[dffb['tir']==1]
    y_buts_d.append(dffb[dffb['but']==1].count()["but"])
    y_rate_d.append(dffb[dffb['but']==0].count()["but"])
    if nb_buts_d == 0:
        y_prop_d.append(0)
    else:
        y_prop_d.append((y_buts_d/nb_buts_d)*100)

# -----------Analyse des buts proportion et efficacite par zone cage------------------
c_buts_d = []
c_rate_d = []
c_prop_d = []

for x in zones_cage_d :
    dffb = df_d.copy()
    dffb = df_d[df_d['zone_cage']==x]
    dffb = dffb[dffb['tir']==1]
    c_buts_d.append(dffb[dffb['but']==1].count()["but"])
    c_rate_d.append(dffb[dffb['but']==0].count()["but"])
    if nb_buts_d == 0:
        c_prop_d.append(0)
    else:
        c_prop_d.append((c_buts_d/nb_buts_d)*100)


# -----------Sélection des gardiennes et calcul efficacité------------------
df_tir = df_d[(df_d['tir']==1) | (df_d['7m']==1)]

gardiennes = df_tir["nom_joueuse"].unique()

efficacite_7m = []
efficacite_jeu = []

for x in gardiennes:
    df_gar = df_d[df_d['nom_joueuse']==x]

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

df_sanc = df_d[sanctions]

#----------------------------------Variables communes--------------------------------------
#------------------------------------------------------------------------------------------

logo_file="Dashboard/logo.png"
encoded_logo = base64.b64encode(open(logo_file, 'rb').read()).decode('ascii')

Schema_cage="Dashboard/Schema_cage.png"
encoded_schema_cage = base64.b64encode(open(Schema_cage, 'rb').read()).decode('ascii')

Schema_terrain="Dashboard/Schema_Terrain.png"
encoded_schema_terrain =base64.b64encode(open(Schema_terrain, 'rb').read()).decode('ascii')


couleurs = {
    #'jaune' : '#F5E73C',
    'jaune' : '#E7DA3A',
    'blanc' : '#FFFFFF',    
    'noir' : '#383338',
    'vert' : '#05602F'
}

#-------------Récupération de la liste des matchs et ID matchs---------------------

liste_matchs = []

for i in range (len(df_db_match['id_match'])):

    id = df_db_match['id_match'].loc[i]

    if df_db_match['Domicile'].loc[i] == "Dom":
        intitule_match = "HBPC - "+str(df_db_match['Club_adverse'].loc[i])    
        liste_matchs.append([id, intitule_match])
    else:
        intitule_match = str(df_db_match['Club_adverse'].loc[i])+" - HBPC"
        liste_matchs.append([id, intitule_match])

# -----------Structure des dashboard (Composants HTML + Graphiques)-----------------

# ---------------------------------------------------------------------------------

# ------------------------------------------------------------------------------------

app.layout = html.Div([
    dbc.Tabs([
        dbc.Tab(
            label = 'Attaque', children = [
    html.Div(id="Dashboard_global",children=[
        dbc.Row(
            [
                dbc.Col(html.Div (id="Bloc_gauche",children=[
                    dbc.Row([ #Header 
                        dbc.Col(html.Img(src='data:image/png;base64,{}'.format(encoded_logo),style={"height":"85%","width":"85%", "marginTop":"10px", "marginLeft":"10px"}),width="auto"),
                        dbc.Col(html.Div(id="Contenu_header",children=[
                            html.H1(children="Dashboard - Analyse Attaque",style={'textAlign': 'center',"margin-bottom":"25px", "color":couleurs['vert']}),
                            dbc.Row([
                                dbc.Col(html.Div(children="Filtres",style={"text-align":"center","vertical-align":"middle"}),width=True),
                                dbc.Col(html.Div(id="filtre_match",children=[dcc.Dropdown(id ='match',options=[{'label':liste_matchs[i][1], 'value': liste_matchs[i][0]} for i in range(len(liste_matchs))],value = '', multi=True, placeholder="Match")]),width=True),
                                dbc.Col(html.Div(id="filtre_temps",children=[dcc.Dropdown(id ='temps',options=periodes , multi=True, placeholder="Période", value="")]),width=True)
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
                                dbc.Col(html.Div(children=[html.P(id="nb_attaques",children = str(int(tab1.values[0, 0])),style = {'color' : couleurs['vert'], "textAlign":"center", 'fontWeight':'bold'})]),width=True),
                                dbc.Col(html.Div(children=[html.P(id="nb_contre_attaque", children = str(int(tab1.values[0, 1])),style = {'color' : couleurs['vert'], "textAlign":"center", 'fontWeight':'bold'})]),width=True)
                            ]),

                            dbc.Row([
                                dbc.Col(html.Div(id="Buts_marque_label",children="Buts marqués",style={'textAlign': 'center',"margin-top":"15px", 'fontWeight':'bold'}),width=True),
                                dbc.Col(html.Div(id="Tirs_label",children="Tirs",style={'textAlign': 'center',"margin-top":"15px", 'fontWeight':'bold'}),width=True),
                                dbc.Col(html.Div(id="Efficacite_label",children="Efficacité",style={'textAlign': 'center',"margin-top":"15px", 'fontWeight':'bold'}),width=True)
                            ]),
                            dbc.Row([
                                dbc.Col(html.Div(children=[html.P(id="Buts_marque", children = str(int(nb_buts)),style = {'textAlign' : 'center','color' : couleurs['vert']})],style={'textAlign': 'center', 'fontWeight':'bold'}),width=True),
                                dbc.Col(html.Div(children=[html.P(id="tir", children = str(int(nb_tirs)),style = {'textAlign' : 'center','color' : couleurs['vert']})],style={'textAlign': 'center', 'fontWeight':'bold'}),width=True),
                                dbc.Col(html.Div(children=[html.P(id="Efficacite", children = str(int(efficacite))+"%",style = {'textAlign' : 'center','color' : couleurs['vert']})],style={'textAlign': 'center', 'fontWeight':'bold'}),width=True)
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
                                        dbc.Row(dbc.Col(dcc.Dropdown(id="filtre_prop_eff",options=["Proportion","Efficacité"],value="Efficacité"),width = {'size': 3, 'offset' : 1})),

                                        dbc.Row([  #Graph Stack Zones terrain + Schéma légende
                                            dbc.Col(dcc.Graph(id='bar2',figure = go.Figure(data=[ go.Bar(name='marqué', x=zones_terrain, y=y_buts),go.Bar(name='raté', x=zones_terrain, y=y_rate) ],layout = go.Layout(title = 'Statistiques par zones terrain', colorway = [couleurs['jaune'], couleurs['noir']], barmode = 'stack', xaxis = dict(range = [0, 10.5], dtick = 1))))), 
                                            dbc.Col(html.Img(src='data:image/png;base64,{}'.format(encoded_schema_terrain),style={"height":"40%","width":"100%"}),width=4)

                                        ],align="center"),

                                        dbc.Row([ #Graph Stack Zones cage + Schéma légende
                                            dbc.Col(dcc.Graph(id='bar3',figure = go.Figure(data=[ go.Bar(name='marqué', x=zones_cage, y=c_buts),go.Bar(name='raté', x=zones_cage, y=c_rate) ],layout = go.Layout(title = 'Statistiques par zones de but', colorway = [couleurs['jaune'], couleurs['noir']], barmode = 'stack', xaxis = dict(range = [0, 9.5], dtick = 1)))),width=8),
                                            dbc.Col(html.Img(src='data:image/png;base64,{}'.format(encoded_schema_cage),style={"height":"40%","width":"100%"}),width=4)
                                        
                                            ],align="center")
                                        

                                    ]),width=12),
                                    dbc.Col(html.Div(id="Section_opportunites_off",children=[
                                        html.H2(children="Opportunités offensives",style={"text-align":"center"}),
                                        dbc.Row([
                                                dbc.Col(html.Div(id="7m_provoque_label",children="7m provoqué",style={'textAlign': 'center', 'fontWeight':'bold'}),width=True),
                                                dbc.Col(html.Div(id="7m_provoque_data",children=str(int(nb_7m_provoque)),style={'textAlign': 'center', 'fontWeight':'bold', 'color':couleurs['vert']}),width=True),

                                                dbc.Col(html.Div(id="2min_provoque_label",children="2min provoqué",style={'textAlign': 'center', 'fontWeight':'bold'}),width=True),
                                                dbc.Col(html.Div(id="2min_provoque_data",children=str(int(nb_2min_provoque)),style={'textAlign': 'center', 'fontWeight':'bold', 'color':couleurs['vert']}),width=True),

                                                dbc.Col(html.Div(id="duel_gagne_label",children="Duel gagné",style={'textAlign': 'center', 'fontWeight':'bold'}),width=True),
                                                dbc.Col(html.Div(id="duel_gagne_data",children=str(int(nb_duel_gagne)),style={'textAlign': 'center', 'fontWeight':'bold', 'color':couleurs['vert']}),width=True),
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
                                        "data":[go.Bar(x=fautes, y=tab2)]
                                            
                                    }),
                            #html.Div(id="test")
                        ]),
                        
                        html.H2(children="Fautes offensives par zone terrain",style={"text-align":"center", "margin-top":"190px"}),
                        dcc.Dropdown(id="filtre_fautes",options=fautes,value="",multi=True,placeholder="Filtre fautes"),
                        dcc.Graph(id="Fautes_off_by_zone", figure = {"data":[go.Bar(x=zones_terrain, y=y_fautes)], "layout" : go.Layout(xaxis = dict(range = [0, 10.5], dtick = 1))})
                        
                    ])
                         
                        
    
                    )]))
                    
                    
            ])
    ]
)]),

dbc.Tab(label = 'Défense', children = [
    html.Div(id="Dashboard_global_d",children=[
        dbc.Row(
            [
                dbc.Col(html.Div (id="Bloc_gauche_d",children=[
                    dbc.Row([ #Header 
                        dbc.Col(html.Img(src='data:image/png;base64,{}'.format(encoded_logo),style={"height":"85%","width":"85%", "marginTop":"10px", "marginLeft":"10px"}),width="auto"),
                        dbc.Col(html.Div(id="Contenu_header_d",children=[
                            html.H1(children="Dashboard - Analyse Défense",style={'textAlign': 'center',"margin-bottom":"25px", "color":couleurs['vert']}),
                            dbc.Row([
                                dbc.Col(html.Div(children="Filtres",style={"text-align":"center","vertical-align":"middle"}),width=True),
                                dbc.Col(html.Div(id="filtre_match_d",children=[dcc.Dropdown(id ='match_d',options=[{'label':liste_matchs[i][1], 'value': liste_matchs[i][0]} for i in range(len(liste_matchs))],value = '', multi=True, placeholder="Match")]),width=True),
                                dbc.Col(html.Div(id="filtre_temps_d",children=[dcc.Dropdown(id ='temps_d',options=periodes_d , multi=True, placeholder="Période", value="")]),width=True)
                            ])
                        ]),width=True)
                    ]),
                    dbc.Row([ #Stats générales
                        dbc.Col(html.Div(id="proportion_types_attaques_d",children=[
                            dcc.Graph(
                                    id='pie1_d',
                                    figure={
                                        'data': [go.Pie(
                                                    name = 'Attaques',
                                                    labels = ['Attaques placées', 'Contre-attaques'],
                                                    # marker = {'colors' : [couleurs['jaune'], couleurs['noir']]},
                                                    values = tab1_d.values[0])
                                                ],
                                        'layout': go.Layout(title = 'Ratio attaques placées / contre-attaques',font=dict(size=9.5), colorway = [couleurs['jaune'], couleurs['noir']])
                                            }
                                    )]),width=6),

                        dbc.Col(html.Div(id="autres_stats_gen_d",children=[
                            dbc.Row([
                                    dbc.Col(html.Div(id="nb_attaques_label_d",children="Attaques placées subies",style={'textAlign': 'center', 'fontWeight':'bold'}),width=True),              
                                    dbc.Col(html.Div(id="nb_contre_attaque_label_d",children="Contre-attaques subies",style={'textAlign': 'center', 'fontWeight':'bold'}),width=True)       
                            ]),
                            dbc.Row([
                                dbc.Col(html.Div(children=[html.P(id="nb_attaques_d", children = str(int(tab1_d.values[0, 0])),style = {'color' : couleurs['vert'], "textAlign":"center", 'fontWeight':'bold'})]),width=True),
                                dbc.Col(html.Div(children=[html.P(id="nb_contre_attaques_d", children = str(int(tab1_d.values[0, 1])),style = {'color' : couleurs['vert'], "textAlign":"center", 'fontWeight':'bold'})]),width=True)
                            ]),

                            dbc.Row([
                                dbc.Col(html.Div(id="Buts_marque_label_d",children="Buts encaissés",style={'textAlign': 'center',"margin-top":"15px", 'fontWeight':'bold'}),width=True),
                                dbc.Col(html.Div(id="Tirs_label_d",children="Tirs reçus",style={'textAlign': 'center',"margin-top":"15px", 'fontWeight':'bold'}),width=True),
                                dbc.Col(html.Div(id="Efficacite_label_d",children="Efficacité adverse",style={'textAlign': 'center',"margin-top":"15px", 'fontWeight':'bold'}),width=True)
                            ]),
                            dbc.Row([
                                dbc.Col(html.Div(children=[html.P(id="Buts_marque_d",children = str(int(nb_buts_d)),style = {'textAlign' : 'center','color' : couleurs['vert']})],style={'textAlign': 'center', 'fontWeight':'bold'}),width=True),
                                dbc.Col(html.Div(children=[html.P(id="tir_d",children = str(int(nb_tirs_d)),style = {'textAlign' : 'center','color' : couleurs['vert']})],style={'textAlign': 'center', 'fontWeight':'bold'}),width=True),
                                dbc.Col(html.Div(children=[html.P(id="Efficacite_d",children = str(int(efficacite_d))+"%",style = {'textAlign' : 'center','color' : couleurs['vert']})],style={'textAlign': 'center', 'fontWeight':'bold'}),width=True)
                            ])
                        ]),width=True)
                    ],align="center", style = {'height':'370px'}),
                    dbc.Row([  #Section Stats zones terrain & cage
                            dbc.Col(html.Div(id="Section_stats_zone_d",children=[
                                dbc.Row([
                                    dbc.Col(html.Div(id="Cage_et_terrain_d",children=[
                                        html.H2(children="Statistiques gardiennes",style={"text-align":"center"}),
                                        dbc.Row([
                                            dbc.Col(html.Div([dcc.Dropdown(id="Filtre_Gardienne",options=gardiennes,multi=True,placeholder="Filtre gardiennes",value="")])),
                                            dbc.Col(html.Div([dcc.Dropdown(id="filtre_prop_eff_d",options=["Proportion","Efficacité"],value="Efficacité")]))
                                        ]),
                                        dbc.Row([  #Graph Stack Zones terrain + Schéma légende
                                            #dbc.Col(dcc.Graph(id='bar2_d',figure = go.Figure(data=[ go.Bar(name='marqué', x=zones_terrain, y=y_buts),go.Bar(name='raté', x=zones_terrain, y=y_rate) ],layout = {'barmode' : 'stack', 'xaxis' : dict(ticklabelstep = 10)}))),
                                            dbc.Col(dcc.Graph(id='bar2_d',figure = go.Figure(data=[ go.Bar(name='marqué', x=zones_terrain_d, y=y_buts_d),go.Bar(name='raté', x=zones_terrain_d, y=y_rate_d) ],layout = go.Layout(title = 'Statistiques par zones terrain', colorway = [couleurs['jaune'], couleurs['noir']], barmode = 'stack', xaxis = dict(ticklabelstep = 10)))),width=8),
                                            dbc.Col(html.Img(src='data:image/png;base64,{}'.format(encoded_schema_terrain),style={"height":"40%","width":"100%"}),width=4)

                                        ],align="center"),

                                        dbc.Row([ #Graph Stack Zones cage + Schéma légende
                                            dbc.Col(dcc.Graph(id='bar3_d',figure = go.Figure(data=[ go.Bar(name='marqué', x=zones_cage_d, y=c_buts_d),go.Bar(name='raté', x=zones_cage_d, y=c_rate_d) ],layout = go.Layout(title = 'Statistiques par zones de but', colorway = [couleurs['jaune'], couleurs['noir']], barmode = 'stack', xaxis = dict(ticklabelstep = 10)))),width=8),
                                            dbc.Col(html.Img(src='data:image/png;base64,{}'.format(encoded_schema_cage),style={"height":"40%","width":"100%"}),width=4)
                                        
                                            ],align="center")
                                        

                                    ]),width=12)
                                    
                                ])
                            ],style={"margin-top":"30px"})),
                    ], style={"margin-top":"50px"}),
                    dbc.Row([
                        dbc.Col(
                            dcc.Graph(id='efficacite_gardienne_barplot', figure=go.Figure(data=[go.Bar(name='Jeu', x=gardiennes, y=efficacite_jeu), go.Bar(name='7m', x=gardiennes, y=efficacite_7m)],
                                                                         layout = go.Layout(colorway = [couleurs['jaune'], couleurs['noir']]))),
                        width = 6)
                    ])
                ]),width=7),
                    
                dbc.Col(html.Div(id="Bloc_droit_d",children=[

                    dbc.Row([
                            dcc.Graph(
                                id='sanctions', figure={"data":[go.Bar(x=sanctions, y=df_sanc[sanctions].sum().tolist())],
                                                        "layout":{'title':'Sanctions'}
                                    })
                        ], style = {'height' : '350px'}),
                    dbc.Row(html.P(children="Fautes défensives"),style={"text-align":"center", 'fontSize':'30px'}),
                    dbc.Row([
                            dbc.Col(html.Div(dcc.Dropdown(id="Filtre_Joueuse_d",options=joueuses_fautes,multi=True,placeholder="Filtre joueuses",value=""))),
                            dbc.Col(html.Div(dcc.Dropdown(id="filtre_fautes_d",options=fautes_d,value="",multi=True,placeholder="Filtre fautes")))
                        ]),
                    dbc.Row(html.Div(id="contenu_bloc_fautes_d",children=[
                        dbc.Row([
                            dcc.Graph(id='Fautes_defensives_barplot_d', figure={"data":[go.Bar(x=fautes_d, y=tab2_d)],"layout":{'title':'Fautes défensives'}})
                        ], style = {'height' : '350px'}),
                        html.Br(),
                        html.Br(),
                        html.Div(dcc.Graph(id="Fautes_def_by_zone", figure = {"data":[go.Bar(x=zones_terrain_d, y=y_fautes_d)],
                                                                     "layout": go.Layout(title = 'Fautes défensives par zones terrain')}))
                        
                    ])
                         
                    )]), width = 5)       
            ])
    ]
)
])
])])


# --------------------------------Callbacks Attaque---------------------------------------

# ----------------------------------------------------------------------------------------

# ----------------------------------------------------------------------------------------

@app.callback(
    Output('Buts_marque', 'children'),
    Output('tir', 'children'),
    Output('Efficacite', 'children'),
    Output('7m_provoque_data', 'children'),
    Output('2min_provoque_data', 'children'),
    Output('duel_gagne_data', 'children'),
    Input('temps','value'),
    Input('match', 'value'))
def maj_stat(periode, match_slctd):

    if (match_slctd != '') and (len(match_slctd)>0):
        dfa = df[df['id_match'].isin(match_slctd)]
        if len(periode)>0:
            dfb = dfa[dfa['temps'].isin(periode)]
        else:
            dfb = dfa.copy()
    else:
        if len(periode)>0:
            dfb = df[df['temps'].isin(periode)]
        else:
            dfb = df.copy()

    nb_buts_cb = dfb['but'].sum()
    nb_tirs_cb = dfb['tir'].sum()+dfb['7m'].sum()

    if nb_tirs_cb == 0:
        efficacite_cb = 0
    else:
        efficacite_cb = nb_buts_cb/nb_tirs_cb*100

    nb_7m_provoque_cb=dfb["faute_7m"].sum()
    nb_2min_provoque_cb=dfb['2min_provoque'].sum()
    nb_duel_gagne_cb=dfb["duel_gagne"].sum()

    children1 = nb_buts_cb
    children2 = nb_tirs_cb
    children3 = efficacite_cb
    children4 = nb_7m_provoque_cb
    children5 = nb_2min_provoque_cb
    children6 = nb_duel_gagne_cb

    return(str(int(children1)), str(int(children2)), str(int(children3))+"%", str(int(children4)), str(int(children5)), str(int(children6)))

@app.callback(
    Output('pie1','figure'),
    Output('nb_attaques','children'),
    Output('nb_contre_attaque','children'),
    Input('temps','value'),
    Input('match','value'))

def maj_filtre(periode, match_slctd):
    if (match_slctd != '') and (len(match_slctd)>0):
        dfa = df[df['id_match'].isin(match_slctd)]
        if len(periode)>0:
            dfb = dfa[dfa['temps'].isin(periode)]
        else:
            dfb = dfa.copy()
    else:
        if len(periode)>0:
            dfb = df[df['temps'].isin(periode)]
        else:
            dfb = df.copy()

    nb_att_placee_cb = dfb[dfb['attaque_placee']==1].count()['attaque_placee']
    nb_contre_att_cb = dfb[dfb['attaque_placee']==0].count()['attaque_placee']

    tab1_cb = pd.DataFrame({'Attaque placée':[nb_att_placee_cb],'Contre-attaque':[nb_contre_att_cb]})
    
    fig={
        'data': [go.Pie(name = 'Attaques',labels = ['Attaque placée', 'Contre-attaque'],values = tab1_cb.values[0])],
        'layout': go.Layout(title = 'Ratio attaques placées / contre-attaques',font=dict(size=9.5), colorway = [couleurs['jaune'], couleurs['noir']])
        }
    
    children1=str(int(tab1_cb.values[0, 0]))
    children2=str(int(tab1_cb.values[0, 1]))

    return (fig, children1, children2)


@app.callback(
    Output("Fautes_offensives_barplot","figure"), 
    [Input("Filtre_Joueuse","value"),
    Input('temps','value'),
    Input('match','value')]
)
def maj_filtre_joueuse(joueuse_value, periode, match_slctd): 

    if (match_slctd != '') and (len(match_slctd)>0):
        dfa = df[df['id_match'].isin(match_slctd)]
        if len(periode)>0:
            dfb = dfa[dfa['temps'].isin(periode)]
        else:
            dfb = dfa.copy()
    else:
        if len(periode)>0:
            dfb = df[df['temps'].isin(periode)]
        else:
            dfb = df.copy()

    if len(joueuse_value)>0:
        df_j=dfb[(dfb["nom_joueuse"].isin(joueuse_value))]
        tab2_j=df_j[fautes].sum()
    else:
        tab2_j=dfb[fautes].sum()

    fig={"data":[go.Bar(x=fautes,y=tab2_j)]} 
 
    return fig 

@app.callback(
    Output('bar2','figure'),
    Output('bar3','figure'),
    Input('Filtre_Joueuse','value'),
    Input('temps','value'),
    Input('match','value'))

def update_graph(joueuse_slctd, periode, match_slctd):

    if (match_slctd != '') and (len(match_slctd)>0):
        dfa = df[df['id_match'].isin(match_slctd)]
        if len(periode)>0:
            dfb = dfa[dfa['temps'].isin(periode)]
        else:
            dfb = dfa.copy()
    else:
        if len(periode)>0:
            dfb = df[df['temps'].isin(periode)]
        else:
            dfb = df.copy()

    if len(joueuse_slctd)>0:

        dff_2 = dfb.copy()
        dff_2 = dff_2[(dff_2['nom_joueuse'].isin(joueuse_slctd))]
        dff_2 = dff_2[(dff_2['tir']==1) | (dff_2['7m']==1)]

    else:
        dff_2 = dfb[(dfb['tir']==1) | (dfb['7m']==1)]

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

    layout1 = go.Layout(title = 'Statistiques par zones terrain', colorway = [couleurs['jaune'], couleurs['noir']], barmode = 'stack', xaxis = dict(range = [0, 10.5], dtick = 1))
    layout2 = go.Layout(title = 'Statistiques par zones de but', colorway = [couleurs['jaune'], couleurs['noir']], barmode = 'stack', xaxis = dict(range=[0, 9.5], dtick = 1))

    figure1 = go.Figure(data=data, layout=layout1)
    figure2= go.Figure(data=data2,layout=layout2)
    
    return (figure1,figure2)

@app.callback(
    Output('Fautes_off_by_zone','figure'),
    Input('filtre_fautes','value'),
    Input('temps','value'),
    Input('match','value'))

def update_graph(faute_slctd, periode, match_slctd):

    if (match_slctd != '') and (len(match_slctd)>0):
        dfa = df[df['id_match'].isin(match_slctd)]
        if len(periode)>0:
            dfb = dfa[dfa['temps'].isin(periode)]
        else:
            dfb = dfa.copy()
    else:
        if len(periode)>0:
            dfb = df[df['temps'].isin(periode)]
        else:
            dfb = df.copy()

    y_fautes_cb = []
    fautes_cb = []

    if len(faute_slctd)>0:

        for k in fautes:
            if k in faute_slctd:
                fautes_cb.append(k)

        fautes_bis_cb = fautes_cb.copy()
        fautes_bis_cb.append('zone_terrain')
    
    else:
        fautes_cb=fautes.copy()
        fautes_bis_cb=fautes_cb.copy()
        fautes_bis_cb.append('zone_terrain')


    tab3_cb = dfb[fautes_bis_cb]
    for x in zones_terrain:
        tab = tab3_cb.copy()
        tab = tab[tab['zone_terrain']==x]        
        y_fautes_cb.append(sum(tab[fautes_cb].sum().tolist()))

    figure = {"data":[go.Bar(x=zones_terrain, y=y_fautes_cb)],
              "layout" : go.Layout(xaxis = dict(range = [0, 10.5], dtick = 1))}
    
    return figure

# --------------------------------Callbacks Défense---------------------------------------

# ----------------------------------------------------------------------------------------

# ----------------------------------------------------------------------------------------

@app.callback(
    Output('Buts_marque_d', 'children'),
    Output('tir_d', 'children'),
    Output('Efficacite_d', 'children'),
    Input('temps_d','value'),
    Input('match_d', 'value'))

def maj_stat(periode, match_slctd):
    if (match_slctd != '') and (len(match_slctd)>0):
        df_ma = df_d[(df_d["id_match"].isin(match_slctd))]
        if len(periode)>0:
            df_per_ma=df_ma[(df_ma["temps"].isin(periode))]

            nb_buts_per_ma = df_per_ma['but'].sum()
            nb_tirs_per_ma = df_per_ma['tir'].sum()+df_per_ma['7m'].sum()
            if nb_tirs_per_ma == 0:
                efficacite_per_ma = 0
            else:
                efficacite_per_ma = nb_buts_per_ma/nb_tirs_per_ma*100
            
            children1 = nb_buts_per_ma
            children2 = nb_tirs_per_ma
            children3 = efficacite_per_ma

        else:
            nb_buts_ma = df_ma['but'].sum()
            nb_tirs_ma = df_ma['tir'].sum()+df_ma['7m'].sum()

            if nb_tirs_ma == 0:
                efficacite_ma = 0
            else:
                efficacite_ma = nb_buts_ma/nb_tirs_ma*100

            children1 = nb_buts_ma
            children2 = nb_tirs_ma
            children3 = efficacite_ma

    else:
        if len(periode)>0:
            df_per=df_d[(df_d["temps"].isin(periode))]


            nb_buts_per = df_per['but'].sum()
            nb_tirs_per = df_per['tir'].sum()+df_per['7m'].sum()

            if nb_tirs_per == 0:
                efficacite_per = 0
            else:
                efficacite_per = nb_buts_per/nb_tirs_per*100
            
            children1 = nb_buts_per
            children2 = nb_tirs_per
            children3 = efficacite_per

        else:
            children1 = nb_buts_d
            children2 = nb_tirs_d
            children3 = efficacite_d

    return(str(int(children1)), str(int(children2)), str(int(children3))+"%")

@app.callback(
    Output('pie1_d','figure'),
    Output('nb_attaques_d','children'),
    Output('nb_contre_attaques_d', 'children'),
    Input('temps_d','value'),
    Input('match_d', 'value'))

def maj_filtre(temps_value, match_value):
    if (match_value != '') and (len(match_value)>0):
        df_ma = df_d[(df_d["id_match"].isin(match_value))]

        if len(temps_value)>0:
            df_ma_temps=df_ma[(df_ma["temps"].isin(temps_value))]   
            df_attaque_tp_ma = df_ma_temps[df_ma_temps['attaque']==0]
            nb_att_placee_tp_ma = df_attaque_tp_ma[df_attaque_tp_ma['attaque_placee']==1].count()['attaque_placee']
            nb_contre_att_tp_ma = df_attaque_tp_ma[df_attaque_tp_ma['attaque_placee']==0].count()['attaque_placee']
            tab1_d = pd.DataFrame({'Attaque placée':[nb_att_placee_tp_ma],'Contre-attaque':[nb_contre_att_tp_ma]})

        else:
            nb_att_placee_ma = df_ma[df_ma['attaque_placee']==1].count()['attaque_placee']
            nb_contre_att_ma = df_ma[df_ma['attaque_placee']==0].count()['attaque_placee']
            df_type_attaques_ma = pd.DataFrame({'Attaque placée':[nb_att_placee_ma],'Contre-attaque':[nb_contre_att_ma]})
            tab1_d = df_type_attaques_ma.copy()
    else:
        if len(temps_value)>0:
            df_temps=df_d[(df_d["temps"].isin(temps_value))]   
            df_attaque_tp = df_temps[df_temps['attaque']==0]
            nb_att_placee_tp = df_attaque_tp[df_attaque_tp['attaque_placee']==1].count()['attaque_placee']
            nb_contre_att_tp = df_attaque_tp[df_attaque_tp['attaque_placee']==0].count()['attaque_placee']
            tab1_d = pd.DataFrame({'Attaque placée':[nb_att_placee_tp],'Contre-attaque':[nb_contre_att_tp]})

        else:
            nb_att_placee_d = df_d[df_d['attaque_placee']==1].count()['attaque_placee']
            nb_contre_att_d = df_d[df_d['attaque_placee']==0].count()['attaque_placee']
            df_type_attaques_d = pd.DataFrame({'Attaque placée':[nb_att_placee_d],'Contre-attaque':[nb_contre_att_d]})
            tab1_d = df_type_attaques_d.copy()

        
    fig={
        'data': [go.Pie(name = 'Attaques',labels = ['Attaque placée', 'Contre-attaque'],values = tab1_d.values[0])],
        'layout': go.Layout(title = 'Ratio attaques placées / contre-attaques',font=dict(size=9.5), colorway = [couleurs['jaune'], couleurs['noir']])
        }
        
    children1=str(int(tab1_d.values[0, 0]))
    children2=str(int(tab1_d.values[0, 1]))
    

    return (fig, children1, children2)


@app.callback(
    Output("Fautes_defensives_barplot_d","figure"), 
    [Input("Filtre_Joueuse_d","value"),
     Input('temps_d','value'),
     Input('match_d', 'value')]
)
def maj_filtre_joueuse(joueuse_value, periode, match_slctd): 

    if (match_slctd != '') and (len(match_slctd)>0):
        dfa = df_d[df_d['id_match'].isin(match_slctd)]
        if len(periode)>0:
            dfb = dfa[dfa['temps'].isin(periode)]
        else:
            dfb = dfa.copy()
    else:
        if len(periode)>0:
            dfb = df_d[df_d['temps'].isin(periode)]
        else:
            dfb = df_d.copy()

    if len(joueuse_value)>0:
        df_j=dfb[(dfb["nom_joueuse"].isin(joueuse_value))]
        tab2_j=df_j[fautes_d].sum()

        fig={"data":[go.Bar(x=fautes_d,y=tab2_j)],
             "layout":{'title':'Fautes défensives'}} 
    else:
        tab2_j=dfb[fautes_d].sum()
        fig={"data":[go.Bar(x=fautes_d,y=tab2_j)],
             "layout":{'title':'Fautes défensives'}} 

    return fig 

@app.callback(
    Output('bar2_d','figure'),
    Output('bar3_d','figure'),
    Input('Filtre_Gardienne','value'),
    Input('temps_d','value'),
    Input('match_d', 'value')
)
def update_graph(gardienne_slctd, periode, match_slctd):

    if (match_slctd != '') and (len(match_slctd)>0):
        dfa = df_d[df_d['id_match'].isin(match_slctd)]
        if len(periode)>0:
            dfb = dfa[dfa['temps'].isin(periode)]
        else:
            dfb = dfa.copy()
    else:
        if len(periode)>0:
            dfb = df_d[df_d['temps'].isin(periode)]
        else:
            dfb = df_d.copy()

    if len(gardienne_slctd)>0:
        dff_2 = dfb[(dfb['nom_joueuse'].isin(gardienne_slctd))]
        dff_2 = dff_2[dff_2['tir']==1]
    
    else:
        dff_2 = dfb[dfb['tir']==1]

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

    layout1 = go.Layout(title = 'Statistiques par zones terrain', colorway = [couleurs['jaune'], couleurs['noir']], barmode = 'stack', xaxis = dict(range = [0, 10], dtick = 1))
    layout2 = go.Layout(title = 'Statistiques par zones de but', colorway = [couleurs['jaune'], couleurs['noir']], barmode = 'stack', xaxis = dict(range=[0, 9], dtick = 1))

    figure1 = go.Figure(data=data, layout=layout1)
    figure2= go.Figure(data=data2,layout=layout2)
    
    return (figure1,figure2)

@app.callback(
    Output('Fautes_def_by_zone','figure'),
    Input('filtre_fautes_d','value'),
    Input('temps_d','value'),
    Input('match_d', 'value')
)

def update_graph(faute_slctd, periode, match_slctd):

    if (match_slctd != '') and (len(match_slctd)>0):
        dfa = df_d[df_d['id_match'].isin(match_slctd)]
        if len(periode)>0:
            dfb = dfa[dfa['temps'].isin(periode)]
        else:
            dfb = dfa.copy()
    else:
        if len(periode)>0:
            dfb = df_d[df_d['temps'].isin(periode)]
        else:
            dfb = df_d.copy()

    y_fautes_cb = []
    fautes_cb = []

    if len(faute_slctd)>0:

        for k in fautes_d:
            if k in faute_slctd:
                fautes_cb.append(k)

        fautes_bis_cb = fautes_cb.copy()
    else:
        fautes_cb = fautes_d.copy()
        fautes_bis_cb = fautes_cb.copy()

    fautes_bis_cb.append('zone_terrain')

    tab3_cb = dfb[fautes_bis_cb]

    for x in zones_terrain_d:
        tab_cb = tab3_cb.copy()
        tab_cb = tab_cb[tab_cb['zone_terrain']==x]        
        y_fautes_cb.append(sum(tab_cb[fautes_cb].sum().tolist()))

    figure = {"data":[go.Bar(x=zones_terrain_d, y=y_fautes_cb)],"layout": go.Layout(title='Fautes défensives par zones terrain', xaxis=dict(range=[0, 10], dtick = 1))}

    return figure

@app.callback(
    Output('efficacite_gardienne_barplot', 'figure'),
    Output('sanctions', 'figure'),
    Input('temps_d', 'value'),
    Input('match_d', 'value')
)

def maj_graph_fixes(periode, match_slctd):
    if (match_slctd != '') and (len(match_slctd)>0):
        dfa = df_d[df_d['id_match'].isin(match_slctd)]
        if len(periode)>0:
            dfb = dfa[dfa['temps'].isin(periode)]
        else:
            dfb = dfa.copy()
    else:
        if len(periode)>0:
            dfb = df_d[df_d['temps'].isin(periode)]
        else:
            dfb = df_d.copy()
    
    # Calcul des efficacité de la figure 1 pour le callback
    df_tir = dfb[(dfb['tir']==1) | (dfb['7m']==1)]

    gardiennes_cb = df_tir["nom_joueuse"].unique()

    efficacite_7m_cb = []
    efficacite_jeu_cb = []

    for x in gardiennes_cb:
        df_gar_cb = dfb[dfb['nom_joueuse']==x]

        df_7m_cb = df_gar_cb[df_gar_cb['7m']==1]
        df_jeu_cb = df_gar_cb[df_gar_cb['tir']==1]

        nb_buts_jeu_cb = df_jeu_cb['but'].sum()
        nb_tirs_jeu_cb = df_jeu_cb['tir'].sum()
        if nb_tirs_jeu_cb == 0:
            eff_jeu_cb = 0
        else:
            eff_jeu_cb = (1-(nb_buts_jeu_cb/nb_tirs_jeu_cb))*100

        efficacite_jeu_cb.append(eff_jeu_cb)

        nb_buts_7m_cb = df_7m_cb['but'].sum()
        nb_tirs_7m_cb = df_7m_cb['7m'].sum()
        if nb_tirs_7m_cb == 0:
            eff_7m_cb = 0
        else:
            eff_7m_cb = (1-(nb_buts_7m_cb/nb_tirs_7m_cb))*100

        efficacite_7m_cb.append(eff_7m_cb)

    figure1=go.Figure(data=[go.Bar(name='Jeu', x=gardiennes_cb, y=efficacite_jeu_cb), 
                            go.Bar(name='7m', x=gardiennes_cb, y=efficacite_7m_cb)],
                      layout = go.Layout(colorway = [couleurs['jaune'], couleurs['noir']]))

    # Calcul des sanctions pour la figure 2 
    df_sanc_cb = dfb[sanctions]

    figure2={"data":[go.Bar(x=sanctions, y=df_sanc_cb[sanctions].sum().tolist())],
             "layout":{'title':'Sanctions'}}
    
    return(figure1, figure2)


if __name__ == '__main__':
    app.run_server()