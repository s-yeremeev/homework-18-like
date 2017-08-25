import ReactDOM from "react-dom"
import React from "react"
import PostComponent from "../postdiv"


export default class PostContainer extends React.PureComponent {
    state = {
        post: []
      }

    constructor(props) {
       super(props)
    }

     componentWillReceiveProps({ post, like }) {
          const updatedPost = post.reduce((acc, post) => {
            acc.push({ 
              ...post,
              flag: !!~like.findIndex(({ id }) => id == post.id)
            })
            return acc
          }, [])
          this.setState({
            post: updatedPost
          })
        }

    render() {
        const { post } = this.state
        const { 
            clickLike,
            clickDislike
          } = this.props

        return (
            <ul 
            className = "post-container"
            >
                {                    
                    post.map((post, index) => <PostComponent
                        post = { post }
                        clickLike = { clickLike }
                        clickDislike = { clickDislike }
                        key = { index }
                    /> )
                }
            </ul>
        )
    }
}