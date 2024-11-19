import React from 'react'
import { Link } from 'react-router-dom'

const CustomizedTrip = () => {
  return (
    <section className="bg-blue-600 rounded-xl p-8 text-center text-white max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Do you need a customized trip?</h2>
      <p className="text-xl mb-6">Drop us a line below, we'd love to talk.</p>
      <Link
        to="/contact" className="inline-block bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-blue-100 transition duration-300">
        Let's Talk
      </Link>
    </section>
  )
}

export default CustomizedTrip
