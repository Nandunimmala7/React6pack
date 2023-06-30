import React from 'react'

const contact = () => {
  return (
   <div className="contact">
   <h1> contact us </h1>
   <form>
    <div>
        <label>name</label>
        <input type='text' required placeholder='ababa'/>
    </div>
    <div>
        <label>email</label>
        <input type='email' required placeholder='ababa@gmail.com'/>
    </div>
    <div>
        <label>message</label>
        <input type='text' required placeholder='tell us some thing'/>
    </div>
    <button type='submit'>send</button>
   </form>
   </div>
  )
}

export default contact