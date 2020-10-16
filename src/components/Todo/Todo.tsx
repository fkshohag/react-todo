import React from 'react';
import styles from './Todo.module.scss';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Paper from '@material-ui/core/Paper';
import Task from '../Task/Task';
import TaskModal from '../TaskModal/TaskModal';

const Todo: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={styles.Todo} data-testid="Todo">
      <Container className={styles.Todo}>
        <div className={styles.buttonAlignment}>
          <Button variant="contained" onClick={handleOpen} color="primary">Add To-do</Button>
          <Button variant="contained" color="secondary">Import Json</Button>
          <TaskModal open={open} handleClose={handleClose}></TaskModal>
        </div>
        <TableContainer component={Paper}>
          <Table className={styles.table}>
            <TableHead>
              <TableRow>
                <TableCell className={styles.textAlign}>To Do</TableCell>
                <TableCell className={styles.textAlign} align="right">In progress</TableCell>
                <TableCell className={styles.textAlign} align="right">Done</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell className={styles.ColumnStyle}>
                  <Task></Task>
                  <br></br>
                  <Task></Task>
                </TableCell>
                <TableCell className={styles.ColumnStyle}>SD</TableCell>
                <TableCell className={styles.ColumnStyle}>SD</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
}

export default Todo;
