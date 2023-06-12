/* alert('Seja bem vindo pelo Alert'); console.warn('Alert ..'); console.log('Mensagem de log em geral'); console.error('Aconteceu um erro!!!'); */ /* const logo = document.querySelector('div.logo'); logo.style.border = '2px solid yellow'; */ 


function processaBackend(url, callback) {
  const http = new XMLHttpRequest();
  http.onreadystatechange = function() {
    if (this.readyState == 4) {
      console.log('Foi no BACKEND e VOLTOU');
      console.warn('Resposta do BACKEND:', this.responseText)
      const dados = JSON.parse(this.responseText);
      if (callback) {
        callback(dados);
      }

    }
  };
  console.log(' CHAMA O BACKEND !!!');
  http.open("GET", url, true);
  http.send();
  console.log('EVIOU');

  return 'JSON..'
}


function criarEvento() {
  alert('Vai criar um evento ...');
}
