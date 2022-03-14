from enum import auto
import base64
from queue import Empty
from tkinter import font
import dash
import dash_core_components as dcc
import dash_html_components as html
import plotly.graph_objs as go
import pandas as pd 
import dash_bootstrap_components as dbc
from dash.dependencies import Input, Output



app = dash.Dash(external_stylesheets=[dbc.themes.BOOTSTRAP])

df = pd.read_csv("/Users/amauryrichard/Desktop/Projet-Datas-Handball/Dashboard/data2.csv")

# -----------Analyse des attaques (attaques placées / contre-attaques)-------------
df_sans_but_enc = df[df['But encaissé']<1]
df_attaques = df_sans_but_enc[df_sans_but_enc['Arrêt Jeu']<1]
df_type_attaques = df_attaques[['Attaque placée','Contre-attaque']]
tab1 = df_type_attaques.sum()

# -----------Analyse des buts------------------
nb_buts = df['Buts'].sum()
nb_tirs = df['Tirs'].sum()+df['7m'].sum()
efficacite = nb_buts/nb_tirs*100


logo_file="/Users/amauryrichard/Desktop/Projet-Datas-Handball/Dashboard/logo.png"
encoded_logo = base64.b64encode(open(logo_file, 'rb').read()).decode('ascii')

colors = {
    'jaune' : '#F9EB3C',
    'blanc' : '#FFFFFF',    
    'noir' : '#383338',
    'vert' : '#05602F'
}

matchs = df['Match'].unique()
issue = ['Victoire', 'Défaite']
mitemps = df['Mi-temps'].unique()
joueuses=["ESTACHY","PERONNET","SAAD-GUERMECHE","THEVENET","GARCIA","MASSE","PARDO","LEJOSNE","LIANDJA-NGOY","N'DOUMBE","SIEGL","SIAPO","PLAIS","FIORETTI","BERDEGAY"]



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
                                    dbc.Col(html.Div(id="Filtres_section_zones",children=[dcc.Dropdown(joueuses,multi=True,placeholder="Filtre joueuses")],style={"margin-top":"20px"}),width=4),
                                    dbc.Col(html.Div(id="Cage_et_terrain",children=[
                                        html.H2(children="Stats zones terrain & cage"),
                                        dbc.Row([
                                                dbc.Col(html.Div(id="Zone_terrain",children="Terrain"),width=True),
                                                dbc.Col(html.Div(id="Zone_cage",children="Cage"),width=True)
                                            ])

                                    ]),width=True)
                                ])
                            ],style={"margin-top":"30px"}))
                            
                    ])
                ])),
                    
                dbc.Col(html.Div (id="Bloc_droit",children=[
                    dbc.Row(html.Div(id="Titre_section",children="Titre section")),
                    dbc.Row(html.Div(id="contenu_bloc_fautes",children=[
                        dbc.Row([
                            dbc.Col(html.Div(id="Zones_fautes",children="zones_fautes"),width=True),
                            dbc.Col(html.Div(id="Filtre_fautes",children="Filtre Fautes"),width=True)
                        ])
                    ]))]),width=True) 
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
    



if __name__ == '__main__':
    app.run_server()