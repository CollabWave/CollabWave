import { Checkbox, Col, Row } from 'antd';

import { blogAreas } from '@/utils/common';

import styles from './categoriesFilter.module.css';
import { montserrat } from '@/utils/fonts';

export const CategoriesFilter = ({ setFilters }) => {
  const onChange = checkedValues => {
    setFilters(checkedValues);
    console.log('checked = ', checkedValues);
  };

  const areasWithLables = blogAreas.map(area => {
    return { ...area, label: area.value };
  });

  return (
    <Checkbox.Group className={styles.wrap} onChange={onChange}>
      <Row>
        {areasWithLables.map(area => (
          <Col span={6}>
            <Checkbox className={`${montserrat.className} ${styles.col} text `} value={area.value}>
              {area.label}
            </Checkbox>
          </Col>
        ))}
      </Row>
    </Checkbox.Group>
  );
};
