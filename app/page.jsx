import Feed from '@components/Feed'
import React from 'react'

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className='head_text text-center'>
        El muro de 
        <br className='max-md:hidden'/>
        <span className='orange_gradient text-center'> CrushUPV</span>
      </h1>
      <p className='desc text-center'>
        ¿Quieres encontrar a ese chico de la sudadera roja que viste en la biblioteca?
        Postealo aquí!
      </p>

      <Feed />
    </section>
  )
}

export default Home;