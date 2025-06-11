'use client';
import { useState } from 'react';
import { Button } from '../components/ui/Button';

export default function Home() {

  const [counter, setCounter] = useState(0);

  function incrementCounter(){
    setCounter(counter + 1);
    console.log("el contador es: ",counter)
  }
  function decrementCounter(){
    setCounter(counter - 1);
    console.log("el contador es: ",counter)
  }

  return (
      <div className="h-screen flex flex-col items-center justify-center text-gray-900 dark:text-white">
        <h1 className="text-[12rem] leading-none">Hola Tanque</h1> {/* leading-none elimina espacio entre líneas */}
        <p className="text-[6rem]">El contador es: {counter}</p>
        <form className="max-w-sm mx-auto">
          <label htmlFor="number-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a number:</label>
          <input onSubmit={ ev =>{ev.preventDefault();console.log(ev.currentTarget.value)}} type="number" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xxxxxxx" required />
        </form  >
        <Button variant="danger" size="md" onClick={incrementCounter} >
        +
        </Button>
        <Button variant="danger" size="md" onClick={decrementCounter} >
        -
        </Button>
      </div>
      
  );
}
