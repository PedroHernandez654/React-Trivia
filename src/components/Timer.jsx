import { useEffect, useState } from "react";

export default function Timer({setStop, questionNumber}){
    //Temporizador
    const [timer, setTimer] = useState(30);
    
    useEffect(()=>{
        //Si el contador llega a 0 que pare el juego
        if(timer === 0) return setStop(true);
        //Contador en sí
        const interval = setInterval(()=>{
            setTimer((prev) => prev - 1);
        },1000);//Esto limpia el intervalo para que logre funcionar correctamente
        return() => clearInterval(interval)
    },[setStop, timer]);
    useEffect(()=>{
        //En dado caso que el questionNumber cambie seteara el Timer en 30 seggundos
        setTimer(30);
    },[questionNumber])
    return timer
}