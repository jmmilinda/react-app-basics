import React, { Component } from "react";
import Aux from "../../../hoc/Auxillary/Auxillary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {

  render() {
    const ingredientsSummary = Object.keys(this.props.ingredients).map(igKey => {
      return <li key={igKey}><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}</li>;
    });
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious with the following ingredients:</p>
        <ul>
          {ingredientsSummary}
        </ul>
        <p><strong>TotalPrice:</strong> {this.props.getPrice()}</p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancel}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
      </Aux>
    );
  }
}
export default OrderSummary;
