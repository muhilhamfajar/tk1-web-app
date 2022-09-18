import React, { Component } from "react";
import "../App.css";
import { Button, FloatingLabel, Form } from "react-bootstrap";

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      alamat: "",
      gender: null,
      birthOfDate: "",
      foto: '',
      cv: null,
      sertifikat: null
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { name, alamat, gender, birthOfDate, foto, sertifikat, cv } = this.state;

    // if (!name || !alamat || !gender || !birthOfDate) {
    //   alert("Error");
    //   return;
    // }

    const data = {
      name,
      alamat,
      gender,
      birthOfDate,
      foto,
      sertifikat, 
      cv
    };

    this.props.onSubmit(data);
  };

  onReset = (e) => {
    e.preventDefault();

    this.setState({
      name: "",
      alamat: "",
      gender: null,
      birthOfDate: "",
      foto: null,
      cv: null,
      sertifikat: null
    });

    document.getElementById('foto').value = ""
    document.getElementById('cv').value = ""
    document.getElementById('sertifikat').value = ""
  };

  handleChangeImage = (e) => {
    this.setState({ [e.target.name]: URL.createObjectURL(e.target.files[0]) });
  };

  render() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="input"
            placeholder="Enter name"
            name="name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </Form.Group>

        <FloatingLabel controlId="floatingTextarea2" label="alamat">
          <Form.Control
            as="textarea"
            placeholder="Alamat"
            style={{ height: "100px" }}
            value={this.state.alamat}
            onChange={this.handleInputChange}
            name="alamat"
          />
        </FloatingLabel>

        <Form.Label>
          Gender
          <div onChange={this.handleInputChange}>
            <Form.Check
              type="radio"
              label="Male"
              name="gender"
              checked={this.state.gender === "Male"}
              value="Male"
            />
            <Form.Check
              type="radio"
              label="Female"
              name="gender"
              checked={this.state.gender === "Female"}
              value="Female"
            />
          </div>
        </Form.Label>

        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Enter date"
            name="birthOfDate"
            value={this.state.birthOfDate}
            onChange={this.handleInputChange}
          />
        </Form.Group>

        {/* <div onChange={this.handleInputChange}>
          <input
            type="radio"
            value="Male"
            name="gender"
            checked={this.state.gender === "Male"}
          />{" "}
          Male
          <input
            type="radio"
            value="Female"
            name="gender"
            checked={this.state.gender === "Female"}
          />{" "}
          Female
        </div> */}        
        <Form.Group className="mb-3">
          <Form.Label>Foto</Form.Label>
          <Form.Control
            type="file"
            placeholder="Foto"
            name="foto"
            onChange={this.handleChangeImage}
            accept="image/*"
            className="w-100"
            id="foto"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>CV</Form.Label>
          <Form.Control
            type="file"
            placeholder="CV"
            id="cv"
            name="cv"
            onChange={this.handleChangeImage}
            accept="image/*"
            className="w-100"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Certificate</Form.Label>
          <Form.Control
            type="file"
            id="sertifikat"
            placeholder="Certificate"
            name="sertifikat"
            onChange={this.handleChangeImage}
            accept="image/*"
            className="w-100"
          />
        </Form.Group>

        <Button onClick={this.onSubmit} className="me-2">Save</Button>
        <Button onClick={this.onReset}>Reset</Button>
      </Form>
    );
  }
}

export default FormInput;
