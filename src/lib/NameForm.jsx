import React, { useState } from 'react'
import '../styles/global.css'
import { FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';

export default function NameForm() {

  const [theirName, setTheirName] = useState('theirName');
  const [myName, setMyName] = useState('myName');


  return (
    <div className='main'>
      <FormControl>
        <InputLabel htmlFor="my-input">相手の名前</InputLabel>
        <Input 
          id="my-input" 
          aria-describedby="my-helper-text" 
          value={theirName}
          onChange={ e => setTheirName( e.target.value ) }
        />
        <FormHelperText id="my-helper-text">相手の名前を入れてね</FormHelperText>
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">自分の名前</InputLabel>
        <Input 
          id="my-input" 
          aria-describedby="my-helper-text" 
          value={myName}
          onChange={ e => setMyName( e.target.value ) }
        />
        <FormHelperText id="my-helper-text">自分の名前を入れてね</FormHelperText>
      </FormControl>

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
