import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({name, parts}) => {
  // course - name, id, parts
  
  // Task 2.5 You can include all subcomponents of the course into the same module
  // I had already split every module into its own file
  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}
export default Course;