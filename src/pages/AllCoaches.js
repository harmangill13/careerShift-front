import React from "react"
import Coach from "../components/Coach"
import { Link } from "react-router-dom"

const AllCoaches = (props) => (
  <>
    <Link to="/newcoach">
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">Add a Coach</button>
    </Link>
    {props.coaches.map(
      (coach) => <Coach coach={coach} key={coach.id} deleteCoach={props.deleteCoach} />
    )}
  </>

  )

export default AllCoaches