import Definition from "./Definition";

function Content({ definition }) {
    return (
        <div className="content">
            <div className="header">
                <div className="title">
                    <h1>{definition.word}</h1>
                    <p>{definition.phonetic}</p>
                </div>
                <button class="play-button"></button>
            </div>
            {definition.meanings.map((meaning, index) =>
                <Definition meaning={meaning} key={index} />
            )}
        </div>
    );
}

export default Content;