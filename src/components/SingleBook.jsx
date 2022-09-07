import { Component } from "react"
import{Container,Row, Col, Card,} from 'react-bootstrap'
import arrayOfBooks from '../data/books/fantasy.json'


class SingleBook extends Component{
    render(){
        console.log(arrayOfBooks)
        return(
            <Container>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={arrayOfBooks[0].img} />
                        <Card.Body>
                            <Card.Title>{arrayOfBooks[0].title}</Card.Title>
                        </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default SingleBook