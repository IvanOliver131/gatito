module.exports = {
  listar () {
    return []
  },
  inserir (fornecedor) {
    return {
      id: 500,
      dataCriacao: '27/12/2021',
      dataAtualizacao: '27/12/2021',
      versao: 2
    }
  },
  async pegarPorId (id) {
    return {
      id: 500,
      dataCriacao: '27/12/2021',
      dataAtualizacao: '27/12/2021',
      versao: 2
    }
  },
  async atualizar (id, dadosParaAtualizar) {
  },
  async remover (id) {
  }
}
