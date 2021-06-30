import React from 'react'
import Card3 from './components/Card3';
import Data from './components/data.json'


function App(){
  //console.log(Data);
  
  //using loop for access all data
  let items = []
  /*
  for(let x=0; x<Data.length; x++){
    items.push( <Card3 nametext={Data[x].title} proftext={Data[x].description} />)
  }
  */
  //props: how to value pass through the component)
  items = Data.map((items) => <Card3 nametext={items.title} proftext={items.description}/>) //how sent data to component using mapping we can use it instead of for loop
  console.log(Data)
  
  return <div>
    {items}
    </div>

}

export default App;