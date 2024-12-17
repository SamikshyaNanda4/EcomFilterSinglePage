import Input from "../../COMPONENTS/Input"

const Colors = ({handleChange}) => {
  return (
    <div style={{fontFamily: "Poppins", textAlign: "center",fontSize: "12px"}}>
        <h2 className="sidebar-title color-title">Colors</h2>
        <label className="sidebar-label-container">
            <input type="radio" onChange={handleChange} value="" name="test3" />
            <span className="checkmark all" ></span>All
        </label>
        
        <Input handleChange={handleChange} value="black" name="test3" title="Black" color="black"/>
        <Input handleChange={handleChange} value="blue" name="test3" title="Blue" color="blue"/>
        <Input handleChange={handleChange} value="red" name="test3" title="Red" color="red"/>
        <Input handleChange={handleChange} value="green" name="test3" title="Green" color="green"/>
        {/* <Input handleChange={handleChange} value="white" name="test3" title="White" color="white"/> */}

        <label className="sidebar-label-container">
                <input type="radio" onChange={handleChange} value="white" name="test3" />
                <span className="checkmark" style={{backgroundColor:"#faf9f6",border:"2px solid black"}}></span>White
        </label>
    </div>
  )
}

export default Colors
