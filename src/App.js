import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import Books from './Components/Books';
import BookInfo from './Components/BookInfo';

const App = () => {
  const[bookinfo,setBookInfo]=useState([])
  return (
    <div>
       <BookInfo bookinfo={bookinfo}/>
      <Books setBookInfo={setBookInfo}  bookinfo={bookinfo}/>
     
    </div>
  );
}

export default App;
