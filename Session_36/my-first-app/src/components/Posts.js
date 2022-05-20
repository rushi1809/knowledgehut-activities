import {Component} from 'react';

export class Comment extends Component {
    constructor(props) {
        super(props); // {props = {text: value, profile : value}}
    }
    render() {
        let comment = this.props.comment;
        return (<div>
            <p><b>Comment: </b>{comment.text}</p>
            <Profile author = {comment.profile}/>
            <LikesCnt count = {comment.Likes}/>
        </div>)
    }
}
export class Profile extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let author = this.props.author;
        return <div>
            <p><i>Name: {author.name}</i></p>
            <p><img src={author.imgUrl} width="100" height="100"/></p>
        </div>
    }
}
export class LikesCnt extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let count = this.props.count;
        return(
            <div>
                <p>Likes:{count}</p>
            </div>
        );
    }
} 
