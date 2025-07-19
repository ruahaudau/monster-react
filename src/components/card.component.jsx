function Card ({id, name, email}) {
  return (
    <div className="bg-cyan-200 rounded shadow p-4 m-2 border border-gray-200 font-bigelow hover:scale-105 transition-transform duration-250 ease-out text-center">
      <img src={`https://robohash.org/${id}/?set=set2`}/>
      <div className='font-bold text-2xl mt-4'>{name}</div>
      <div className='text-black text-xl mt-2 mb-4'>{email}</div>
    </div>
  )
}

export default Card;