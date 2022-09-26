export const crearPersona = ({ nombre, apellido, twitter } = {}) => ({
  nombre: nombre ?? 'Juan',
  apellido: apellido ?? 'Nadie',
  twitter: twitter ?? '@juan_nadie'
})
