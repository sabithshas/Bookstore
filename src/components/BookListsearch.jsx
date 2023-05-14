import axios from 'axios';
import React, { useState } from 'react'
import './Booklistsearch.css'
function BookListsearch() {
    const[mongodb,setMongodb]=useState("");
    const[data,setDatas]=useState({});
    const handlechange=(e)=>{
        setMongodb(e.target.value)
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        const getbooks=axios.post(`https://api.itbook.store/1.0/search/${mongodb}`).then((response)=>{
            setDatas(response.data);
            console.log(response.data);
        })
    }
  return (
    <>
    <h1 className='searchheading'>Search Your Books Here</h1>
    <div className='searchbox'>    
    <form onSubmit={handlesubmit}>
        <input type='text' onChange={handlechange} className='inputsearch'></input>
        <button type='submit' className='inputbutton'>Search</button>
    </form>
    </div>
    <div className='containerr'>
        {data.books && data.books.map((searchedbooks)=>{
               return( <div className='box' key={searchedbooks.title}>
                <img src={searchedbooks.image}></img>
                <div className='box2'>
                <p>{searchedbooks.title}</p>
                <p>{searchedbooks.subtitle}</p>
                <p>{searchedbooks.isbn13}</p>
                <p>{searchedbooks.price}</p>
                </div>
                
                
        </div>
               )
        })}
    

    </div>
    </>
  )
}

export default BookListsearch