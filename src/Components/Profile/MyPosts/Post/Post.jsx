import React from 'react';
import classes from './Post.module.css'


const Post = (props) => {

    return (

        <div className={classes.item}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCgiXU6Ctbe-4AALT5yShvhFIKe9PIsoz7gt0rDr4GtZGMBdr_Hg"></img>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )
}
export default Post;