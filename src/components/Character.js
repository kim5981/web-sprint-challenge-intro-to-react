// Write your Character component here

export default function Character (props) {

    const { characters } = props;

   return (
    <>
    {
        characters.map( character => {
            return <h2> { character.name }</h2>
        } )
    }
    </>
   )
    }

