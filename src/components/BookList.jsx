import axios from 'axios'
import React, {useEffect, useState } from 'react'
import './Booklist.css'

function BookList({list,sbooks,data}) {
  
    // const[data,setData]=useState({})
    const[local,setLocal]=useState(JSON.parse(localStorage.getItem('favours')) || [])
    // const booklist=async()=>{
    //     await axios.get('https://api.itbook.store/1.0/new').then((response)=>{
    //         console.log(response);
    //         setData(response.data)
    //         console.log(data);
    //     })
    // }
    
    // useEffect(()=>{
    //     booklist();
    // },[])
    
    const addfavourite=((item)=>{
      setLocal([...local,{...item}])
        console.log("gotit",local);
        localStorage.setItem('favours',JSON.stringify(local))
    })

    
  


  return (
    <>
    <div className='searchbox'>
    <form onSubmit={list}>
        <input type='text'  className='inputsearch' onChange={sbooks} placeholder='search books here..'></input>
        <button type='submit' className='inputbutton' >Search</button>
    </form>
    </div>
    <div className='mt-5'>
    <h2 className='headingg'>List of Books</h2>
    <div className='container'>
    {data && data.books && data.books.map((books)=>{
              return (<div className='cardbox'> 
              <img src={books.image} className='bookimage'></img> 
              <div className='cardbox2'>
               <h5>{books.title}</h5>
               <p>{books.subtitle}</p>
               <p>{books.isbn13}</p>
               <p>{books.price}</p>
               
               </div>
               <div className='cardbox3'>
               <button type='submit' className='Adding' onClick={()=>{addfavourite(books)}}>Add to favourites</button>
               </div>
           </div> 
           
              )
            })}
        
    </div>

    
    </div>


















{/* 
    <div className='mt-5'>
    <h2 className='headingg'>List of Books</h2>
    <div className='container'>
    {data && data.books && data.books.map((books)=>{
              return (<div className='cardbox'> 
              <img src={books.image}></img> 
              <div className='cardbox2'>
               <h5>{books.title}</h5>
               <p>{books.subtitle}</p>
               <p>{books.isbn13}</p>
               <p>{books.price}</p>
               <button type='submit' className='Adding' onClick={()=>{addfavourite(books)}}>Add</button>
               </div>
           </div> 
           
              )
            })}
        
    </div>

    
    </div> */}
    </>
  )
}

export default BookList