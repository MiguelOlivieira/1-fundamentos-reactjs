import { Comment } from './Comment';

import styles from './Post.module.css';

export function Post() {
    return (
        <article className={styles.post}>

            <header className={styles.postHeader}>
            <div className={styles.author}>
                <img src="https://i.pinimg.com/736x/04/10/77/0410771067bdb8018a368f7b7bfc09f4.jpg" alt="" />
            <div className={styles.authorInformation}>
                <strong>Leonardo Antonio</strong>
                <span>Jogador profissional de Roblox</span>
            </div>
            </div>
        

        <time title= "3 de Março de 2025 às 16:04" dateTime="03/03/2025 16:04"> Publicado há 1 hora atrás</time>
        </header>
       <div className={styles.content}>
            <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉 {' '}<a href=""> jane.design/doctorcare</a></p>

        <p>
            <a href="">#novoprojeto </a> {''}
           <a href="">#nlw</a> {''}
           <a href="">#rocketseat</a>
        </p>
        </div>

        <form className={styles.commentForm}>
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
            <Comment />
            <Comment />
            <Comment />
        
        </div>
        
        </article>
    );
}