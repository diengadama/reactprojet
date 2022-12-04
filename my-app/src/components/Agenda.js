
import './Agenda.css';

function Agenda() {
  function adicinar(){
  const nomes = document.getElementById('nome');
  const emails = document.getElementById('email');
  const telefones = document.getElementById('telefone');


  const dados =[nomes.value, emails.value ,telefones.value]
  console.log(nomes.value)
  const novoElement = document.createElement('li')
  novoElement.textContent= dados


  const container = document.getElementById('container')
  container.appendChild(novoElement)


  }
  return (
    <div>
      <h1>Agenda</h1>
      <input id='nome' placeholder='nome'></input>
      <input id='email' placeholder='email'></input>
      <input id='telefone' placeholder='telefone'></input>
      <button type='submit' onClick={adicinar}>Adicionar</button>

      <button type='submit' onClick='delete'>Deletar</button>
      
      <ul id='container'>
    
      </ul>
    </div>
  );
}

export default Agenda;
