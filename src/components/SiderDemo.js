import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './SiderDemo.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import fire from '../config/Fire';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
// import Stock from './Stock';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const logout = e => {

  fire.auth().signOut();
}

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  

  render() {
    return (
      <div>
        <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<DesktopOutlined />}>
              Stock
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Import">
              <Menu.Item key="3">FromImport</Menu.Item>
              <Menu.Item key="4">ShowImport</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<UserOutlined />} title="Export">
              <Menu.Item key="5">FormExport</Menu.Item>
              <Menu.Item key="6">ShowExport</Menu.Item>
            </SubMenu>
            <Menu.Item key="4" icon={<PieChartOutlined />}>
              Graph
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />} onClick={logout}/>

          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
            </Breadcrumb>
          </Content>
          <Footer style={{ textAlign: 'center' }}>STOCK CGA</Footer>
        </Layout>
      </Layout>
      </div>
      
    );
  }
}

// ReactDOM.render(<SiderDemo />, document.getElementById('container'));

export default SiderDemo;