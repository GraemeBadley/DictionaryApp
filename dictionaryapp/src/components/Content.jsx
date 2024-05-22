import Header from "./Header";
import Definition from "./Definition";
import Footer from "./Footer";

function Content({ definition, setDefinitions }) {
    return (
        <div className="content">
            <Header definition={definition} />
            {definition.meanings.map((meaning, index) =>
                <Definition meaning={meaning} setDefinitions={setDefinitions} />
            )}
            <Footer sourceUrls={definition.sourceUrls} />
            <hr className="content-line" />
        </div>
    );
}

export default Content;