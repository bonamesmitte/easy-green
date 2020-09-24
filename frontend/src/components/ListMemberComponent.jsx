import React, { Component } from 'react';
import MemberService from '../services/MemberService';

class ListMemberComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      members: [],
    };
    this.addMember = this.addMember.bind(this);
    this.editMember = this.editMember.bind(this);
    this.deleteMember = this.deleteMember.bind(this);
  }

  viewMember(id) {
    this.props.history.push(`/admin/view-member/${id}`);
  }

  deleteMember(id) {
    MemberService.deleteMember(id).then((res) => {
      this.setState({
        members: this.state.members.filter((member) => member.id !== id),
      });
    });
  }

  editMember(id) {
    this.props.history.push(`/admin/add-member/${id}`);
  }

  addMember() {
    this.props.history.push('/admin/add-member/_add');
  }

  componentDidMount() {
    MemberService.getMembers().then((res) => {
      this.setState({ members: res.data });
    });
  }

  render() {
    return (
      <div className="table">
        <h2
          className="text-center"
          style={{
            marginTop: '20px',
            fontFamily: 'sans-serif',
          }}
        >
          Employee List
        </h2>
        <div className="row">
          <button
            style={{
              marginBottom: '20px',
              fontSize: '20px',
            }}
            className="btn btn-primary"
            onClick={this.addMember}
          >
            Add Employee
          </button>
        </div>
        <div className="row">
          <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>Employee_Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.members.map((member) => (
                <tr key={member.id}>
                  <td>{member.id}</td>
                  <td>{member.firstName}</td>
                  <td>{member.lastName}</td>
                  <td>{member.email}</td>
                  <td>{member.phoneNumber}</td>
                  <td>{member.address}</td>
                  <td>
                    <button
                      onClick={() => this.editMember(member.id)}
                      className="btn btn-info"
                    >
                      Update
                    </button>

                    <button
                      style={{ marginLeft: '15px' }}
                      onClick={() => this.deleteMember(member.id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>

                    <button
                      style={{ marginLeft: '15px' }}
                      onClick={() => this.viewMember(member.id)}
                      className="btn btn-info"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListMemberComponent;
