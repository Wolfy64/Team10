import React, {Component} from "react";
import bgError from "../../img/bg-error.png";

class ErrorPage extends Component {
    render() {
        return (
            <div className="error-page">
                <br/>
                <img src={bgError} alt="Error Page" id="bg-error"/>
                <br/>
                <br/>
                <br/>
                <a href="/" role="button" className="btn btn-warning btn-default">Go to Home</a>
                {/*<div className="container">
                    <div className="row">
                        <div className="col col-sm col-md-4 col-lg-4 col-xl-3">
                            <img src={bgError} alt="Error Page" id="bg-error" style={{width: '100%'}}/>
                        </div>
                    </div>
                    <div className="row margin-top justify-content-md-center">
                        <div className="col col-sm col-md-6 col-lg-6 col-xl-4 text-center">
                            <a href="/" role="button" className="btn btn-warning btn-default">Go to Home</a>
                        </div>
                    </div>
                </div>*/}
            </div>
        );
    }
}

export default ErrorPage;