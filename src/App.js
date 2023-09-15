// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import BookListsearch from './components/BookListsearch';
import Favourites from './components/Favourites';
import { BrowserRouter } from 'react-router-dom';
import Topbar from './components/Topbar';
import { useEffect, useState } from 'react';
import axios from 'axios';



function App() {


  const [data, setData] = useState({})
  const[mongodb,setMongodb]=useState("");
  const booklist = async () => {
    await axios.get('https://api.itbook.store/1.0/new').then((response) => {
      console.log(response);
      setData(response.data)
      console.log(data);
    })
  }

  useEffect(() => {
    booklist();
  }, [])


  const handlechange=(e)=>{
    setMongodb(e.target.value)
}
  const handlesubmit=(e)=>{
    e.preventDefault();
    const getbooks=axios.post(`https://api.itbook.store/1.0/search/${mongodb}`).then((response)=>{
        setData(response.data);
        // console.log(response.data);
    })
    console.log("shas")
    console.log(data);
}
  
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Routes>
          <Route path='/' element={<BookList list={handlesubmit} sbooks={handlechange} data={data} />}></Route>
          <Route path='/search' element={<BookListsearch />}></Route>
          <Route path='/favourites' element={<Favourites />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
