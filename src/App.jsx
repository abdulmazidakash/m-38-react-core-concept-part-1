import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'

function App() {

  return (
    <>
      <h1>Vite + React</h1>
      <Todo 
      task='learn react' 
      isDone='true'></Todo>
      
      <Todo 
      task='Explore core concept' 
      isDone='false'></Todo>
      
      <Todo 
      task='try jsx' 
      isDone='true'></Todo>

    {/* <Device name='laptop' price='55'></Device>
    <Device name='mobile' price='17'></Device>
    <Device name='watch' price='3'></Device>
     <Person></Person>
     <Student grade='7' score='99'></Student>
     <Student grade={12} score='85'></Student>
     <Student></Student>
     <Developer></Developer> */}

    </>
  )
}

function Device(props){
  // console.log(props);
  // eslint-disable-next-line react/prop-types
  return <h2>This device: {props.name} price: {props.price}</h2>
}

function Person(){

  const age = 23;
  const money = 20;
  const person = {name: 'sakib', age: 23}
  return <h3> I am a {person.name} with age: {age + money} </h3>
}

const {grade, score} = {grade: '7', score: '99'};

function Student({grade=1, score}){
  console.log(grade, score);
  return (
  <div className='student'>
    <h3>This is a student</h3>
    <p>class: {grade}</p>
    <p>score: {score}</p>
  </div>
  )
}

function Developer(){

  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '20px'
  }
  return (
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>Coding: </p>
    </div>
  )
}


export default App
