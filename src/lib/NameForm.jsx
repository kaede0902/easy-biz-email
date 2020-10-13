import React, { useState } from 'react'
import { FormControl, InputLabel, Input,  } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import Box from '@material-ui/core/Box';

export default function NameForm() {

  const [theirName, setTheirName] = useState('theirName');
  const [myName, setMyName] = useState('myName');


  return (
    <Container maxWidth='sm'>
    <Box my={8}>
    <div className='main'>
      <FormControl >
        <InputLabel htmlFor="my-input">相手の名前</InputLabel>
        <Input 
          id="my-input" 
          aria-describedby="my-helper-text" 
          value={theirName}
          onChange={ e => setTheirName( e.target.value ) }
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">自分の名前</InputLabel>
        <Input 
          id="my-input" 
          aria-describedby="my-helper-text" 
          value={myName}
          onChange={ e => setMyName( e.target.value ) }
        />
      </FormControl>

      <div>
        <Paper elevation={3}>
          なんとか株式会社 {theirName} 様 <br/>
          お世話になっております <br/>
          どっか 大学の {myName} です <br/>

          面談はあの日でよろしくお願い申し上げます。 <br/>

          以上、よろしくお願い申し上げます。 <br/>
          どっか 大学 {myName}
        </Paper>
      </div>
    </div>
    </Box>
    </Container>
  )
}
