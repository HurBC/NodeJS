import { useCallback, useEffect, useRef, useState } from "react"
import "./App.css"
import { Movies } from "./components/Movies"
import { useMovies } from "./hooks/useMovies"
import debounce from "just-debounce-it"

function useSearh() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('No se puede buscar una pelicula vacia')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('No se puede buscar una pelicula con un numero')
      return
    }

    if (search.length < 3) {
      setError('No se puede buscar una pelicula con menos de 3 caracteres')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error}
}

function App() {
  const [sort, setSort] = useState(false)

  const { search, setSearch, error } = useSearh()
  const { movies, loading, getMovies } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300)
    , [getMovies]
  )

  /*
   * useRef nos permite crear una referencia constante a un elemento del DOM
   * la cual persiste durante todo el ciclo de vida de la aplicacion.
  const inputRef = useRef()
   * utilizando useRef
  const handleSubmit = (event) => {
    event.preventDefault()
    const inputEl = inputRef.current
    const value = inputEl.value
    console.log(value)
  }
  */

  /* 
   * sin utilizar useRef
  */
  const handleSubmit = (event) => {
    event.preventDefault()
    /*
     * en caso de tener solo un input utilizar esto de aqui
     */
    // const fields = new window.FormData(event.target)
    /*
     * en caso de tener varios input utilizar esto de aqui
     * Esto se conoce como forma NO controlada
    const fields = Object.fromEntries(new window.FormData(event.target))
    console.log(fields)
     */
    getMovies({search})
  }

  /*
  * Esta es la forma controlada, ya que REACT se encarga de controlar los valores de estos inputs
  * Esta forma necesita un useState para funcionar
  * Una de las desventajas de esta forma es que cada vez que cambie el input 
  * se recargara el componente completo, provocando que la aplicacion vaya mas lento
   */
  const handleChange = (event) => {
    const newSearch = event.target.value
    setSearch(newSearch)
    debouncedGetMovies(newSearch)
  }
  
  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <div className="page"> 
      <header>
        <h1>Buscador de peliculas</h1>
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={search} name="query" placeholder="Avengers. Stars Wars, Matrix..." />
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type="submit">Search</button>
        </form>
        {error && <p style={{ color: 'red'}}>{error}</p>}
      </header>
      <main>
        {
          loading ? <p>Cargando</p> : <Movies movies={movies}/>
        }
      </main>
    </div>
  )
}

export default App
