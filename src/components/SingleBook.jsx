import { Component } from 'react'
import{Container, Card,} from 'react-bootstrap'
// import books from '../data/books/fantasy.json'
import bookList from "./BookList"


class SingleBook extends Component {
state={
    selected:false
}





    render(){

        return(
            <Container>
                {bookList.filter(book => {book.title.toLowerCase().includes(this.props.query.toLowerCase())}).map((book, index) => ( 
                <Card className='my-3' style={{ width: '16rem',height:'28rem'}} 
                
                onClick={
                    ()=>{
                    this.setState({selected: true});
                    console.log(this)
                } 
        }>
                <Card.Img variant="top" src={this.props.book.img} key={this.props.book.asin} className={this.state.selected? "" : "noHighlight"} style={{height:'300px', width:'100%'} }/>
                <Card.Body>
                    <Card.Title>{this.props.book.title}</Card.Title>
                </Card.Body>
                </Card>
                ))}
            </Container>
        );
    }
}

export default SingleBook