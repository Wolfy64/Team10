import React from 'react';

const Goal = props => {
    const isActive = props.isActive ? 'goals-active' : null;

    return (
        <tr key={props.id} className={isActive}>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.category}</td>
            <td className="goals-text-center">
                {props.achieved ?
                    <i className="fas fa-check-circle text-success"/>
                    : (props.isActive ? <i className="fas fa-circle text-warning"/> :
                        <i className="fas fa-times-circle text-danger"/>)}
            </td>
        </tr>
    );
};

export default Goal;
