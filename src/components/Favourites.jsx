import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Favourites() {
  const [favr, setfavr] = useState(JSON.parse(localStorage.getItem('favours')) || [])
  console.log(favr);
  const yours=async()=>{
      await  axios.get('https://api.itbook.store/1.0/new').then((res) => {
        console.log(res);
        setfavr.filter((res.favr))
        console.log(favr);
      })
  }
  useEffect(() => {
    yours();
  }, [])


  return (
    <>
    <h1 className='headingg'>Your Favourite Books</h1>
      <div className='container'>
        {favr && favr.map((books) => {
          return <div className='cardbox 'key={books.isbn13}>
            <img src={books.image}  className='bookimage'></img>
            <div className='cardbox2'>
            <h5>{books.title}</h5>
               <p>{books.subtitle}</p>
               <p>{books.isbn13}</p>
               <p>{books.price}</p>
            </div>
          </div>
        })}






      </div>
    </>
  )
}

export default Favourites