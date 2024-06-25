import React from 'react'
import axios from 'axios'
import './NoteCard.css'
import img from './delete.png'
import toast from 'react-hot-toast'

function NoteCard({ _id, title, content, category }) {

    const deleteNote = async ()=>{
        const response = await axios.delete(`${process.env.REACT_APP_API_URL}/notes/${_id}`)
        toast.success(response.data.message)
        
    }

    return (
        <div>
            <div className='note-card'>

                <h3 className='note-card-title'> {title} </h3>
                <p className='note-card-content'> {content} </p>
                <span className='note-card-category'>{category}</span>
                <img src={img} className='delete-icon' onClick={deleteNote}/>

            </div>
        </div>
    )
}

export default NoteCard
