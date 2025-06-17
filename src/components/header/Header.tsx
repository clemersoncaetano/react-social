import { Iconify } from "../iconify/Iconify"
import style from "./style.module.css"

export const Header =()=>{
    return <header className={style.header}>

        <nav>
            <a href="/">Home</a>
            <Iconify icon=""/>
            <a href="/login">Login</a>
         <a href="/cadastro">Cadastro</a>
        </nav>
    </header>
}