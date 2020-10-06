import React, { FC, useLayoutEffect, useEffect, useState } from 'react';
import { Menu, Switch, Divider } from 'antd';
import {
  MailOutlined,
  CalendarOutlined,
  AppstoreOutlined,
  SettingOutlined,
  LinkOutlined,
} from '@ant-design/icons';
import { Link } from 'umi';

const { SubMenu } = Menu;

interface Props {
  location: Location & { query: any; state: any };
}

const Sider: FC<Props> = props => {
  const { children } = props;
  const [theme, setTheme] = useState('dark' as "dark" | "light" | undefined);
  return (
    <>
      <Menu
        style={{ width: 256 }}
        theme={theme}
      // theme={this.state.theme}
      >
        <Menu.Item key="1" icon={<MailOutlined />}>
          <Link to="/">Main Page</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Demo 1">
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="d1-1">
            <Link to="/sub/demo1">Page index</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<SettingOutlined />} title="Demo 2">
          <Menu.Item key="d2-1">
            <Link to="/sub/demo2/">Page index</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="link" icon={<LinkOutlined />}>
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Ant Design
            </a>
        </Menu.Item>
      </Menu>
    </>
  );
};
export default Sider;
