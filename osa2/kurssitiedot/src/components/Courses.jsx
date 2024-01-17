const Total = ({ parts }) => {
    return (
      <>
        <b>total of {parts.reduce((a,v) => a = a + v.exercises, 0)}</b>
      </>
    )
}
  
const Part = ({ part }) => {
    return (
      <p>{part.name} {part.exercises}</p>
    )
}
  
const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(part => <Part key={part.id} part={part}/>)}
      </div>
    )
}
  
const Header = ({ course }) => {
    return (
      <>
        <h1>{course}</h1>
      </>
    )
}
  
const Course = ({ course }) => {
    return (
      <>
        <Header course={course.name}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
      </>
    )
}
  
const Courses = ({ courses }) => {
    return (
      <>
        {courses.map(course => <Course key={course.id} course={course}/>)}
      </>
    )
}

export default Courses