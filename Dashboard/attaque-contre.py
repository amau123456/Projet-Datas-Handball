import dash
import dash_core_components as dcc
import dash_html_components as html
import plotly.graph_objs as go
import pandas as pd 

app = dash.Dash()

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

colors = {
    'jaune' : '#F9EB3C',
    'blanc' : '#FFFFFF',
    'noir' : '#383338',
    'vert' : '#05602F'
}

matchs = df['Match'].unique()
issue = ['Victoire', 'Défaite']
mitemps = df['Mi-temps'].unique()

app.layout = html.Div([
    html.H1(children = "Dashboard - Analyse attaque",
            style = {
                'textAlign' : 'center',
                'color' : colors['jaune'],
                'fontSize' : '45px'}   
    ),

    html.Div([
        html.H2(children = "Filtres",
                style = {
                    'textAlign' : 'left',
                    'color' : colors['noir'],
                    'fontSize' : '12px',
                    'float' : 'left'
                }
        ),
        html.Div([
            dcc.Dropdown(
                id = 'match',
                options=[{'label':i, 'value': i} for i in matchs],
                value = 1
            )
        ], style = {'width':'10%', 'display':'inline-block', 'marginLeft':'5px'}),

        html.Div([
            dcc.Dropdown(
                id = 'issue',
                options=[{'label':i, 'value': i} for i in issue],
                value = 1
            )
        ], style = {'width':'10%', 'display':'inline-block', 'marginLeft':'5px'}),

        html.Div([
            dcc.Dropdown(
                id = 'mitemps',
                options=[{'label':i, 'value': i} for i in mitemps],
                value = '1T'
            )
        ], style = {'width':'10%', 'display':'inline-block', 'marginLeft':'5px'}),

    ]),

    html.Div([
        html.Div([
            html.H2(children = "Attaques placées",
                    style = {
                        #'textAlign' : 'left',
                        'color' : colors['noir'],
                        'fontSize' : '12px',
                        #'float':'left',
                        #'display':'inline-block'
                    }
                ),

            html.H2(children = str(int(tab1.values[0])),
                    style = {
                        #'textAlign' : 'right',
                        'color' : colors['jaune'],
                        'fontSize' : '12px',
                        #'float' : 'right',
                        #'display':'inline-block'
                    }
            )
        ], style = {'marginBottom':'30px', 'diplay':'flex'}),

        html.Div([

            html.H2(children = "Contre-attaques",
                    style = {
                        #'textAlign' : 'left',
                        'color' : colors['noir'],
                        'fontSize' : '12px',
                        #'float':'left'
                    }
            ),

            html.H2(children = str(int(tab1.values[1])),
                    style = {
                        #'textAlign' : 'left',
                        'color' : colors['jaune'],
                        'fontSize' : '12px',
                        #'float' : 'right'
                    }
            )
        ], style = {'marginBottom' : '5px'})
    ], style = {'width':'50%', 'marginBottom' : '70px'}),

    html.Div([
        html.Div([
            html.H2(children = "Buts marqués",
                    style = {
                        'textAlign' : 'left',
                        'color' : colors['noir'],
                        'fontSize' : '12px',
                    }
                ),
            html.H2(children = str(int(nb_buts)),
                    style = {
                        'textAlign' : 'left',
                        'color' : colors['jaune'],
                        'fontSize' : '12px',
                    }
            )
        ]),

        html.Div([
            html.H2(children = "Tirs",
                    style = {
                        'textAlign' : 'left',
                        'color' : colors['noir'],
                        'fontSize' : '12px',
                    }
                ),

            html.H2(children = str(int(nb_tirs)),
                    style = {
                        'textAlign' : 'left',
                        'color' : colors['jaune'],
                        'fontSize' : '12px',
                    }
            )
        ]),

        html.Div([
            html.H2(children = "Efficacité",
                    style = {
                        'textAlign' : 'left',
                        'color' : colors['noir'],
                        'fontSize' : '12px',
                    }
                ),

            html.H2(children = str(int(efficacite))+"%",
                    style = {
                        'textAlign' : 'left',
                        'color' : colors['jaune'],
                        'fontSize' : '12px',
                    }
            )
        ])

    ]),

    html.Div([
    dcc.Graph(
        id='pie1',
        figure={
            'data': [
                go.Pie(
                    name = 'Attaques',
                    labels = ['Attaque placée', 'Contre-attaque'],
                    values = tab1.values
                )
            ],
            'layout': go.Layout(
                title = 'Ratio attaques placées / contre-attaques'
            )
        }
    )
    ]),

    html.H1(children = "Opportunités offensives",
            style = {
                'textAlign' : 'center',
                'color' : colors['noir'],
                'fontSize' : '25px'}   
    ),

    html.Div([
        html.H2(children = "Terrain",
                style = {
                    'textAlign' : 'center',
                    'fontSize' : '18px',
                    'color' : colors['jaune']}   
        ),

        html.H2(children = "Cage",
                style = {
                    'textAlign' : 'center',
                    'fontSize' : '18px',
                    'color' : colors['jaune']}
                    #'display' : 'inline-block'}
                    #'float' :'right'}   
        ),
    ]),

    html.Div([
        html.Img(src=app.get_asset_url('cage_hand.jpg')),
    ], id = 'but'),

    html.Div([
        html.Img(src=app.get_asset_url('terrain.png'))
    ], id = 'terrain')


])

if __name__ == '__main__':
    app.run_server()