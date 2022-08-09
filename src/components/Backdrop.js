function Backdrop(props) {
  return <div className="backdrop" onClick={props.onCancel} />; //onClick is a built in prop, it is redirecting to custom props of the react component which can be name whatever we want, which in turn is assigned a pointer to a function.
}
export default Backdrop;
