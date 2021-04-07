const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}
const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

/* <Part part={props[1].name} content={props[1].exercises}/>
      <Part part={props[2].name} content={props[2].exercises}/>
      */
const Content = (props) => {
  return(
    <div>
      <Part part={props.parts[0].name} content={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} content={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} content={props.parts[2].exercises}/>
    </div>
  )
}
const Part = (props) => {
  console.log(props)
  return(
    <div>
      <p>{props.part} {props.content}</p>
    </div>
  )
}
const Total = (props) => {
  const result = props.parts.reduce((total, currentValue) => total = total + currentValue.exercises,0);
  return(
    <div>
      <p>Number of exercises {result}</p>
    </div>
  )
}
export default App;
