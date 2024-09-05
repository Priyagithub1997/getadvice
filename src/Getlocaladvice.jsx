import React from 'react'



const Getlocaladvice = ({localadvice,getlocalAdvice,localcount}) => {
  return (
   <>
    <div>
    <h1>{localadvice}</h1>
    <button onClick={getlocalAdvice}>Click to get local Advice</button>
  
    <p>{localcount=== 1 ? ` ${localcount} st Advice`:localcount=== 2 ? `${localcount} nd Advice` :localcount=== 3 ? ` ${localcount}rd Advice`:`${localcount} th Advice`}</p>

    </div>
   </>
  )
}

export default Getlocaladvice