import React, { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { fetchAirtableData } from './utils/requestOperations';
import PositionCard from './components/PositionCard';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  const [positions, setPositions] = useState([])

  useEffect(() => {
    (async () => {
      const positions = await fetchAirtableData();
      setPositions(positions)
    })()
  }, [])

  return (
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
    <div className="site-layout-content">
        {positions.map(position => <PositionCard values={position}></PositionCard>)}
    </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Hire Remote ©2020</Footer>
  </Layout>
  );
}

export default App;
