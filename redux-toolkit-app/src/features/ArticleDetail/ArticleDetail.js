import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const ArticleDetail = () => {
    const { id } = useParams()
    if (!id) {
        // do nothing
    }
    const articleDetail = useSelector((state) => {
        let article = state.articles.find((article) => Number(article.id) === Number(id) )
        return article
    })
    return (
        <aside>
            <h3>Title: {articleDetail && articleDetail.title}</h3>
            <h4>Body: {articleDetail && articleDetail.body}</h4>
        </aside>
    )
}

export default ArticleDetail