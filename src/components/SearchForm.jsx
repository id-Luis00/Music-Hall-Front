import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSearchingFieldAction } from "../redux/actions";




const SearchForm = () => {

    // i valori dell'input li mandiamo allo stato globale che tiene traccia di quello che si sta cercando

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [query, setQuery] = useState("");


    const handleSubmit = (event) => {
        // submit che prende i dati in ingresso e li invia allo stato globale
        event.preventDefault();
        dispatch(getSearchingFieldAction(query))
        //dispatch(getSale(query))
        navigate(`/results/${query}`)
    }


    // creare un form per cercare la sala che si vuole. Indicando la zona dove si vuole cercare la sala x

    return (
        <Form className="rounded-3 mt-5 bg-light d-flex w-100 ms-auto" onSubmit={handleSubmit}>
            <Form.Control
                className="bg-transparent border-0"
                type="text"
                placeholder="Cerca qui la tua sala..."
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <Button variant="transparent" className="text-dark" type="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
            </Button>
        </Form>
    )
}


export default SearchForm;