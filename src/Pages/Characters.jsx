import { useEffect, useState } from "react";
import { useCharacters } from "../hooks/useCharacters";
import { CharactersCard } from "../components/Cards/CharactersCard";


export function Characters(){
    const [characters, setCharacters] = useState([])

    useEffect(()=>{
        useCharacters()
            .then(data => {console.log(data.items); setCharacters(data.items)})
            .catch(error => console.log(error))
    }, [])


    return(
        <>
            {characters.map(character =>(
                <CharactersCard
                    key={character.id}
                    name = {character.name}
                    race = {character.race}
                    description={character.description}
                    image={character.image}
                />
            ))}
        </>
    )
}