import React from 'react';
import { useState } from 'react';

export default function Projects() {
  const projects_list = [
    {name: 'Muse Ecommerce Website', technology: 'Express.js'},
    {name: 'Traffic Sign Classifier', technology: 'Python'},
    {name: 'Multi Client Chat Application', technology: 'Python'},
    {name: 'Blood Donation System', technology: 'C#'},
    {name: 'Voice Controlled Unix Shell', technology: 'Python'},
    {name: 'Simple Game In x86 Assembly', technology: 'x86 Assembly'},
    {name: 'Unix Shell in C', technology: 'C'},
    {name: 'Sorting algorithms implementation using OPENMP and MPI', technology: 'C'},
    {name: 'Sorting Visualizer', technology: 'Python'}
  ]
  const [filterBy, setFilterBy] = useState("");

  return (
    <>
      <div className="h1 text-size-1">
        My Projects: 
      </div>
      <div className="filter mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Filter by technology:</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="1" onChange={event => setFilterBy(event.target.value)}></textarea>
      </div>
      <ul className="list-group list-group-flush">
        {projects_list.filter(projects_list => projects_list.technology.toLowerCase().includes(filterBy.toLowerCase())).map((projects_list, i) => (
          <li key={i} className="list-group-item">{projects_list.name}</li>
        ))}
      </ul>
    </>
  )
}