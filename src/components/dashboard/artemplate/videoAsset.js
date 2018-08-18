import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {userActions, artemplateActions} from '../../../actions';

class VideoAsset extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageTargetExists: false,
            linkedVideoExists: false
        };
        this.imageTarget = React.createRef();
        this.linkedVideo = React.createRef();
        this.uploadFile = this.uploadFile.bind(this);
        this.removeFile = this.removeFile.bind(this);
        this.fileUploaded = this.fileUploaded.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this)
    }

    uploadFile(event, object) {
        event.preventDefault();
        object.current.click();
    }

    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    removeFile(event, object) {
        if (object === this.imageTarget) {
            this.setState({...this.state, imageTargetExists: false});
        } else if (object === this.linkedVideo) {
            this.setState({...this.state, linkedVideoExists: false});
        }
        object.current.value = '';
    }

    fileUploaded(event, object) {
        if (object === this.imageTarget) {
            if (object.current.files[0] === undefined) {
                this.setState({...this.state, imageTargetExists: false});
            } else {
                this.setState({...this.state, imageTargetExists: true});
            }
        } else if (object === this.linkedVideo) {
            if (object.current.files[0] === undefined) {
                this.setState({...this.state, linkedVideoExists: false});
            } else {
                this.setState({...this.state, linkedVideoExists: true});
            }
        }
    }

    submitForm(event) {
        event.preventDefault();
        let imageTarget = {
            content: this.imageTarget.current.files[0],
            size: this.imageTarget.current.files[0].size,
            mimeType: this.imageTarget.current.files[0].type
        };
        let linkedVideo = {
            content: this.linkedVideo.current.files[0],
            size: this.linkedVideo.current.files[0].size,
            mimeType: this.linkedVideo.current.files[0].type
        };
        this.props.artemplateActions.addVideoAsset(imageTarget, linkedVideo, this.props.userReducer.token);
        event.target.reset();
        this.setState({
            imageTargetExists: false,
            linkedVideoExists: false
        });
    }

    render() {
        return (
            <div className="row">
                <div className="card">
                    <div className="header">
                        <h4 className="title">Add Video Asset</h4>
                    </div>
                    <div className="content">
                        <form onSubmit={this.submitForm}>
                            <div className="form-row">
                                <div className="col">
                                    <input id="attachment" ref={this.imageTarget} type="file"
                                           style={{display: "none"}}
                                           onChange={(event) => this.fileUploaded(event, this.imageTarget)}
                                    />
                                    <button
                                        className="btn btn-warning btn-simple"
                                        onClick={(event) => this.uploadFile(event, this.imageTarget)}>
                                                    <span className="text-vertical-align-center">
                                                        <i className="material-icons">image</i>&nbsp;
                                                        Upload Image Target
                                                    </span>
                                    </button>
                                </div>
                                <div className="col"
                                     style={{paddingRight: 15, paddingLeft: 15, paddingTop: 10, paddingBottom: 0}}>
                                    {this.state.imageTargetExists ?
                                        <div className="alert alert-warning">
                                            <button type="button" aria-hidden="true" className="close"
                                                    onClick={(event) => this.removeFile(event, this.imageTarget)}>×
                                            </button>
                                            <span>{this.state.imageTargetExists ? this.imageTarget.current.files[0].name : ''}</span>
                                        </div> : ''}
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col">
                                    <input id="attachment" ref={this.linkedVideo} type="file"
                                           style={{display: "none"}}
                                           onChange={(event) => this.fileUploaded(event, this.linkedVideo)}
                                    />
                                    <button
                                        className="btn btn-danger btn-simple"
                                        onClick={(event) => this.uploadFile(event, this.linkedVideo)}>
                                                    <span className="text-vertical-align-center">
                                                        <i className="material-icons">movie_creation</i>&nbsp;
                                                        Upload Linked Video
                                                    </span>
                                    </button>
                                </div>
                                <div className="col"
                                     style={{paddingRight: 15, paddingLeft: 15, paddingTop: 10, paddingBottom: 0}}>
                                    {this.state.linkedVideoExists ?
                                        <div className="alert alert-danger">
                                            <button type="button" aria-hidden="true" className="close"
                                                    onClick={(event) => this.removeFile(event, this.linkedVideo)}>×
                                            </button>
                                            <span>{this.state.linkedVideoExists ? this.linkedVideo.current.files[0].name : ''}</span>
                                        </div> : ''}
                                </div>
                            </div>
                            <div className="form-row text-center" style={{marginTop: 10}}>
                                <button type="submit" className="btn btn-info btn-fill btn-wd">Add
                                </button>
                            </div>
                            <div className="clearfix"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {userReducer: state.userReducer, artemplateReducer: state.artemplateReducer}
};

const mapDispatchToProps = (dispatch) => {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        artemplateActions: bindActionCreators(artemplateActions, dispatch)
    }
};

export default VideoAsset = connect(mapStateToProps, mapDispatchToProps)(VideoAsset);