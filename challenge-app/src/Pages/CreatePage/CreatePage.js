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

// Imports for the TextField
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

// Imports for the Selects
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import TemplateListComponent from './TemplateListComponent/TemplateListComponent'
import TemplateFormComponent from "./TemplateFormComponent/TemplateFormComponent";

import ShareIcon from '@material-ui/icons/ShareRounded'

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
        tempDescription: ''
    };

    handleTextFieldChange = name => event => {
        this.setState( {
            [ name ]: event.target.value,
        } );
    };

    setTemplate = (title, description) => {
        this.setState({
            'tempTitle': title,
            'tempDescription': description
        })
        this.handleNext()
    }

    getStepContent( step ) {

        switch ( step ) {
            case 0:
                return <div className="CreateMainWrapper"><TemplateListComponent setTemplate={this.setTemplate}/></div>;
            case 1:
                return (
                    <div className="CreateMainWrapper">
                        <TemplateFormComponent title={this.state.tempTitle}
                                               description={this.state.tempDescription}
                                               handleTextField={this.handleTextFieldChange}/>
                    </div>
                );
            case 2:
                return <div className="CreateMainWrapper">
                    <Button variant="fab" color="primary" aria-label="Add">
                        <ShareIcon/>
                    </Button>
                </div>;
            default:
                return 'Unknown step';
        }
    }

    handleNext = () => {
        const { activeStep } = this.state;
        let { skipped } = this.state;
        if ( this.isStepSkipped( activeStep ) ) {
            skipped = new Set( skipped.values() );
            skipped.delete( activeStep );
        }
        this.setState( {
            activeStep: activeStep + 1,
            skipped,
        } );
    };

    handleBack = () => {
        const { activeStep } = this.state;
        this.setState( {
            activeStep: activeStep - 1,
        } );
    };

    handleSkip = () => {
        const { activeStep } = this.state;

        this.setState( state => {
            const skipped = new Set( state.skipped.values() );
            skipped.add( activeStep );
            return {
                activeStep: state.activeStep + 1,
                skipped,
            };
        } );
    };

    handleReset = () => {
        this.setState( {
            activeStep: 0,
        } );
    };

    isStepSkipped( step ) {
        return this.state.skipped.has( step );
    }

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <div className={classes.root}>
                <Stepper activeStep={activeStep}>
                    {steps.map( ( label, index ) => {
                        const props = {};
                        const labelProps = {};
                        if ( this.isStepSkipped( index ) ) {
                            props.completed = false;
                        }
                        return (
                            <Step key={label} {...props}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    } )}
                </Stepper>
                <div>
                    {activeStep === steps.length ? (
                        <div>
                            <Typography className={classes.instructions}>
                                All steps completed - you&quot;re finished
                            </Typography>
                            <Button onClick={this.handleReset} className={classes.button}>
                                Reset
                            </Button>
                        </div>
                    ) : (
                        <div>
                            <Typography className={classes.instructions}>{this.getStepContent( activeStep )}</Typography>
                            <div>
                                <Button
                                    disabled={activeStep === 0}
                                    onClick={this.handleBack}
                                    className={classes.button}
                                >
                                    Back
                                </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={this.handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

CreatePage.propTypes = {
    classes: PropTypes.object,
};

export default withStyles( styles )( CreatePage );
