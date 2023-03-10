// ==================== Exemplo Calculo Soma ====================

function soma (params1, params2) {
    console.log(params1, params2)
}
soma(5, 7);

// ==================== Exemplo Lavação ====================

const cliente = {
    name: 'João Carlos',
    status: false,
    lavagem: function(precoLavagem) {
        if(this.status === false) {
            let preco = 10;
            console.log(precoLavagem - preco)
        }
    }
}

cliente.lavagem(100)

// ==================== Exemplo Casa ====================

const pessoa = {
    name: 'Misael',
    surname: 'Santana',
    casa: {
      quartos: 3,
      banheiro: 1,
        terreno: {
          largura: 20,
          comprimento : 30
        },
      calcularArea: function () {
        return this.terreno.largura * this.terreno.comprimento
      }
    },
    fullname: function () {
      return this.name + ' ' + this.surname
    }
  }
  
  pessoa.fullname()
  pessoa.casa.calcularArea()

// ==================== Exemplo Jogos ====================

  const volei = {
    vitoria: 15,
    derrotas: 10,
    empates : 5,
      totaldeJogos: function() {
        return this.vitoria + this.derrotas + this.empates
      }
  }
  volei.totaldeJogos()