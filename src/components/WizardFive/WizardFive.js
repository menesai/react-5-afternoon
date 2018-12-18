import React, { Component } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { agentFound } from "../../ducks/reducer"
class WizardFive extends Component {
  render() {
    return (
      <div className='parent-div'>
        <div className='vert-align'>
          <p>Are you currently working with a real estate agent?</p> <br />
          <div className='row'>
            <Link to='/wSix'>
              <button
                onClick={e => {
                  this.props.agentFound("true")
                }}
              >
                Yes
              </button>
            </Link>
            <Link to='/wSix'>
              <button
                onClick={e => {
                  this.props.agentFound("false")
                }}
              >
                No{" "}
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  const { realEstateAgent } = state
  return {
    realEstateAgent
  }
}
export default connect(
  mapStateToProps,
  { agentFound }
)(WizardFive)