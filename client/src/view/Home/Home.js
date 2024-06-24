import React, {useEffect, usestate} from 'react'
import axios from 'axios';
import './Home.css'

function Home() {
    const [notes, setNotes] = usestate([]);

    const loadNotes = async ()=>{

        const response = await axios.get('http://localhost:5000/notes')
        setNotes(response.data.data);


    }

    useEffect(()=>{
        loadNotes();
    },[])

  return (
    <div>
      Home

      {
        notes.map((note, index)=>{
            return(
                <div>

                    <h3> {note.title} </h3>

                </div>
            )
        })
      }
    </div>
  )
}

export default Home
