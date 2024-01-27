import React, { Component, Fragment } from 'react'
import CartItem from './CartItem'
import GioHang from './GioHang';
import Modal from './Modal';
const sanPham=[
    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg" },
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/meizuphone.jpg" },
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/applephone.jpg" }
  ]

export default class PhoneShop extends Component {
    //
constructor(){
    super();
    this.state=({
        gioHang:[],
        modal:{
            title:'',
            content:'',
            open:false,
            onClose:null,
            onOk:null,
        }
    })
}
// dóng modal
    closeModal=()=>{
        this.setState({
            modal:{
                open:false
            }
        })
    };
    // thêm sản phẩm    
    addProduct=(product)=>{
        this.setState({
            modal:{
                title:'Thêm sản phẩm',
                content:'Bạn có thêm sảm phẩm vào giỏ hàng không ?',
                open:true,
                onClose:()=>{
                this.setState({
                        modal:{
                            open:this.closeModal(),
                        }
                    })
                },
                onOk:()=>{
                    const newCart=[...this.state.gioHang];
                    let productE= this.state.gioHang.find((sp)=>{
                     return sp.maSP==product.maSP
                
                 });
                 //    console.log(productE);
                 if(productE){
                     productE.soLuong+=1;
             
                 }else{
                     productE={...product,soLuong:1}
                     newCart.push(productE)
                 }
                     console.log(newCart);
                     this.setState({
                         gioHang:newCart,
                     })
                     this.closeModal();
                }
            }
        })
      
    }
    // Xoá sản phẩm
    delProduct=(maProduct)=>{

        this.setState({
            modal:{
                title:'Xoá sản phẩm',
                content:'Bạn có muốn xoá sản phẩm không ?',
                open:true,
                onClose:()=>{
                this.setState({
                        modal:{
                            open:this.closeModal(),
                        }
                    })
                },
                onOk:()=>{
                 
                    const newCart=this.state.gioHang.filter((sp)=>{
                        return sp.maSP!==maProduct;
                    });
                    this.setState({
                        gioHang:newCart,
                    });
                    this.closeModal();
                }
            }
        })

       
    }
    // tăng số lượng
    handletangSL=(msp)=>{
        // console.log(pd);
        const index=this.state.gioHang.findIndex((sp)=>{
            return sp.maSP==msp;
        })
        console.log(index);
        let newCart=[...this.state.gioHang];
        let productTang=newCart[index];
        productTang.soLuong+=1;
        this.setState({
            gioHang:newCart,
        })
    }
    // giảm số lượng
    handleGiamSL=(msp)=>{
        const index=this.state.gioHang.findIndex((sp)=>{
            return sp.maSP==msp;
        })
        
        let newCart=[...this.state.gioHang];
        let productGiam=newCart[index];
        console.log(productGiam);
        if(productGiam.soLuong==1){
            this.delProduct(productGiam.maSP);
        }else{
          
            productGiam.soLuong-=1;
            this.setState({
                gioHang:newCart,
            })
        }
     
    }
    //render sản phẩm
   renderProducts =()=>{
    return sanPham.map((item)=>{
  return (
  
<CartItem data={item}  key={item.maSP} addProduct={this.addProduct} />
  )
    
})
    }
    render() {
   
    return (
        <div className='w-50 container'>
        <GioHang 
        data={this.state.gioHang} 
        delProduct={this.delProduct}
        handletangSL={this.handletangSL}
        handleGiamSL={this.handleGiamSL}
        />
        <Modal 
        title={this.state.modal.title}
        content={this.state.modal.content}
        open={this.state.modal.open}
        onClose={this.state.modal.onClose}
        onOk={this.state.modal.onOk}
        
        />
      <div className='d-flex'>{this.renderProducts()}</div>
        
        </div>
    )
  }
}
