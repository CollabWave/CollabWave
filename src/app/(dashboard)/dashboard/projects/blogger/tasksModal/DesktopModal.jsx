'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Flex } from 'antd';
import { CarryOutOutlined } from '@ant-design/icons';

import brand from '../../../../../../assets/images/dashboard/brand.png';

import { TaskDescription } from './TaskDescription';
import { TaskResults } from './TaskResults';

import styles from '../../projects.module.css';
import { montserrat } from '@/utils/fonts';

export const DesktopModal = ({
  taskToShow,
  setTaskToShow,
  taskNumber,
  setTaskNumber,
  fulfillment,
  project,
  projectId,
}) => {
  const [infoToShow, setInfoToShow] = useState('description');

  useEffect(() => {
    setTaskToShow(project.tasks[0]);
  }, []);

  return (
    <div className={styles.modalWrap}>
      <div className={styles.leftSide}>
        <ul className={`${montserrat.className} ${styles.menuWrap} text`}>
          <li
            onClick={() => setInfoToShow('description')}
            className={`${styles.menuItem} ${
              infoToShow === 'description'
                ? 'sider__list_item sider__list_item_active border_active'
                : 'sider__list_item menu_border'
            }`}
          >
            Description
          </li>
          <li
            onClick={() => setInfoToShow('results')}
            className={`${styles.menuItem} ${
              infoToShow === 'results'
                ? 'sider__list_item sider__list_item_active border_active'
                : 'sider__list_item menu_border'
            }`}
          >
            Results
          </li>
          <li
            onClick={() => setInfoToShow('statistics')}
            className={`${styles.menuItem} ${
              infoToShow === 'statistics'
                ? 'sider__list_item sider__list_item_active border_active'
                : 'sider__list_item menu_border'
            }`}
          >
            Statistics
          </li>
        </ul>
        {infoToShow === 'description' && <TaskDescription task={taskToShow} project={project} />}
        {infoToShow === 'results' && <TaskResults task={taskToShow} projectId={projectId} />}
      </div>
      <div className={styles.rightSide}>
        <Flex align="center" vertical>
          <Image
            className={styles.image}
            width={150}
            height={150}
            alt="brand logo"
            src={project.customer.logo ? project.customer.logo : brand}
          />
          <h3 className={`${styles.brand} ${montserrat.variable} profile-heading`}>
            {project.customer.name}
          </h3>
          <Link
            className={`${styles.projectName} ${montserrat.variable} text-blue`}
            href={`/dashboard/advertisements/${project.id}`}
          >
            {project.project}
          </Link>
          <div className={`${styles.fulfillmentWrapper} fulfillment-wrapper`}>
            <div
              className={`${styles.fulfillmentLine} fulfillment-line text`}
              style={{ width: `${fulfillment}%` }}
            >
              {fulfillment}%
            </div>
            <p className={`${styles.smallText} ${montserrat.variable} text`}>
              Fulfillment of your tasks
            </p>
          </div>
        </Flex>
        <ul className={styles.tasksMenu}>
          {project.tasks.map((task, index) => (
            <li
              className={`${styles.tasksMenuItem} ${montserrat.variable} ${
                taskNumber === index
                  ? 'sider__list_item sider__list_item_active'
                  : 'sider__list_item text'
              }`}
              key={task.id}
              onClick={() => {
                setTaskNumber(index);
                setTaskToShow({ ...task });
              }}
            >
              <CarryOutOutlined style={{ fontSize: '150%' }} /> {`Task ${index + 1}`}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
