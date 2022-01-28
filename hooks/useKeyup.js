import React, { useState, useEffect, useCallback } from 'react';

const useKeyup = () => {

  const [words, setWords] = useState([])

  const handleKeyup = useCallback((e) => {
    if (e.key === 'Backspace') {
      setWords(words => words.slice(0, words.length))
    }

    if (e.key === 'Enter') {
      
    }

    if (/[a-zA-Z]/.test(e.key)) {
      console.log('keyup', e)
      setWords(words => [...words, e.key])
    }
  }, [])

  useEffect(() => {
    document.addEventListener('keyup', handleKeyup)
    
    return () => {
      document.removeEventListener('keyup', handleKeyup)
    }
  }, [handleKeyup])


  return {
    words
  }
}

export default useKeyup