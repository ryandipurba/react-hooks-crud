import React, { useState } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'

const AddUserForm = (props) => {

 const initialFormState = { id: null, name: '', username: '' }
 const [user, setUser] = useState(initialFormState)
 // handle value input
 const handleInputChange = (event) => {
  const { name, value } = event.target

  setUser({ ...user, [name]: value })
 }
 return (
  <Form
   onSubmit={(event) => {
    event.preventDefault()
    if (!user.name || !user.username) return

    props.addUser(user)
    setUser(initialFormState)
   }}
  >
   <FormGroup style={{ margin: "10px 0px" }}>
    <Label for="name">Name</Label>
    <Input type="text" name="name" id="name" value={user.name} onChange={handleInputChange} />
   </FormGroup>
   <FormGroup style={{ margin: "10px 0px" }}>
    <Label for="name">User Name</Label>
    <Input type="text" name="username" id="username" value={user.username} onChange={handleInputChange} />
   </FormGroup>
   <Button color="primary" style={{ margin: "10px 0px" }}>Add new user</Button>
  </Form>
 )
}

export default AddUserForm
