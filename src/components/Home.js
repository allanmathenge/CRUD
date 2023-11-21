import React, { Fragment } from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Employees from "./Employees";

function Home() {
  let history = useNavigate();

  const handleEdit = (id, name, number) => {
    localStorage.setItem("Name", name);
    localStorage.setItem("Number", number);
    localStorage.setItem("Id", id);
  };

  const handleDelete = (id) => {
    let index = Employees.map(function (e) {
      return e.id;
    }).indexOf(id);

    Employees.splice(index, 1);

    history("/");
  };

  return (
    <Fragment>
      <div style={{ margin: "10rem" }}>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Employees && Employees.length > 0 ? (
              Employees.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>{item.Name}</td>
                    <td>{item.Number}</td>
                    <td>
                      <Link to={`/edit`}>
                        <Button
                          onClick={() =>
                            handleEdit(item.id, item.Name, item.Number)
                          }
                        >
                          EDIT
                        </Button>
                      </Link>
                      &nbsp;
                      <Button onClick={() => handleDelete(item.id)}>
                        DELETE
                      </Button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <div>No Items Available</div>
            )}
          </tbody>
        </Table>
        <br />
        <Link className="d-grid gap-2 font-xl" to="/create">
          <Button>Create</Button>
        </Link>
      </div>
    </Fragment>
  );
}

export default Home;
