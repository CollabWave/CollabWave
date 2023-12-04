import { useState, useEffect } from 'react';

import { Checkbox, Col } from 'antd';

import styles from './notifications.module.css';
import { montserrat } from '@/utils/fonts';

export const CheckboxColumn = ({ column, handleCheck, reset }) => {
  const [checkedList, setCheckedList] = useState([]);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(false);

  useEffect(() => {
    if (reset) {
      setCheckedList([]);
      setIndeterminate(false);
      setCheckAll(false);
    }
  }, [reset]);

  const onChange = list => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < column.data.length);
    setCheckAll(list.length === column.data.length);
    handleCheck(list);
  };

  const onCheckAllChange = event => {
    setCheckedList(event.target.checked ? column.data : []);
    setIndeterminate(false);
    setCheckAll(event.target.checked);
    handleCheck(event.target.checked ? column.data : []);
  };

  const props = {
    indeterminate,
    onChange: onCheckAllChange,
    checked: checkAll,
  };

  return (
    <div className={`${styles.innerWrap} ${montserrat.variable} checkboxes-wrap`}>
      <Col className={`${montserrat.variable} checkboxes-header`}>
        {column.headerRender ? column.headerRender(column.header, props) : column.header}
      </Col>
      <Checkbox.Group value={checkedList} onChange={onChange}>
        {column.data.map((el, index) => (
          <Col className={` ${montserrat.variable} checkboxes-content`} key={index}>
            {column.dataRender ? column.dataRender(el) : el}
          </Col>
        ))}
      </Checkbox.Group>
    </div>
  );
};
