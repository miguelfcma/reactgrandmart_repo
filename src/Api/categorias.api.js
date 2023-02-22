export const obtenerCategorias = () => {
  return fetch('/categorias')
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error => {
      console.error('Ocurrió un error al hacer la solicitud:', error);
    });
}
