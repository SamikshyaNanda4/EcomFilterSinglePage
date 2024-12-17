import "./Category.css"
import Input from "../../COMPONENTS/Input"

const Category = ({handleChange}) => {
  return (
    <div>
    <h2 className="sidebar-title">Category</h2>
    <div>
        <label className="sidebar-label-container">
            <input type="radio" onChange={handleChange} value="" name="test" />
            <span className="checkmark"></span>All
        </label>
      
       <Input handleChange={handleChange} value="sneakers" title="Sneakers" name="test" />
       <Input  handleChange={handleChange} value="flats" name="test" title="Flats"/>
       <Input  handleChange={handleChange} value="sandals" name="test" title="Sandals"/>
       <Input  handleChange={handleChange} value="heels" name="test" title="Heels"/>
       <Input  handleChange={handleChange} value="football" name="test" title="Football"/>
    </div>
    </div>
  )
}

export default Category
