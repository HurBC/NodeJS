import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact() {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(setFact)
  }

  /*
   * useEffect es un metodo que se ejecuta dependiendo si tiene o no dependencias
   * Si no tiene dependencias, se ejecuta una sola vez "[]"
   * Si tiene dependencias se ejecuta cada vez que cambia alguna de las dependencias "[fact]"
   * En el caso de que no se coloque "[]" se ejecuta cada vez que se renderiza el componente.
   */
  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
