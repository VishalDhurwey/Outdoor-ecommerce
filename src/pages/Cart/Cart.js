import { useEffect, useState } from "react";
import Cartitem from "../../component/Cart/Cartitem/Cartitem";
import Header from "../../component/Shared/Header/Header";
import "./Cart.css";


    function Cart(){

        const[cartitems, setCartitem] = useState([]);
        const[totalprice, setTotalprice] = useState(0);

        useEffect(()=>
        {
            let cart = localStorage.getItem("cart");
            let cartitems=JSON.parse(cart);
            setCartitem(cartitems);
            updatetotalprice(cartitems);



        //fetch("Product.json")
        //.then ((res) => res.json())

        //.then ((res)=> {
        //    updatetotalprice(res);
        //    setCartitem(res);
        //    });
        }, []);

        
        function updateprice(item, quantity){
            console.log(quantity);
             let items = cartitems; 
             let cartitemIndex = items.findIndex((i)=> i.name === item.name );            
             items[cartitemIndex].qty = quantity;
             console.log(items);
             setCartitem(items);
             updatetotalprice(items);
        }

        function updatetotalprice(res){
            let sum = 0;
            for(let i=0; i< res.length; i++)
            {
                sum=sum+Number(res[i].number)*Number(res[i].qty);
            }
            console.log(sum);
            setTotalprice(sum);
        }

        function deleteitem(index){
            let items = cartitems;
            items.splice(index, 1);
            setCartitem(items);
            updatetotalprice(items);
            localStorage.setItem("cart", JSON.stringify(items));
        }
        
        return(
            <div className="cart-container">
                <Header/>
                <h4 className="totalprice">Total Price:{totalprice}</h4>

                <div>{
                        cartitems.map((item, index)=>(
                            
                                <Cartitem updateprice={updateprice} delete={deleteitem} key={index} item={item} index={index}/>
                            
                        ))
                    }
                    
                </div>
            </div>

        )}

        export default Cart;
    