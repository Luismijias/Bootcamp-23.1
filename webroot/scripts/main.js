/* alert('Seja bem vindo pelo Alert'); console.warn('Alert ..'); console.log('Mensagem de log em geral'); console.error('Aconteceu um erro!!!'); */ /* const logo = document.querySelector('div.logo'); logo.style.border = '2px solid yellow'; */ 


/* const tecnologiasPreferidasLis = `HTML5
CSS3
LESS
JavaScript
ReactJS
Netuno
PostgreSQL
Linux
GIT
`.split('\n');

console.info('Minhas tecnologias preferidas:',tecnologiasPreferidasList);

document.getElementById('tecnologiasPreferidas').innerHTML = '<li>'+ tecnologiasPreferidasList.join('</li><li>') +'</li>'; */

function processaBackend(url, callback) {
            const http = new XMLHttpRequest();
          http.onreadystatechange = function() {
            if (this.readyState == 4) {
              console.log('Foi no BACKEND e VOLTOU');
              console.warn('Resposta do BACKEND:', this.responseText)
              const dados = JSON.parse(this.responseText);
              if (callback) {
                callback(eventos);
              }
              
            }
          };
          console.log(' CHAMA O BACKEND !!!');
          http.open("GET", url, true);
          http.send();
          console.log('EVIOU');
 
          return 'JSON..'
}

const respostaDoBackend = processaProdutosDoBackend();
console.log('JSON do Backend', processaProdutosDoBackend())

//Arrow funciton com apenas uma linhas de código
function processaProdutosDoBackend = () => console.log('Arrow function uniline')

//multiplas linhas de código
const processaProdutosDoBackend = () => {
console.log('teste 1');
  console.log('teste 2');
}
