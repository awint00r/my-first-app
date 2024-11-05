import React, { Component } from 'react';
import './Post.css';
import { FaRegHeart, FaRegComment, FaRegBookmark, } from "react-icons/fa";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { IoPaperPlaneOutline } from "react-icons/io5";
class Post extends Component {
    render() {
        return (
            <div className="content">
                <header className="content-header">
                    <img src="https://placehold.co/50x50/png"></img>
                    <span className="username"></span>
                    <span className="location"></span>
                    <PiDotsThreeOutlineFill className="settings"></PiDotsThreeOutlineFill>
                </header>
                <div className="content-photo"></div>
                <img src="https://placehold.co/100x300/png"></img>
                <footer className="content-footer">
                    <div className="content-likes">
                        <FaRegHeart className="heart-logo"></FaRegHeart>
                        <span className="numberOfLikes"></span>
                    </div>
                    <div className="content-comments">
                        <FaRegComment className="comment-logo"></FaRegComment>
                        <span className="numberOfComments"></span>
                    </div>
                    <div className="content-shares">
                        <IoPaperPlaneOutline className="share-logo"></IoPaperPlaneOutline>
                        <span className="numberOfShares"></span>
                    </div>
                </footer>
            </div>  
        );
    }
}
export default Post;