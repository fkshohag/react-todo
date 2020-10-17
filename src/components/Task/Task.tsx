import React from 'react';
import styles from './Task.module.scss';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

export interface TaskProps {
  item?: any;
}

const Task: React.FC<TaskProps> = ({ item }) => (
  <div className={styles.Task} data-testid="Task">
    <Card className={styles.card}>
      <CardContent>
        <p>{item.title}</p>
        <p>{item.description}</p>
        <p>{item.assign}</p>
      </CardContent>
    </Card>
  </div>
);

export default Task;
