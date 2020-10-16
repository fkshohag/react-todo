import React from 'react';
import styles from './Todo.module.scss'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { Button } from '@material-ui/core';

class Todo extends React.Component {
  render() {
    return <Container>
      <div>
        <Button style={{textAlign: 'left'}} variant="contained" color="primary">Add To-do</Button>
        <Button style={{textAlign: 'left'}} variant="contained" color="secondary">Import Json</Button>
      </div>
      <TableContainer component={Paper}>
        <Table className={styles.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>To Do</TableCell>
              <TableCell align="right">In progress</TableCell>
              <TableCell align="right">Done</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  }
}

export default Todo;
