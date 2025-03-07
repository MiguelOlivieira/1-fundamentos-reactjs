import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { Curtida } from "./Curtida";

export function Comment(){
    return(
        <div className={styles.comment}>
             <Avatar hasBorder = {false} src = "https://i.pinimg.com/736x/04/10/77/0410771067bdb8018a368f7b7bfc09f4.jpg"/>
             <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndDate}>
                        <strong>Devon Lane</strong>
                        <time title= "3 de Março de 2025 às 16:04" dateTime="03/03/2025 16:04"> Cerca de    1 hora atrás</time>
                        </div>

                        <button title="Apagar comentário"><Trash size={24   }/></button>
                    </header>
                    <p>Muito bem!</p>
                </div>
                <footer>
                    <button>
                     <Curtida Liked = {false}/>
                     Aplaudir <span>20</span>
                     </button>
                </footer>
             </div>
        </div>
       
    )
}