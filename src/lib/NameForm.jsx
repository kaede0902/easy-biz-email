import React, { useState } from 'react'
import '../styles/global.css'
export default function NameForm() {

  const [theirName, setTheirName] = useState('theirName');
  const [myName, setMyName] = useState('myName');


  return (
    <div className='main'>
      <input 
        type="text"
        value={theirName}
        onChange={ e => setTheirName( e.target.value ) }
      />
      <input 
        type="text"
        value={myName}
        onChange={ e => setMyName( e.target.value ) }
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
