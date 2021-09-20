import React from "react";
import styles from "./newPost.module.css";

export default function newPost(props) {
  let onAddPost = () => {
    props.callbacks.addPost();
  };
  let onUpdateTextareaValue = (event) => {
    props.callbacks.updateTextareaValue(event.target.value);
  };
  return (
    <div className={styles.newPost}>
      <div className={styles.title}>New post</div>
      <div className={styles.form}>
        <textarea
          value={props.textareaValue}
          onChange={onUpdateTextareaValue}
          rows="1"
          className={styles.textarea}
        />
        <button className={`${styles.button} ${styles.btn}`} onClick={onAddPost}>
          Send
        </button>
      </div>
    </div>
  );
}
