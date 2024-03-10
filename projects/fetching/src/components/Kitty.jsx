import { useCatImage } from '../hooks/useCatImage'

export function Kitty( {fact = 'I am a cat'}) {
  const { url } = useCatImage({ fact })
  if( !url ) return null

  return (
    <img src={url} alt={fact} />
  )
}