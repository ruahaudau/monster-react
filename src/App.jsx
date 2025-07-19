import { useState, useEffect } from 'react'
import CardList from './components/card-list.component'

function App() {
  const [monster, setMonster] = useState([]);
  console.log(monster)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
      .then((data)=> setMonster(data));
  }, []);
  return (
        <div className="bg-gradient-to-l from-blue-400 to-cyan-700 min-h-screen p-4 px-8 md:px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
          <CardList monsters={monster}></CardList>
        </div>
  )
}
export default App;