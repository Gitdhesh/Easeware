export async function fetchComponents() {
  const res = await fetch('http://localhost:5000/api/components')
  return res.json()
}
