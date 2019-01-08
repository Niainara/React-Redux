import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    count: state
});

const mapDispatchToProps = dispatch => ({
    onSwitch1: () => dispatch({ type: "ADD" }),
    onSwitch2: () => dispatch({ type: "REMOVE" }),
    onSwitch3: () => dispatch({ type: "ADD10" }),
    onSwitch4: () => dispatch({ type: "REMOVE10" }),
    onSwitch5: () => dispatch({ type: "RESET" })
});

const ReducerComponent = ({count, onSwitch1,onSwitch2, onSwitch3, onSwitch4, onSwitch5 }) => (
<div>
    <p>{count}</p>
    <button onClick={onSwitch1}>+ 1</button>
    <button onClick={onSwitch2}>- 1</button>
    <button onClick={onSwitch3}>+ 10</button>
    <button onClick={onSwitch4}>- 10</button>
    <button onClick={onSwitch5}>reset</button>
</div>
)


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReducerComponent);