import { useState, useEffect } from 'react'

const CAT_ENDPOINT_MEME = (word) => `https://cataas.com/cat/says/${word}?fontSize=50&fontColor=white`.replace(' ', '%20')

const someWord = (echo) => {
  return echo.split(' ').slice(0, 3).join(' ')
}

export function useCatImage ({ fact }) {
  const [ url, setUrl] = useState('')

  useEffect(() => {
    if (!fact) return

    fetch(CAT_ENDPOINT_MEME(someWord(fact)))
    .then( response => {
      return response.blob()
    })
    .then( result => {
      const url = URL.createObjectURL(result)
      setUrl(url)
    })
  }, [fact])

  return { url }
}