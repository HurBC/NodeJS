import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useMovies({ search, sort }) { 
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const previousSearch = useRef(search)

  /*
   * useCallBack y useMemo funcionan igual con la diferencia de que useCallBack nos permite 
   * tener una sintaxis mejor y mas limpia
   * useCallback se utiliza mas que nada para las funciones
   */
  const getMovies = useCallback(async ({search}) => {
    if (search === previousSearch.current) return
    try {
      setLoading(true)
      setError(null)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  /*
   * useMemo nos permite memorizar un valor para no tener que calcularlo dependiendo de unas dependencias
   * siempre que el valor de sort cambie se volvera a calcular el valor de sortedMovies
   */
  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])

  return {movies: sortedMovies, getMovies, loading}
}
