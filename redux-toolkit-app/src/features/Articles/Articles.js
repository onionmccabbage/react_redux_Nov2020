// we need some React hooks
import React, { useState, useCallback } from 'react'
// we also need some Redux hooks
import { useDispatch, useSelector } from 'react-redux'
// we might be using router links
import { Link } from 'react-router-dom'

// now we get our actions from articleSlice
import { selectArticles, addArticle, removeArticle } from './articleSlice'

const Article = ()=>{
    // use some hooks
    const [showAddArticle, setShowAddArticle] = useState(false)

}
