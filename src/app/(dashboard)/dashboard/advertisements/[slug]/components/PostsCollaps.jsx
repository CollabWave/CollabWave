import styles from '../advertisement-slug.module.css';

export const PostsCollaps = ({ advertisement }) => {
  return (
    <ol>
      {advertisement.tasks.map(task => (
        <li>
          <ul className={styles.list}>
            <li>
              <p className={`${styles.smallHeading} secondary-text`}>Post type</p>
              <p>{task.type ? task.type : '-'}</p>
            </li>
            <li>
              <p className={`${styles.smallHeading} secondary-text`}>Description</p>
              <p>{task.description ? task.description : '-'}</p>
            </li>
            <li>
              <p className={`${styles.smallHeading} secondary-text`}>Post submitting time limit</p>
              <p>{task.periodOfExecution ? task.periodOfExecution : '-'}</p>
            </li>
          </ul>
        </li>
      ))}
    </ol>
  );
};
