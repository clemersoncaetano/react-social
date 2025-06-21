import { useEffect } from "react"
import { Header } from "../../components/header/Header"
import { useNavigate } from "react-router-dom"
import { apiController } from "../../controller/api.controller"
import { Feed } from "../../components/feed/Feed"
import style from "./style.module.css"
import { Iconify } from "../../components/iconify/Iconify"
export const Home=()=>{
    const navigate = useNavigate()

    const validateUser=async(token:string)=>{
        try {
            const res = await apiController.get("usuarios/retrieve",{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
            if(res.data){
                localStorage.setItem("user",JSON.stringify(res.data))
            }
        } catch (error) {
            console.log(error,"eror")
            localStorage.removeItem("token")
            localStorage.removeItem("user")
             navigate("/login")
        }
    }
    useEffect(()=>{
        console.log("use effect")
        const token = localStorage.getItem("token")
        if(!token){
            //navigate("/login")
        }else{
            //validateUser(token)
        }
    },[])
    return <>
    <Header/>
    
    <main className={style.main}>
        <Iconify icon="mi:email" color="red" />
        <Iconify icon = "material-symbols:settings-rounded" color ="darkgrey"/>
        <Iconify icon = "solar:user-bold" color="blue"/>
        <Iconify icon = "solar:add-circle-bold" color="darkgrey"/>
        <section className={style.profile}>
            <p>the script</p>
            <p>Meu perfil</p>
        </section>
        <Feed/>
    </main>
    </>
}