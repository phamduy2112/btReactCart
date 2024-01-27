import React, { Component } from 'react'

export default class GioHang extends Component {
  render() {
 
    return (
       
            <table class="table">
  <thead>

    <tr>
      <th scope="col">STT</th>
      <th scope="col">Tên</th>
      <th scope="col">Hình</th>
      <th scope="col">Giá</th>
      <th>Số lượng</th>
      <th scope="col">Thành tiền</th>
      <th></th>
    </tr>
  </thead>

  <tbody>
  {this.props.data.map((product)=>{
    return (
         <tr key={product.maSP}>
      <th scope="row">{product.maSP}</th>
      <td>{product.tenSP}</td>
      <td><img src={product.hinhAnh} alt="" width={50}/></td>
      <td>{product.giaBan}</td>
      <td> 
       <button className="btn btn-success"
                onClick={()=>{
                    this.props.handleGiamSL(product.maSP)
                }} 
                  >-</button>
                  <span>{product.soLuong}</span>
         <button className="btn btn-success" onClick={()=>{
            this.props.handletangSL(product.maSP);
        }}>+</button></td>
      <td>{product.soLuong*product.giaBan}</td>
      <td onClick={()=>{this.props.delProduct(product.maSP)}}><button className='btn btn-warning'>Xoá</button></td>
    </tr>
 
    )
  })}
   
  </tbody>
  
</table>

  )
  }
}

