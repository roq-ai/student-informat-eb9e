import * as yup from 'yup';

export const termValidationSchema = yup.object().shape({
  name: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  is_active: yup.boolean().required(),
  university_id: yup.string().nullable().required(),
});
