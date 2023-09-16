import React, { useState } from 'react'
import { connect } from 'react-redux';
import  addPost from '../JS/Actions/actions';

const mapDispatchToProps = dispatch => {
    return {
        addArticle: post => dispatch(addPost(post))
    }
}
const CreatePost = (props) => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault()
        props.addArticle({
            id: Date.now(),
            title,
            content
        })
    }
    return (
        
        <form onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Title</label>
                <input type="text" 
                    class="form-control" 
                    id="exampleFormControlInput1" 
                    name="title" 
                    // id="title" 
                    onChange={e => setTitle(e.target.value)}
                />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Content:</label>
                <textarea class="form-control"
                 id="exampleFormControlTextarea1" 
                 rows="3"
                 name="content" 
                //  id="content" 
                 onChange={e => setContent(e.target.value)} 
                 >
                 </textarea>
            </div>

            <div>
                <input type="submit" value="Add" />
            </div>
        </form>
    )
}

export default connect(null, mapDispatchToProps)(CreatePost)
