import React, { useState } from "react";

export default function Trip({ id, name, info, image, price, deleteItem }) {
    const [readMore, setReadMore] = useState(true);
    function toggleView() {
        setReadMore(!readMore);
    }

    return (
        <article className="trip" id={id}>
            <img src={image} alt={name} className="cover-image" />
            <div className="content-wrapper">
                <h2>{name}</h2>
                <h3 className="price">₹{price}</h3>
                <p>
                    {readMore ? `${info.substring(0, 200)}...` : info}
                    <button className="readmore" onClick={toggleView}>
                        {readMore ? "read more" : "show less"}
                    </button>
                </p>
            </div>
            <button
                onClick={() => {
                    document.getElementById(id).style.transition =
                        "opacity .5s ease";
                        document.getElementById(id).style.opacity = "0";
                    setTimeout(function () {
                        deleteItem(id);
                    }, 500);
                    
                }}
                className="delete"
            >
                Not interested
            </button>
        </article>
    );
}
