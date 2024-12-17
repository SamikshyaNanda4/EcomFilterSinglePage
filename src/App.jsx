import { useState } from 'react'
import Navigation from './NAVIGATION/Navigation.jsx'
import Products from './PRODUCTS/Products.jsx'
import Recommended from './RECOMMENDED/Recommended.jsx'
import Sidebar from './SIDEBAR/Sidebar.jsx'
import products from './db/data.js'
import { AiFillStar } from "react-icons/ai";
import Card from './COMPONENTS/Card.jsx'
import "./index.css"

const App=()=> {
  const [selectedCategory,setSelectedCategory]=useState(null);
  //Input Filter
  const [query,setQuery]=useState("");

  const [maxRange,setMaxRange]=useState(null);
  const [minRange,setMinRange]=useState(null);



  const handleInputChange=(event)=>{
    setQuery(event.target.value);
   };

  const filterItems=products.filter((product)=>product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase())!==-1);

  //priceFilter
  const handleFilter=(event)=>{
    const priceRange=event.target.value.split("-");
    const[min,max]=priceRange;
  
    setMaxRange(max);
    setMinRange(min);
  };


  //Radio Filter
  const handleChange=(event)=>{
    setSelectedCategory(event.target.value);
    // setMaxRange(null)
    // setMinRange(null)
  };

  //Button Filter
  const handleClick=(event)=>{
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query, maxRange,minRange) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filterItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    if (maxRange && minRange) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          Number(product.newPrice )<= Number(maxRange) && Number(product.newPrice) >= Number(minRange)
      );
    }



    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice, price,rating }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
          price={price}
          rating={rating}
        />
      )
    );
  }

  const result=filteredData(products,selectedCategory,query);


   return (
     <>
      <Sidebar handleChange={handleChange} handleFilter={handleFilter}/>
      <Navigation query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClick={handleClick}/>
      <Products  result={result}/>

     </>
       )
}

export default App;