import React, { useEffect, useState } from 'react';
import './cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { ImBin } from 'react-icons/im'
import { Col, Empty, Row, } from 'antd';
import { countByQty, formatGia, totalCart } from '../../utils/format';
import QtyCart from '../../components/qty-cart';
import { delIdCart } from '../../redux/cart/cartSlice';
import _ from 'lodash'
import BreadcrumbCom from '../../components/breadcrumb';
import OrderStep from '../../components/order-step';
const CartPage = () => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart.cart);

    return (
        <div className='cart-area'>
            <BreadcrumbCom />
            <OrderStep step={0} />
            {cart && cart.length > 0 ?
                <Row justify={'space-between'}>
                    <Col xs={24} lg={18}>
                        <div className='cart-container'>
                            {cart.map((item, i) => {
                                return (
                                    <Row className='box-cart ' key={i}>
                                        <Col className='fl-center ' xs={6} md={4}> <Link to={`/book/${item.detail.id}`} className='box-cart_col_img'> <img src={item.detail.thumbnail} /></Link></Col>
                                        <Col className='cart-info ' xs={18} md={13}>
                                            <div className='cart-info__top text-cut2'>{item.detail.name.slice(0, 80)}</div>
                                            <Row className='cart-info__bot my-2'>
                                                <Col className='fs-2' xs={0} md={5}>{formatGia(item.detail.price)}</Col>
                                                <Col ><QtyCart qty={item.qty} id={item.detail.id} page={'cart'} /> </Col>
                                            </Row>
                                        </Col>
                                        <Col xs={6} md={0}> </Col>
                                        <Col className='fs-2 color-main fw-5 cart-info-tt' xs={14} md={3}>{formatGia(item.detail.price * item.qty)}</Col>
                                        <Col className=' fl-center' xs={4} md={3} ><ImBin
                                            onClick={() => {
                                                dispatch(delIdCart({ id: item.detail.id }));
                                            }}
                                        />
                                        </Col>
                                    </Row>
                                )
                            })}
                        </div>
                    </Col>
                    <Col xs={24} lg={6} className='cart-total' >
                        <div className='cart-total__1'>
                            <Row className='' justify={'center'}>
                                <Col xs={11}>Tổng sản phẩm</Col>
                                <Col xs={11} className='text-end'> {countByQty(cart)} </Col>
                            </Row>
                        </div>
                        <div className='cart-total__1'>
                            <Row className='' justify={'center'}>
                                <Col xs={11}>Thành tiền</Col>
                                <Col xs={11} className='text-end'> {formatGia(totalCart(cart))} </Col>
                            </Row>
                        </div>
                        <div className='cart-total__2'>
                            <Row className='' justify={'center'}>
                                <Col xs={11} className='fs-2'>Tổng số tiền</Col>
                                <Col xs={11} className='text-end fs-2 color-main '> {cart?.length > 0 && formatGia(totalCart(cart))} </Col>
                            </Row>
                        </div>
                        <div className='btn-checkout' onClick={() => cart.length > 0 && navigate('/checkout')}>
                            Đặt hàng
                        </div>
                    </Col>
                </Row>
                : <div className='not-cart'>
                    <Empty />
                    <h2>Chưa có sản phẩm trong giỏ hàng</h2>
                    <Link to={'/shop'}>Quay lại trang sản phẩm</Link>
                </div>}

        </div>
    )
}

export default CartPage