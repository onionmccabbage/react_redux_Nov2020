// this code will be deleted
// const name = 'Ada Lovalace'
// const collection = [ true, false, {geo:true, lat:53}, 542345, name, [9,8,7] ]
// collection[2:5]
// name[3:7]

import { createSlice } from '@reduxjs/toolkit'

// load up some initial articles from local data
let articles = require('../../data/articles.json')

// createSlice will auto generate the actions we need
export const articleSlice = createSlice({
    name:'articles', // our slice must have a name
    initialState:articles,
    reducers: {
        addArticle: (state, action)=>{
            state = state.push({ // loks like mutation but the Immer library handles state replacement
                id    : action.payload.id,
                title : action.payload.title,
                body  : action.payload.body
            })
            // there is no need to return state, Immer does that for us
        },
        // editArticle:()=>{},
        removeArticle:(state, action)=>{
            state = state.filter( (article)=> article.id !== action.payload.id ) 
            // this time we do need to return state
            return state
        }
    }
})
// these actions are automatically generated by createSlice
export const {addArticle, editArticle, removeArticle} = articleSlice.actions

export const selectArticles = (state)=>state.articles

// we also have a reducer!!
export default articleSlice.reducer
