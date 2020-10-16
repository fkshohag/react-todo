import React from 'react';
import styles from './TaskModal.module.scss';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


export interface TaskModalProps {
  open?: any;
  handleClose?: () => void;
}

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const TaskModal: React.FC<TaskModalProps> = ({ open, handleClose }) => {
  const classes = useStyles();
  return (
  <div className={styles.TaskModal} data-testid="TaskModal">
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <form noValidate autoComplete="off">
            <div>
              <TextField required id="standard-required" label="Required" defaultValue="Hello World" />
              <TextField disabled id="standard-disabled" label="Disabled" defaultValue="Hello World" />
              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
              />
            </div>
          </form>
        </div>
      </Fade>
    </Modal>
  </div>
  );
}

export default TaskModal;
