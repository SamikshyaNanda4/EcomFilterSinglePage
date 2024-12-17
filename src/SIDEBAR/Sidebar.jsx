import "./Sidebar.css"
import Category from "./category/Category"
import Price from "./price/Price"
import Colors from "./colors/Colors"
const Sidebar = ({handleChange,handleFilter}) => {
    console.log(handleChange)
  return (
   <>
    <section className="sidebar">
        <div className="logo-container">
           <img src="./logo.svg" alt="logo" className="logo" />
        </div>

        <Category handleChange={handleChange}/>
        <Price  handleFilter={handleFilter} handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
    </section>
   </>
  )
}

export default Sidebar
