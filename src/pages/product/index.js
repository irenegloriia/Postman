import React, { useEffect, useState } from 'react';
import './style.css';
import { imageExample } from '../../assets';
import axios from 'axios';
import { getCookie } from '../../utils/cookie';
import { productService } from '../../services';

const Product = () => {
  const [posts, setPosts] = useState([]);
  const [userDataLoading, setUserDataLoading] = useState(false);

  const token = JSON.parse(getCookie('token'));

  useEffect(() => {
    // setUserDataLoading(true);
    axios
      .get('http://167.99.78.155:8080/api/product?limit=20&offset=0&search=', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        // console.log(res);
        // this.setState({ posts: res.data });
        setPosts(res.data.data);
        // console.log(posts[0].name);
        console.log(posts);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        // setUserDataLoading(false);
      });
  });

  // useEffect(() => {
  //   console.log(token);
  //   setUserDataLoading(true);
  //   productService
  //     .getProduct()
  //     .then((res) => {
  //       console.log(res);
  //       // setName(res.data.name);
  //       // setDescription(res.data.email);
  //       // setImage(res.data.email);
  //     })
  //     .catch((err) => {
  //       return console.log(err);
  //     })
  //     .finally(() => {
  //       setUserDataLoading(false);
  //     });
  // }, [token]);

  return (
    <div className="pageHome-wrapper">
      <h1>All Product!</h1>
      {userDataLoading ? (
        <span>Loading...</span>
      ) : (
        <div className="box">
          <div class="tes">
            {posts.map((post) => {
              return (
                <div class="content1 pas">
                  <img
                    className="pic"
                    alt="background1"
                    src={post.variants[0].images[0].original_url}
                  />
                  <p>{post.name}</p>
                  <p>{post.description}</p>
                </div>
              );
            })}
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;