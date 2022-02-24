import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react'
import axios from 'axios'
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       


function App() {
const [InData, setInData] = useState([{}])

useEffect(() => {
  axios.get('/api').then(response => setInData(response.data))

  {}
}, [])

  return (
    
    <div className="App">
      <h1>{InData.title}</h1>
      <h2>{InData.type}</h2>
      <h2>{InData.id}</h2>
    </div>
  );
}

export default App;
