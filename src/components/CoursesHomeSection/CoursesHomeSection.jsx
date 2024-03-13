
import React from 'react'
import { CourseTile } from '../CourseTile/CourseTile'

const CoursesHomeSection = ({ t }) => {

  return (
    <>
        <h2 className="section-title">{t('title')}</h2>
        <p className="lg:max-w-[80%] text-lg md:text-2xl font-light">
        Wybierz szkolenie dla Siebie i zmień swoją zawodową karierę.
        <br />
        Skontaktuj się ze mną w celu umuwiena się na{" "}
        <a href="" className="text-[#EDC385] font-semibold">
            bezpłatną konsultację
        </a>
        </p>
        <div className="course-tile-container">
        <CourseTile
            time="10h ~"
            title="Laminacja brwi"
            description="Program  szkoleniowy z laminacji brwi w którym się dowiesz jak poprawnie robuić laminacje"
        />
        <CourseTile
            time="10h ~"
            title="Laminacja brwi"
            description="Program  szkoleniowy z laminacji brwi w którym się dowiesz jak poprawnie robuić laminacje"
        />
        <CourseTile
            time="10h ~"
            title="Laminacja brwi"
            description="Program  szkoleniowy z laminacji brwi w którym się dowiesz jak poprawnie robuić laminacje"
        />
        </div>
    </>
  )
}

export default CoursesHomeSection