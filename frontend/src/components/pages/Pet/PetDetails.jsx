import api from '../../../utils/api'

import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import styles from './PetDetails.module.css'

/* hooks */
import useFlashMessage from '../../../hooks/useFlashMessage'

function PetDetails() {
  const [pet, setPet] = useState({})
  const { id } = useParams()
  const { setFlashMessage } = useFlashMessage()
  const [token] = useState(localStorage.getItem('token') || '')

  useEffect(() => {
    api.get(`/pets/${id}`).then((response) => {
      setPet(response.data)
    })
  }, [id])

  async function schedule() {
    let msgType = 'success'

    const data = await api
      .patch(`pets/schedule/${pet._id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(token)}`,
        },
      })
      .then((response) => {
        console.log(response.data)
        return response.data
      })
      .catch((err) => {
        console.log(err)
        msgType = 'error'
        return err.response.data
      })

    setFlashMessage(data.message, msgType)
  }
  console.log(pet)
  return (
    <>
      {pet.name && (
        <section className={styles.pet_details_container}>
          <div className={styles.petdetails_header}>
            <h1 className='text-white'>Conhecendo o Pet: {pet.name}</h1>
            <p className='text-white'>Se tiver interesse, marque uma visita para conhecê-lo!</p>
          </div>
          <div className={styles.pet_images}>
            {
              pet.image &&
              <img
                style={{

                }}
                src={`http://localhost:8000/images/` + pet.image}
              />
            }
          </div>
          <p className='text-white'>
            <span className="bold">Peso:</span> {pet.weight}kg
          </p>
          <p className='text-white'>
            <span className="bold">Idade:</span> {pet.age} anos
          </p>
          {token ? (
            <button onClick={schedule}>Solicitar uma Visita</button>
          ) : (
            <p className='text-white'>
              Você precisa <Link to="/register">criar uma conta</Link> para
              solicitar a visita.
            </p>
          )}
        </section>
      )}
    </>
  )
}

export default PetDetails