// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import BookList from './components/BookList';
import BookListsearch from './components/BookListsearch';
import Favourites from './components/Favourites';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<BookList/>}></Route>
        <Route path='/search' element={<BookListsearch/>}></Route>
        <Route path='/favourites' element={<Favourites/>}></Route>
      </Routes>
    </>
  );
}

export default App;
