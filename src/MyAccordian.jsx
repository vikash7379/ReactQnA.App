import React from 'react'
import { useState } from 'react'

const MyAccordian = ({question,answer}) =>{

    const [show,setShow] = useState(false)



    return (
        <>
            <div className='main-heading'>
            <div className='quesbox'>
            <span onClick={() => setShow(!show)}>{show ? "➖" : "➕" }</span>
                <h3>{question}</h3>
            </div>
            {show &&  <p className='answer'>{answer}</p>}
            </div>

        </>
  )
}

export default MyAccordian