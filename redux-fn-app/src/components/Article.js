// React hooks include useState, useStore, useCallback, useEffect and useReducer
import React, { useCallback } from 'react'
// React Redux hooks include useSelector and useDispatch
import { useDispatch, useSelector } from 'react-redux'

export const Article = ({ article, removeArticle }) => {
    // we need to aces event handlers
    const dispatch = useDispatch()

    // do stuff here
    const deleteArticle = useCallback(
        (article)=>dispatch(removeArticle(article)), [dispatch, removeArticle]
    )
    return (
        <aside className='Article'>
            <section>
                <h1>{article.id} {article.title}</h1>
                <p>{article.body}</p>
                {/* <button onClick={deleteArticle(article)} >Delete</button> */}
                <button onClick={()=>deleteArticle(article)} >Delete</button>
            </section>
        </aside>
    )
}