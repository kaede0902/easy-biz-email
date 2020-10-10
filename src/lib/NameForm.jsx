import React, { useState } from 'react'
import '../styles/global.css'
export default function NameForm() {

  const [theirName, setTheirName] = useState('theirName');
  const [myName, setMyName] = useState('myName');

  const handleTheirNameOnChange = (event) => {
    setTheirName(event.target.value);
  }
  const handleMyNameOnChange = (event) => {
    setMyName(event.target.value);
  }

  return (
    <div className='main'>
      <input 
        type="text"
        value={theirName}
        onChange={handleTheirNameOnChange}
      />
      <input 
        type="text"
        value={myName}
        onChange={handleMyNameOnChange}
      />

      <div>
        output: <br/>
        お世話になっております {theirName} 様 <br/>
        HOGE 大学の {myName} です <br/>
        以上、よろしくお願い申し上げます。
        HOGE 大学 {myName}
      </div>
    </div>
  )
}
