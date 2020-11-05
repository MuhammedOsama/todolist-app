import React from 'react';

const TodoItems = (props) => {

    const {items, deleteItems} = props;
    let length = items.length;

    const listItems = length ? (
        items.map((item, id) => {
            return(
                <div key={id}>
                    <span className="name">{item.name}</span>
                    <span className="age">{item.age}</span>
                    <span className="action icon" onClick={() => deleteItems(item.id)}>&times;</span>
                </div>
            );
        })
    ) : (
        <p>There is item to show.</p>
    )

    return(
        <div className="list-items">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>
            {listItems}
        </div>
    );
}

export default TodoItems;