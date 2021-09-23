import React from 'react'
import { Link } from "react-router-dom";

const List = ({ item, clicked }) => {
    return (
        <Link to={(item === 'Home') ? "/" : "/" + item} className={"List Navbar Compressed " + ((clicked) ? "Clicked" : "")}>
            <p className="Link">{item}</p>
        </Link>
    )
}

export default List
