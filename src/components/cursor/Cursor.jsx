import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const Cursor = () => {
    const [arrow, setArrow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                setArrow(true)
            }
            else {
                setArrow(false)
            }
        })
    })

    return (
        <>
            {arrow ? <BrowserRouter>
                <Link to="#home" className="upArrow d-none d-md-block">
                    <i className="fa-solid fa-arrow-up"></i>
                </Link>
            </BrowserRouter> : null}

        </>

    )
}

export default Cursor