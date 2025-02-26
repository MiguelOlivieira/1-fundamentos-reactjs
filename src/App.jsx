
import { Header } from "./components/header";
import { Post } from "./Post";
import styles from "./App.module.css"
import "./global.css"
import { Sidebar } from "./components/Sidebar";
export function App() {
  return (
  <div>
    <Header/>
    <div className={styles.wrapper}>
      <Sidebar/>
      
      <main>
      <Post 
      author = "Leonardo Antonio" 
      content = "Robloxé muito legal amo roblox eu amo a kezia meu nome é leo"
        />
  

   <Post 
      author = "Emanueu Guerra"
      content = "Eu amo fifa e tenho uma namorada"
   />
      </main>
    </div>
  
   </div>
  )
}
