import React, { Component } from 'react';

class ListMemberComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
    };
  }

  render() {
    return (
      <div>
        <h2 className="text-center">Member List</h2>
        <div className="row">
          <table className="table table-striped table-bordered"></table>
          <thead>
            <tr>
              <th>Member First Name</th>
              <th>Member Last Name</th>
              <th>Member Email</th>
              <th>Member Phone Number</th>
              <th>Member Address</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {this.state.members.map((member) => (
              <tr key={member.id}>
                <td>{member.firstName}</td>
                <td>{member.lastName}</td>
                <td>{member.email}</td>
                <td>{member.phoneNumber}</td>
                <td>{member.address}</td>
              </tr>
            ))}
          </tbody>
        </div>
      </div>
    );
  }
}

export default ListMemberComponent;
