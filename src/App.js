import React from 'react';
import NameForm from './lib/NameForm'
import Button from '@material-ui/core/Button';

function App() {
  return (
    <div>
      <Button variant='contained' color='secondary'>PRESS ME</Button>
      <Button >PRESS ME</Button>
      <NameForm/>
    </div>
  );
}

export default App;
