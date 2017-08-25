import ReactDOM from "react-dom"
import React from "react"
import PostContainer from "./post/PostContainer"
import LikeComponent from "./like/LikeComponent"
import { getLikeFetch } from "./component/fetchPost"
import { setLocalStorage, getLocalStorage } from "./component/localstorage"

const DEFAULT_POST = [];
const DEFAULT_LIKE = [];
const DEFAULT_LIKE_KEY = "like";
export default class PageContainer extends React.PureComponent {
    state = {
        post: DEFAULT_POST,
        like: DEFAULT_LIKE
    }
    constructor(props){
        super(props)

    }

    async componentDidMount() {
        const post = await getLikeFetch()
        const like = getLocalStorage(DEFAULT_LIKE_KEY);

        this.setState({
            post,
            like
        })
    }

     clickLike = ( post ) => {
         this.setState(({ like }) => {
             like.push( post )
             return {
                 like: [...like]
             }
         }, () => setLocalStorage(DEFAULT_LIKE_KEY, this.state.like) )
     }


     clickDislike = ( id ) => {
         this.setState(({ like }) => ({
            like: like.filter(post => post.id != id)
         }), () => setLocalStorage(DEFAULT_LIKE_KEY, this.state.like) )
     }

    render() {
        const {
            post,
            like
        } = this.state

        return (
            <div
            className = "page-container"
            >
                <LikeComponent
                        like = { like } 
                />
                <PostContainer
                        post = { post }
                        like = { like } 
                        clickLike = { this.clickLike }
                        clickDislike = { this.clickDislike }
                />
            </div>
        )
    }    
}