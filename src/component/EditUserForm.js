import React, { useState, useEffect } from 'react'
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'

const EditUserForm = (props) => {
 const [user, setUser] = useState(props.currentUser)

 useEffect(() => {
  setUser(props.currentUser)
 },
  [props]
 )

 const handleInputChange = event => {
  const { name, value } = event.target
  setUser({ ...user, [name]: value })
 }

 return (
  <Form
   onSubmit={event => {
    event.preventDefault()

    props.updateUser(user.id, user)
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
   <Button color="primary" style={{ margin: "10px 0px" }}>Update user</Button>
   <Button color="danger" style={{ margin: "10px 5px" }} onClick={() => props.setEditing(false)}>Cancel</Button>
  </Form>
 )
}

export default EditUserForm
