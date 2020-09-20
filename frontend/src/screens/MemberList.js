import React from 'react';
import ListMemberComponent from '../components/ListMemberComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { List } from 'semantic-ui-react';
import CreateMemberComponent from '../components/CreateMemberComponent';
import UpdateMemberComponent from '../components/UpdateMemberComponent';
import ViewMemberComponent from '../components/ViewMemberComponent';

function MemberList() {
  return (
    <div>
      <Router>
        <div className="container">
          <div className="container">
            <Switch>
              {' '}
              http://localhost:3000/admin/add-member
              <Route
                path="/admin/member-list"
                component={ListMemberComponent}
              ></Route>
              <Route
                path="/admin/member-list"
                component={ListMemberComponent}
              ></Route>
              {/* update step1 */}
              <Route
                path="/admin/add-member/:id"
                component={CreateMemberComponent}
              ></Route>
              <Route
                path="/admin/view-member/:id"
                component={ViewMemberComponent}
              ></Route>
              {/* <Route
                path="/admin/update-member/:id"
                component={UpdateMemberComponent}
              ></Route> */}
              {/* <ListMemberComponent /> */}
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default MemberList;
