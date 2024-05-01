function Meaning({ meaning }) {
    return (
        <div className="defAndExample">
            <li>{capitalizeFirstLetter(meaning.definition)}</li>
            {meaning.example &&
                <p>"{capitalizeFirstLetter(meaning.example)}"</p>
            }
        </div>
    );
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default Meaning;