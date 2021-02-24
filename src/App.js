import './App.css';
import React, {useState, useEffect} from 'react'
import PostContainer from './components/PostContainer'

function App() {
  const [ posts, setPosts] = useState([]);
  const URL = 'https://bender-blog.herokuapp.com/posts';

  useEffect( async () => {
    const llamado = await fetch(URL)
    if (!llamado.ok) {
      throw new Error(`HTTP error! status: ${llamado.status}`);
    } else {
      let jsonBender = llamado.json()
      Promise.all([jsonBender])
      .then((data) => setPosts(...data))
    }
  }, [])


  return (
    <div className="App">
        <h1>The incredible blog of Bender The Robot</h1>
        {posts.length > 0 ? <PostContainer arreglo={posts}/> : null}
    </div>
  );
}

export default App;
