import React from "react";
import { getDefinition } from "../actions/getDefinition"

function Similarity({ title, list, setDefinitions }) {
    const updateDefinitions = async(event, element) => {
        event.stopPropagation();
        setDefinitions(await getDefinition(element));
    };

    return (
        <>
            {list.length > 0 && (
                <div className="similarity">
                    <h3>{title}</h3>
                    <div className="similarity-content">
                        {list.map((element, index) => (
                            <span onClick={e => updateDefinitions(e, element)}>
                                {element}
                                {index !== list.length - 1 && ", "}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
}

export default Similarity;