import React, { useState,useEffect } from 'react';
import './Todo.css';

const getLocalItems=()=>{
    let list=localStorage.getItem("list");

    if (list){
        return JSON.parse(localStorage.getItem('list'))
    }else{
        return []
    }
}
const Todo = () => {
    const [inputdata,setinputdata]=useState("");
    const [items,setitems]=useState(getLocalItems());
    const [remove,setremove]=useState("")

    const additem=()=>{
        if(!inputdata){
            alert("blank item...")
        }else{
            setitems([...items,inputdata])
        setinputdata("")
        }
    }
useEffect(() => {
localStorage.setItem("list",JSON.stringify(items))
}, [items])


const deleteItem=(index)=>{
    const updateditem=items.filter((value)=>{
        return value.index !== index;
    })
    setitems(updateditem)
}

  return (
    <div className='main-div'>
         
        <div className='child-div'>
        <h1> ✍ You Can Add Items Here...</h1>
                <div className='addItem'>
                <input type="text" placeholder=' ✍ Add Items...' value={inputdata} onChange={(e)=>setinputdata(e.target.value)}></input>
                <button className='btn' onClick={additem}>Click Here</button>
                </div>
                <div className='showItems'>
                    <div className='eachitem'>

                       {
                         items.map((value,index)=>{
                               return(
                                   <div className='eachItem' key={index}>
                                   <h3>{ value }</h3>
                                   <button onClick={()=>deleteItem(value.index)}>del</button>
                                   </div>
                                   
                               )
                           })
                       }
                       
                    </div>
                    
                </div>
        </div>
    </div>
  )
}

export default Todo;