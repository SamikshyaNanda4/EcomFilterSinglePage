import "./Products.css"
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoBagOutline } from "react-icons/io5";
import Card from '../COMPONENTS/Card.jsx'

const Products = ({result}) => {
  return (
    <>
     <section className="card-container"> {result}</section>
     </>
  )
}

export default Products

