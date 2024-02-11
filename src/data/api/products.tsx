export async function getProducts() {
  const data = await fetch("http://localhost:8000/products")
  const products = await data.json()
  return products
}