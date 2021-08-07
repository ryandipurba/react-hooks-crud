import React, { useState } from 'react'
import "./App.css"
import UserTable from "./component/UserTable";
import AddUserForm from "./component/AddUserForm";
import { Col, Container, Row } from 'reactstrap';

const App = () => {

  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }


  return (
    <Container>
      <h1>React Crud</h1>
      <Row>
        <Col md="6" sm="12">
          <h2>Add User</h2>
          <AddUserForm addUser={addUser} />
        </Col>
        <Col md="6" sm="12">
          <h2>View User</h2>
          <UserTable users={users} />
        </Col>
      </Row>

    </Container>
  )
}

export default App
