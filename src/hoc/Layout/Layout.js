import React, { Component } from "react";
import Aux from '../Auxillary/Auxillary';
import './Layout.css';
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

export default class Layout extends Component {

  state = {
    showSideDrawer: false
  };

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false})
  }

  sideDrawerToggleHandler = () => {
    this.setState((preState) => {
      return {showSideDrawer: !preState.showSideDrawer}
    });
  }

  render() {
    return (
      <Aux>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
        <SideDrawer opened={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
        <main className="Content">
          {this.props.children}
        </main>
      </Aux>
    );
  }
}
