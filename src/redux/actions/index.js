// actions/index.js

export const GET_SALE = "GET_SALE";
export const GET_SEARCH = "GET_SEARCH";
export const LOGGED_IN = "LOGGED_IN";
export const LOGGED_OUT = "LOGGED_OUT";

// action 

// metodo per inserire la query di ricerca nello stato globale
export const getSearchingFieldAction = (query) => ({ type: GET_SEARCH, payload: query })

// actions per gestire il login
// export const isLoggedInAction = (userData) => ({ type: LOGGED_IN, payload: userData })
export const isLoggedOutAction = () => ({ type: LOGGED_OUT })


// fetch per prendere le sale con action creator

export const getSale = (searchQuery) => {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3001/sale");
            if (response.ok) {
                const saleData = await response.json();

                const filteredSaleData = filterSale(searchQuery, saleData.content)

                if (filteredSaleData) {

                    dispatch({ type: GET_SALE, payload: filteredSaleData });

                    // alert("fetch delle sale effettuato!")

                    console.log("sale prove trovate", filteredSaleData)
                } else {
                    alert("nessuna sala trovata!")
                }
            } else {
                console.error("Errore durante la fetch delle sale");
            }
        } catch (error) {
            console.error("Errore nella fetch:", error);
        }
    };
};


function filterSale(searchQuery, sale) {

    const searchLowerCase = searchQuery.toLowerCase();

    const filteredSale = sale.filter(sala =>
        sala.nomeSala.toLowerCase().includes(searchLowerCase) ||
        sala.comune.toLowerCase().includes(searchLowerCase) ||
        sala.regione.toLowerCase().includes(searchLowerCase) ||
        sala.cap.toLowerCase().includes(searchLowerCase)
    );

    return filteredSale;

}



// fetch che prende il token ed estrapola tutti i dati di chi è loggato

export const isLoggedInAction = (token) => {
    return async (dispatch) => {
        try {

            //salviamo il token nel localstorage
            localStorage.setItem("token", token)

            const resp = await fetch("http://localhost:3001/utenti/me", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            })

            if (resp.ok) {
                const userData = await resp.json();
                localStorage.setItem("user", JSON.stringify(userData))
                console.log(token)
                dispatch({ type: LOGGED_IN, payload: { userData, token } })
            } else {
                console.error("Errore nel fetch dei dati utente")
            }


        } catch (error) {
            console.error("Errore nella richiesta di login: ", error)
        }
    }
}