import styles from "./Sidebar.module.css"

export function Sidebar() {
    return(
        <aside className={styles.Sidebar}>
            <img className={styles.banner} 
            src="https://images.hdqwalls.com/download/dark-souls-iii-4k-4n-500x400.jpg" alt="" 
            />
        <div className={styles.profile}>
        <strong>Renato Leonardo Guerra</strong>
        <span>Jogador profissional de Roblox, LoL e fifa</span>
        </div>

        <footer>
            <a href="#">
                Editar seu perfil
            </a>
        </footer>
        </aside>
    );
}