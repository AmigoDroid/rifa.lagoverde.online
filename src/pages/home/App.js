import logo from './logo.svg';
import './App.css';
import { InputComponent } from '../../components/input';
import { useEffect, useRef, useState } from 'react';

function App() {
  const user = {
    nome:"",
    sobreNome:""
  }
  const [userObj,setUserInfo] = useState(user);
  const [text,setText] =  useState("");
  const usuario = useRef(user);
  const change = (e)=>{
    const {name,value} = e.target;
    usuario.current[name] = value;
    setText(usuario.current.nome +" "+usuario.current.sobreNome)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         {text}
        </a>
        <InputComponent labelText={"Nome"} name={"nome"} change={change} type={"text"}/>
        <InputComponent labelText={"Sobre nome"} name={"sobreNome"} change={change} type={"text"}/>
      </header>
    </div>
  );
}

export default App;
