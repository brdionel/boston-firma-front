import React, {useState} from 'react'
import './Termino.css'
export default function Terminos() {

  const [active, setActive] = useState(false)
  
  const handleChange = (event) => {
    // en este punto actualizo el estado
    setActive(event.target.checked)
   }
  
  return (
    <div className='container_terminos'>
      <h1>Términos de Uso y Condiciones</h1>
      <ul>
        <li>
          El acceso, uso, compras y transacciones de este centro de servicio se rige bajo los términos y condiciones contenidos en el contrato de ashesión del Colegio Universitario Boston, así como la Legislación comercial aplicable de la República de Costa Rica.
        </li>
        <li>
          En consecuencia, estos términos y condiciones tienen un carácter vinculante con la institución y, por lo tanto, los usuarios que no deseen aceptarlosdeberán abstenerse de utilizar este portal Web y/o sus servicios, pues su uso implica aceptación incondicional de tales términos y condiciones.
        </li>
        <li>
          Los servicios solo estarán solo estarán disponibles para personas que tenga capacidad legal para contratar.
        </li>
        <li>
          Se entenderán que los usuarios prestan su consentimiento, expreso, libre y voluntario a los términos y condiciones aquí establecidos y el uso de la información solicitada para que el Colegio Universitario Bostron utilice para fines legales y cobtractuales sobre el financiamiento a establecer.
        </li>  
      </ul>
      <form className='form_terminos'> 
      <div>
        <input
          type="checkbox"
          checked={active}
          onChange={handleChange}
          id="check_terminos"
        /> 
        <label
          htmlFor="check_terminos"
        >
          Aceptar Términos y Condiciones
        </label>
      </div>
        <button
          disabled={active? false: true}
        > 
          Continuar 
        </button>
      </form>
    </div>
  )
}
