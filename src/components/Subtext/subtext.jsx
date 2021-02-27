import axios from axios
import React from 'react'

import './subtext.css'

function Subtext(props) {
    const { list } = props 

    const callDownload = (str) => {
        axios({
            url: str.url,
            method: 'GET',
            responseType: 'blob'
        })
        .then((response) => {
            const url = window.webkitURL.createObjectURL(new Blob([response.data]))
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", `${str.title.replace(/ /g, "_")}.jpeg`)
            document.body.appendChild(link)
            link.click()
        })
    }

    const handleClick = (arr) => {
        arr.forEach(e => {
            callDownload(e)      
        });
    }

    return  (
        <div className="subtext">
            <button onClick={(e) => handleClick(list)} className="select-all-button">Download Images</button>
        </div>
    )
}

export default Subtext