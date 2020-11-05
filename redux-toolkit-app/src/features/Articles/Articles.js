// we need some React hooks
import React, { useState, useCallback } from 'react'
// we also need some Redux hooks
import { useDispatch, useSelector } from 'react-redux'
// we might be using router links
import { Link } from 'react-router-dom'

// now we get our actions from articleSlice
import { selectArticles, addArticle, removeArticle } from './articleSlice'

const Articles = () => {
    // use some hooks
    const [showAddArticle, setShowAddArticle] = useState(false)
    const [title, setTitle] = useState('') // initialize as an empty string
    const [body, setBody] = useState('')
    // get the articles from our slice
    const articles = useSelector(selectArticles)
    // we also need to actions
    const dispatch = useDispatch()

    // hre is an event listener for when the fields get submitted
    const onSubmit = () => {
        let data = {
            id: articles.length + 1,
            title: title,
            body,
        }
        dispatch(addArticle(data))
        setShowAddArticle(false)
        setTitle("")
        setBody("")
    }
    // useCallback returns a memoized callback
    // https://reactjs.org/docs/hooks-reference.html#usecallback
    // This avoids unnecessary rendering of child components 
    // due to the changed callback reference
    // https://react-redux.js.org/api/hooks#usedispatch
    const deleteArticle = useCallback((article) => dispatch(removeArticle(article)))
    // we need a return statement
    return (
        <aside>
            {articles && articles.length > 0 ? ( // ES Ternary operator (like if)
                articles.map((article, index) => {
                    return (
                        <aside className='Article' key={index}>
                            <h2>
                                <Link to={`/article/${article.id}`}>
                                {article.id} {article.title}
                                </Link>
                            </h2>
                            <p>{article.body}</p>
                            {/* we need a delete button */}
                            <button id='btnDelete' onClick={() => { deleteArticle(article) }} >Delete</button>
                        </aside>
                    )
                })
            ) : (
                    <aside>No Data Found</aside>
                )
            }
            {/* show or hide the 'add article' option */}
            <button onClick={() => setShowAddArticle(true)}>Add Article</button>
            {showAddArticle ? (
                <form>
                    <section>
                        <label>Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </section>
                    <section>
                        <label>Body</label>
                        <input
                            type="textarea"
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        />
                    </section>
                    <button onClick={onSubmit}>Submit</button>
                </form>
                //  or lese show nothing!
            ) : ("")}
        </aside>
    )
}


export default Articles