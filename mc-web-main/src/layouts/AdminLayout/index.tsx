import React, { FC, useLayoutEffect, useEffect } from 'react';
import Sider from './components/Sider';
import Header from './components/Header';
import styles from './index.less';

interface Props {
  location: Location & { query: any; state: any };
}

const AdminLayout: FC<Props> = props => {
  const { children } = props;
  return (
    <div className={styles.main}>
      <div className={styles.flexLf}>
        <Sider {...props} />
      </div>
      <div className={styles.flexRt}>
        <div className={styles.head}>
          <Header {...props} />
        </div>
        <div className={styles.tags} >
          - tags -
        </div>
        <div className={styles.content}>
          <div>
            - content -
            {children}
            <div id='demo1'></div>
            <div id='demo2'></div>
          </div>
        </div>
      </div>
    </div >
  );
};
export default AdminLayout;
