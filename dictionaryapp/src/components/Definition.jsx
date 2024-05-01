import Meaning from "./Meaning";
import React from "react";
import Similarity from "./Similarity";

function Definition({ meaning }) {
    const separatedDefinitions = meaning.definitions.reduce((acc, obj) => {
        acc["meanings"] = acc["meanings"] || [];
        acc["synonyms"] = acc["synonyms"] || [];
        acc["antonyms"] = acc["antonyms"] || [];

        acc["meanings"].push({definition: obj.definition, example: obj.example});
        if (obj.synonyms.length !== 0) {
            acc["synonyms"].push(obj.synonyms);
        }
        if (obj.antonyms.length !== 0) {
            acc["antonyms"].push(obj.antonyms);
        }
        return acc;
    }, {});

    const synonyms = [...new Set(meaning.synonyms.concat(separatedDefinitions.synonyms))];
    const antonyms = [...new Set(meaning.antonyms.concat(separatedDefinitions.antonyms))];

    return (
        <div className="meaning">
            <div className="partOfSpeech">
                <h2>{meaning.partOfSpeech}</h2>
                <hr />
            </div>
            <div class="definition">
                <h3>Meaning</h3>
                <ul>
                    {separatedDefinitions.meanings.map(element => 
                        <Meaning meaning={element} />
                    )}
                </ul>
            </div>
            {synonyms.length > 0 && (
                <div class="similarity">
                    <h3>Synonyms</h3>
                    <p>
                    {synonyms.map((element, index) => (
                        <>
                            {element}
                            {index !== synonyms.length - 1 && ", "}
                        </>
                    ))}
                    </p>
                </div>
            )}
            <Similarity title="Antonyms" list={antonyms} />
        </div>
    );
}

export default Definition;