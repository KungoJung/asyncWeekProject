import React from "react";

const fiftyStates = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NJ", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"]

const Dropdown = (props) => {
  return(
    <div>
      <form >
        <label name="selectCw">
          <select onChange={props.handleChange} >
            <option defaultValue="Select State">Select State</option>
            {fiftyStates.map(s => {
              return(
                <option value={s}>{s}</option>
              )
            })}
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
