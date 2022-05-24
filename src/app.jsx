import { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';


function App({youtube}) {
  const [videos, setVideos] = useState([]);

  // when search
  const search = query => {
    youtube.search(query) //
    .then(videos => setVideos(videos));
  }

  // load 25 most popular video list
  useEffect(()=>{
   youtube.mostPopular() //
   .then(videos => setVideos(videos));
  },[])

  return  <div className={styles.app}>
              <SearchHeader onSearch={search}/>
              <VideoList videos={videos}/>
          </div>
}

export default App;
