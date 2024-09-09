import './App.css';
import { useState } from 'react';
import Item from './components/Item';

function App() {

  const [lista, setLista] = useState([]); //db
  const [valor, setValor] = useState("");

  const [select, setSelect] = useState("-1");
  const prioridade = ["Alta", "Média", "Baixa"];

  const [msg, setMsg] = useState(null);

  const adicionarTarefa = () => {

    if(select == "-1" || valor == ""){
      setMsg("Preencha os campos!");
      return;
    }

    const novaLista = lista;
    const obj = {
      prioridade: prioridade[select],
      descricao: valor
    }
    novaLista.push(obj);

    setLista(novaLista);
    setValor("");
    setSelect("-1");
    if(msg != null)
      setMsg(null);
  };

  const removerTarefa = (i) => {
    const novaLista = [...lista];
    novaLista.splice(i, 1);

    setLista(novaLista);

  }

  return (
    <div className='container'>
      <div className='add'>
        <h2>Tarefa:</h2>
        
        <div className="descricao">
          <label>Descrição:</label>
          <input className='borda'  type='text' value={valor} onChange={(e) => setValor(e.target.value)}></input>
        </div>

        <div className='prioridade'>
          <label>Prioridade:</label>
          <select className='borda' value={select} onChange={(e) => setSelect(e.target.value)}>
            <option value="-1" disabled>Selecione a prioridade</option>
            {prioridade.map((item,index) => <option value={index}>{item}</option>)}
          </select>
        </div>

        <button className="btn borda" onClick={adicionarTarefa}>adicionar</button>
        {msg &&
          <div>
            <h5 className='vermelho'>{msg}</h5>
          </div>
        }
      </div>
      <div className='lista'>
        <div className='alta li'>
          <h2>Alta Prioridade</h2>
          {
            lista.map((item, i) => {
              if(item.prioridade == "Alta")
                return <Item key={i} valor={item.descricao} remover={() => removerTarefa(i)}></Item>
            })
          }
        </div>
        <div className='media li'>
          <h2>Média Prioridade</h2>
          {
            lista.map((item, i) => {
              if(item.prioridade == "Média")
                return <Item key={i} valor={item.descricao} remover={() => removerTarefa(i)}></Item>
            })
          }
        </div>
        <div className='baixa li'>
          <h2>Baixa Prioridade</h2>
          {
            lista.map((item, i) => {
              if(item.prioridade == "Baixa")
                return <Item key={i} valor={item.descricao} remover={() => removerTarefa(i)}></Item>
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
