import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Upload from './Upload';
import { post } from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));


function getSteps() {
  return ['Rules and Regulations', 'Enter submition ID', 'Upload Article'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        <div style={{height:'350px'}}>
          <div style={{margin:'auto'}}>
            <p style={{marginTop:'25px',marginBottom:'75px',color:'black',textAlign:"center"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </div>
        </div>

      );
    case 1:
      return (
        <div style={{height:'350px'}}>
          <div style={{margin:'auto',width:'200px'}}>
            <div class="form-group">
              <h5 style={{color:'black',textAlign:"center"}}>Submission ID</h5>
              <input style={{margin:'auto',textAlign:"center"}} type="text" class="form-control"  aria-describedby="emailHelp" placeholder="Enter Submission ID"/>
            </div>


          </div>
        </div>

      );
    case 2:
      return (
        <div style={{height:'350px'}}>
          <div style={{margin:'auto'}}>
            <Upload/>
          </div>
        </div>
      );
    default:
      return 'Unknown stepIndex';
  }
}

export default function UploadStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };



  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div style={{color:'black',textAlign:"center"}}>
            <Typography className={classes.instructions}><i className="fa fa-check-circle" aria-hidden="true"></i> &nbsp; All steps completed</Typography>
            <Button class="btn btn-dark" onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button  className="btn btn-dark" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
