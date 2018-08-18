import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="copyright pull-right">
                    &copy;&nbsp;
                    <span>{new Date().getFullYear()}​</span>
                    .&nbsp;Team 10.
                </div>
            </div>
        </footer>
    );
};
export default Footer;
