import { useEffect } from "react";

export default function Data () {
    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch('https://api.github.com/users');
                const result = await response.json();
            }
        }
    })
}