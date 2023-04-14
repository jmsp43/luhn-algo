import React from 'react'
import {useState} from 'react'

const Form = (props) => {
    const [formInfo, setFormInfo] = useState({
        num:''
    })

  const handleChange = (event) => {
    setFormInfo({ ...formInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.isValid(formInfo.num);
  };
    
    
  let msg = 'empty'

  if (props.isValid(formInfo.num) == true) {
      msg = 'card is valid'
  } else {
      msg= 'invalid, try another number'
  }
    
    
    

  return (
    <div>
          <form onSubmit = {handleSubmit}>
              <input
                  type='text'
                  name='num'
                  placeholder = '1234567890'
                  onChange={handleChange}
                  value = {formInfo.num}
              ></input>
              <button onClick = {handleSubmit}>Submit</button>
          </form>
          <div>{msg}</div>
      </div>
  )
}
export default Form