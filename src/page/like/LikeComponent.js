import React from "react"
import "./index.scss"

export default (props) => {
  const { like } = props
  const liked = like.length
  return (
    <div className="like-component">
      <div>Like: {liked}</div>
    </div>
  )
}