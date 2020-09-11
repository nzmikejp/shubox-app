import React, {Component} from 'react'
import {Link, navigate} from '@reach/router'
//import API from './API'

class RouteDescription extends Component {
    
    constructor(props){
        super(props)
      }

      handleCommentInputChange = (e)=>{
          this.setState({commentInputValue:e.target.value})
      }

      handleAddCommentClick = (e)=>{
          e.preventDefault()
          var comment = {
            id:Date.now(),
            text:this.state.commentInputValue
          }

          var newComments = [comment, ...this.state.comments]

          this.setState({
              comments:newComments,
              commentInputValue: ''
          })
      }

      handleTrashDelete = (e)=>{
        var commentIdToDelete = parseInt(e.target.id)
        var comments = this.state.comments

        var filteredComments = comments.filter((item)=>{
            return comment.id != commentIdToDelete
        })

        this.setState({comments:filteredComments})
      }


    render(){
        return (

            <Link to =""></Link>

            <footer>
                <Link to =""></Link>
                <Link to =""></Link>
                <Link to =""></Link>
            </footer>

            <Router>
                


            </Router>

        );
    }
}


export default RouteDescription;