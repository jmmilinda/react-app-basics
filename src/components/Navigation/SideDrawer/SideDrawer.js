import React from "react";
import Logo from '../../Logo/Logo';
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from './SideDrawer.module.css';
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxillary/Auxillary";

const sideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if(props.opened){
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.opened} clicked={props.closed}/>
      <div className={attachedClasses.join(' ')}>
        <div className="Logo">
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
