import React from 'react'

export default function Education() {
    const courses_list = ["Mathematics", "Chemistry", "Physics", "Computer Science", "Programming Fundamentals", "Calculus and Analytical Geometry", 
    "Object Oriented Programming", "Digital Logic Design", "Differential Equations", "Data Structures", "Discrete Structures", "Computer Organization and Assembly Language",
    "Linear Algebra", "Operating Systems", "Database Systems", "Global Marketing", "Design and Analysis of Algorithms", "Numerical Computing", "Probability and Statistics", 
    "Software Design and Analysis", "Fundamentals of Management", "Parallel and Distributed Computing", "Artificial Intelligence", "Computer Networks", 
    "Software Engineering", "Fundamentals of Computer Vision", "Information Security", "Information Processing Techniques", "Professional Practices in IT", 
    "Data Science", "Deep Learning for Perception", "Information Systems Audit and Control", "Applied DevOps", "Introduction to Public Policy"]
    return (
    <>
        <div className="h1">
        Courses Studied:
        </div>
        <ul className="list-group list-group-flush">
        {courses_list.map((item, i) => (
            <li key={i} className="list-group-item">{item}</li>
        ))}
        </ul>
    </>
    )
}
