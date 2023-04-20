import React, { useState } from 'react';
import './App.css';
import './Style.css';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function Quote() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLiked, setIsLiked] = useState(false);

  function fetchRandomQuote() {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data.content);
        setAuthor(data.author);
      })
      .catch(error => console.log(error));
  }

function like()
{
    setIsLiked(true);
}
  function generateQuote() {
    fetchRandomQuote();
    setIsLiked(false);

  }

  return (
    <div style={{paddingTop:"5%"}}>
      <center>
        <h1>Quote Generator</h1>
        <div id='quote'>
          {quote && <p>"{quote}"</p>}
          {author && <p id='author'>- {author}</p>}
        </div>
        <button onClick={generateQuote}>
         Generate Quote
        </button>

        <button onClick={like}> {isLiked ? <FaHeart color='red' /> : <FaRegHeart />}</button>
      </center>
    </div>
  );
}

export default Quote;