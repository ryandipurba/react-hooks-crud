import React from 'react'
import { Button, Table } from 'reactstrap';


const UserTable = (props) => {
 console.log(props);
 return (
  <Table striped >
   <thead>
    <tr>
     <th>No</th>
     <th>Name</th>
     <th>Username</th>
     <th>Actions</th>
    </tr>
   </thead>
   <tbody>
    {props.users.length > 0 ? (
     props.users.map((user) => (
      <tr key={user.id}>
       <td>{user.name}</td>
       <td>{user.username}</td>
       <td>
        <Button outline color="primary" style={{ marginRight: "10px" }} onClick={() => { props.editRow(user) }}>Edit</Button>
        <Button outline color="danger" onClick={() => props.deleteUser(user.id)} >Delete</Button>
       </td>
      </tr>
     ))
    ) : (
     <tr>
      <td colSpan={3}>No users</td>
     </tr>
    )}
   </tbody>
  </Table >
 )
}

export default UserTable
