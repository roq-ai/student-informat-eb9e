import * as yup from 'yup';

export const courseValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  term_id: yup.string().nullable().required(),
  faculty_id: yup.string().nullable().required(),
});
