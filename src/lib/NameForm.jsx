import React, { useState } from 'react'
import { FormControl, InputLabel, Input,  } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import Box from '@material-ui/core/Box';

export default function NameForm() {

  const [theirName, setTheirName] = useState('theirName');
  const [myName, setMyName] = useState('myName');
  const [theirOrg, setTheirOrg] = useState('theirOrg');
  const [myOrg, setMyOrg] = useState('myOrg');


  return (
    <Container maxWidth='sm'>
    <Box my={8}>
    <div className='main'>
      <FormControl >
        <InputLabel htmlFor="my-input">相手の名前</InputLabel>
        <Input 
          value={theirName}
          onChange={ e => setTheirName( e.target.value ) }
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">自分の名前</InputLabel>
        <Input 
          value={myName}
          onChange={ e => setMyName( e.target.value ) }
        />
      </FormControl>
      <FormControl >
        <InputLabel htmlFor="my-input">相手の組織</InputLabel>
        <Input 
          value={theirOrg}
          onChange={ e => setTheirOrg( e.target.value ) }
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">自分の組織</InputLabel>
        <Input 
          value={myOrg}
          onChange={ e => setMyOrg( e.target.value ) }
        />
      </FormControl>

      <div>
        <Paper elevation={3}>
          {theirOrg} {theirName} 様 <br/>
          お世話になっております <br/>
          {myOrg}の {myName} です <br/>
          <br/ >
          <br/ >
          面談はあの日でよろしくお願い申し上げます。 <br/>
          <br/ >
          以上、よろしくお願い申し上げます。 <br/>
          {myOrg} {myName}
        </Paper>
      </div>
    </div>
    </Box>
    </Container>
  )
}
