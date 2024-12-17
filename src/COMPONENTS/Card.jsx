import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";

const Card = ({ img, title, star, reviews, prevPrice, newPrice,rating }) => {
  const starMap ={
    star: <MdOutlineStarPurple500/>,
  }

  const totalRating = (rating) => {
   const rate= parseInt(rating);
    const arr=Array(rate) // Create an array with `rating` number of elements
      .fill(0) // Fill the array with placeholder values
      .map((_, index) => <MdOutlineStarPurple500 />); // Render stars
      return arr;
  };



  return (
    
         <section className="card">
        
              <img src={img} alt={title} className="card-img" />
              <div className="card-details">
                <h3 className="card-title">{title}</h3>
                <section className="card-reviews">
                {totalRating(rating)}
                <span className="total-reviews">{reviews}</span>
             
                </section>
                <section className="card-price">
                  <div className="price">
                     <del>{prevPrice}</del> {newPrice}
                 </div>
                 <div className="bag">
                  <IoBagOutline className="bag-icon"/>
                  </div>
                  </section>
        
                 
              
              </div>
              </section>
  )
}

export default Card
