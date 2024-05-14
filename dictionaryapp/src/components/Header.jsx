import Audio from "./Audio";

function Header({ definition }) {
    return (
        <div className="header">
            <div className="title">
                <h1>{definition.word}</h1>
                <p>{definition.phonetic}</p>
            </div>
            {definition.phonetics.length > 0 &&
                <Audio phonetics={definition.phonetics} />
            }
        </div>
    );
}

export default Header;