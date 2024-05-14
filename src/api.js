import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function Api(){
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://hp-api.onrender.com/api/characters")
                setCharacters(response.data)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [])

    // return (
    //     <div>
    //       <h1>Harry Potter Characters</h1>
    //       <ul>
    //         {characters.map(character => (
    //           <li key={character._id}>{character.name}</li>
    //         ))}
    //       </ul>
    //     </div>
    //   );
}

export default Api