import React from "react";

const Dropdown = (props) => {
  return(
    <div>
      <form >
        <label name="selectCw">
          <select onChange={props.handleChange} >
            <option defaultValue="Select State">Select State</option>
            <option value={"CA"}>CA</option>
            <option value={"NY"}>NY</option>
          </select>
        </label>
      </form>
    </div>
  )
}

export default Dropdown

// const mapStateToProps = (state) => {
//   return ({
//     cw: state.singleCwCurrent
//   })
// }

// const mapDispatchToProps = (dispatch) => {
//   return ({
//     getCw: () => dispatch(fetchSingleCwCurrent)
//   })
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Dropdown)
