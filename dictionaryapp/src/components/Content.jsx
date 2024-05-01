import Definition from "./Definition";

function Content({ definition }) {
    console.log(definition)
    return (
        <div className="content">
            <div className="header">
                <h1>{definition.word}</h1>
                <p>{definition.phonetic}</p>
            </div>
            {definition.meanings.map(meaning =>
                <Definition meaning={meaning} />
            )}
        </div>
    );
}

export default Content;