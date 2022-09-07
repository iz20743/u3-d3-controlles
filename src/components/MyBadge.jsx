import {Component} from "react"
import{Badge,} from 'react-bootstrap'
class MyBadge extends Component{
    render(){
        return(
                <Badge pill varient="secondary"> {this.props.title}</Badge>
        )
    }
}
export default MyBadge