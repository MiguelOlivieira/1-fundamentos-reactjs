import { format, formatDistanceToNow } from 'date-fns' //biblioteca para datas
import { ptBR } from 'date-fns/locale/pt-BR' //cconversão para data em PT BR
import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {
    name: string;
    role: string;
    avatarUrl: string;
}

interface Content{
    type: 'paragraph' | 'link';
    content: string;
}

interface PostProps{
    author: Author;
    publishedAt: Date;
    content: Content[];
}
export function Post( { author, publishedAt, content }: PostProps){  //destructuring 
    const [comments, setComments] = useState([ //State responsável por controlar os comentários
    'Muito bom, haha'
        
    ])



   
    const [newCommentText, setNewCommentText] = useState('') //newCommentText armazena tudo que é digitado (tempo real)
   
    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { //formatação através da biblioteca date-fns
    locale: ptBR,
   })

   const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{ //tempo relativo ao usuario
    locale: ptBR,
    addSuffix : true, //exibição de caracteres antes do horário
   })

   function handleUploadComment(event: FormEvent) {
    event.preventDefault() //Evitar att da pagina ao comentar
    setComments([... comments, newCommentText]); //Inserindo novo comentario na lista comments (os ... fazem uma "copia do que ja tinha")
    setNewCommentText('') //limpando o texto que ficou no formulario apos enviar

   }

   function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('') //Impede o problema de enviar o comentario caso de erro de invalid e permaneça mesmo apos digitando algo

    setNewCommentText(event.target.value) //acesso ao conteudo do formulario 


   }

   function deleteComment(commentToDeleted: string) {
    const commentsWithoutDeletedOne =  comments.filter(item => { //o filter é um metodo que percorre a lista de comentarios e remove todos que forem false
        return  item !=   commentToDeleted; //vai retornar apenas os que forem diferente do que quer deletar (o que queremos deletar vai retornar false)
    })

        setComments(commentsWithoutDeletedOne); //passando para função a nova lista apos deletar o comentario (basicamente uma copia da anterior, so que sem o comentario apagado)
   }  

   function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
   event.target.setCustomValidity("Esse campo é obrigatório") //Alteração do aviso de campo
   }
   
                                          //Não mexemos diretamente na variavel comments, isso se chama imutabilidade
   
   const isNewCommentEmpty = newCommentText.length == 0 //Se o comprim do newComment (comentario) for 0, retorna true, permitindo o botao disabled aparecer
   return (
        <article className={styles.post}>

            <header className={styles.postHeader}>
            <div className={styles.author}>
                <Avatar 
                src = {author.avatarUrl}
                />
            <div className={styles.authorInformation}>
                <strong>{author.name}</strong>
                <span>{author.role}</span>
            </div>
            </div>
        

        <time title= {publishedDateFormated} dateTime={publishedAt.toISOString()}>
         {publishedDateRelativeToNow}
         </time>
        </header>
       <div className={styles.content}>
         {content.map(item => { //iteiração para exibição de posts
            if (item.type === 'paragraph'){ 
                return <p key={item.content}>{item.content}</p>
            } else if (item.type === 'link'){
                return <p key={item.content}><a href="#">{item.content}</a></p>
            }
         })}
        </div>

        <form onSubmit = {handleUploadComment} className={styles.commentForm}>
            <strong>Deixe seu comentário</strong>

            <textarea 
                name = "comment"
                placeholder ="Deixe um comentário"
                value = {newCommentText} //Tudo que o usuário digita no <textarea> é passado para o estado newCommentText através da função handleNewCommentChange
                onChange={handleNewCommentChange} //Sempre q o conteudo da textArea mudar, a função handleNewCommentChange é chamada
                onInvalid={handleNewCommentInvalid} //Altera o texto da caixa de texto invalido (required)
                required//Obriga o usuario a digitar algo na textarea caso esteja vazia na hora que enviar
            />
        <footer>
        <button 
        type='submit'
        disabled = {isNewCommentEmpty} >  {/*Se o isNewCommentEmpty == true, o disabled vai ser ativado*/}
            Publicar
        </button>
        </footer>
        
        </form>
        
        <div className={styles.commentList}>
           {comments.map(item => { //percorre o array de comentários e cria um <Comment /> para cada comentário novo adicionado.
            return (
            <Comment content= {item}
             key={item} 
             onDeleteComment={deleteComment}
             />//Passando a função deletecomment para o componente <Comment/>
           )})}                                                       
        
        </div>
        
        </article>
    );
}