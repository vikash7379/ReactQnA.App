import React, {useState} from 'react'
import { questions } from './api';
import MyAccordian from './MyAccordian';

const App = () => {

  const [data,setData] = useState(questions);

  return (
    <>

      <section className='parent'>
      <br></br>
      <h1 className='header'>React Top 10 Interview Question</h1>
      {
        data.map((currElem)=>{
          const {id} = currElem;
            return <MyAccordian key={id} {...currElem}/>;
        })
      }
      </section>
    </>
  )
}

export default App;
