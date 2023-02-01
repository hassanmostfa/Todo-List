import React from "react";
import "./TodoItems.css"

const TodoItems = (props)=>{
    const {items , deleteItem} = props ;
    let length = items.length ;
    const ListItems = length ? (
        items.map((item => {
            return (
                <div className="ListItems" key={item.id}>
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="action icon" onClick={()=> deleteItem(item.id)}>&times;</span>
                </div>
            )
        }))
    ) : (<p className="empty">There Is No Items To Delete</p>) ;
    return (
        <div className="ListItems">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Actions</span>
            </div>
            {ListItems}
        </div>
    )
}
export default TodoItems ;