import React from 'react';
import postData from '../postData';

export default function Post(props) {
  //   console.log('props', props);
  let selectedPost = postData.find(post => post.id === +props.match.params.id);
  return (
    <div>
      <h1>{selectedPost.title}</h1>
      <p>{selectedPost.text}</p>
    </div>
  );
}
