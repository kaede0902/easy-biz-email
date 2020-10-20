import React, { useState } from 'react'
import { FormControl, InputLabel, Input,  } from '@material-ui/core';

import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import TextField from '@material-ui/core/TextField';

import Box from '@material-ui/core/Box';

import useCopyToClipboard from './useCopyToClipboard'

export default function NameForm() {

  const [theirName, setTheirName] = useState('人事 太郎');
  const [myName, setMyName] = useState('面接 やる太郎');
  const [theirOrg, setTheirOrg] = useState('GAFA 株式会社');
  const [myOrg, setMyOrg] = useState('すごい大学');
  const [mtgDateOne, setMtgDateOne] = useState('2020-10-01T10:30');
  const [mtgDateTwo, setMtgDateTwo] = useState('2020-10-02T10:30');
  const [mtgDateThree, setMtgDateThree] = useState('2020-10-03T10:30');


  return (
    <Container maxWidth='sm'>
    <Box my={8}>
    <div className='main'>
      <h3>面談予約定型文メーカー</h3>
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
      <Box my={1}>
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
      </Box>
      <Box my={1}>
      <TextField
        label="面接予定時間01"
        type="datetime-local"
        value={mtgDateOne}
        onChange={ e => setMtgDateOne( e.target.value ) }
      />
      </Box>
      <Box my={1}>
      <TextField
        label="面接予定時間02"
        type="datetime-local"
        value={mtgDateTwo}
        onChange={ e => setMtgDateTwo( e.target.value ) }
      />
      </Box>
      <Box my={1}>
      <TextField
        label="面接予定時間03"
        type="datetime-local"
        value={mtgDateThree}
        onChange={ e => setMtgDateThree( e.target.value ) }
      />
      </Box>

      <Box my={3}>
        <Paper elevation={3}>
          {theirOrg} {theirName} 様 <br/>
          お世話になっております <br/>
          {myOrg} {myName} です <br/>
          <br/ >
          面談の候補日ですが <br/ >
          <br/>
          {mtgDateOne} <br/>
          {mtgDateTwo} <br/>
          {mtgDateThree} <br/>
          <br/ >
          でお願い致します。
          <br/ >
          以上、よろしくお願い申し上げます。 <br/>
          {myOrg} {myName}
        </Paper>
      </Box>
      <button>THIS WILL BE COPY BTN</button>
    </div>
    </Box>
    </Container>
  )
}
