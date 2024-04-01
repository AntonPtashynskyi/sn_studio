import Image from 'next/image'
import React from 'react'

import "./trainingAdvantage.scss"

const TrainingAdvantage = ({imagePath, imageTitle, stepTitle, stepDescription}) => {
  return (
    <div className='advantage-block'>
        <div className='left-block'>
            <div className='image-wrapper'>
                <Image src={imagePath} alt={imageTitle} fill={true} />
            </div>
        </div>
        <div className='right-block'>
            <h2>{stepTitle}</h2>
            <p>{stepDescription}</p>
        </div>
    </div>
  )
}

export default TrainingAdvantage