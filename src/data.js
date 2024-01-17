import axios from "axios";

export async function fetchUsers() {
 axios.get('https://api.github.com/users')
  .then(response => {
    console.log(response.data[1]);
  }, error =>{
    console.log(error)
  }
  )
}
