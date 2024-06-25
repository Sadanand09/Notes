import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './Home.css'

function Home() {
    const [notes, setNotes] = useState([]);

    const loadNotes = async ()=>{

        const response = await axios.get(`${process.enc.REACT_APP_API_URL}/notes`)
        setNotes(response.data.data);


    }

    useEffect(()=>{
        loadNotes();
    },[])

  return (
    <div>
      
      {
        notes.map((note, index)=>{
            return(
                <div>

                    <h3> {note.title} </h3>
                    <p> {note.content} </p>
                    <span>{note.category}</span>

                </div>
            )
        })
      }
    </div>
  )
}

export default Home
