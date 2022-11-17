import { useState } from "react"

const FeedbackItem = () => {
    //Estados: presisten información a traves del ciclo de vida 
    //de un unico componente
    
    //estados iniciales
    const [rating, setRating] = useState(2)
    const [text, setText] = useState("Mejorar Curso, mejores recursos")

     const addNota=()=>{
        //cambiar estado a rating 
        //parametro para el valor anterior 
        setRating((prev)=>{
            return prev +1
        })
     }
     const restarNota=()=>{
        //cambiar estado a rating 
        //parametro para el valor anterior 
        setRating((prev)=>{
            return prev -1
        })
    }

    return (
        <div className="card">
            <div className="num-display">
                {  rating }
            </div>
            <div className="text-display">
                {text}
            </div>
            <button className="btn" onClick={addNota}>
                Sumar nota
            </button>
            <button className="btn" onClick={restarNota}>
                Disminuir nota
            </button>
        </div>
    )
}


export default FeedbackItem