import React from "react";
import './calculator.css';

export default class Calculator extends React.Component {
  render() {
    document.body.style.backgroundColor = '#cbcbcb';
    return (
      <div className={'center calculatorBase'}>
        <input maxLength={10} className={'inputBase'} /*type={'search'}*//><br/>
        <button className={'pad number'}>7</button>
        <button className={'pad number'}>8</button>
        <button className={'pad number'}>9</button>
        <button className={'pad simbol'}>x</button>
        <button className={'pad number'}>4</button>
        <button className={'pad number'}>5</button>
        <button className={'pad number'}>6</button>
        <button className={'pad simbol'}>+</button>
        <button className={'pad number'}>1</button>
        <button className={'pad number'}>2</button>
        <button className={'pad number'}>3</button>
        <button className={'pad simbol'}>-</button>
        <button className={'pad number'}>+/-</button>
        <button className={'pad number'}>0</button>
        <button className={'pad number'}>,</button>
        <button className={'pad simbol'}>=</button>
      </div>
    )
  }
}