import React, { Fragment, useState } from 'react'
import "./App.css"
import UserTable from "./component/UserTable";
import AddUserForm from "./component/AddUserForm";
import EditUserForm from "./component/EditUserForm";
import { Col, Container, Row } from 'reactstrap';

const App = () => {

  const usersData = [
    { id: 1, name: 'Ryandi', username: 'ryandi123' },
    { id: 2, name: 'Joko', username: 'jokoganteng' },
    { id: 3, name: 'Hardi Sutomo', username: 'hardiimoet' },
  ]

  const initialFormState = { id: null, name: '', username: '' }

  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false)


  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const updateUser = (id, updatedUser) => {
    setEditing(false)

    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }

  const editRow = user => {
    setEditing(true)

    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id))
  }

  return (
    <Container>
      <h1>Crud App With Hooks</h1>
      <Row>
        <Col md="6" sm="12">
          {editing ? (
            <Fragment>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
        </Col>
        <Col md="6" sm="12">
          <h2>View User</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </Col>
      </Row>

    </Container>
  )
}

export default App
