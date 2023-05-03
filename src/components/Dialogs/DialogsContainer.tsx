import React from "react";
import {actions} from "../../redux/dialogs_reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux_store";

let mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogs,
    }
}

<<<<<<< HEAD
export default compose(
=======
export default compose<React.ComponentType>(
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878
    connect(mapStateToProps, {...actions}),
    withAuthRedirect
)(Dialogs);