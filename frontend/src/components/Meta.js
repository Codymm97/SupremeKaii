import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Supreme Kaii',
  description: 'Workout plans for cheap that actually work',
  keywords: 'fitness, workouts, bodybuilding, strength, muscle, size',
}

export default Meta
