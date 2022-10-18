import Card from "react-bootstrap/Card";
import { GiFactory } from "react-icons/gi";
import { BsBuilding } from "react-icons/bs";
import { TbPlant } from "react-icons/tb";
import { HiUserGroup } from "react-icons/hi";
import { RiBuildingLine } from "react-icons/ri";
import { GrHomeRounded } from "react-icons/gr";
import CardGroup from "react-bootstrap/CardGroup";
import Col from "react-bootstrap/Col";

function TextExample() {
  return (
    <>
      <CardGroup style={{ padding: 10 }}>
        <Col>
          <Card style={{ width: "10rem" }}>
            <Card.Body>
              <Card.Title>
                <HiUserGroup style={{ background: "rgba(0,255,0,0.4)" }} />
                <span>932</span>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Total Customers
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "10rem" }}>
            <Card.Body>
              <Card.Title>
                <RiBuildingLine style={{ background: "rgba(128,0,0,0.5)" }} />
                <span>1932</span>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Total Properties
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "10rem" }}>
            <Card.Body>
              <Card.Title>
                <BsBuilding style={{ background: "rgba(255,255,0,0.6)" }} />
                <span>25</span>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Commercial
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "10rem" }}>
            <Card.Body>
              <Card.Title>
                <GrHomeRounded style={{ background: "rgb(0,0,255,0.4)" }} />
                <span>25</span>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Residencial
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "10rem" }}>
            <Card.Body>
              <Card.Title>
                <TbPlant style={{ background: "green" }} />
                <span>25</span>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Agriculture
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "10rem" }}>
            <Card.Body>
              <Card.Title>
                <GiFactory style={{ background: "rgb(0,128,0,0.3)" }} />
                <span>25</span>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Industrial
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </CardGroup>
    </>
  );
}

export default TextExample;
