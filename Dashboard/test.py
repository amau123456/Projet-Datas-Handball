import dash_bootstrap_components as dbc
from dash import html
import dash


app = dash.Dash(external_stylesheets=[dbc.themes.BOOTSTRAP])

row = html.Div(
    [
        dbc.Row(dbc.Col(html.Div("A single column"))),
        dbc.Row(
            [
                dbc.Col(html.Div("One of three columns")),
                dbc.Col(html.Div("One of three columns")),
                dbc.Col(html.Div("One of three columns")),
            ]
        ),
    ]
)


if __name__ == '__main__':
    app.run_server()