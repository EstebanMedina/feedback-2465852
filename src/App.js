import Header from "./componentes/Header";
import FeedbackItem from "./componentes/FeedBackItem";

function App(){

    //objeto de estilos:
    const HeaderStyles = {
        backgroundColor: '	#0000FF',
        color: 'white'
    }
    return (
        <div className="container">
            { /* props: atributos de etiqueta de un componente*/ }
            <Header 
            bgColor={HeaderStyles.backgroundColor}
            color={Header.color} />
            <FeedbackItem/>
            <FeedbackItem/>
            <FeedbackItem/>
            <FeedbackItem/>
        </div>    
    )
}

export default App;