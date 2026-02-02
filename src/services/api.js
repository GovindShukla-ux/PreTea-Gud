export async function getProducts() {
  const response = await fetch("http://localhost:5000/api/products");
  return response.json();
}
