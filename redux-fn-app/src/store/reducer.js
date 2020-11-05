import * as actionTypes from './actionTypes'

let articles = require('../data/articles.json') // this is standing in for loading external API data

// declare an initial state
const initialState = {
    articles: articles,
    counter: articles.length,
    mode: 'add' // declara s many stateful members as you need
}
// declare a reducer
const reducer = (
    state = initialState,
    action // the action will have a payload containing any data to be added to the new state
) => {
    switch (action.type) {
        case actionTypes.ADD_ARTICLE:
            const newArticle = {
                id: state.counter,
                title: action.article.title,
                body: action.article.body
            }
            return {
                ...state, // unpack the state into its component bits
                articles: state.articles.concat(newArticle),
                counter: state.counter + 1
            }
        case actionTypes.REMOVE_ARTICLE:
            const updatedArticles = state.articles.filter(
                article => article.id !== action.article.id
            )
            return {
                ...state,
                articles: updatedArticles,
            }
        default:
            return state
    }
}
export default reducer