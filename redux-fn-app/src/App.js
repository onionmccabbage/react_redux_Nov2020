import React, { useCallback, useState, useEffect } from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import "./App.css"
import { Article } from "./components/Article"
import { AddArticle } from "./components/AddArticle"
import { addArticle, removeArticle, sendEditArticle } from "./store/actionCreator"

const App = () => {
  // invoke useSelector as many times as you like - but ALWAYS in the same order
  const articles = useSelector(
    // EACH member would cause a re-render, 'shallowEqual' prevents this
    (state) => state.articles, shallowEqual
  )
  const mode = useSelector(
    (state) => state.mode // a simple scalar
  )
  const counter = useSelector(state => state.counter)
  // we might also want some LOCAL state
  const [count, setCount] = useState(99)
  // the useDispatch hook returns a referenceto the dispatch function fro mthe redux store
  // use it to dispatch ctinos as neded
  const dispatch = useDispatch()

  useEffect(() => {
    // update the document title
    document.title = `state count is ${count}`
  }, [count] // only update if count changes
    // NB useEfect is a good place to make externatl API calls
  )

   // useCallback will return a memoized version of the callback 
  // that only changes if one of the dependencies has changed
  const saveArticle = useCallback(
    (article) => dispatch(addArticle(article)), [dispatch]
  )

  // useCallback helps to avoid unnecessary re-rendering 
  // by memoizing values as dependencies
  const editArticle = useCallback(
    (article) => dispatch(editArticle(article)), [dispatch]
  )

  let conditional_content
  if (mode == 'edit') {
    conditional_content = <p>Edit Mode</p>
  } else {
    conditional_content = <p>Add Mode</p>
  }

  return (
    <main>
      <h1>Managing Articles with React and Redux</h1>
      {conditional_content}
      <h3>Counter value is currently {counter} and Count is {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Increase State Count by 1
      </button>
      <AddArticle saveArticle={saveArticle} />
      {/* The order of objects in the map is the same as the insertion order */}
      {articles.map((article) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
    </main>
  )
}

export default App;
