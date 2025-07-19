import { useState, useEffect } from 'react'
import CardList from './components/card-list.component'
import SearchBox from './components/search-box.component';

function App() {
  const [monster, setMonster] = useState([]);
  console.log(monster)
  const [filterMonster, setFilterMonster] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response)=>response.json())
      .then((data)=> {
        setMonster(data);
        setFilterMonster(data);
      }
    );
  }, []);

//Handler to pass down
const onChangeHandler = (event) =>{
  const searchString = event.target.value.toLowerCase();
  const newFilterMonster = monster.filter((monster)=>
    monster.name.toLowerCase().includes(searchString)
  )
  setFilterMonster(newFilterMonster);
}

  return (
    <div className="bg-gradient-to-l from-blue-400 to-cyan-700 min-h-screen p-4 px-8 md:px-16">
      <div className='flex justify-center text-4xl mt-8 mb-4'>
        <h1 className="font-bigelow text-blue-800 font-bold hover:scale-105 transition-transform duration-250 ease-out">Monsters Rolodex</h1>
      </div>
      
      <div className='flex justify-center mb-4'>
        <SearchBox onChangeHandler={onChangeHandler}></SearchBox>
      </div>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
          <CardList monsters={filterMonster}></CardList>
      </div>
    </div>
  )
}
export default App;