import React, { Component } from 'react'
import "./AddItem.css"

class AddItem extends Component {
    state = {
        name : "" ,
        age : ""
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        if (e.target.name.value === "") {
            return false ;
        }else {
            this.props.addItem(this.state)
        this.setState({
            name:"",
            age : ""
        })
        }
    }
    render() {
    return (
        <div>
            <form action="" onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} id='name' placeholder='Enter Your Name...'  value={this.state.name}/>
                <input type="number" onChange={this.handleChange} id='age' placeholder='Enter Your Age...' value={this.state.age} />
                <input type="submit" value = "Add To List" />
            </form>
        </div>
    )  
    }
}
export default AddItem ;