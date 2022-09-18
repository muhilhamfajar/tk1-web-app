import React, { Component } from "react";
import { Table, Image } from "react-bootstrap";
import "../App.css";

class List extends Component {
  render() {
    const list = this.props.data.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.alamat}</td>
                <td>{item.gender}</td>
                <td>{item.birthOfDate}</td>
                <td><Image fluid={true} src={item.foto} alt="foto" /></td>
                <td><Image fluid={true} src={item.cv} alt="foto" /></td>
                <td><Image fluid={true} src={item.sertifikat} alt="foto" /></td>
            </tr>
        )
    })

    return (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Alamat</th>
            <th>Gender</th>
            <th>Tanggal Lahir</th>
            <th>Foto</th>
            <th>CV</th>
            <th>Sertifikat</th>
          </tr>
        </thead>
        <tbody>
            {list}
        </tbody>
      </Table>
    );
  }
}

export default List;
