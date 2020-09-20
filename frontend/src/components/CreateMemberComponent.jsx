import React, { Component } from 'react';
import MemberService from '../services/MemberService';

class CreateMemberComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // update step2
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
    this.saveOrUpdateMember = this.saveOrUpdateMember.bind(this);
  }

  // update step3
  componentDidMount() {
    //update step4
    if (this.state.id === '_add') {
      return;
    } else {
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
  }

  saveOrUpdateMember = (e) => {
    e.preventDefault();
    let member = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      phoneNumber: this.state.phoneNumber,
      address: this.state.address,
    };

    console.log('member =>' + JSON.stringify(member));

    // update step5
    if (this.state.id === '_add') {
      MemberService.createMember(member).then((res) => {
        this.props.history.push('/admin/member-list');
      });
    } else {
      MemberService.updateMember(member, this.state.id).then((res) => {
        this.props.history.push('/admin/member-list');
      });
    }
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

  getTitle() {
    if (this.state.id === '_add') {
      return <h3 className="text-center">Member Register Form</h3>;
    } else {
      return <h3 className="text-center">Member Update Form</h3>;
    }
  }

  render() {
    return (
      <div className="register">
        <div className="register-container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {this.getTitle()}
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
                    onClick={this.saveOrUpdateMember}
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

export default CreateMemberComponent;
