import BoxDetailsLeft from "./BoxDetailsLeft";
import BoxDetailsRight from "./BoxDetailsRight";



const AboutMe = () => {

    const testoUno = `Salve,
Benvenuti nel sito Music-Hall!
Mi presento, io sono Luis e sono lo sviluppatore di questo sito.
Il mio obiettivo primario e dare strumenti utili a tutti i musicisti che, 
come me al  tempo, sono alla ricerca di una sala dove provare`

    const testoDue = `Io sono un batterista da ormai 10 anni, iniziato come autodidatta con 
la passione per il mondo del metal; poi ho avuto modo di accrescere le
mie conoscenze in ambito musicale attraverso lo studio.
Oltre alla passione per la musica, ho sempre avuto una grande 
curiosità verso la programmazione e l'informatica`

    const testoTre = `Questo sito nasce come progetto finale per il corso 
effettuato presso EPICODE.
Un'accademia che mi ha dato molto: l'impegno e la formazione nella
programmazione web, permettendomi di raggiungere
traguardi che non avrei creduto possibili e rendendomi orgolioso di me 
stesso. La mia curiosità non ha fatto altro che crescere, quindi cercherò 
di migliorare sempre di più`
    return (
        <>

            <BoxDetailsRight title={"Un po' di me"} desc={testoUno} img={""} />

            <BoxDetailsLeft title={"Chi sono?"} desc={testoDue} img={"../../public/MeOnDrums.jpeg"} />

            <BoxDetailsRight title={"Perché questo sito?"} desc={testoTre} img={""} />

        </>
    )
}

export default AboutMe;