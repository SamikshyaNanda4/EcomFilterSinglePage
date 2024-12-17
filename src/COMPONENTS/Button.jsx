

const Button = ({onClickHanldler, value,title}) => {
  return (
    <div>
      <button onClick={onClickHanldler} value={value} className="btns">{title}</button>
    </div>
  )
}

export default Button
