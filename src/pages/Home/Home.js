
import { useEffect, useState } from "react";
import ProductCard from "../../component/Home/ProductCard/ProductCard";
import Footer from "../../component/Shared/Footer/Footer";
import Header from "../../component/Shared/Header/Header";


    function Home(){

            const [products , setProducts] = useState ([]);
            const [cartitemcount, setcartitemcount] = useState(0);
            useEffect(()=> {
                fetch("Product.json")

                .then((res) => res.json())
    
                .then((res) => {

                    res.forEach(o=>{
                        o.qty=1;
                        o.Rating=Math.ceil(Number(o.Rating));
                    })

                    setProducts(res);
                    
                } );
            },[]);

           function notifycartupdate(){
            console.log("home is notified");
            let items = localStorage.getItem("cart");
        if(items){
            const cartitems = JSON.parse(items);
            setcartitemcount(cartitems.length);

        }
           }
        

        return(
            <div>

                <Header
                cartitemcount={cartitemcount} />


                {/*products*/}
                <div className="row">
                {
                    products.map((product, i) => (
                        <div className="col-3">

                         <ProductCard 
                         key={product.id}
                         item = {product} 
                         index= {i} 
                         
                         notify = {notifycartupdate}
                         
                         />
                         </div> ))
                }   
                </div>
                
            
                <Footer/>

            </div>
        );
    }

    export default Home;