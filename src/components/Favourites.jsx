import { Col, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.content);
  return (
    <Row>
      <Col sm={12} className="mb-5">
        <ListGroup variant="flush">
          {favourites.length > 0 ? (
            favourites.map((data, i) => (
              <ListGroup.Item key={i}>
                {data.company_name} - {data.title}
              </ListGroup.Item>
            ))
          ) : (
            <ListGroup.Item className="lead ">
              <span className="text-primary opacity-50 fs-1 me-2"> </span>
              Al momento non ci sono annunci salvati
            </ListGroup.Item>
          )}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default Favourites;
