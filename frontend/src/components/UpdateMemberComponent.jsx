import React, { Component } from 'react';
import MemberService from '../services/MemberService';
import MemberList from '../screens/MemberList';

class UpdateMemberComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
    };
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changePhoneNumberHandler = this.changePhoneNumberHandler.bind(this);
    this.changeAddressHandler = this.changeAddressHandler.bind(this);
    this.updateMember = this.updateMember.bind(this);
  }

  componentDidMount() {
    MemberService.getMemberById(this.state.id).then((res) => {
      let member = res.data;
      this.setState({
        firstName: member.firstName,
        lastName: member.lastName,
        email: member.email,
        phoneNumber: member.phoneNumber,
        address: member.address,
      });
    });
  }

  updateMember = (e) => {
    e.preventDefault();
    let member = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      address: this.state.address,
    };

    console.log('member =>' + JSON.stringify(member));
    console.log('id => ' + JSON.stringify(this.state.id));
    MemberService.updateMember(member, this.state.id).then((res) => {
      this.props.history.push('/admin/member-list');
    });
  };

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  changePhoneNumberHandler = (event) => {
    this.setState({ phoneNumber: event.target.value });
  };

  changeAddressHandler = (event) => {
    this.setState({ address: event.target.value });
  };

  cancel() {
    this.props.history.push('/admin/member-list');
  }

  render() {
    return (
      <div className="register">
        <div className="register-container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Member Update Form</h3>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>First Name</label>

                    <input
                      placeholder="First Name"
                      name="firstName"
                      className="form-control"
                      value={this.state.firstName}
                      onChange={this.changeFirstNameHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Last Name</label>
                    <input
                      placeholder="Last Name"
                      name="lastName"
                      className="form-control"
                      value={this.state.lastName}
                      onChange={this.changeLastNameHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <input
                      placeholder="Email"
                      name="email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmailHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      placeholder="Phone Number"
                      name="phoneNumber"
                      className="form-control"
                      value={this.state.phoneNumber}
                      onChange={this.changePhoneNumberHandler}
                    />
                  </div>

                  <div className="form-group">
                    <label>Address</label>
                    <input
                      placeholder="Address"
                      name="address"
                      className="form-control"
                      value={this.state.address}
                      onChange={this.changeAddressHandler}
                    />
                  </div>

                  <button
                    className="btn btn-success"
                    onClick={this.updateMember}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={this.cancel.bind(this)}
                    style={{ marginLeft: '10px' }}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateMemberComponent;
