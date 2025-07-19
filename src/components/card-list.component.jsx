import Card from './card.component'

function CardList({monsters}) {
    return (
        monsters.map(({id, name, email}, idx)=>{
            return <Card key={`${idx}-${name}`} id={id} name={name} email={email}></Card>
            }
        )
    )
}

export default CardList