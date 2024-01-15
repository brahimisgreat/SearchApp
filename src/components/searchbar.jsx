import icon from "../assets/icon-search.svg"
import classes from './searchbar.module.css'

export default function Searchbar() {
  return (
    <div className={classes.container}>
        <img src={icon} />
        <input type="text" placeholder="Search GitHub username…"></input>
        <button>Search</button>
    </div>
  )
  }