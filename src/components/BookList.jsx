import { Component } from "react"
import{Container, Row,Col, Form, Button,} from 'react-bootstrap'
import SingleBook from "./SingleBook"
import books from '../data/books/fantasy.json'



class BookList extends Component{

    state = {
        query:""
    }




    // filterBookList = () => {
    //     return(

    //     )
    // }
    render(){
        // console.log(books)

        // {

        // }
        return(



            <Container>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Control placeholder="Enter book title" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Row>
                {books.map(book =>(
                    <Col  key={book.asin}>
                        <SingleBook book={book}/>
                    </Col>
                ))}
                </Row>
            </Container>
        )
    }
}
export default BookList