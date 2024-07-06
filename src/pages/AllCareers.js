import React from "react"
import Career from "../components/Career"
import { Link } from "react-router-dom"

const AllCareers = (props) => (
  <>
    <Link to="/newcareer">
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Add a Career</button>
    </Link>
    {props.careers.map(
      (career) => <Career career={career} key={career.id} deleteCareer={props.deleteCareer} />
    )}
  </>


  )

export default AllCareers