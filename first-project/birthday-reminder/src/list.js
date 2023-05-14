import React from 'react'

 function list({people}) {
  return (
    <>
   {people.map((people)=>{
    const {id,name,image,age}=people;
    return(

        <article key={id} className='person'>
           <img src={image} alt={name}/>
           <div>
            <h4>{name}</h4>
            <p>{age}years</p>
           </div>
        </article>
    
    )
   })}
    </>
  )
}

export default list


