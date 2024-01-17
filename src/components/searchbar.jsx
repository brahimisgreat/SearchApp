import icon from "../assets/icon-search.svg"
import classes from './searchbar.module.css'
import { useState, useEffect } from "react"

export default function Searchbar() {

 const [words, setWords] = useState('')
 console.log(words)

function handleClick() {
  
  
}

  return (
    <div className={classes.container}>
        <img src={icon} />
        <input type="text" placeholder="Search GitHub username…"  value={words} onChange={(e) => setWords(e.target.value)}></input>
        <button onClick={handleClick()}>Search</button>
    </div>
  )
  }