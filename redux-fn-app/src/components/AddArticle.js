import React, { useState } from 'react'

export const AddArticle = ({ saveArticle }) => {
    const [article, setArticle] = useState({ title: '', body: '' }) // this is a local state for this component

    const handleArticleData = (e) => {
        setArticle({
            ...article,
            [e.currentTarget.id]: e.currentTarget.value
        })
    }
    const addNewArticle = (e) => {
        e.preventDefault()
        saveArticle(article)
        // clear down the fields in this component
        let empty_article = { id: -1, title: '', body: '' }
        setArticle({ // remember setArticle is a constant
            ...empty_article, // NB article is a constant, so this does a refresh
        })
    }
    return (
        <form onSubmit={addNewArticle} className='Add-article'>
            {/* here are some controlled fields */}
            <input type='text' id='title' value={article.title} placeholder='Title'
                onChange={handleArticleData} />
            <input type='text' id='body' value={article.body} placeholder='Body'
                onChange={handleArticleData} />
            <button disabled={article.title === '' || article.body ==='' ? true:false} >Add article</button>
        </form>
    )
}