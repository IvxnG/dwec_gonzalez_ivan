let parrafos = document.getElementById('parrafos');
let enlace = document.getElementById('segundo-enlace');
let linkGoogle = document.getElementById('links-google-es');
let palabras = document.getElementById('palabras-segundo-parrafo');

let p = document.querySelectorAll('p');
let a = document.querySelectorAll('a');

parrafos.textContent = p.length;
enlace.textContent = a[1];
palabras.textContent = p[1].innerText.split(" ").length;

let count = 0;
a.forEach(item => {
  if (item.href == `https://www.google.es/`) {
    count++;
  }
})
linkGoogle.textContent = count;
