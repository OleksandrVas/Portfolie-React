import React from "react";
import classes from "../post/Post.module.css";

const Post = (props) => {
  return (
    <>
      <div className ={classes.post}>
        <img src="https://img1.freepng.ru/20180403/qxw/kisspng-computer-icons-symbol-avatar-logo-clip-art-person-with-helmut-5ac354968f08a9.0046040315227506145859.jpg" />
        {props.massage}
        <div>
          <span> <img src="https://clipart-best.com/img/like/like-clip-art-18.png" className={classes.likeImg} /> {props.likeCount}</span>
        </div>
      </div>
    </>
  );
};

export default Post;
