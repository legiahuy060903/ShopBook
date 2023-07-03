import { Row, Col, Rate } from 'antd'
import React from 'react'
import { formatGia } from '../../utils/format'
import { BsCartPlus } from 'react-icons/bs';
import './product.scss';
const Product = (props) => {
    const { item } = props
    return (
        <>
            <div className='product'>
                <img src={item.thumbnail} className='pt-2' />
                <p>{item.name}</p>
                <div><Row className='box-price'> <Col className='price' xs={12}>{formatGia(item.price)}</Col> <Col xs={12} className='price-cover'>{formatGia(item.price * 1.1)} </Col> </Row></div>
                <div className='my-3'>
                    <Row className='box-cart'>
                        <Col className='fl cs text-cart' xl={10} xs={0}> Add to cart</Col>
                        <Col className='cart cs' xs={6} lg={6} xl={4}> <span className='icon-cart'><BsCartPlus /></span></Col>
                        <Col className='rating' xs={18} lg={18} xl={10}><Rate defaultValue={item.rating} /></Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Product