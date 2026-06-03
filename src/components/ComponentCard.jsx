function ComponentCard({ name, category, description }) {
  return (
    <div className="component-card">
      <h3>{name}</h3>
      <p><strong>Category:</strong> {category}</p>
      <p>{description}</p>
    </div>
  )
}

export default ComponentCard

