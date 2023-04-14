import './App.css';
import {useState, useEffect} from 'react'
import Form from './components/Form'


export default function App() {
  const [cardNum, setCardNum] = useState('')

  const isValid = (cardNum) =>{
    let split = String(cardNum).split('')
    let newNum = 0

    for (let i = split.length - 2; i >= 0; i--) {
        split[i] = split[i] * 2
        newNum += split[i]
    }

    if (newNum % 10 === 0) {
        return true
    } else {
        return false
    }
}

  useEffect(() => {
  isValid('1234567890', [])
}) 
  

  return (
    <div className="App">
      <Form
        cardNum ={setCardNum}
        isValid = {isValid}
      />

      
    </div>
  );
}

