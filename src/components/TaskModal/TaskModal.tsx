import React from 'react';
import styles from './TaskModal.module.scss';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade'; 

export interface TaskModalProps {
  open?: any;
  handleClose?: ()=>void;
}

const TaskModal: React.FC<TaskModalProps> = ({open, handleClose}) => (
  <div className={styles.TaskModal} data-testid="TaskModal">
    <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={styles.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
  </div>
);

export default TaskModal;
