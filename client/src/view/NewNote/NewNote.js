import React, { useState } from 'react'
import axios from 'axios'
import './NewNote.css'
import toast from 'react-hot-toast'

function NewNote() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [category, setCategory] = useState('');

    const addNote = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/notes`,
            {
                title: title,
                content: content,
                category: category
            })
        toast.success(response.data.message)
        setTitle('')
        setCategory('')
        setContent('')
    }
    return (
        <div>
            <h1 className='app-header'>NewNote</h1>
            <form className='form-new-note'>
                <input
                    className='input-title'
                    type='text'
                    placeholder='Title'
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />

                <select className='input-category' value={category} onChange={(e) => {
                    setCategory(e.target.value)
                }}>
                    <option value="">Select a category</option>
                    <option value="General">General</option>
                    <option value="Personal">Personal</option>
                    <option value="Work">Work</option>
                    <option value="Learning">Learning</option>
                    <option value="Other">Other</option>
                </select>

                <input
                    className='input-content'
                    type='text'
                    placeholder='Enter content'
                    value={content}
                    onChange={(e) => {
                        setContent(e.target.value)
                    }}
                />

                <button type='button' className='btn' onClick={addNote}>
                    Add Note
                </button>

            </form>


        </div>
    )
}

export default NewNote
