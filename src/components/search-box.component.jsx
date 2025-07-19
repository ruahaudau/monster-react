

function SearchBox ({onChangeHandler}) {
    return (
        <input 
        className='bg-cyan-300 border-gray-200 items-center-safe px-4 py-2 rounded'
        placeholder="Search Your Monsters"
        type='search' 
        onChange={onChangeHandler}
        />
      
    )
}

export default SearchBox