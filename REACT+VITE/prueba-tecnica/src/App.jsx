import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

export function App() {
  /*
  *useState devuelve un array con dos elementos
  *el primero es el valor actual
  *y el segundo es un metodo para actualizar el valor.
  */
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main style={styles.mainStyle}>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image selected by first three word from ${fact}`} />}
    </main>
  )
}

const styles = {
  mainStyle: {
    display: 'flex',
    flexDirection: 'column',
    placeItems: 'center'
  }
}
