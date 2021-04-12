const Total = ({parts}) => {
  // course.parts from Course.js
  // Part - exercises, id, name
  const result = parts.reduce((total, part) => total += part.exercises, 0);
  return(
    <div>
      <p><b>Total of {result} exercises</b></p>
    </div>
  )
}

export default Total;