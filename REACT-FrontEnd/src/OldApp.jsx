import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello'
import Contact from './Contact'
import Counter from './Counter'

function App() {
  const helloDate = [
    { name: 'Anirach', message: 'Hi there' },
    { name: 'Tom', message: 'Hello..'}
  ];

  return (
    <div className='App'>
      <Counter></Counter>
      {helloDate.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}

      <Contact email="Anirach@gmail.com" phone ="0817320548" />
    </div>
  );
}

export default App;
