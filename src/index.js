import React from 'react';
import ReactDOM from 'react-dom';
import Card2 from './components/Card2'
import App from './App'

const name = "Md iqbal hossen raju";
const id = 1703;
const num1 = 50;
const num2 = 20;
const sum = num1+num2;

const heading = {
  backgroundColor : "purple",
  color: "blue",
  fontSize: "40px",
  textAlign: "center",
  padding: "5px"
}

function Card(){
  return <div className="card">
  <h5 className="Emname">Md iqbal hossen raju</h5>
  <p className="Profession">Software Engineer</p>
  <p className="Status">Jobless</p>
</div>
}

ReactDOM.render(
  <div>
    <h3 style={heading}>Todo App</h3>
    <h1 style={{color: "red", fontSize: "20px"}}>hello world</h1>
    <h2>{name}</h2>
    <p>{id}</p>
    <h4>hello world 2</h4>
    <p>The sum is {sum}</p>
    <Card/>
    <Card2/>
    <App/>
  
  </div>,
  document.getElementById('root')
);

