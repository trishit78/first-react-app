import React from 'react'

function List(props) {
  let items = ["pen","pencil","eraser"];
  
    return (
        <>
        <br />

        <h2>list</h2>
        <ul>
            {/* dynamic list */}
            {items.map((item)=> {
                return <li>{item}</li>
            })}

        </ul>
        </>



  )
}

export default List
