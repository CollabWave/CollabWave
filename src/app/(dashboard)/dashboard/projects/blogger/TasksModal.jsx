'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { CarryOutOutlined } from '@ant-design/icons';

import brand from '../../../../../assets/images/dashboard/brand.png';

import styles from '../projects.module.css';
import { montserrat } from '@/utils/fonts';
import { projects } from '@/mockData/projects';

export const TasksModal = ({ projectId }) => {
  const project = projects.find(project => project.id === projectId);
  const [taskToShow, setTaskToShow] = useState(0);
  const [fulfillment, setFulfillment] = useState(0);

  useEffect(() => {
    const submittedTasks = project.tasks.filter(task => task.status === 'submited').length;
    const allTasks = project.tasks.length;
    const submittedTasksPercent = Math.round((submittedTasks / allTasks) * 100);
    setFulfillment(submittedTasksPercent);
  }, []);

  return (
    <div className={styles.modalWrap}>
      <div className={styles.leftSide}></div>
      <div className={styles.rightSide}>
        <Image className={styles.image} width={200} alt="brand photo" src={brand} />
        <h3 className={`${styles.brand} ${montserrat.variable} profile-heading`}>
          {project.customer}
        </h3>
        <Link
          className={`${styles.projectName} ${montserrat.variable} security-link`}
          href={`/dashboard/projects/${project.id}`}
        >
          {project.project}
        </Link>
        <div className={`${styles.fulfillmentWrapper} fulfillment-wrapper`}>
          <div className={`${styles.fulfillmentLine} fulfillment-line text`} style={{ width: `${fulfillment}%` }}>
            {fulfillment}%
          </div>
          <p className={`${styles.smallText} ${montserrat.variable} text`}>Fulfillment of your tasks</p>
        </div>
        <ul className={styles.tasksMenu}>
          {project.tasks.map((task, index) => (
            <li
              className={`${styles.tasksMenuItem} ${montserrat.variable} ${
                taskToShow === index
                  ? 'sider__list_item sider__list_item_active'
                  : 'sider__list_item text'
              }`}
              key={task.id}
              onClick={() => setTaskToShow(index)}
            >
              <CarryOutOutlined style={{ fontSize: '150%' }} /> {`Task ${index + 1}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
