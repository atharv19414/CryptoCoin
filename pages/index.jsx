import React from "react";
import MNavBar from "../ui_components/MNavBar";
import instance from "../lib/instance";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "../next_route/next_routes";

class List extends React.Component {
  static async getInitialProps() {
    const totalProjects = await instance.methods.totalCampaigns().call();

    return { totalProjects };
  }

  render() {
    return (
      <div className="wrapper">
        <MNavBar />
        <Card  style={{ width: "18rem", margin: "6rem auto", backgroundColor: "#59788e" }}>
          <Card.Header style={{ textAlign: "center"}}>
            {" "}
            <Card.Title>Total Projects</Card.Title>
          </Card.Header>
          <Card.Body>
            <Card.Text style={{ textAlign: "center", fontSize: "7rem" }}>
              {this.props.totalProjects}
            </Card.Text>
          </Card.Body>
        </Card>
        <Container>
          <Row>
            <Col>
              <div style={{ margin: "2rem" }}>
                <Link route={`/projects/initiate`}>
                  <a>
                    <Button
                      size = "lg"
                      variant="dark"
                      style={{ display: "table", margin: "2rem auto" }}
                    >
                      Create Project
                    </Button>
                  </a>
                </Link>
              </div>
            </Col>

            <Col>
              <div style={{ margin: "2rem" }}>
                <Link route={`/discover`}>
                  <a>
                    <Button
                      size = "lg"
                      variant="dark"
                      style={{ display: "table", margin: "2rem auto" }}
                    >
                      Discover Projects
                    </Button>
                  </a>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default List;
