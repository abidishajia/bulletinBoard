import React, { Component } from 'react';
import Note from './Note'
import { FaPlus } from 'react-icons/fa';

class Board extends Component {
    state = { 
        notes: []
    }

    updateNote = (newText, i) => {
       this.setState(prevState => ({
            notes: prevState.notes.map(
                note => (note.id !== i) ? note : {...note, note: newText}
            )
       }))
    }

    nextId = () => {
        this.uniqueId = this.uniqueId || 0
        return this.uniqueId ++
    }

    addNote = (text) => {
        this.setState(prevState => ({
            notes : [
                ...prevState.notes, 
                {
                    id: this.nextId(),
                    note: text
                }
            ] 
       }))
    }

    deleteNote = (id) => {
        this.setState(prevState => ({
            notes: prevState.notes.filter(note => note.id !== id)
       }))
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

                <button onClick={this.addNote.bind(null, 'New Note')} id="add"> 
                    <FaPlus />
                </button>
            </div>
         );
    }
}
 
export default Board;