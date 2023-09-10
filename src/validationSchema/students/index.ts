import * as yup from 'yup';

export const studentValidationSchema = yup.object().shape({
  name: yup.string().required(),
  admission_date: yup.date().required(),
  course_id: yup.string().nullable().required(),
  term_id: yup.string().nullable().required(),
  user_id: yup.string().nullable().required(),
});
