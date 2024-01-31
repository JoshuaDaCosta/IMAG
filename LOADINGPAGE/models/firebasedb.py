import json
import requests as rq
link="https://imag-v-default-rtdb.firebaseio.com/"


def ler():
    print(f'printando da class firebasedb' )
    db = rq.get(f'{link}/.json')



dic=db.json()
print(dic)




