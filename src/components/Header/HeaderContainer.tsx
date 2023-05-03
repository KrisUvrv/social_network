import React from "react";
<<<<<<< HEAD
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth_reducer";

class HeaderContainer extends React.Component {
=======
import Header, {MapPropsType, DispatchPropsType} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth_reducer";
import {AppStateType} from "../../redux/redux_store";

class HeaderContainer extends React.Component<MapPropsType, DispatchPropsType> {
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878
    render() {
        return <Header {...this.props}/>
    }
}
<<<<<<< HEAD
const mapStateToProps = (state) => ({
=======

const mapStateToProps = (state: AppStateType) => ({
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

<<<<<<< HEAD
export default connect(mapStateToProps, {logout})(HeaderContainer);
=======
export default connect<MapPropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {logout})(HeaderContainer);
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878
