import axios from "axios";
import React, { useEffect, useState } from "react";

function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState(1);
  const [buttonid, setButtonid] = useState(1);

  const handleclick = () => {
    setButtonid(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${buttonid}`)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [buttonid]);

  return (
    <div>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleclick}>
        Fetch
      </button>
      {/* {posts.map((post) => {
        return <li key={post.id}>{post.title}</li>;
      })} */}
      <div>{posts.title}</div>
    </div>
  );
}

export default DataFetching;
