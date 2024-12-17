import "./Recommended.css"
import Button from "../COMPONENTS/Button"
const Recommended = ({handleClick}) => {
  return (
   <>
   <div className="">
    <h2 className="recommended-title">Recommended</h2>
     <div className="recommended-flex">
      {/* <button className="btns">All Products</button> */}
        {/* <button className="btns">Nike</button>
        <button className="btns">Adidas</button>
        <button className="btns">Puma</button>

        <button className="btns">Vans</button> */}
      <Button onClickHanldler={handleClick} value="" title="All Products"/>
      <Button onClickHanldler={handleClick} value="Nike" title="Nike"/>
      <Button onClickHanldler={handleClick} value="Adidas" title="Adidas"/>
      <Button onClickHanldler={handleClick} value="Puma" title="Puma"/>
      <Button onClickHanldler={handleClick} value="Vans" title="Vans"/>
      
     </div>
   </div>
   </>
  )
}

export default Recommended
