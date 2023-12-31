import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, Avatar, theme, Badge, Col, Row } from 'antd';
const { Header, Sider, Content } = Layout;
import './main.scss';
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { BsFillBellFill } from 'react-icons/bs';
import { BiCategoryAlt, BiExit } from 'react-icons/bi';
import { RiBillLine } from 'react-icons/ri';
import { LiaComment } from 'react-icons/lia';
import { FaUserFriends } from 'react-icons/fa';

import { AiFillSetting, AiOutlineBook } from 'react-icons/ai';
import Dashboard from '../admin/page/Dashboard';
import { MdSpaceDashboard } from 'react-icons/md';
const LayoutAdmin = () => {
    const { pathname } = useLocation();
    const path = pathname.split("/")[2] || '';
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    const user = useSelector((state) => state.account.user);
    const onClick = (e) => {
        navigate(`/admin/${e.key}`);
    };


    return (
        <Layout className='layout_admin_area'>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{
                background: '#FAFAFA',
            }}>
                <div className="demo-logo-vertical" />
                <Menu
                    onClick={onClick}
                    className='custom-menu'
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={[path]}
                    items={[
                        {
                            key: '0',
                            icon: <img src={logo} />,
                            label: null,
                        },
                        {
                            key: '1',
                            icon: null,
                            label: null,
                        },
                        {
                            key: '3',
                            icon: null,
                            label: null,
                        },
                        {
                            key: '',
                            icon: <MdSpaceDashboard />,
                            label: 'Dashboard',
                        },
                        {
                            key: 'product',
                            icon: <AiOutlineBook />,
                            label: 'Sản phẩm',
                        },
                        {
                            key: 'category',
                            icon: <BiCategoryAlt />,
                            label: 'Thể loại',
                        },
                        {
                            key: 'order',
                            icon: <RiBillLine />,
                            label: 'Đơn hàng',
                        },
                        {
                            key: 'comment',
                            icon: <LiaComment />,
                            label: 'Bình luận',
                        },
                        {
                            key: 'user',
                            icon: <FaUserFriends />,
                            label: 'Khách hàng',
                        },
                        // {
                        //     key: 'exit',
                        //     icon: <BiExit />,
                        //     label: 'Khách hàng',
                        // },
                    ]}
                />
            </Sider>
            <Layout>
                <Header
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}

                >
                    <Row className='fl-between'>
                        <Col lg={18}>
                            <Button
                                type="text"
                                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                                onClick={() => setCollapsed(!collapsed)}
                                style={{
                                    fontSize: '16px',
                                    width: 64,
                                    height: 64,
                                }}
                            />
                        </Col>
                        <Col lg={6} className='header-right'>
                            <span className='header-right__name'>{user.name}</span>
                            <Avatar src={user.avatar} size={40} />
                            <BsFillBellFill />
                            <AiFillSetting />


                        </Col>


                    </Row>

                    <div>

                    </div>


                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: '#F1F1F1',
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
export default LayoutAdmin;