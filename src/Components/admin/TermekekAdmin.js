import React, {useContext} from 'react'
import { TermekContext } from '../../Context/TermekContext' 
import TermekSorAdmin from './TermekSorAdmin'

export default function TermekekAdmin(){
    const {termekLista} = useContext(TermekContext)
    return(
        <div className="table-responsive">
            <table className="table- tablqe-striped">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Név</th>
                        <th>Ár</th>
                        <th>Leírás</th>
                        <th>Kategória</th>
                        <th>Kép</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        termekLista.map((termek)=>{
                            return<TermekSorAdmin termek={termek} key={termek.id} />
                        }
                        )
                    }                   
                </tbody>
            </table>
        </div>
    )
}