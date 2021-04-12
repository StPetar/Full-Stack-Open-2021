import Part from './Part'

const Content = ({parts}) => {
  // course.parts from Course.js
  // Part - exercises, id, name
  return(
    <div>
      {parts.map(part => 
        <Part key={part.id} part={part.name} content={part.exercises}/>
      )}
    </div>
  )
}



export default Content;