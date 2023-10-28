import { useEffect, useState } from 'react';
import './Cartitem.css';

    function Cartitem(props){

        let [quantity, setQuantity] = useState(1);
        let [totalprice, setPrice] = useState(props.item.number);

        useEffect(()=>{
            if(quantity>0){
                setPrice(props.item.number);          
            }
        },[props]); 

        function handleQuantitychange(value){
            if(value>0){
                totalprice = Number(props.item.number)*value;
                setQuantity(value);
                setPrice(totalprice);
            }else{
                totalprice=0;
                setPrice(totalprice);
                setQuantity(0);
            }
            props.updateprice(props.item, value);
            
        }

        return(
            <div className="cart-item">
                <div className='container1'>

                <div className='insidecontainer'>
                    <img className='cart-image' src={props.item.image}></img>
                </div>
                <div className='insidecontainer'>
                    <h4>{props.item.Detail}</h4> 
                </div>

                </div>

                <div className='container2'>
                <button className='btn btn-danger' onClick={()=>{props.delete(props.index)}}>Delete</button>
                    <div className='insidecontainer'>
                        <h4> &#8377;{totalprice}</h4>
                    </div>

                    

                    <div className='quantity btngroup'>
                        <button className='btn btn-minus' onClick={()=> handleQuantitychange(quantity<=1?0:quantity-1)}>-</button>
                        <button className='btn btn-primary'>{quantity}</button>
                        <button className='btn btn-plus'onClick={()=> handleQuantitychange(quantity+1)}>+</button>

                    </div>

                </div>
                
                
            </div>
        );
    }

    export default Cartitem ;