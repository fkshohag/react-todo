import React from 'react';
import styles from './Task.module.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const Task: React.FC = () => (
  <div className={styles.Task} data-testid="Task">
    <Card className={styles.card}>
      <CardContent>
       <h1>Hello Man</h1>
      </CardContent>
    </Card>
  </div>
);

export default Task;
