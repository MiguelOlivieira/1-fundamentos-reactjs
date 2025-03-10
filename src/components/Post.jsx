import { format, formatDistanceToNow } from 'date-fns' //biblioteca para datas
import ptBR from 'date-fns/locale/pt-BR' //cconversão para data em PT BR
import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';
import { useState } from 'react';



export function Post( { author, publishedAt, content } ) {  //destructuring 
    const [comments, setComments] = useState([
        1,
        2,
        
    ])


   const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { //formatação através da biblioteca date-fns
    locale: ptBR,
   })

   const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{ //tempo relativo ao usuario
    locale: ptBR,
    addSuffix : true, //exibição de caracteres antes do horário
   })

   function handleUploadComment() {
    event.preventDefault()
    setComments([... comments, comments.length + 1]);
   }

    return (
        <article className={styles.post}>

            <header className={styles.postHeader}>
            <div className={styles.author}>
                <Avatar src = {author.avatarUrl}/>
            <div className={styles.authorInformation}>
                <strong>{author.userName}</strong>
                <span>{author.role}</span>
            </div>
            </div>
        

        <time title= {publishedDateFormated} dateTime={publishedAt.toISOString()}>
         {publishedDateRelativeToNow}
         </time>
        </header>
       <div className={styles.content}>
         {content.map(item => { //iteiração para exibição de posts
            if (item.type === 'paragrafo'){ 
                return <p>{item.content}</p>
            } else if (item.type === 'link'){
                return <p><a href="">{item.content}</a></p>
            }
         })}
        </div>

        <form onSubmit = {handleUploadComment} className={styles.commentForm}>
            <strong>deixe seu comentário</strong>

            <textarea 
                placeholder="Deixe um comentário"
            />

        <footer>
        <button type='submit'>
            Publicar
        </button>
        </footer>
        </form>
        
        <div className={styles.commentList}>
           {comments.map(item =>{
            return <Comment />
           })}
        
        </div>
        
        </article>
    );
}