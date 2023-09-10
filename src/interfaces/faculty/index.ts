import { CourseInterface } from 'interfaces/course';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FacultyInterface {
  id?: string;
  name: string;
  department: string;
  designation: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  course?: CourseInterface[];
  user?: UserInterface;
  _count?: {
    course?: number;
  };
}

export interface FacultyGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  department?: string;
  designation?: string;
  user_id?: string;
}
