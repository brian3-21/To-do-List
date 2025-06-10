'use client';

export default function Home() {

  let counter = 0;

  function incrementCounter(){
     counter++;
     console.log("el contador es: ",counter)
  }

  return (
      <div className="h-screen flex flex-col items-center justify-center text-gray-900 dark:text-white">
        <h1 className="text-[12rem] leading-none">Hola Tanque</h1> {/* leading-none elimina espacio entre líneas */}
        <p className="text-[6rem]">El contador es: {counter}</p>
      <button 
        onClick={incrementCounter}
        type="button" 
        className="
          text-4xl                      /* Texto XL */
          w-16 h-16                     /* Tamaño grande */
          ml-4                          /* Margen izquierdo */
          text-blue-600                 /* Color azul claro */
          hover:bg-blue-600             /* Hover azul */
          hover:text-white              /* Texto blanco en hover */
          dark:text-blue-400            /* Azul claro en oscuro */
          dark:hover:bg-blue-500        /* Hover azul oscuro */
          dark:hover:text-white         /* Texto blanco en oscuro */
          border-2                      /* Borde más grueso */
          border-blue-600               /* Borde azul */
          dark:border-blue-400          /* Borde azul oscuro */
          rounded-full                  /* Forma circular */
          flex                          /* Flex para centrar */
          items-center                  /* Centrado vertical */
          justify-center                /* Centrado horizontal */
          transition-colors             /* Transición suave */
          duration-300                  /* Duración transición */
          focus:outline-none            /* Elimina outline */
          focus:ring-4                  /* Anillo de enfoque */
          focus:ring-blue-300           /* Color anillo */
          dark:focus:ring-blue-800      /* Anillo oscuro */
        ">
        +
      </button>
      </div>
  );
}
