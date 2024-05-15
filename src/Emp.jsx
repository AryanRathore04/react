import React from 'react'
import App from './App';

const Emp  = () => {
    const office = { 
        Google: 5000000,
        Facebook: 3000000,
        Amazon: 2000000,
        Microsoft: 1500000,
        Apple: 1000000,

    }
    const { Google, Facebook, Amazon, Microsoft, Apple } = office;  
  return (
    <>
    <div>Most succesfull companies</div>
    <ul>
        <li>{Google}</li>
        <li>{Facebook}</li>
        <li>{Amazon}</li>
        <li>{Microsoft}</li>
        <li>{Apple}</li>
    </ul>
    </>
  )
}

export default Emp

