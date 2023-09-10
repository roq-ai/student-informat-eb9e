import { CourseInterface } from 'interfaces/course';
import { StudentInterface } from 'interfaces/student';
import { UniversityInterface } from 'interfaces/university';
import { GetQueryInterface } from 'interfaces';

export interface TermInterface {
  id?: string;
  name: string;
  start_date: any;
  end_date: any;
  is_active: boolean;
  university_id: string;
  created_at?: any;
  updated_at?: any;
  course?: CourseInterface[];
  student?: StudentInterface[];
  university?: UniversityInterface;
  _count?: {
    course?: number;
    student?: number;
  };
}

export interface TermGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  university_id?: string;
}
