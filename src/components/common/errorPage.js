import React, {Component} from "react";
import bgError from "../../img/bg-error.png";

class ErrorPage extends Component {
    render() {
        return (
            <div className="error-page">
                <img src={bgError} alt="Error Page" id="bg-error"/>
                <br/>
                <a href="/" role="button" className="btn btn-primary">Go to Home</a>
            </div>
        );
    }
}

export default ErrorPage;