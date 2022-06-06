import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import './Home.css'

function Posts() {
  // write some custom logic
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [state] = useContext(AuthContext);
  let [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get("page") || 1));

  useEffect(() => {
    setLoading(true);
    axios({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "GET",
      params: {
        page
      }
    })
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [page]);

  useEffect(() => {
    setSearchParams({
      page
    });
  }, [page]);

  return (
    <div>
      {state.token && <h3> Token: {state.token}</h3>}
      {loading && <div>Loading</div>}
      <div>
        {/* <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          PREV
        </button>
        <button
          disabled={page === data?.total_pages}
          onClick={() => setPage(page + 1)}
        >
          NEXT
        </button> */}

      <button disabled={page === 1} onClick={() => setPage(1)}>
                    1
                </button>
                <button disabled={page === 2} onClick={() => setPage(2)}>
                    2
                </button>

      </div>
      <div className="maya">
      {data.map((item) => (
        <div style={{ marginBottom: "1rem" }} key={item.id}>
          <h2>{item.id}<br/></h2>
          <div> <h3>Title:</h3>  {item.title}</div>
          <div><h3>Description:</h3>   {item.body}</div>
         
        </div>
      ))}
      </div>
    </div>
  );
}

export default Posts;

function __Navigate() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/route");
  }, []);

  return <div></div>;
}

