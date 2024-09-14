import { useState } from 'react'
import { Container, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [submit, submitted] = useState('primary');
  const Click = (event) => {
    const target =  document.getElementById(event.target.id);
    if(true){
      submitted('success');
      target.textContent = "Submitted";
      target.disabled = true;
      target.setAttribute('variant', 'primary');
    }
  };

  return (
    <>
     <Container fluid className='mt-3'>
        <Button variant={submit} id='button' onClick={Click}>Submit</Button>
     </Container>
    </>
  )
}

export default App
