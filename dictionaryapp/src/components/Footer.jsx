import React from "react";

function Footer({ sourceUrls }) {
    return (
        <div className="footer">
            <hr />
            <div className="source">
                <p className="source-title">Source</p>
                <p className="source-urls">
                {sourceUrls.map((element, index) => (
                    <React.Fragment key={index}>
                        {element}
                        {index !== sourceUrls.length - 1 && ", "}
                    </React.Fragment>
                ))}
                </p>
            </div>
        </div>
    );
}

export default Footer;