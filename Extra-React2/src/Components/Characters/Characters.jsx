import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Characters.css'
const API_URL = 'https://swapi.dev/api/people'


const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const getCharacter = async () => {
        try {
            const res = await axios.get(API_URL)
            setCharacters(res.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(()=>{
        getCharacter()
    },[]);

  return (
    <div className='paragraph'>
        
        <h1>Personajes de Star Wars</h1>
        {characters.map((character, i) => (
            <div key={i}><span>{character.name}</span><span>{character.birth_year}</span></div>
            
        ))}
    </div>
  )
}

export default Characters