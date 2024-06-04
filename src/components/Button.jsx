// Start coding here

function Buttons(props){
    const priority = props.priority;
    if ( priority === "primary"){
      return (
        <button className="primary-button">
          {props.message}
        </button>
      )
    } else if (priority === "secondary"){
      return (
        <button className="secondary-button">
          {props.message}
        </button>
      )
    }
  }

export default Buttons;