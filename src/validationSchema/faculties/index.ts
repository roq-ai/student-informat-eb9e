import * as yup from 'yup';

export const facultyValidationSchema = yup.object().shape({
  name: yup.string().required(),
  department: yup.string().required(),
  designation: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
