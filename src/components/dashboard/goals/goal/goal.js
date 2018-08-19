import React from 'react';

const Goal = props => {
  const isActive = props.isActive ? 'goals-active' : null;

  return (
    <tr key={props.id} className={isActive}>
      <td>{props.id}</td>
      <td>{props.name}</td>
      <td>{props.category}</td>
      <td className="goals-text-center">
        {props.achieved ? (
          <i className="far fa-check-circle" />
        ) : (
          <i className="far fa-circle" />
        )}
      </td>
    </tr>
  );
};

export default Goal;
