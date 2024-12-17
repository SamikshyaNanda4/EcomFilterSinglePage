import "./Nav.css"
import { GiShoppingCart } from "react-icons/gi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";

const Navigation = ({query,handleInputChange}) => {
  return (
    <>
      <nav>
          <div className="nav-container">
            <input type="text"
             placeholder="Search Here" 
             className="search-input"
             value={query}
             onChange={handleInputChange}
             />
          </div>
          <div className="profile-container">
            <a href="#">
              <FiHeart className="nav-icons" color="black"/>
              </a>
            
              <a href="#">
                <GiShoppingCart className="nav-icons" color="black"/>
                </a>

                <a href="#"><AiOutlineUserAdd className="nav-icons" color="black"/></a>

          </div>
        </nav> 
    </>
  )
}

export default Navigation
