import { StudentInterface } from 'interfaces/student';
import { TermInterface } from 'interfaces/term';
import { FacultyInterface } from 'interfaces/faculty';
import { GetQueryInterface } from 'interfaces';

export interface CourseInterface {
  id?: string;
  name: string;
  description?: string;
  start_date: any;
  end_date: any;
  term_id: string;
  faculty_id: string;
  created_at?: any;
  updated_at?: any;
  student?: StudentInterface[];
  term?: TermInterface;
  faculty?: FacultyInterface;
  _count?: {
    student?: number;
  };
}

export interface CourseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  term_id?: string;
  faculty_id?: string;
}
