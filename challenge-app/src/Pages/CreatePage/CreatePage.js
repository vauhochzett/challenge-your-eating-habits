import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import './CreatePage.css'

// Imports for the stepper
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import TemplateListComponent from './TemplateListComponent/TemplateListComponent'
import TemplateFormComponent from "./TemplateFormComponent/TemplateFormComponent";
import BottomStepBar from "./BottomStepBar"
import TextField from '@material-ui/core/TextField';

import { FaWhatsapp, FaFacebook, FaInstagram, FaSnapchat, FaSkype, FaCopy } from 'react-icons/fa';


const styles = theme => ( {
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
    // Text field styles
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
} );

function getSteps() {
    return [ 'Choose template', 'Customize', 'Share' ];
}


class CreatePage extends Component {
    state = {
        activeStep: 0,
        skipped: new Set(),
        tempTitle: '',
        tempDescription: '',
        showCopyLink: false
    };

    handleTextFieldChange = name => event => {
        this.setState({
            [ name ]: event.target.value,
        });
    };

    showLinkCopy = () => {
        this.setState({ showCopyLink: true });
    };

    setTemplate = ( title, description ) => {
        this.setState({
            'tempTitle': title,
            'tempDescription': description
        });
        this.handleNext()
    };

    getStepContent( step ) {

        switch ( step ) {
            case 0:
                return <div className="CreateMainWrapper"><TemplateListComponent setTemplate={ this.setTemplate }/>
                </div>;
            case 1:
                return (
                    <div className="CreateMainWrapper">
                        <TemplateFormComponent title={ this.state.tempTitle }
                                               description={ this.state.tempDescription }
                                               handleTextField={ this.handleTextFieldChange }/>
                    </div>
                );
            case 2:
                return <div className="CreateMainWrapper">
                    <h1>Share with your friends!</h1><br/>
                    <div style={ { paddingLeft: '32px' } }>
                        <FaWhatsapp className="ShareIcon" size={ '2em' }/>
                        <FaFacebook className="ShareIcon" size={ '2em' }/>
                        <FaInstagram className="ShareIcon" size={ '2em' }/>
                        <FaSnapchat className="ShareIcon" size={ '2em' }/>
                        <FaSkype className="ShareIcon" size={ '2em' }/>
                        <FaCopy className="ShareIcon" size={ '2em' } onClick={ this.showLinkCopy }/>
                    </div>
                    <div>
                        { this.state.showCopyLink ? (
                            <TextField
                                style={ { paddingLeft: '38px' } }
                                id="read-only-input"
                                defaultValue="http://127.0.0.1:3000/5j92X"
                                className={ this.props.classes.textField }
                                fullWidth
                                margin="normal"
                                InputProps={ {
                                    readOnly: true,
                                } }
                            />
                        ) : null }
                    </div>

                </div>;
            default:
                return 'Unknown step';
        }
    }

    handleNext = () => {
        const { activeStep } = this.state;
        let { skipped } = this.state;
        if ( this.isStepSkipped(activeStep) ) {
            skipped = new Set(skipped.values());
            skipped.delete(activeStep);
        }
        this.setState({
            activeStep: activeStep + 1,
            skipped,
        });
    };

    handleBack = () => {
        const { activeStep } = this.state;
        this.setState({
            activeStep: activeStep - 1,
        });
    };

    handleSkip = () => {
        const { activeStep } = this.state;

        this.setState(state => {
            const skipped = new Set(state.skipped.values());
            skipped.add(activeStep);
            return {
                activeStep: state.activeStep + 1,
                skipped,
            };
        });
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    isStepSkipped( step ) {
        return this.state.skipped.has(step);
    }

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <div className={ classes.root }>
                <Stepper activeStep={ activeStep }>
                    { steps.map(( label, index ) => {
                        const props = {};
                        const labelProps = {};
                        if ( this.isStepSkipped(index) ) {
                            props.completed = false;
                        }
                        return (
                            <Step key={ label } { ...props }>
                                <StepLabel { ...labelProps }>{ label }</StepLabel>
                            </Step>
                        );
                    }) }
                </Stepper>
                <div>
                    { activeStep === steps.length ? (
                        <div>
                            <Typography className={ classes.instructions }>
                                All steps completed - you&quot;re finished
                            </Typography>
                            <Button onClick={ this.handleReset } className={ classes.button }>
                                Reset
                            </Button>
                        </div>
                    ) : (
                        <div className={ classes.instructions }>
                            { this.getStepContent(activeStep) }
                        </div>
                    ) }
                </div>
                <BottomStepBar step={ this.state.activeStep } back={ this.handleBack } next={ this.handleNext }/>
            </div>
        );
    }
}

CreatePage.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(CreatePage);
