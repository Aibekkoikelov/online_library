import * as yup from "yup";

const loginSchema = yup.object().shape({
  title: yup
    .string()
    .required("Введите название книги"),
  author: yup
    .string()
    .required("Выберите автора"),
  category: yup
    .string()
    .required("Выберите категорию")
});

export default loginSchema;