import React from "react"

export default (props) => {
  const { 
    post,
    clickLike,
    clickDislike
  } = props

  const {
    id,
    title,
    body,
    flag
  } = post

  return (
    <li className="post-component">
      <div>
        <h4>{ title }</h4>
        <p>{ body }</p>
      </div>
 <div>
  {
    flag
      ? (
        <button
          className="likebtn-button lb-dislike"
          onClick={(event) => {
            event.preventDefault()
            clickDislike(id)
          }}
        >
          Dislike
        </button>
      )
      : (
        <button
          className="likebtn-icon lb-like-icon"
          onClick={(event) => {
            event.preventDefault()
            clickLike(post)
          }}
        >
          Like
        </button>
      )
  } 
</div>
    </li>
  )
}


