import axios from 'axios';
import queryString from 'query-string';
import { FacultyInterface, FacultyGetQueryInterface } from 'interfaces/faculty';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getFaculties = async (query?: FacultyGetQueryInterface): Promise<PaginatedInterface<FacultyInterface>> => {
  const response = await axios.get('/api/faculties', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createFaculty = async (faculty: FacultyInterface) => {
  const response = await axios.post('/api/faculties', faculty);
  return response.data;
};

export const updateFacultyById = async (id: string, faculty: FacultyInterface) => {
  const response = await axios.put(`/api/faculties/${id}`, faculty);
  return response.data;
};

export const getFacultyById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/faculties/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteFacultyById = async (id: string) => {
  const response = await axios.delete(`/api/faculties/${id}`);
  return response.data;
};
