import React, { useState } from 'react'
import { useContext } from 'react'
import { TermekContext } from '../../Context/TermekContext';

export default function TermekUrlap() {
    const [urlapAdat, setUrlapAdat] = useState(
        {
            title: "",
            price: "",
            description: "",
            category: "",
            image: ""
        });
    const { postTermek } = useContext(TermekContext)
    function mezovalt(event) {
        let kulcs = event.target.id
        let ertek = event.target.value
        setUrlapAdat({ ...urlapAdat, [kulcs]: ertek });

    }
    function kuldes(event) {
        event.preventDefault()
        console.log(urlapAdat)
        postTermek(urlapAdat)

    }

    return (




        <div style={{ width: "50%", margin: "auto" }}>
            <form onSubmit={kuldes}>
                <div className="mb-3">
                    <label htmlFor="title">Termék neve</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={urlapAdat.title}
                        onChange={mezovalt}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="price">Ár</label>
                    <input
                        type="number"
                        className="form-control"
                        id="price"
                        value={urlapAdat.price}
                        onChange={mezovalt}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description">Leírás</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        value={urlapAdat.description}
                        onChange={mezovalt}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="category">Kategória</label>
                    <input
                        type="text"
                        className="form-control"
                        id="category"
                        value={urlapAdat.category}
                        onChange={mezovalt}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image">Kép</label>
                    <input
                        type="text"
                        className="form-control"
                        id="image"
                        value={urlapAdat.image}
                        onChange={mezovalt}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Hozzáad</button>
            </form>
        </div>
    )

}
