from LOADINGPAGE import *
from flask import Flask, render_template,redirect,request,flash,session,abort,url_for
import json
import requests as requests

link = "https://imag-v-default-rtdb.firebaseio.com/"


@IMAG.route('/home')
@IMAG.route('/')
def home():
    return render_template('index.html')

@IMAG.route('/criar', methods=['POST', 'GET'])
def criar():
    if request.method=='POST':
        global nomecompleto, emailc, senhac, id_user,n
        nomecompleto = request.form.get("nome").strip()
        emailc = request.form.get("email")
        senhac = request.form.get("passe")
        n = nomecompleto.split()
        requisicaog = requests.get(f"{link}/IMAG/ENTIDADES/.json")
        dic = requisicaog.json()
        for entidade in dic:
            # print(entidade)
            for u in dic[entidade]:
                id_user=u



        try:
            dados = {
                'INFORMACAO PESSOAL': {
                    'NOME COMPLETO': nomecompleto,
                    'EMAIL': emailc,
                    'SENHA':senhac
                }
            }
            user = auth.create_user_with_email_and_password(emailc, senhac)
            requisicaop = requests.post(f"{link}/IMAG/ENTIDADES/ALUNO/.json", data=json.dumps(dados))
            session['user']=emailc
            return abort(404,erro)
        except:
            return redirect(f'/app/aluno/{n[0]}{n[len(n) - 1]}')
    return render_template('criar.html')

@IMAG.route('/perguntas')
def pergunta():
    return render_template('perguntas.html')

@IMAG.route('/login', methods=['POST', 'GET'])
def login():
    # if ('user' in session):
    #      return f'online {session["user"]}'
    if request.method == 'POST':

        emaill=request.form.get('email-lg')
        senhal=request.form.get('passe-lg')


        try:
             user = auth.sign_in_with_email_and_password(emaill, senhal)
             session['user']=emaill
             return redirect(f'/app/aluno/{n[0]}{n[len(n) - 1]}')

        except:
            abort(403,'erro')
    return render_template('login.html')

@IMAG.route('/logout')
def logout():
    session.pop('user')
    return redirect('/')


@IMAG.route('/app')
def app(entidade,user):
    e=entidade.lower()
    user=user.lower()

    if ('user' in session):
        return render_template('appentidades.html', entidade=e, user=user, id=id)
    if not('user' in session):
        return  """
        <style>

           body{
            display:flex;
            justify-content:center;
            align-items:center;
           }
            #error{
            background:#1A4E69;
            color:#BB6763;
            border-radius:20px;
            padding:10px;
            font-size:20px;

            }
            a{
             text-decoration:none;
             color:#1A4E69;
             background:#BB6763;
             border-radius:20px;
             padding:10px;
            }


        </style>
        <title>IMAG ! ERROR </title>
        <h1 id="error"> precisa-se de fazer o <a href='/login'>login</a> se não tiver nenhuma conta pode se cadastrar <a id="criar" href='/criar'>criar</a></h1>"""


IMAG.add_url_rule("/app/<entidade>/<user>/",view_func=app, endpoint='users')