import React from 'react'


const Getadvice = ({advice,getAdvice,count}) => {
  return (
    <>
  <div>
    <h1>{advice}</h1>
    <button onClick={getAdvice}>Click to get dummy Advice</button>
  
    <p>{count=== 1 ? ` ${count} st Advice`:count=== 2 ? `${count} nd Advice` :count=== 3 ? ` ${count}rd Advice`:`${count} th Advice`}</p>
    </div>
    </>
   
  )
}

export default Getadvice