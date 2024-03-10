import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts'

export function useCatFact () {
  const [fact, setFact] = useState('')
  const refreshFact = () => {
    getRandomFact().then(fact => setFact(fact))
  }
  useEffect(refreshFact, [])

  // evitar exportar el setter por defecto y exportar uno personalizado
  return { fact, refreshFact }
}