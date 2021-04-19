import React, { Component } from 'react'

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todo_array: [],
            input_new_todo: " "
        }
    }

    updateInputData = (event) => {
        this.setState(
            {
                input_new_todo: event.target.value

            }
        )

    }

    sumitFormData = (event) => {
        // console.log("from submit form " + this.state.input_new_todo);
        this.setState(
            {
                todo_array: [...this.state.todo_array, this.state.input_new_todo]
            }
        )


        event.preventDefault();
    }

    deleteTodo = (index) =>{
      console.log("delete todo"+index);
      var tempArray=this.state.todo_array.filter(( Currentelement,position) =>{
            return (index !== position)
        })

        this.setState({
            todo_array:tempArray
        })
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.sumitFormData}>
                    <label> enter a new task</label>
                    <input type="text" value={this.state.input_new_todo} onChange={this.updateInputData}></input>
                    <button type="submit">submit</button>
                </form>

                <div>
                    {this.state.todo_array.map((element, index) => {
                        return (
                            <span  key={index}>
                                <h6>{index}.{element}</h6>
                                <button type="button" onClick={() => this.deleteTodo(index)}  value> delete </button>
                            </span>
                        )

                    })}
                </div>


            </div>
        )
    }
}
