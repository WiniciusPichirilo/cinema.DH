// projetinho cinema

var catalogo = [
  {
    id: 1,
    titulo: 'Mr.s magoo',
    duracao: 147,
    atores: ['Magoo', 'Adam', 'Wisley'],
    anoDeLancamento: 2017,
    emCartaz: false
  },
  {
    id: 2,
    titulo: 'Batman',
    duracao: 240,
    atores: ['Bruce Wayne', 'Coringa', 'Bane'],
    anoDeLancamento: 2021,
    emCartaz: false
  },
  {
    id: 3,
    titulo: 'Homem-aranha no multiverso',
    duracao: 90,
    atores: ['Peter Paker', 'Peter Paker', 'Peter Paker', 'Dr. Octopus'],
    anoDeLancamento: 2021,
    emCartaz: false
  },
  {
    id: 4,
    titulo: 'Dois filhos de Franciso',
    duracao: 60,
    atores: ['Zezé', 'Luciano', 'Oportunista'],
    anoDeLancamento: 1910,
    emCartaz: false
  }
]

// adicionar filme

function adicionarFilme(filme) {
  return catalogo.push(filme)
}
console.log('antes', catalogo)

console.log(
  adicionarFilme({
    id: 5,
    titulo: 'liga da justiça',
    duracao: 360,
    atores: ['superman', 'mulher maravilha', 'lanterna verde'],
    anoDeLancamento: 2022,
    emCartaz: true
  })
)

// buscar filme

function buscarFilme(id) {
  return catalogo.find(filme => filme.id === id)
}

const filme1 = buscarFilme(1)

console.log(filme1)

// alterar cartaz

function alterarStatusEmCartaz(id, callback) {
  const filme = callback(id)
  return (filme.emCartaz = !filme.emCartaz)
}

alterarStatusEmCartaz(3, buscarFilme)

console.log('depois', catalogo)

alterarStatusEmCartaz(2, buscarFilme)

// console.log(listarFilmeEmCartaz())

function listarTodosOsFilme() {
  const data = []
  for (let cont = 0; cont < catalogo.length; cont++) {
    data.push(catalogo[cont])
  }

  return data
}

function listarFilmeEmCartaz() {
  const filmesEmCartaz = []
  for (let cont = 0; cont < catalogo.length; cont++) {
    if (catalogo[cont].emCartaz) {
      filmesEmCartaz.push(catalogo[cont])
    }
  }

  return filmesEmCartaz
}

// console.log(listarFilmeEmCartaz())

function listarFilmeEmCartaz() {
  const filmesEmCartaz = []
  for (let cont = 0; cont < catalogo.length; cont++) {
    if (catalogo[cont].emCartaz) {
      filmesEmCartaz.push(catalogo[cont])
    }
  }

  return filmesEmCartaz
}

function listarFilmesDeLongaDuracao() {
  // const filmes = [];

  // for(let cont = 0; cont < catalogo.length; cont++) {
  //   if (catalogo[cont].duracao >= 120) {
  //     filmes.push(catalogo[cont]);
  //   }
  // }

  const filmes = catalogo.filter(filme => filme.duracao >= 120)

  return filmes
}

const filmesFiltrados = listarFilmesDeLongaDuracao()

console.log(filmesFiltrados)
