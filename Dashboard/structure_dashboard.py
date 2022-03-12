from enum import auto
import base64
import dash
import dash_core_components as dcc
import dash_html_components as html
import plotly.graph_objs as go
import pandas as pd 
import dash_bootstrap_components as dbc



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


app.layout = html.Div(id="Dashboard_global",children=[
        dbc.Row(
            [
                dbc.Col(html.Div (id="Bloc_gauche",children=[
                    dbc.Row([ #Header 
                        dbc.Col(html.Img(src='data:image/png;base64,{}'.format(encoded_logo),style={"height":"90%","width":"90%"}),width=2),
                        dbc.Col(html.Div(id="Contenu_header",children=[
                            html.H1(children="Dashboard - Analyse Attaque",style={'textAlign': 'center'}),
                            dbc.Row([
                                dbc.Col(html.Div(id="filtre_match",children="Filtre match"),width=True),
                                dbc.Col(html.Div(id="filtre_vic_def",children="Filtre Victoire/Défaite"),width=True),
                                dbc.Col(html.Div(id="filtre_mi_temps",children="Filtre Mi-temps"),width=True)
                            ])
                        ]),width=True)
                    ]),
                    dbc.Row([ #Stats générales
                        dbc.Col(html.Div(id="proportion_types_attaques",children="Camambert attaques placées/contre-attaque"),width=5),
                        dbc.Col(html.Div(id="autres_stats_gen",children=[
                            dbc.Row([
                                dbc.Col(html.Div(id="nb_attaques",children="Attaques"),width=True),
                                dbc.Col(html.Div(id="nb_contre_attaque",children="Contre-Attaque"),width=True)
                            ]),
                            dbc.Row([
                                dbc.Col(html.Div(id="nb_victoire",children="Total Victoire"),width=True),
                                dbc.Col(html.Div(id="nb_defaites",children="Total défaites"),width=True)
                            ]),
                            dbc.Row([
                                dbc.Col(html.Div(id="Buts_marque_label",children="Buts marqués",style={'textAlign': 'center'}),width=True),
                                dbc.Col(html.Div(id="Tirs_label",children="Tirs",style={'textAlign': 'center'}),width=True),
                                dbc.Col(html.Div(id="Efficacite_label",children="Efficacité",style={'textAlign': 'center'}),width=True)
                            ]),
                            dbc.Row([
                                dbc.Col(html.Div(id="Buts_marque",children="23",style={'textAlign': 'center'}),width=True),
                                dbc.Col(html.Div(id="Tirs",children="35",style={'textAlign': 'center'}),width=True),
                                dbc.Col(html.Div(id="Efficacite",children="65%",style={'textAlign': 'center'}),width=True)
                            ])
                        ]))
                    ]),
                    dbc.Row([  #Section Stats zones terrain & cage
                            dbc.Col(html.Div(id="Section_stats_zone",children=[
                                dbc.Row([
                                    dbc.Col(html.Div(id="Filtres_section_zones",children="Filtres"),width=4),
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

# app.layout = html.Div(id="Dashboard_Global", children=[ 
#                 html.Div (id="Bloc_gauche",children=[
#                     html.Div (id="Header", children=[
#                         html.Div (id="Logo_club", children=[

#                         ]),
#                         html.Div(id="Filtres_generaux", children=[
                            
#                         ])

#                     ]),
#                     html.Div(id="Section_cage_terrain", children=[

#                     ]),
#                     html.Div (id="Opportunites_off", children=[

#                     ])

#                 ]),
#                 html.Div(id="Bloc_droit", children=[
#                     html.Div(id="Titre", children=[

#                     ]),
#                     html.Div(id="Bloc_fautes", children=[
#                         html.Div (id="Zones_fautes", children=[

#                         ]),
#                         html.Div(id="Filtre_fautes", children=[

#                         ])

#                     ]),

#                 ])
#             ])

    
#     html.H1(children = "Dashboard - Analyse attaque",
#             style = {
#                 'textAlign' : 'center',
#                 'color' : colors['jaune'],
#                 'fontSize' : '45px'}   
#     ),

#     html.Div([
#         html.H2(children = "Filtres",
#                 style = {
#                     'textAlign' : 'left',
#                     'color' : colors['noir'],
#                     'fontSize' : '12px',
#                     'float' : 'left'
#                 }
#         ),
#         html.Div([
#             dcc.Dropdown(
#                 id = 'match',
#                 options=[{'label':i, 'value': i} for i in matchs],
#                 value = 1
#             )
#         ], style = {'width':'10%', 'display':'inline-block', 'marginLeft':'5px'}),

#         html.Div([
#             dcc.Dropdown(
#                 id = 'issue',
#                 options=[{'label':i, 'value': i} for i in issue],
#                 value = 1
#             )
#         ], style = {'width':'10%', 'display':'inline-block', 'marginLeft':'5px'}),

#         html.Div([
#             dcc.Dropdown(
#                 id = 'mitemps',
#                 options=[{'label':i, 'value': i} for i in mitemps],
#                 value = '1T'
#             )
#         ], style = {'width':'10%', 'display':'inline-block', 'marginLeft':'5px'}),

#     ]),

#     html.Div([
#         html.Div([
#             html.H2(children = "Attaques placées",
#                     style = {
#                         #'textAlign' : 'left',
#                         'color' : colors['noir'],
#                         'fontSize' : '12px',
#                         #'float':'left',
#                         #'display':'inline-block'
#                     }
#                 ),

#             html.H2(children = str(int(tab1.values[0])),
#                     style = {
#                         #'textAlign' : 'right',
#                         'color' : colors['jaune'],
#                         'fontSize' : '12px',
#                         #'float' : 'right',
#                         #'display':'inline-block'
#                     }
#             )
#         ], style = {'marginBottom':'30px', 'diplay':'flex'}),

#         html.Div([

#             html.H2(children = "Contre-attaques",
#                     style = {
#                         #'textAlign' : 'left',
#                         'color' : colors['noir'],
#                         'fontSize' : '12px',
#                         #'float':'left'
#                     }
#             ),

#             html.H2(children = str(int(tab1.values[1])),
#                     style = {
#                         #'textAlign' : 'left',
#                         'color' : colors['jaune'],
#                         'fontSize' : '12px',
#                         #'float' : 'right'
#                     }
#             )
#         ], style = {'marginBottom' : '5px'})
#     ], style = {'width':'50%', 'marginBottom' : '70px'}),

#     html.Div([
#         html.Div([
#             html.H2(children = "Buts marqués",
#                     style = {
#                         'textAlign' : 'left',
#                         'color' : colors['noir'],
#                         'fontSize' : '12px',
#                     }
#                 ),
#             html.H2(children = str(int(nb_buts)),
#                     style = {
#                         'textAlign' : 'left',
#                         'color' : colors['jaune'],
#                         'fontSize' : '12px',
#                     }
#             )
#         ]),

#         html.Div([
#             html.H2(children = "Tirs",
#                     style = {
#                         'textAlign' : 'left',
#                         'color' : colors['noir'],
#                         'fontSize' : '12px',
#                     }
#                 ),

#             html.H2(children = str(int(nb_tirs)),
#                     style = {
#                         'textAlign' : 'left',
#                         'color' : colors['jaune'],
#                         'fontSize' : '12px',
#                     }
#             )
#         ]),

#         html.Div([
#             html.H2(children = "Efficacité",
#                     style = {
#                         'textAlign' : 'left',
#                         'color' : colors['noir'],
#                         'fontSize' : '12px',
#                     }
#                 ),

#             html.H2(children = str(int(efficacite))+"%",
#                     style = {
#                         'textAlign' : 'left',
#                         'color' : colors['jaune'],
#                         'fontSize' : '12px',
#                     }
#             )
#         ])

#     ]),

#     html.Div([
#     dcc.Graph(
#         id='pie1',
#         figure={
#             'data': [
#                 go.Pie(
#                     name = 'Attaques',
#                     labels = ['Attaque placée', 'Contre-attaque'],
#                     values = tab1.values
#                 )
#             ],
#             'layout': go.Layout(
#                 title = 'Ratio attaques placées / contre-attaques'
#             )
#         }
#     )
#     ]),

#     html.H1(children = "Opportunités offensives",
#             style = {
#                 'textAlign' : 'center',
#                 'color' : colors['noir'],
#                 'fontSize' : '25px'}   
#     ),

#     html.Div([
#         html.H2(children = "Terrain",
#                 style = {
#                     'textAlign' : 'center',
#                     'fontSize' : '18px',
#                     'color' : colors['jaune']}   
#         ),

#         html.H2(children = "Cage",
#                 style = {
#                     'textAlign' : 'center',
#                     'fontSize' : '18px',
#                     'color' : colors['jaune']}
#                     #'display' : 'inline-block'}
#                     #'float' :'right'}   
#         ),
#     ]),

#     html.Div([
        
#     ], id = 'But')


# ])

if __name__ == '__main__':
    app.run_server()