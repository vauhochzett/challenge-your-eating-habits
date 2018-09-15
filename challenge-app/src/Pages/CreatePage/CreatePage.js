import React, {Component} from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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

const styles = theme => ({
    root: {
        width: '90%',
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
});

function getSteps() {
    return ['Choose template', 'Customize', 'Share'];
}

function getStepContent(step) {
    var handleTextFieldChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    switch (step) {
        case 0:
            return 'Choose a template or start from scratch';
        case 1:
            return (
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="name"
                        label="Name"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={handleTextFieldChange('name')}
                        margin="normal"
                    />
                    <TextField
                        id="uncontrolled"
                        label="Uncontrolled"
                        defaultValue="foo"
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        required
                        id="required"
                        label="Required"
                        defaultValue="Hello World"
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        error
                        id="error"
                        label="Error"
                        defaultValue="Hello World"
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="password-input"
                        label="Password"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                    />
                    <TextField
                        id="read-only-input"
                        label="Read Only"
                        defaultValue="Hello World"
                        className={classes.textField}
                        margin="normal"
                        InputProps={{
                            readOnly: true,
                        }}
                    />
                    <TextField
                        id="multiline-flexible"
                        label="Multiline"
                        multiline
                        rowsMax="4"
                        value={this.state.multiline}
                        onChange={handleTextFieldChange('multiline')}
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="multiline-static"
                        label="Multiline"
                        multiline
                        rows="4"
                        defaultValue="Default Value"
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="helperText"
                        label="Helper text"
                        defaultValue="Default Value"
                        className={classes.textField}
                        helperText="Some important text"
                        margin="normal"
                    />
                    <TextField
                        id="with-placeholder"
                        label="With placeholder"
                        placeholder="Placeholder"
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="textarea"
                        label="With placeholder multiline"
                        placeholder="Placeholder"
                        multiline
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="number"
                        label="Number"
                        value={this.state.age}
                        onChange={handleTextFieldChange('age')}
                        type="number"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        margin="normal"
                    />
                    <TextField
                        id="search"
                        label="Search field"
                        type="search"
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        id="select-currency"
                        select
                        label="Select"
                        className={classes.textField}
                        value={this.state.currency}
                        onChange={handleTextFieldChange('currency')}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        helperText="Please select your currency"
                        margin="normal"
                    >
                        {currencies.map(option => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="select-currency-native"
                        select
                        label="Native select"
                        className={classes.textField}
                        value={this.state.currency}
                        onChange={handleTextFieldChange('currency')}
                        SelectProps={{
                            native: true,
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        helperText="Please select your currency"
                        margin="normal"
                    >
                        {currencies.map(option => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                    <TextField
                        id="full-width"
                        label="Label"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="Placeholder"
                        helperText="Full width!"
                        fullWidth
                        margin="normal"
                    />
                </form>
            );
        case 2:
            return 'Share with your friends';
        default:
            return 'Unknown step';
    }
}

class CreatePage extends Component {
    state = {
        activeStep: 0,
        skipped: new Set(),
    };

    handleNext = () => {
        const { activeStep } = this.state;
        let { skipped } = this.state;
        if (this.isStepSkipped(activeStep)) {
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

    isStepSkipped(step) {
        return this.state.skipped.has(step);
    }

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <div className={classes.root}>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const props = {};
                        const labelProps = {};
                        if (this.isStepSkipped(index)) {
                            props.completed = false;
                        }
                        return (
                            <Step key={label} {...props}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
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
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
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

HorizontalLinearStepper.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(CreatePage);
