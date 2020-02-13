import React, { Component } from 'react';
import Note from './Note'
import { FaPlus } from 'react-icons/fa';
import uuid from "uuid";


class Board extends Component {
    state = { 
        notes: []
    }

    updateNote = (newText, i) => {
       this.setState({notes: this.state.notes.map(note => (note.id !== i) ? note : {...note, note: newText}) })
    }

    addNote = (text) => {
       const note =  {id: uuid.v4(), note: text}
       this.setState({notes: [...this.state.notes, note]})
    }

    deleteNote = (id) => {
       this.setState({notes: this.state.notes.filter(note => note.id !== id)})
    }

    render() { 
        return ( 
            <div className="board">
                {this.state.notes.map((note, i) => {
                    return (
                        <Note 
                            key={note.id}
                            note={note} 
                            onUpdate = {this.updateNote} 
                            deleteNote = {this.deleteNote}
                            />
                    )
                })}

                <button onClick={() => this.addNote('New Note')} id="add"> 
                    <FaPlus />
                </button>
            </div>
         );
    }
}
 
export default Board;