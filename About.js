import React from 'react'
import Style from './Style.css'

function About() {
  return (
    <div id='about' style={{backgroundColor:"rgb(179, 239, 178)", height:"91.5vh", paddingLeft:"5%", paddingRight:"5%", marginTop:"5%"}}>
<div id='box'>
        <div style={{fontFamily:"Play", backgroundColor:"rgb(56, 163, 165)", fontSize:"large"}}>
<h1><center>Quote Generator</center></h1>
        An interesting fact about quote generators is that some of them use 

        natural language processing (NLP) algorithms to analyze large amounts

         of text data and generate new quotes that sound like they were written 

         by a human. These NLP-based quote generators use machine learning
          techniques to identify patterns in language and generate new phrases
           that are syntactically and semantically similar to existing quotes.
            Some quote generators even allow users to input their own text data to create customized quotes.
            </div>
        </div>
    </div>
  )
}

export default About