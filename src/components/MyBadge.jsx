import { Component } from "react"
import{Container,Badge,} from 'react-bootstrap'
class MyBadge extends Component{
    render(){
        return(
            <Container>
                <Badge bg="info">{this.props.title}</Badge>{''}
            </Container>
        )
    }
}
export default MyBadge