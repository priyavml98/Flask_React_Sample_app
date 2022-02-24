import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       


function App() {
const [InData, setInData] = useState([{}])

useEffect(() => {
  fetch('/api').then(response => response.json() ).then(data =>setInData(data))

  {}
}, [])

  return (
    
    <div className="App">
      <h1>{InData.title}</h1>
      <h2>{InData.type}</h2>
    </div>
  );
}

export default App;
