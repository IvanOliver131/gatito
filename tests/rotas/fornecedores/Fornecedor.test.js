jest.mock('../../../api/rotas/fornecedores/TabelaFornecedor')
const Fornecedor = require('../../../api/rotas/fornecedores/Fornecedor')

describe('classe Fornecedor', () => {
  test('o método validar() retorna true', () => {
    const fornecedor = new Fornecedor({
      id: 1,
      empresa: 'Gatito',
      email: 'contato@gatito.com.br',
      categoria: 'brinquedos',
      dataCriacao: '27/12/2021',
      dataAtualizacao: '27/12/2021',
      versao: 2
    })
    console.log(fornecedor)
    expect(fornecedor.validar()).toBe(true)
  })

  test('o método criar() foi executado com sucess', async () => {
    const fornecedor = new Fornecedor({
      empresa: 'Gatito',
      email: 'contato@gatito.com.br',
      categoria: 'brinquedos'
    })

    await fornecedor.criar()

    expect(fornecedor.id).toBe(500)
    expect(fornecedor.dataCriacao).toBe('27/12/2021')
    expect(fornecedor.dataAtualizacao).toBe('27/12/2021')
    expect(fornecedor.versao).toBe(2)
  })
})
