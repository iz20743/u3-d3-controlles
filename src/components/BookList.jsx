import { Component } from "react"
import{Container,Badge,} from 'react-bootstrap'
import SingleBook from "Component./SingleBook"
class BookList extends Component{
    render(){
        return(
            <Container>
               <SingleBook/>
            </Container>
        )
    }
}
export default BookList