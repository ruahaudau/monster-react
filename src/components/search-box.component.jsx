

function SearchBox ({onChangeHandler}) {
    return (
        <input 
        className='bg-amber-200 items-center-safe px-4 py-2 rounded'
        type='search' 
        onChange={onChangeHandler}
        />
      
    )
}

export default SearchBox