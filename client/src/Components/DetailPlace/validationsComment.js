const validate = (input) => {
  const errors = {};

  if (!input.comment) errors.comment = "Ingresa un comentario";
  else if (!/^[\s\S]{5,200}$/.test(input.comment)) {
    errors.comment = "El comentario debe tener entre 5 y 200 caracteres";
  }

  if (input.rating === 0) errors.rating = "Seleccione un puntaje";

  return errors;
};

export default validate;
