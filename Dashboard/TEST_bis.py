import pandas as pd

df = pd.read_csv("/Users/amauryrichard/Desktop/Projet-Datas-Handball/Dashboard/data2.csv")

jouesue_value=["GARCIA","ESTACHY"]

df['Nom joueuse']
# for i in range(len(jouesue_value)):
#     df=df[df["Nom joueuse"]==jouesue_value[i]]

print(df["Nom joueuse"])

jouesue_value.contains(df["Nom joueuse"].iloc[0])