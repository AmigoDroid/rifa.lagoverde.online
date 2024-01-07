import "./styles.css"
const InputComponent = ({type,name,change,labelText}) => {
    return(
        <div className="InputComponentMain">
            <input type={type} name={name} onChange={change} required></input>
            <label>{labelText}</label>
        </div>
    )
}
export {InputComponent}