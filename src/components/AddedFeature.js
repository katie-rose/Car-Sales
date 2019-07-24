import React from "react";

const AddedFeature = props => {
  // const remove = e => {
  //   e.preventDefault();
  //   props.removeCarFeature(props.feature);

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={() => props.removeCarFeature(props.feature)} className="button">
        X
      </button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
