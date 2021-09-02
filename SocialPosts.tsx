import "./SocialPosts.css"; 
import {useState} from "react"; 
import Post from "../models/Post";
import PostInList from "./PostInList";
import PostForm from "./PostForm";

export default function SocialPosts () {
    const [formIsVisible, setformIsVisible] = useState(false); 
    const [posts, setPosts] = useState<Post[]>
    ([
        {title: "Grand Circus", thought: "Grand Circus is sweet."},
        {title: "React", thought: "React give me power!"},
        {title: "Beatrice", thought: 
        "My friend Beatrice has mad skills. She made the top 10~ I'm so proud of her!"}
    
    ]); 

    function deletePost (i: number) {
            // copy then modify
            let copiedPosts = [...posts]; 
            copiedPosts.splice(i,1); 
            setPosts(copiedPosts); 
    }
    return (
        <div>
        <h1>My thoughts</h1>

        <button onClick = {() => { 
            setformIsVisible(true); 
        }}
        >
            New Thought
        </button>
        {formIsVisible && <PostForm
        onClose = {() => {setformIsVisible(false)} />}

        {posts.map((post, index) => 
        {<PostInList key = {index} post ={post} onDelete = {() => {deletePost(index)}}/>
        
        </div>
    ); 
}

