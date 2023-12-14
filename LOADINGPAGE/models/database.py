# import json
# import requests as requests
# # get para descubri o id persolinado ou não
# # nomec=input("nome:").upper()
# # emailc=input('email:').upper()
# link = "https://imag-v-default-rtdb.firebaseio.com/"
# # requisicao=requests.get(f"{link}/IMAG/ENTIDADES/.json")
# # dic=requisicao.json()
# # id_usern=None
# # for entidade in dic:
# #     # print(entidade)
# #     for u in dic[entidade]:
# #         nome=dic[entidade][u]['nome']
# #         email=dic[entidade][u]['email']
# #         if email==emailc and nome==nomec:
# #             id_usern=u
# #             print(f'o seu id é {id_usern} é {entidade} o nome que está cadastrado nesta conta {nome}')
# #             rs=input('oq que gostaria de mudar?').lower()
# #             if rs=="nome":
# #                 nomed=input('nome quer modificar:').upper()
# #             elif rs=="email":
# #                 emaild=input('email quer modificar:').upper()
# #             # print(id_usern,entidade,nome)
# requisicaog = requests.get(f"{link}/IMAG/ENTIDADES/.json")
# dic = requisicaog.json()
# # for entidade in dic:
# #     # print(entidade)
# #     for u in dic[entidade]:
# #          id_user = u
# #          for info in id_user:
# #              for id in info:
# #                  print(id)
#
# # editar a venda (PATCH)
#
# # dados={
# #    'nome':nomed,
# #     'email':emailc
# # }
# # requisicao=requests.patch(f"{link}/IMAG/ENTIDADES/{entidade}/{id_usern}/.json", data=json.dumps(dados))
# # print(requisicao)
# # print(requisicao.text)
#
#
#
# # requisicao=requests.get(f'{link}/vendas/.json')
# # print(requisicao)
# # dic_res=requisicao.json()
# # #print(dic_res)
# # id_joshua=None
# # for id_venda in dic_res:
# #     cliente=dic_res[id_venda]['cliente']
# #     if cliente=="Eliano":
# #         print(id_venda)
# #         id_joshua=id_venda
# #
# #criar uma venda (POST)
# # nome=str(input("nome:")).upper()
# # email=str(input('email:')).upper()
# # entidade=str(input("qual é entidades és"))
# # # dados={'joshua':{'cliente':'meri','preco':100,'produto':'teclado'}}
# # dados={
# #     'nome':nome,
# #     'email':email
# # }
# # requisicao=requests.post(f"{link}/IMAG/ENTIDADES/{entidade}/.json", data=json.dumps(dados))
# # print(requisicao)
# # print(requisicao.text)
#
# ##criar uma produtos (POST)
#
# # dados={'nome':'teclado','preco':1489,'quantidade':19000}
# # requisicao=requests.post(f"{link}/produtos/.json", data=json.dumps(dados))
# # print(requisicao)
# # print(requisicao.text)
#
# ## editar a venda (PATCH)
# # dados={
# #    'cliente':'Eliano'
# # }
# # requisicao=requests.patch(f"{link}/vendas/-NiMbB7hqzrxLLTNnR3H/.json", data=json.dumps(dados))
# # print(requisicao)
# # print(requisicao.text)
#
#
# ### descubrir o id especifico(GET)
# # requisicao=requests.get(f'{link}/vendas/.json')
# # print(requisicao)
# # dic_res=requisicao.json()
# # #print(dic_res)
# # id_joshua=None
# # for id_venda in dic_res:
# #     cliente=dic_res[id_venda]['cliente']
# #     if cliente=="Eliano":
# #         print(id_venda)
# #         id_joshua=id_venda
# #
# # ### Deletar uma venda (DELETE)
# # requisicao=requests.delete(f'{link}/vendas/{id_joshua}/.json')
#
import json
import requests as requests
from LOADINGPAGE import *

requisicaog = requests.get(f"{config['databaseURL']}/IMAG/ENTIDADES/.json")
dic = requisicaog.json()

nome=input('nome')
for entidade in dic:
   # print(entidade)
   for id in dic[entidade]:
       for info in dic[entidade][id]:
           info=dic[entidade][id]
           nome=info['INFORMACAO PESSOAL']['NOME COMPLETO']
           email=info['INFORMACAO PESSOAL']['EMAIL']
           print(nome)
           print(email)