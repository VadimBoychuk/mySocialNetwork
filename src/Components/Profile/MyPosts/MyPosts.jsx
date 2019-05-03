import React from 'react';
import classes from './MyPosts.module.css'
import Post from './Post/Post';


const MyPosts = () => {
  return (
    <div>
      <div>My posts</div>

      <div>New Post</div>
      <div className={classes.posts}>
        <Post message="hi, how are u" />
        <Post message="its my first post" />
      </div>
    </div>

  )


}
export default MyPosts;