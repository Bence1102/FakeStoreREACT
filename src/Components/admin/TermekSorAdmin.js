import React, {useContext} from 'react'
import { TermekContext } from '../../Context/TermekContext' 


export default function TermekSorAdmin(props) {
    const {deleteTermek} = useContext(TermekContext)
    function torles(){
        deleteTermek(props.termek)
    }
    return (
        <tr>
            <td>{props.termek.id}</td>
            <td>{props.termek.title}</td>
            <td>{props.termek.price}</td>
            <td>{props.termek.description}</td>
            <td>{props.termek.category}</td>
            <td><img src={props.termek.image} alt={props.termek.title} style={{width:"50px"}}></img></td>
            <td><button className="bt" onClick={torles}>❌</button></td>
        </tr>

    )
}