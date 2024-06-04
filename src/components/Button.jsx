// Start coding here

function Buttons(props){
    const priority = props.priority;
    if ( priority === "primary"){
      return (
        <button className="primary-button">
          Buttons
        </button>
      )
    } else if (priority === "secondary"){
      return (
        <button className="secondary-button">
          Buttons
        </button>
      )
    }
  }

export default Buttons;