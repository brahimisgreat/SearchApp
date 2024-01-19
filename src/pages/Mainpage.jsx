import Body from '../components/Body'
import Header from '../components/Header'
import Searchbar from '../components/searchbar'
import { useState, useEffect } from 'react'

export default function Mainpage() {

  const [user, setUser] = useState([])
  const [username, setUsername] =useState('octacat')
  
  useEffect(() => {
    async function fetchData () {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`)
        const result = await response.json();
        setUser(result)
        console.log(result)
        console.log(user)
      }  catch (error) {
        console.log(error)
      }
    }
    fetchData()
  },[])
  
  return (
    <div>
      <Header />
      <Searchbar setUsername={setUsername} username={username}/>
      <Body  data={user}/>
    </div>
  )
}
