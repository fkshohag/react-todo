import React from 'react';
import styles from './TaskModal.module.scss';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


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
                <TextField
                  required
                  label="Title"
                  variant="outlined"
                  name="title"
                  id="custom-css-outlined-input" />
              </div>
              <div>
                <TextField required
                  label="Description"
                  variant="outlined"
                  name="description"
                  id="custom-css-outlined-input" />
              </div>
              <div>
                <TextField required
                  label="Assign"
                  variant="outlined"
                  name="assign_to"
                  id="custom-css-outlined-input" />
              </div>
              <Button
              className={styles.sbmt}
              type="submit"
              color="secondary"
              >
                Add New Task
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default TaskModal;
