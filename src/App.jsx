import { useEffect, useMemo, useState } from "react";
import "./app.css"
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/Start";
function App() {
  //Use State del Usename
  const[username, setUserName] = useState(null);
  //Use State
  const[questionNumber, setQuestionNumber] = useState(1);
  //Temporizador
  const[stop, setStop]=useState(false);
  //usestate del monto a ganar
  const[earned, setEarned] = useState("$ 0");
  //Preguntas y respuestas
  const data = [
    {
      id: 1,
      question: "Rolex es una compañia que se especializa en:",
      answers: [
        {
          text: "Celulares",
          correct: false,
        },
        {
          text: "Relojes",
          correct: true,
        },
        {
          text: "Comida",
          correct: false,
        },
        {
          text: "Cosmeticos",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "¿Cuándo se lanzó Facebook?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "¿Qué presidente de Estados Unidos fue asesinado en Dallas?",
      answers: [
        {
          text: "Abraham Lincoln",
          correct: false,
        },
        {
          text: "George Washington",
          correct: false,
        },
        {
          text: "Thomas Jefferson",
          correct: false,
        },
        {
          text: "Jonh F. Kennedy",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "¿En qué país nació Adolf Hitler?",
      answers: [
        {
          text: "Alemania",
          correct: false,
        },
        {
          text: "Austria",
          correct: true,
        },
        {
          text: "Australia",
          correct: false,
        },
        {
          text: "Francia",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "¿Cuánto duró 'La Guerra de los Cien Años'?",
      answers: [
        {
          text: "100 Años",
          correct: false,
        },
        {
          text: "106 Años",
          correct: false,
        },
        {
          text: "125 Años",
          correct: false,
        },
        {
          text: "116 Años",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "¿Cuál es el continente más extenso del planeta?",
      answers: [
        {
          text: "Oceanía",
          correct: false,
        },
        {
          text: "Asia",
          correct: true,
        },
        {
          text: "Europa",
          correct: false,
        },
        {
          text: "América",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "¿Dónde está Transilvania?",
      answers: [
        {
          text: "Rumanía",
          correct: true,
        },
        {
          text: "Italia",
          correct: false,
        },
        {
          text: "Alemania",
          correct: false,
        },
        {
          text: "Turquía",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "¿Cuántos huesos hay en el cuerpo humano? (Adulto)",
      answers: [
        {
          text: "186 Huesos",
          correct: false,
        },
        {
          text: "308 Huesos",
          correct: false,
        },
        {
          text: "206 Huesos",
          correct: true,
        },
        {
          text: "226 Huesos",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "¿En qué país se encuentra la torre de Pisa?",
      answers: [
        {
          text: "Italia",
          correct: true,
        },
        {
          text: "Francia",
          correct: false,
        },
        {
          text: "México",
          correct: false,
        },
        {
          text: "China",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "¿En qué se especializa la cartografía?",
      answers: [
        {
          text: "Ciencia que estudia la Miel",
          correct: false,
        },
        {
          text: "Ciencia que estudia el Cartón",
          correct: false,
        },
        {
          text: "Ciencia que estudia el Carbón",
          correct: false,
        },
        {
          text: "Ciencia que estudia Mapas",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "¿Cuál es tercer planeta en el sistema solar?",
      answers: [
        {
          text: "Jupiter",
          correct: false,
        },
        {
          text: "Venus",
          correct: false,
        },
        {
          text: "Tierra",
          correct: true,
        },
        {
          text: "Marte",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "¿En qué año tuvo lugar la Revolución Francesa?",
      answers: [
        {
          text: "1841",
          correct: false,
        },
        {
          text: "1759",
          correct: false,
        },
        {
          text: "1789",
          correct: true,
        },
        {
          text: "1920",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "¿En qué año llegó el ser humano a la Luna?",
      answers: [
        {
          text: "1980",
          correct: false,
        },
        {
          text: "1969",
          correct: true,
        },
        {
          text: "1927",
          correct: false,
        },
        {
          text: "1958",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "¿Quién fue Magic Johnson?",
      answers: [
        {
          text: "Jugador profesional de Golf",
          correct: false,
        },
        {
          text: "Jugador profesional de Baloncesto",
          correct: true,
        },
        {
          text: "Jugador profesional de Beisbol",
          correct: false,
        },
        {
          text: "Jugador profesional de Tennis",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: "¿Cómo se llama la energía contenida en el núcleo de los átomos?",
      answers: [
        {
          text: "Energía nuclear",
          correct: true,
        },
        {
          text: "Energía química",
          correct: false,
        },
        {
          text: "Energía térmica",
          correct: false,
        },
        {
          text: "Energía eléctrica",
          correct: false,
        },
      ],
    },
  ];
  const moneyPyramid = useMemo(()=>//Investigar  "useMemo"
    [
      {id:1, amount:"$ 100"},
      {id:2, amount:"$ 200"},
      {id:3, amount:"$ 300"},
      {id:4, amount:"$ 500"},
      {id:5, amount:"$ 1000"},
      {id:6, amount:"$ 2000"},
      {id:7, amount:"$ 4000"},
      {id:8, amount:"$ 8000"},
      {id:9, amount:"$ 16000"},
      {id:10, amount:"$ 32000"},
      {id:11, amount:"$ 64000"},
      {id:12, amount:"$ 125000"},
      {id:13, amount:"$ 250000"},
      {id:14, amount:"$ 500000"},
      {id:15, amount:"$ 1000000"},
    ].reverse(),
    []
    );

  useEffect(()=>{//Utilizamos el useEffect para poder setear nuestro setEarned que es nuestra variable de dinero ganado
    //Validación si questionNumber es > 1 le indicamos que haga un "foreach" llamado .find en nuestro array y nos devuelva el dinero que se ganó
    questionNumber > 1 && setEarned(moneyPyramid.find(m=> m.id === questionNumber -1).amount);
  },[moneyPyramid, questionNumber])
  return (
    <div className="app">
      {username ? (
        //Primer Fragment
        <>
        <div className="main">
          {stop ? (
          <h1 className="endText">Haz ganado: {earned} </h1>//Se utilizan Fragments para quitar los divs y posicionar el h1
          ): (
            <>
            <div className="top">
              <div className="timer">
                <Timer
                setStop={setStop}
                questionNumber={questionNumber}
                />
                </div>
            </div>
            <div className="bottom">
              <Trivia /*A nuestro componente Trivia le pasamos "Data" y el índice de la pregunta, lo demás es Setear el número de la pregunta */
              data={data}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
              setStop={setStop}
              />
            </div>
            </>
          )}
        </div>
        <div className="pyramid">
          <ul className="MoneyList">
            <div className="logo"></div>
            <div className="tittle">
              <h2 className="username">Nombre: {username}</h2>
            </div>
            {moneyPyramid.map((m)=>(//Se hace un mapeo de la lista y se inserta en el html
              <li className={questionNumber === m.id ? "MoneyListItem active" : "MoneyListItem"}>
              <span className="MoneyListItemNumber">{m.id}</span>
              <span className="MoneyListItemAmount">{m.amount}</span>
            </li>
            ))}
          </ul>
        </div>
        </>
      ) : <Start setUserName={setUserName}/>}
    </div>
  );
}

export default App;
