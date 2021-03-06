const eventoSubmit = document.querySelector('form');
const aulaAnterior = document.getElementById('aula-anterior-btn');
const asyncMeme = document.getElementById('assincronismo-meme-btn');
const asyncClass = document.getElementById('assincronismo-2-btn')

eventoSubmit.addEventListener('submit', (event) => {
  const nomeObjeto = document.getElementById('meu-nome');
  const meuNome = nomeObjeto.value;
  const nomeSemEspaco = meuNome.trim();
  const regex = new RegExp(' ', 'g');
  const nomeESobrenome = nomeSemEspaco.split(' ').filter(nome => nome !=='' || !regex.test(nome));

  const blocklist = [
    'puta',
    'canalha',
    'test',
    'shit',
    'merda',
    'caralho',
    'cu'
  ];

  const nomeImproprio = blocklist.map(palavra => nomeESobrenome.includes(palavra))
      .find(elemento => elemento === true);

  if (nomeImproprio) {
    alert(' Boca suja')
    event.preventDefault();
    return;
  }

  if (!nomeSemEspaco) {
    alert('Você precisa preencher um nome no campo')
    event.preventDefault();
    return;
  }

  if (nomeESobrenome.length < 2) {
    alert("Favor colocar nome e sobrenome");
    event.preventDefault();
    return;
  }

  if (nomeSemEspaco.length < 5) {
    alert("Favor preencher nome com 5 caracteres");
    event.preventDefault();
    return;
  }

  if (nomeSemEspaco.length > 100) {
    alert("Favor preencher nome com menos de 100 caracteres");
    event.preventDefault();
    return;
  }
});

eventoSubmit.addEventListener('reset', (event) => {
  const temCerteza = confirm('VOCÊ TEM CERTEZA DISSO????');

  if (temCerteza) {
    const certezaAbsoluta  = confirm('Não quer mudar de ideia?')
    if (certezaAbsoluta) {
      const ultimaChance  = confirm('Ultima Chance')
      if (ultimaChance) {
        alert('May God have mercy our nation')
        event.preventDefault()
        return;
      }
      return;
    }
    return;
  }
  console.log('isso foi um delete sem where')
})

const inputNome = document.getElementById('meu-nome');

inputNome.addEventListener('keyup', function(event) {
  this.value = this.value.toUpperCase();

  inputNome.addEventListener('input', function(event) {
    console.log('Tecla ', event.target.value, ' alterada para maiúsculo')

    inputNome.addEventListener('change', function(event) {
      event.target.style.backgroundColor = 'red';
    })
  })
})

aulaAnterior.addEventListener('click', (event) => {
  const aulaAnteriorDiv = document.getElementById('aula-anterior');
  aulaAnteriorDiv.classList.toggle('aula-anterior');
})

asyncMeme.addEventListener('click', (event) => {
  const aulaAnteriorDiv = document.getElementById('assincronismo-meme');
  aulaAnteriorDiv.classList.toggle('aula-anterior');
})

asyncClass.addEventListener('click', (event) => {
  const aulaAnteriorDiv = document.getElementById('assincronismo-2');
  aulaAnteriorDiv.classList.toggle('aula-anterior');
})