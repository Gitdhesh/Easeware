import ComponentCard from './ComponentCard'

function ComponentsList({ components }) {
  return (
    <div>
      <h2>Components</h2>
      {components.map(component => (
        <ComponentCard
          key={component._id}
          name={component.name}
          category={component.category}
          description={component.description}
        />
      ))}
    </div>
  )
}

export default ComponentsList
