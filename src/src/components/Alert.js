import React, {useContext} from "react";
import {CSSTransition} from 'react-transition-group';
import { ALertContext } from "../context/alert/alertContext";

export const Alert = () => {
const {alert, hide} = useContext(ALertContext)

    // if (!alert.visible) {
    //     return null;
    // }

  return (
    <CSSTransition
      in={alert.visible}
      timeout={{
        enter: 500,
        exit: 350
      }}
      classNames={'alert'}
      mountOnEnter
      unmountOnExit
    >
    <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
      <strong>Внимание!</strong>
      &nbsp;{alert.text}
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={hide}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    </CSSTransition>    
  );
};
