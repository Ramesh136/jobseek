import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const fetchData = ()=>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const body = JSON.stringify({
      limit: 10,
      offset: 1,
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body,
    };

    fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
      .then(async (response) => {
        // response.json()
        console.log(await response.json())
      })
      .catch((error) => console.error(error));
  }

    useEffect(()=>{
      fetchData()
    },[])
  return 
}

export default App
