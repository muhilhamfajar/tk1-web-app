import React, { Component } from "react";
import FormInput from "./components/Form";
import List from "./components/List";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  onSubmit = (dataForm) => {
    this.setState({
      data: this.state.data.concat(dataForm),
    });
  };

  render() {
    return (
      <Container className="py-5">
        <Row>
          <Col md="12">
            <FormInput onSubmit={this.onSubmit} />
          </Col>
          <Col md="12" className="pt-5">
            <List data={this.state.data} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
