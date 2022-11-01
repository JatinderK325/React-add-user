// For help: Refer notes on ist notebook

import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App(props) {
  const [usersList, setUsersList] = useState([]);

  const addUsersHandler = (myUsers) =>{
    setUsersList(prevUsers => {
      return [myUsers, ...prevUsers];
    });
  }

  return (
    <React.Fragment>
      <AddUser onAddUsers={addUsersHandler}></AddUser>
      <UsersList items={usersList}></UsersList>
    </React.Fragment>
  );
}

export default App;
