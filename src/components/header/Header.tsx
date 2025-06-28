import { Link } from "react-router-dom"
import { Iconify } from "../iconify/Iconify"
import style from "./style.module.css"

export const Header =()=>{
    return <header className={style.header}>
        <fieldset className={style.fieldset}>
            <Iconify icon="iconamoon:search-duotone" className={style.icon} onClick={function (): void {
                throw new Error("Function not implemented.")
            } } />
            <input type="text" placeholder="escreva aqui alguma coisa" />
        </fieldset>
        <p>the script</p>
        <div>
        <Iconify icon="mi:email" color="dimgray" />
        <Iconify icon="material-symbols:settings-rounded" color="dimgray"/>
        <Iconify icon= "carbon:user-avatar-filled" color="blue"/>
        <Iconify icon="solar:add-circle-bold" color="dimgray"/>
        </div>
    </header>
}