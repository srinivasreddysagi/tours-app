import React, { useState } from "react";

export default function Trip({id, name, info, image, price, deleteItem}) {
    const [readMore, setReadMore] = useState(true);
    function toggleView() {
        setReadMore(!readMore);
    }

    console.log(id);

    return (
        <article className="trip">
            <img src={image} alt={name} className="cover-image" />
            <div className="content-wrapper">
                <h2>{name}</h2>
                <h3>{price}</h3>
                <p>
                    {readMore ? `${info.substring(0, 200)}...` : info}
                    <button onClick={toggleView}>
                        {readMore ? "read more" : "show less"}
                    </button>
                </p>
            </div>
            <button onClick={()=> {deleteItem(id)}}>Not interested</button>
        </article>
    );
}
