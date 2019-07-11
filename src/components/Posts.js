import React from 'react';
import postData from '../postData';
import { Link } from 'react-router-dom';

export default function Posts(props) {
  console.log(props);
  return (
    <div>
      {postData.map(post => {
        return <Link to={`${props.match.path}/${post.id}`}>{post.title}</Link>;
      })}
    </div>
  );
}
