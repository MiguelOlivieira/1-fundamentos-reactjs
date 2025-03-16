 import { PencilLine } from 'phosphor-react' /* Importando o ícone de lápis através de um website */

import styles from "./Sidebar.module.css"
import { Avatar } from './Avatar';
export function Sidebar( { profile } ) {
    return(
        <aside className={styles.Sidebar}>
            <img className={styles.banner} 
            src="https://images.hdqwalls.com/download/dark-souls-iii-4k-4n-500x400.jpg" /> 

        <div className={styles.profile}>
        <Avatar src = {profile.userUrl}/>
        <strong>{profile.userName}</strong>
        <span>{profile.role}</span>
        </div>

        <footer>
           
            <a href="#">
               <PencilLine size={20}/>
                Editar seu perfil
            </a>

        </footer>
        </aside>
    );
}