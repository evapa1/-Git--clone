import React from 'react';
import { withRouter } from 'react-router-dom';


const Users = (props) => {
  return <div>Users {props.match.params.id}</div>;
}

export default withRouter(Users);