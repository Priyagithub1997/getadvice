

import { useState } from "react";
import Getadvice from "./Getadvice";
import Getlocaladvice from "./Getlocaladvice";

function App() {
  const [advice, setadvice] = useState("")
  const [iteration, setiteration] = useState(0);
  const [count, setcount] = useState(0);
  const [localadvice, setlocaladvice] = useState("")
  const [localiteration, setlocaliteration] = useState(0);
  const [localcount, setlocalcount] = useState(0);
  const getAdvice = async () => {
    try {
      const URL = "https://jsonplaceholder.typicode.com/posts";
      const advice = await fetch(URL);
      const data = await advice.json();
      setadvice(data[iteration].title);
      setiteration((iteration) => iteration + 1);
      setcount((count) => count + 1);


    }
    catch (error) {
      console.log("Error:", error);

    }



  }


  const getlocalAdvice = async () => {
    try {
      const URL = "http://localhost:3500/posts";
      const advice = await fetch(URL);
      const data = await advice.json();
      setlocaladvice(data[localiteration].title);
      setlocaliteration((localiteration) => localiteration + 1);
      setlocalcount((localcount) => localcount + 1);


    }
    catch (error) {
      console.log("Error:", error);

    }



  }


  return (

    <>
    



  
   <Getadvice
        advice={advice}
        getAdvice={getAdvice}
        count={count}


      />

      <Getlocaladvice
        localadvice={localadvice}
        getlocalAdvice={getlocalAdvice}
        localcount={localcount}

      />

    </>
  )
}

export default App
