import Header from "./Header";
import Definition from "./Definition";
import Footer from "./Footer";

function Content({ definition }) {
    return (
        <div className="content">
            <Header definition={definition} />
            {definition.meanings.map((meaning, index) =>
                <Definition meaning={meaning} key={index} />
            )}
            <Footer sourceUrls={definition.sourceUrls} />
            <hr className="content-line" />
        </div>
    );
}

export default Content;