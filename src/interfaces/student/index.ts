import { CourseInterface } from 'interfaces/course';
import { TermInterface } from 'interfaces/term';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface StudentInterface {
  id?: string;
  name: string;
  admission_date: any;
  course_id: string;
  term_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;

  course?: CourseInterface;
  term?: TermInterface;
  user?: UserInterface;
  _count?: {};
}

export interface StudentGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  course_id?: string;
  term_id?: string;
  user_id?: string;
}
