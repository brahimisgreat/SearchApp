import classes from  './Header.module.css'
import moon from '../assets/icon-moon.svg'

export default function Header() {
  return (
    <div className={classes.container}>
        <h3>devfinder</h3>
        <div className={classes.kidtainer}>
            <label>{'Dark'}</label>
            <img src={moon} />     
        </div>
    </div>
  )
}
