import React from "react";

class Milestones extends React.Component {
  render() {
    const { goals, weeks, balance, mainGoal } = this.props;
    return (
      <div className="row">
        {goals.map((el, i) => {
          return el.done === undefined ? (
            <div key={i} className="col-lg-2 col-md-4 col-xs-6">
              <div className="card">
                <div className="content">
                  <div className="row">
                    <div className="col">
                      <div className="icon-big icon-warning text-center">
                        <p>Not started</p>
                        <i className="fas fa-circle" />
                        <p>${el.amount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : el.current ? (
            <div className="col-lg-2 col-md-4 col-xs-6">
              <div className="card">
                <div className="content">
                  <div className="row">
                    <div className="col">
                      <div className="icon-big icon-info text-center">
                        <p>Week {i}</p>
                        <i className="far fa-circle" />
                        <p>${el.amount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : el.done === true ? (
            <div key={i} className="col-lg-2 col-md-4 col-xs-6">
              <div className="card">
                <div className="content">
                  <div className="row">
                    <div className="col">
                      <div className="icon-big icon-success text-center">
                        <p>Week {i}</p>
                        <i className="far fa-check-circle" />
                        <p>${el.amount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div key={i} className="col-lg-2 col-md-4 col-xs-6">
              <div className="card">
                <div className="content">
                  <div className="row">
                    <div className="col">
                      <div className="icon-big icon-danger text-center">
                        <p>Week {i}</p>
                        <i className="far fa-times-circle text-danger" />
                        <p>${el.amount}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Milestones;
