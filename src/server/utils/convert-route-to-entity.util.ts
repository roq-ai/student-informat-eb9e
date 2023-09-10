const mapping: Record<string, string> = {
  courses: 'course',
  faculties: 'faculty',
  students: 'student',
  terms: 'term',
  universities: 'university',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
