import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';


const Profile = ()=>{
    return  (
        <div >
        <div>
          <img className = {classes.topImg} src ="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu7h6RPq8aphuJJfiXPfTi7S7xCaY5etvkUBeDAXHIRhu-s4Sg"></img>
        </div>
        <div>
          ava
          
        </div>
        <MyPosts/>
        </div>
      
    ) 
}
export default Profile;