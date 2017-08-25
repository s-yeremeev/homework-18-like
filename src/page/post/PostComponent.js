import React from "react"
import "./component.scss"

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
        <h4 className = "title-post">{ title }</h4>
        <p className = "body-post">{ body }</p>
      </div>
 <div>
  {
    flag
      ? (
        <button
          className="likebtn-dislike"
          onClick={(event) => {
            event.preventDefault()
            clickDislike(id)
          }}
        >
         <img 
        className = "image-button-dis"
        src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKPhaia96-eNbgnaeRV3cb4zfm9bGlrwV31BV_nbZz6h7j9D2p"/>
        </button>
      )
      : (
        <button 
          className = "likebtn-like"
          onClick={(event) => {
            event.preventDefault()
            clickLike(post)
          }}
        >
        <img 
        className = "image-button-like"
        src = "http://ru.fishki.net/picsw/032013/13/pics/pics-0001.jpg"/>
        </button>
      )
  } 
</div>
    </li>
  )
}


