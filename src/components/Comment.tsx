import { Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { Curtida } from "./Curtida";
import { useState } from "react";

interface CommentProps {
    content: string,
    onDeleteComment: (comment: string) => void; //onDeleComment não retorna nada, porém ela recebe uma outra função (deleteComment) que por sua vez recebe uma string
}


export function Comment( { content, onDeleteComment } : CommentProps){
    
    const [handleLikeDetect, setHandleLikeDetect] = useState(false); {/*UseState define handleDetect como false,  a função setHandleDetect altera esse valor sempre que a mesma for chamada */}

    function handleLike(){
        LikeNumberIncreaseOnClick(); 
        return(
          setHandleLikeDetect(!handleLikeDetect)
         )
     /* setHandleDetect (funcao criada no useState) inverte o valor do handleDetect (padrão false) */
       
    }
    const [LikeCount, setLikecount] = useState(0);
    
    function LikeNumberIncreaseOnClick(){
          setLikecount(LikeCount + 1)
          setLikecount(LikeCount + 1)
          setLikecount(LikeCount + 1)
          setLikecount(LikeCount + 1)
          setLikecount(LikeCount + 1)
    }

    function handleDeleteComment(){
        console.log("Deletar");

        onDeleteComment(content)//Passando para a função o content como parametro (basicamente o post)
    }

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

                        <button onClick={handleDeleteComment} title="Apagar comentário">
                        <Trash size={24   }/>
                        </button>
                    </header>
                    <p>{content}</p>
                   
                </div>
                <footer>

                    <button onClick={handleLike}>
                    
                    {handleLikeDetect ? <Curtida Liked = {true} /> : <Curtida Liked = {false}/>} 
                     Aplaudir <span>{LikeCount}</span>
                    
                     </button>
                    
                </footer>
             </div>
        </div>
)
}