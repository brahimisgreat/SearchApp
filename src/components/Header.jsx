import classes from  './Header.module.css'
import moon from '../assets/icon-moon.svg'

export default function Header() {

function Click () {
console.log()
}

  return (
    <div className={classes.container}>
        <h3>devfinder</h3>
        <div className={classes.kidtainer}>
            <button onClick={Click} >{'Dark'}</button>
            <img src={moon} />     
        </div>
    </div>
  )
}
