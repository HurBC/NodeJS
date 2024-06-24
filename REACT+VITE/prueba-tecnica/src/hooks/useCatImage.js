import { useState, useEffect } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage({ fact }) {
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(threeFirstWords)

    setImageUrl(`${CAT_PREFIX_IMAGE_URL}/cat/says/${threeFirstWords}?size=50&fontColor=white`)
  }, [fact])

  return { imageUrl }
}
