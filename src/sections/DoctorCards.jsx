import React from 'react'
import { doctors } from '../constants'
import DoctorCard from "../components/DoctorCard";
const DoctorCards = () => {
  return (
    <section className="lg:my-4 container">
       
      <div className=" grid grid-cols-1 lg:grid-cols-4 gap-5">
        {doctors.map((team) =>(<DoctorCard key={team.imgURL} {...team}/>))}
      </div>
    </section>
  )
}

export default DoctorCards