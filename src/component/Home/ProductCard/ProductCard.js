import './ProductCard.css';


function ProductCard(props){

  function handleaddtocart(){
    let cart = localStorage.getItem("cart");
    if(!cart){
      let cartitems=[];
      cartitems.push(props.item);
      localStorage.setItem("cart", JSON.stringify(cartitems));
    }else{
      let cartitems=JSON.parse(cart);
      cartitems.push(props.item);
      localStorage.setItem("cart", JSON.stringify(cartitems));  
    }

    props.notify();


  }

      let stars =[];
      for (let i=0;i<Number(props.item.Rating); i++){
        stars[i] = 1;
      }

  

        return(

            <div className="card hover"  >
  <img src={props.item.image}  alt="..."></img>
 <hr/>
  <div className="card-body">
    <h5 className="card-title flex-box">{props.item.name}</h5>
    <p className="card-text flex-box">{props.item.Detail}</p>
    <p className="card-text flex-box">{props.item.Price}</p>
    <div className='stars'>
    {
      stars.map(x=>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg>
        )
    }
    </div>
    
    <a href="#" className="btn btn-primary bag"onClick={handleaddtocart}>Add To Bag</a>
  </div>
</div>


        );
}

export default ProductCard ;