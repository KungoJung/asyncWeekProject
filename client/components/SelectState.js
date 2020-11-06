import React from "react";
import { connect } from "react-redux";
import { fetchSingleCwCurrent } from "../redux/singleCommonwealthCurrent";
import Dropdown from "./Dropdown";
import Chart from "./Chart";

class SelectState extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }

  // componentDidMount() {

  // }

  handleChange(e) {
    const cw = e.target.value;
    if (cw === "Select State") return
    this.props.getCw(cw)
  }

  render() {
    const { data } = this.props.cw
    return(
      <div>
        <Dropdown handleChange={this.handleChange}/>
        {data &&
        <Chart data={data} />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    cw: state.singleCwCurrent
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getCw: (cw) => dispatch(fetchSingleCwCurrent(cw))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectState)
