 import { PencilLine } from 'phosphor-react' /* Importando o ícone de lápis através de um website */

import styles from "./Sidebar.module.css"
export function Sidebar() {
    return(
        <aside className={styles.Sidebar}>
            <img className={styles.banner} 
            src="https://images.hdqwalls.com/download/dark-souls-iii-4k-4n-500x400.jpg" /> 

        <div className={styles.profile}>
        <img className={styles.avatar} src="https://i.pinimg.com/736x/04/10/77/0410771067bdb8018a368f7b7bfc09f4.jpg" />
        <strong>Renato Antonio Guerra</strong>
        <span>Jogador profissional de Roblox, LoL e fifa</span>
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