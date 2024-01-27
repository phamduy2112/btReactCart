import React, { Component } from 'react'

export default class CartItem extends Component {
  render() {
    const {data}=this.props;
    return (
        <div className="card mx-3" style={{width: '20rem'}} key={data.maSP}>
    <img src={data.hinhAnh} className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">
        {data.tenSP}
      </h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <button className='btn btn-primary' onClick={() => {
                this.props.handleXemChiTiet(data);
              }}>Xem chi tiết</button>
        <button className='btn btn-primary' onClick={()=>{this.props.addProduct(data)}}>Thêm Giỏ Hàng</button>
    </div>
  </div>
    )
  }
}
