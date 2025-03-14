import styles from './Curtida.module.css'
import { ThumbsUp} from "phosphor-react";


export function Curtida({Liked = false}){
    if (Liked){
        return(
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="#00875f" viewBox="0 0 256 256"><path d="M234,80.12A24,24,0,0,0,216,72H160V56a40,40,0,0,0-40-40,8,8,0,0,0-7.16,4.42L75.06,96H32a16,16,0,0,0-16,16v88a16,16,0,0,0,16,16H204a24,24,0,0,0,23.82-21l12-96A24,24,0,0,0,234,80.12ZM32,112H72v88H32Z"></path></svg>
        )
    } else{
        return(
            <ThumbsUp/>
        )
    }
    
}


