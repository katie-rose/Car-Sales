import React from "react";
import { connect } from "react-redux";
import { addCarFeature, removeCarFeature } from "./store/actions";
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = props => {

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.addCarFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeCarFeature={props.removeCarFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures store={props.store} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  console.log(state);
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    store: state.store
  };
}

export default connect(
  mapStateToProps,
  { addCarFeature, removeCarFeature }
)(App);
