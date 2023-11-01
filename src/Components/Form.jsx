import React, {useState} from "react";
import { useForm } from 'react-hook-form';


const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ nombre: '', email: '' });

  const onSubmit = (data) => {
    setIsSubmitted(true);
    setFormData(data);
  };

  return (
    <div className="formClases">
     {isSubmitted ? (
        <p>¡Gracias {formData.nombre}, te contactaremos cuando antes vía mail!</p>
      ) : (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            nombre="nombre"
            {...register('nombre', {
              required: 'El nombre es obligatorio',
            })}
          />
          {errors.nombre && <p>{errors.nombre.message}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            {...register('email', {
              required: 'El email es obligatorio',
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Correo electrónico no válido',
              },
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <button type="submit">Enviar</button>
        </div>
      </form>)}
    </div>
  );
};

export default Form;
