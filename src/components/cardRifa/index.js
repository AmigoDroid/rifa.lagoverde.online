import "./styles.css"
import {FaLocationDot} from "react-icons/fa6"
import {BsCalendarDateFill} from "react-icons/bs"
import {MdAttachMoney} from 'react-icons/md'
import {TbPigMoney } from "react-icons/tb"
import { ButtonComponet } from "../button"
const CardRifa = ({urlImage,title,descrision,money,totalmoney,location,date}) => {
    return (
        <div className="CardRifaMain">
            <h3>{title}</h3>
            <img alt="imagem" src={urlImage}></img>
            <ButtonComponet text={"Aproveitar por apenas 0,9 centavinhos"}></ButtonComponet>
        </div>
    )
}
export {CardRifa}