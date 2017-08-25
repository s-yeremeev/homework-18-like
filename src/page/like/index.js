import React from "react"


export default (props) => {
  const { like } = props
  const count = like.length
  return (
    <div className="like-component">
      <div>Count: {count}</div>
    </div>
  )
}