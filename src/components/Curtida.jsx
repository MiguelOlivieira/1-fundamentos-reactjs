import styles from './Curtida.module.css'
import { ThumbsUp} from "phosphor-react";
export function Curtida({Liked = true}){
    return(
        <ThumbsUp  className = {Liked ?  styles.liked : styles.noLike }/>
    )
}