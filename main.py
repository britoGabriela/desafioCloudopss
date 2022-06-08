from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/home", methods=["GET"])
def home():
    return render_template("home.html")

@app.route("/resposta", methods=["POST"])
def resposta():
    nome = request.form.get('nome')
    tel = request.form.get('tel')
    email = request.form.get('email')
    cep = request.form.get('cep')
    rua = request.form.get('rua')
    numero = request.form.get('numero')
    complemento = request.form.get('complemento')
    bairro = request.form.get('bairro')
    cidade = request.form.get('cidade')
    estado = request.form.get('estado')
    profissao = request.form.get('profissao')
    arquivo = request.form.get('arquivo')
    return '''Nome: {},
    Tel: {},
    Email: {},
    Cep: {}, 
    Rua: {}, 
    Numero: {}, 
    Complemento: {},     
    Bairro: {},
    Cidade: {},
    Estado: {},
    Profissao: {},
    Arquivo: {}'''.format(nome, tel, email, cep, rua, numero, complemento, bairro, cidade, estado, profissao, arquivo)
    

if __name__ == "__main__":
    app.run(debug=True)