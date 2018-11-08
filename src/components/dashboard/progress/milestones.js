import React from 'react';

class Milestones extends React.Component {
  checkCurrentWeek(i) {
    const { activeGoal } = this.props;
    const start = new Date(activeGoal.startDate);
    const today = new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    const offset = i * oneDay * 7;
    const daysBetween = Math.round(
      (today.getTime() - (start.getTime() + offset)) / oneDay
    );
    return daysBetween;
  }

  render() {
    // const { objective, activeGoal, amount } = this.props;
    const { activeGoal } = this.props;
    const { weeks } = activeGoal;
    return (
      <div className="row">
        {weeks.map((el, i) => {
          const pastPresentFuture = this.checkCurrentWeek(i);
          return pastPresentFuture < 7 &&
            pastPresentFuture >= 0 &&
            !el.achieved ? (
            <div key={i} className="col-lg-2 col-md-4 col-xs-6">
              <div className="card">
                <div className="content">
                  <div className="row">
                    <div className="col">
                      <div className="icon-big icon-info text-center">
                        <p>Week {i + 1}</p>
                        <i className="far fa-circle" />
                        <p>${el.target}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : pastPresentFuture < 0 && !el.achieved ? (
            <div key={i} className="col-lg-2 col-md-4 col-xs-6">
              <div className="card">
                <div className="content">
                  <div className="row">
                    <div className="col">
                      <div className="icon-big icon-warning text-center">
                        <p>Not started</p>
                        <i className="fas fa-circle" />
                        <p>${el.target}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : el.achieved === true ? (
            <div key={i} className="col-lg-2 col-md-4 col-xs-6">
              <div className="card">
                <div className="content">
                  <div className="row">
                    <div className="col">
                      <div className="icon-big icon-success text-center">
                        <p>Week {i + 1}</p>
                        <i className="far fa-check-circle" />
                        <p>${el.target}</p>
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
                        <p>Week {i + 1}</p>
                        <i className="far fa-times-circle text-danger" />
                        <p>${el.target}</p>
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
