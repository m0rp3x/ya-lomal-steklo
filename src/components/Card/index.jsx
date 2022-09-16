import "./style.css"

import React from "react";

export default ({text,cnt}) => {
    return <div className="card">
        {text}
        <i class="bi bi-heart-fill" data-number={cnt}/>
    </div>
}