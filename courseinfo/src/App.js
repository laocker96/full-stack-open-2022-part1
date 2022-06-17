const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  );
}

const Content = (props) => {
  return (
    <>
      {props.parts.map((part) =>
        <Part key={part.name} part={part} />
      )}
    </>
  );
  {/* Valid alternative:  

      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} /> 
      
  */}
}

const Part = (props) => {
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  );

}

const Total = (props) => {

  const calculateExercisesSum = () => {
    let sum = 0;
    props.parts.forEach(part => sum += part.exercises);
    return sum;
  }

  return (
    <p>Number of exercises {calculateExercisesSum()}</p>
  );

  {/* Valid alternative:
      
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p> 
    
  */}
}

const App = () => {
  const course = 'Half Stack application development';
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App