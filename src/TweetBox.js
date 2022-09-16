import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@mui/material";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [tweetNickname, setTweetNickname] = useState("");
  const [tweetUsername, setTweetUsername] = useState("");
  const [tweetAvatar, setTweetAvatar] = useState("");
  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: tweetNickname,
      username: tweetUsername,
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: tweetAvatar,
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="" />
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
        <div>
          <input
            onChange={(e) => setTweetNickname(e.target.value)}
            value={tweetNickname}
            placeholder="Nickname"
            type="text"
          />
          <input
            onChange={(e) => setTweetUsername(e.target.value)}
            value={tweetUsername}
            placeholder="username"
            type="text"
          />
        </div>
        <input
          value={tweetAvatar}
          onChange={(e) => setTweetAvatar(e.target.value)}
          className="tweetBox__imageInput"
          placeholder="Optional: Enter avatar URL"
          type="text"
        />
        <Button
          onClick={sendTweet}
          type="submit"
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
