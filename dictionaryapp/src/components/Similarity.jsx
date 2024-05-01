import React from "react";

function Similarity({ title, list }) {
    return (
        <>
            {list.length > 0 && (
                <div class="similarity">
                    <h3>{title}</h3>
                    <p>
                    {list.map((element, index) => (
                        <React.Fragment key={index}>
                            {element}
                            {index !== list.length - 1 && ", "}
                        </React.Fragment>
                    ))}
                    </p>
                </div>
            )}
        </>
    );
}

export default Similarity;