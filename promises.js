const divPromise = document.querySelector('#resultado-promise')

// fetch('https://fakestoreapi.com/products/1')
//   .then(resposta =>  resposta.json())
//   .then((batata) => {
//     //lógica aqui
//     console.log(batata)
//   })
//   .then(resposta => [
//     //lógica aqui
//   ])
//   .catch(erro => console.log(erro));


async function pegarJSON() {
  try {
    const resultado = await fetch('https://fakestoreapi.com/products/1');
    const resultToJson = await resultado.json();
    divPromise.innerText = JSON.stringify(resultToJson);
    // console.log(resultToJson);
    return resultToJson
  } catch (error) {
    console.error(error)
  }
}

const resultado = pegarJSON().then(resposta => console.log(resposta))

// divPromise.innerText = 'Volte no console';

