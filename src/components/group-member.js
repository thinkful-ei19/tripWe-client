import React, { Component } from "react";
import Moment from "react-moment";
import FlightDetailsForm from "./flight-details-form";

import ReactModal from "react-modal";

ReactModal.setAppElement("#root");

class GroupMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      addFlightDetails: false
    };
  }

  handleInfo() {
    this.setState({ showInfo: !this.state.showInfo });
  }

  handleNewFlight() {
    this.setState({ addFlightDetails: !this.state.addFlightDetails });
  }

  render() {
    return (
      <div className="g-member">
        <div className="g-member__main">
          <i className="fas fa-user-circle g-member__main--icon" />
          <div className="g-member__main--sub">
            <p className="g-member__name">{this.props.fullname}</p>
            <p className="g-member__flight-info">
              <span className="g-member__dep--airport">
                {this.props.incomingdepartureairport}
              </span>
              <i className="fas fa-arrow-right g-member__dep--icon" />
              <span className="g-member__arr--airport">
                {this.props.incomingarrivalairport}
              </span>
              <span className="g-member__flight-num">
                Flight {this.props.incomingflightnum}
              </span>
              {this.state.showInfo ?
                (
                  <span className="g-member__arr--time">
                    departing at &ensp;
                  <Moment format="MM/DD/YYYY HH:mm">
                      {this.props.incomingdeparturetime}
                    </Moment>
                  </span>
                ) : null}
            {this.props.incomingarrivaltime ?
            (
            <span className="g-member__arr--time">
              arriving on &ensp;
              <Moment format="MM/DD/YYYY HH:mm">
                {this.props.incomingarrivaltime}
              </Moment>
            </span>
          ): null }
            </p>
          </div>
        </div>
        {this.state.showInfo ? (
          <div className="g-member__main--sub g-member__main--sub-details">
            <p className="g-member__flight-info">
              <span className="g-member__dep--airport">
                {this.props.outgoingdepartureairport}
              </span>
              <i className="fas fa-arrow-right g-member__dep--icon" />
              <span className="g-member__arr--airport">
                {this.props.outgoingarrivalairport}
              </span>
              <span className="g-member__flight-num">
                Flight {this.props.outgoingflightnum}
              </span>
              <span className="g-member__arr--time">
                departing at &ensp;
            <Moment format="MM/DD/YYYY HH:mm">
                  {this.props.outgoingarrivaltime}
                </Moment>
              </span>
              <span className="g-member__arr--time">
                arriving on &ensp;
            <Moment format="MM/DD/YYYY HH:mm">
                  {this.props.outgoingdeparturetime}
                </Moment>
              </span>
              <button onClick={() => this.handleNewFlight()}>Add</button>
            </p>
          </div>)
          : null}
        <i
          onClick={() => this.handleInfo()}
          className="fas fa-info-circle g-member__info--icon"
        />
        { this.state.addFlightDetails ? (
          <ReactModal
              isOpen={true}
              className="form-modal"
              overlayClassName="form-modal__overlay"
          >
          <FlightDetailsForm isActive={this.state.addFlightDetails} active={() => this.handleNewFlight()}/>
          </ReactModal>
      ) : null }
      </div>
    )
  };
};

export default GroupMember;
