import { Component } from "react"
import{Alert,} from 'react-bootstrap'
class WarningSign extends Component{
    render(){
        return(
            <div>
                {[
                    'danger',
                ].map((variant) => (
                    <Alert key={variant} variant={variant}>
                    this page is not protected
                    </Alert>
                ))}
            </div>
        )
    }
}
export default WarningSign
