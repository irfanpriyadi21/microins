import React from 'react';
import './App.css';
import { Input, Button, Container, Row, Col, Label, FormGroup } from 'reactstrap';
  

const Example = (props) => {
  return (
    <div>
    <Container>
    <Row>
      <Col sm="12" md={{ size: 6, offset: 3 }}>
      <br />
      <hr />
      <h1 align="center">Form Login</h1>
      <hr />
      <br />
     <FormGroup>
          <Label for="username">Username</Label>
          <Input type="text" name="username" id="username" placeholder="Masukan Username" />
        </FormGroup>
      <FormGroup>
          <Label for="password">Password</Label>
          <Input type="password" name="password" id="password" placeholder="Masukan Password" />
        </FormGroup>
         <FormGroup>
        <Label for="exampleSelect">Jabatan</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Admin</option>
            <option>Manager</option>
            <option>User</option>
          </Input>
        </FormGroup>
      <br />
      <Button color="secondary" size="lg" block>Login</Button>
       <hr />
      </Col>
      </Row>
      </Container>
    </div>
  );
};
export default Example;