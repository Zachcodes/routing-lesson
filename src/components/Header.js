import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <Link to="/one">One</Link>
      <Link to="/one/two">Two</Link>
      <Link to="/posts">Posts</Link>
    </div>
  );
}
