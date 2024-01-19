import icon from "../assets/icon-search.svg"
import classes from './searchbar.module.css'
import { useState, useEffect } from "react"

export default function Searchbar({setUsername, username}) {

 const [words, setWords] = useState('')

function handleClick() {
 setUsername(username)
 console.log(username)
  
}

  return (
    <div className={classes.container}>
        <img src={icon} />
        <input type="text" placeholder="Search GitHub username…"  value={username} onChange={(e) => setUsername(e.target.value)}></input>
        <button onClick={handleClick} >Search</button>
    </div>
  )
  }