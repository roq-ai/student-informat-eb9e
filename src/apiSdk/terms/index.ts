import axios from 'axios';
import queryString from 'query-string';
import { TermInterface, TermGetQueryInterface } from 'interfaces/term';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTerms = async (query?: TermGetQueryInterface): Promise<PaginatedInterface<TermInterface>> => {
  const response = await axios.get('/api/terms', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createTerm = async (term: TermInterface) => {
  const response = await axios.post('/api/terms', term);
  return response.data;
};

export const updateTermById = async (id: string, term: TermInterface) => {
  const response = await axios.put(`/api/terms/${id}`, term);
  return response.data;
};

export const getTermById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/terms/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTermById = async (id: string) => {
  const response = await axios.delete(`/api/terms/${id}`);
  return response.data;
};
