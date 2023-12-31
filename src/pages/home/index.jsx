import React, { useEffect, useState } from 'react'

import Banner from '../../components/banner';
import './home.scss'
import SlideProduct from '../../components/slide-product';
import { callTopNew, callTopView } from '../../services/api';
import { useQuery } from '@tanstack/react-query';
const Home = () => {

    const { data: topView } = useQuery({
        queryKey: ['TopView'],
        queryFn: () => {
            return callTopView()
        }
    })
    const { data: topNew } = useQuery({
        queryKey: ['topNew'],
        queryFn: () => {
            return callTopNew()
        }
    })
    return (
        <div className='home-area'>
            <Banner />
            <div className='topView my-3'>
                <h2 className='title-view fl'> <img src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_XuHuong_Thuong_120x120.png" />Sản phẩm nhiều lượt xem</h2>
                <SlideProduct data={topView} />
            </div>
            <div className='topNew my-3'>
                <h3 className='title-new fl'> <img src="https://cdn0.fahasa.com/media/wysiwyg/icon-menu/Icon_SanPhamMoi_8px_1.png" />Sản phẩm mới gần đây</h3>
                <SlideProduct data={topNew} />
            </div>
        </div>
    )
}

export default Home