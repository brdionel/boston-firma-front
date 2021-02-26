import { useState, useEffect } from 'react';
import getContrato from '../sevices/getContrato'

export default function useContrato({clicrm}){
  
  const [loading, setLoading] = useState(false);
  const [contrato, setContrato]= useState('');
  const [error, setError ] = useState(false)

  useEffect(() => { 
    if(clicrm){
      setLoading(true)
      getContrato({clicrm})
        .then( html => {
          if(html.length < 100){
            setError(true)
            setLoading(false)
          } else {
            setContrato(html)
            setLoading(false)
          }
        })
    }   
  }, [clicrm, setContrato, setError])

  return {loading, contrato, error}
}