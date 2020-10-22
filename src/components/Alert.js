import React, {useContext} from "react";
import { ALertContext } from "../context/alert/alertContext";

export const Alert = () => {
const {alert, hide} = useContext(ALertContext)

    if (!alert.visible) {
        return null;
    }

  return (
    <div className={`alert alert-${alert.type || 'warning'} alert-dismissible`}>
      <strong>Внимание!</strong>
      &nbsp;{alert.text}
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={hide}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
