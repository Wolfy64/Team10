import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="copyright pull-right">
                    &copy;&nbsp;
                    <span>{new Date().getFullYear()}​</span>
                    .&nbsp;<a href="http://www.sjsu.edu/ecampus/" target="_blank" rel="noopener noreferrer">
                    eCampus
                </a> @ <a href="http://www.sjsu.edu/" target="_blank" rel="noopener noreferrer">
                    SJSU
                </a>.
                </div>
            </div>
        </footer>
    );
};
export default Footer;
