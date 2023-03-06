import { useEffect, useState } from "react"

export default function Trivia({
    data,
    questionNumber,
    setQuestionNumber,
    setStop,
}){
    //Use state de las preguntas y las respuestas (Sirve para sacar la información del array que "Data")
    const[question,setQuestion] = useState(null);
    //Use state de seleccionar una respuesta
    const[selectAnswer, setSelectAnswer] = useState(null);
    //Use state de seleccionar una respuesta deshabilitar
    const[disabled, setDisabled] = useState(false);
    //Use state para cambiar la clase
    const[className, setClassName] = useState("answer");
    //Función de timeout
    const delay = (duration,callback) =>{
        setTimeout(() =>{
            callback();
        }, duration);
    };
    //Función del evento click para cambiar la clase y validar si la respuesta es correcta
    const handleClick=(a)=>{
        setDisabled(true);
        setSelectAnswer(a);
        setClassName("answer active");/*Al seleccionar le pasa el parametro "a" a la función*/
        delay(3000, ()=>setClassName(a.correct ? "answer correct" : "answer wrong"));
        //Validación para pasar a la siguiente pregunta
        delay(6000, ()=>{
            if(a.correct){//Si a es correcto envíame a la siguiente pregunta
                setQuestionNumber(prev => prev + 1);
                setSelectAnswer(null);
                setDisabled(false);
            }else{//Sinno setStop es verdadero y termina el juego
                setStop(true);
            }
            if(questionNumber>14){//Se termina el juego si llega a la pregunta 15
                setStop(true);
            }
        });
    }
    useEffect(()=>{
        setQuestion(data[questionNumber -1])//Agrega la posición 0 del array llamado "Data"
    },[data, questionNumber]/*Estas son las dependencias*/)
    return(
        <div className="trivia">
            <div className="question">{question?.question/*Pregunta si existe alguna pregunta dentro del array en dado caso que sí, rellena con el primer índice*/}</div>
            <div className="answers">
                {question?.answers.map((a)=>/*Hacemos un .map del subarray llamado "answers" y le damos el texto*/
                    <div disabled={disabled} className={selectAnswer === a ? className : "answer"} onClick={()=>handleClick(a)}>{a.text}</div>
                )}
            </div>
        </div>
    )
}