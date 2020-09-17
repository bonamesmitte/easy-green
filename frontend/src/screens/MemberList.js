import React from 'react';
import ListMemberComponent from '../components/ListMemberComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { List } from 'semantic-ui-react';

function MemberList() {
  return (
    <div>
      <Router>
        <div className="container">
          <div className="container">
            <Switch>
              {' '}
              http://localhost:3000/admin/member-list
              <Route
                path="/admin/member-list"
                component={ListMemberComponent}
              ></Route>
              <Route
                path="/admin/member-list"
                component={ListMemberComponent}
              ></Route>
              {/* <ListMemberComponent /> */}
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default MemberList;
