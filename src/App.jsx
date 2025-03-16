
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import styles from "./App.module.css"
import "./global.css"
import { Sidebar } from "./components/Sidebar";
//author = {url, name,  role}
//publishedAt = date
//content =  string
const posts = [
  {
    id: 1,
    author: {
        avatarUrl: "https://i.pinimg.com/736x/04/10/77/0410771067bdb8018a368f7b7bfc09f4.jpg",
        userName: "Renato Antonio Guerra",
        role: "Estudante de programação",
    },
    content: [
      {type: 'paragrafo', content: 'Fala galeraa 👋 '},
      {type: 'paragrafo', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type: 'link', content:'jane.design/doctorcare' }
    
    ],
    publishedAt: new Date('2025-03-06 17:57'),
  },
  {
    id: 2,
    author: {
        avatarUrl: "https://i.pinimg.com/736x/04/10/77/0410771067bdb8018a368f7b7bfc09f4.jpg",
        userName: "Fernando Val",
        role: "Estudante de programação",
    },
    content: [
      {type: 'paragrafo', content: 'Fala galeraa 👋 '},
      {type: 'paragrafo', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type: 'link', content:'jane.design/doctorcare' }
    
    ],
    publishedAt: new Date('2025-03-01 17:57'),
  },
  {
  id: 3,
    author: {
        avatarUrl: "https://i.pinimg.com/736x/04/10/77/0410771067bdb8018a368f7b7bfc09f4.jpg",
        userName: "Miguel  Guerra",
        role: "Estudante de programação",
    },
    content: [
      {type: 'paragrafo', content: 'Fala galeraa 👋 '},
      {type: 'paragrafo', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type: 'link', content:'jane.design/doctorcare' }
    
    ],
    publishedAt: new Date('2025-03-06 17:57'),
  },
];

const user = 
  {
    id: 1,
    profile: {
      userUrl: "https://i.pinimg.com/736x/04/10/77/0410771067bdb8018a368f7b7bfc09f4.jpg",
      userName: "Renato Antonio Guerra",
      role: "Jogador profissional de Roblox, LoL e fifa",
     }

  };

export function App() {
  return (
  <div>
    <Header/>
    <div className={styles.wrapper  }>
      <Sidebar
       profile = {user.profile}
      />
            
      <main>
      {posts.map(post => {
        return (
        
        <Post
         author = {post.author}
         content = {post.content}
         publishedAt = {post.publishedAt}
        /> 
       )
      })}
      </main>
    </div>
  
   </div>
  )
}
