const form = document.querySelector('form');
const container = document.getElementById('container');

form.onsubmit = function (event) {
  event.preventDefault();
  const actividad = this.querySelector('.js-actividad').value;

  const article = document.createElement('article');
  article.classList.add('list');
  article.innerHTML = `
    <div>
      <Label>To-do:</label><br><br>
      <input type="checkbox">        ${actividad}<br><br>
      <button>Eliminar</button>
    </ul>`
   
  article.querySelector('button').onclick = function() {
    console.log(this)
    this.closest('.list').remove();
  } 

  article.querySelector('input').onclick = function() {
    if(this.checked) {
      article.classList.add('check');
    }
  }

  container.appendChild(article);
  this.reset(); /*Esto se resetea actualilzando la pagina*/

  console.log({
    actividad,
  })  

}
