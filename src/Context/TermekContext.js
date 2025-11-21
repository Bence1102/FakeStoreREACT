import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const TermekContext = createContext("")
export const TermekProvider = ({ children }) => {

    const [termekLista, setTermekLista] = useState([])

    function getTermekek() {
        axios.get('https://fakestoreapi.com/products')
            .then(function (response) {
                // handle success
                console.log(response.data);
                setTermekLista(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    function deleteTermek(adat) {
        console.log(adat)
        axios.get('https://fakestoreapi.com/products' + "/" + adat.id)
            .then(function (response) {

                console.log(response.data);
                setTermekLista(prevLista => prevLista.filter(termek => termek.id !== adat.id));
            })
            .catch(function (error) {
                console.log(error);
            })
    }

   function postTermek(adat) {
    console.log(adat)
    axios.post('https://fakestoreapi.com/products', adat)
        .then(response => {
            console.log("Post Válasz",response.data);
            setTermekLista(prev=>[...prev, response.data]);
        })
        .catch(error => {
            console.log(error);
        });
}


    useEffect(() => {
        getTermekek()
    }, [])

    return <TermekContext.Provider value={{ termekLista, deleteTermek,postTermek }}>
        {children}
    </TermekContext.Provider>
}


