import React, {Component} from 'react'
import TextField from "@material-ui/core/es/TextField/TextField";

class TemplateFormComponent extends Component{

    render(){
        return <form noValidate autoComplete="off">
            <TextField
                style={{'width': '100%'}}
                required
                id="name"
                label="Title"
                value={this.props.title}
                onChange={this.props.handleTextField( 'tempTitle' )}
                margin="normal"
            />
            <TextField
                required
                style={{'width': '100%'}}
                id="required"
                label="Description"
                multiline
                value={this.props.description}
                onChange={this.props.handleTextField( 'tempDescription' )}

                defaultValue="Hello World"
                margin="normal"
            />
        </form>
    }

}

export default TemplateFormComponent