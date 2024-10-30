

import BoxDetailsLeft from "./BoxDetailsLeft";
import BoxDetailsRight from "./BoxDetailsRight";



const AboutMe = () => {

    const testoUno = `L'idea che c'è dietro al sito è molto semplice.
Come dicevo nella sezione dedicata a me, il sito punta 
a dare degli strumenti validi ai musicisti, come può essere quello
di cercare immediatamente una sala prove o di registrazione`

    const testoDue = `Gli strumenti e le funzionalità del sito non vogliono fermarsi al solo
cercare una sala. Verranno implementate altre funzionalità nel tempo,
come può essere :
- poter prenotare direttamente dalla pagina della sala
- mettere in contatto i vari musicisti
- creare delle bacheche da pubblicare per cercare membri per la 
   propria band`

    const testoTre = `Questo sito non sarebbe un luogo dove poter
cercare una sala, se non ci fossero le sale.
Ed è per questo che è possibile creare il proprio 
                                profilo da proprietario e pubblicare le proprie sale. Che tu abbia 
adoperato il tuo garage o la tua scuola, qui troverai lo spazio per 
pubblicare subito la/e tua/e sala/e `
    return (
        <>

            <BoxDetailsLeft title={"L'idea del sito"} desc={testoUno} img={""} />

            <BoxDetailsRight title={"Il futuro del sito"} desc={testoDue} img={""} />

            <BoxDetailsLeft title={"Non solo musicisti"} desc={testoTre} img={""} />

        </>
    )
}

export default AboutMe;