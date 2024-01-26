'use client';

import { useEffect, useState } from 'react';

import { projects } from '@/mockData/projects';

import { MobileAndTabletModal } from './MobileAndTabletModal';
import { DesktopModal } from './DesktopModal';

import styles from '../../projects.module.css';

export const TasksModal = ({ projectId }) => {
  const project = projects.find(project => project.id === projectId);
  const [taskToShow, setTaskToShow] = useState({});
  const [taskNumber, setTaskNumber] = useState(0);
  const [fulfillment, setFulfillment] = useState(0);

  useEffect(() => {
    const submittedTasks = project.tasks.filter(task => task.status === 'submitted').length;
    const allTasks = project.tasks.length;
    const submittedTasksPercent = Math.round((submittedTasks / allTasks) * 100);
    setFulfillment(submittedTasksPercent);
  }, []);

  return (
    <>
      <div className={styles.tabletModal}>
        <MobileAndTabletModal
          taskNumber={taskNumber}
          setTaskNumber={setTaskNumber}
          taskToShow={taskToShow}
          setTaskToShow={setTaskToShow}
          fulfillment={fulfillment}
          project={project}
          projectId={projectId}
        />
      </div>
      <div className={styles.desktopModal}>
        <DesktopModal
          taskNumber={taskNumber}
          setTaskNumber={setTaskNumber}
          taskToShow={taskToShow}
          setTaskToShow={setTaskToShow}
          fulfillment={fulfillment}
          project={project}
          projectId={projectId}
        />
      </div>
    </>
  );
};
