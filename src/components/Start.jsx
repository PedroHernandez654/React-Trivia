import { useRef,useState } from "react"

export default function Start({setUserName}){
    const inputRef = useRef();
    const[className, setClassName] = useState("Incorrecto no");
    const handleClick=()=>{
        if(inputRef.current.value === ""){
            setClassName("Incorrecto")
        }
        inputRef.current.value && setUserName(inputRef.current.value);
    }
    return(
        <div className="start">
            <label className="user"></label>
            <h2 htmlFor="Nombre">Nombre de usuario:</h2>
            <input type="text" placeholder="Ingresa tu Nombre..." className="startInput" name="Nombre" ref={inputRef} required/>
            <label className={className}>Ingrese su nombre</label>
            <button className="startButton" onClick={handleClick} type="submit">Empezar</button>
        </div>
    )
}