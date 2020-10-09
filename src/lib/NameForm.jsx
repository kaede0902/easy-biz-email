import React, { useState } from 'react'
import '../styles/global.css'
export default function NameForm() {

  const [name, setName] = useState('their_name');

  const handleOnChange = (event) => {
    setName(event.target.value);
  }

  return (
    <div className='main'>
      <input 
        type="text"
        value={name}
        onChange={handleOnChange}
      />
      <div>
        output: <br/>
        お世話になっております {name} 様 <br/>
        {name} 大学の {name} です <br/>
        以上、よろしくお願い申し上げます。
        {name} 大学 {name}
      </div>
    </div>
  )
}
