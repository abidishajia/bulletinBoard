import React, { Component } from 'react';
import { FaPencilAlt } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';
import { FaTimesCircle } from 'react-icons/fa';


class Note extends Component {
    state = {
        editing: false
    }

    componentWillMount() {
        this.style = {
            right: this.randomBetween(0, window.innerWidth - 150, 'px'),
            top: this.randomBetween(0, window.innerHeight - 150, 'px'),
            transform: `rotate(${this.randomBetween(-25, 25, 'deg')})`,
            backgroundColor: this.randomColor()

        }
    }

    randomBetween = (x,y,s) => {
        return x + Math.ceil(Math.random() * (y-x)) + s
    }

    randomColor = () => {
        return '#'+Math.random().toString(16).substr(-6);
    }

    edit = () => {
        this.setState({
            editing: true
        })
    }

    remove = (e) => {
        e.preventDefault()
        this.props.deleteNote(this.props.note.id)
    }

    save = (e) => {
        e.preventDefault()
        this.props.onUpdate(this.newText.value, this.props.note.id)
        this.setState({
            editing: false
        })
    }

    cancel = () => {
        this.setState({
            editing: false
        })
    }

    

    renderForm() {
        return(
            <div className="note"  style={this.style}>
                <form onSubmit={this.save}>
                    <textarea ref={input => this.newText = input} defaultValue={this.props.note.note}/>
                    <button id="save"> <FaSave /></button>
                    <button id="cancel"> <FaTimesCircle /></button>

                </form>
            </div>
        )
    }
 
    renderDisplay() { 
        const {note} = this.props
        return (  
            <div 
                className="note" 
                style={this.style}  >
                

                <p> {note.note}</p>
                <span> 
                    <button id="edit" onClick={this.edit}> <FaPencilAlt /> </button>
                    <button id="remove" onClick={this.remove}> <FaTrash /> </button>
                </span>
            </div>
        );
    }

    render(){
        return this.state.editing ? this.renderForm() : this.renderDisplay()
    }
}
 
export default Note;