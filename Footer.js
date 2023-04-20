import React from 'react'
import { Grid } from '@mui/material'
import Styles from './Style.css'

function Footer() {
  return (
    <div id='footer' style={{backgroundColor:"rgb(179, 239, 178)", marginTop:"-2%", paddingLeft:"2%"}}>
        <hr style={{ color:"black"}}/>
          <Grid item><p style={{fontSize:"xx-large", paddingBottom:"0.7%", marginBottom:"-0.07%", marginRight:"10%"}}>Quote Generator</p></Grid>
        <Grid container spacing={5} style={{marginRight:"8%"}}>
          <Grid item><p>Terms of Service</p></Grid>
          <Grid item><p>Privacy</p></Grid>
          <Grid item><p>Contact : abc@gmail.com</p></Grid>
        </Grid>
    </div>
  )
}

export default Footer