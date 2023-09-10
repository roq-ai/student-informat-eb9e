import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware, notificationHandlerMiddleware } from 'server/middlewares';
import { facultyValidationSchema } from 'validationSchema/faculties';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  const allowed = await prisma.faculty
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  if (!allowed) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  switch (req.method) {
    case 'GET':
      return getFacultyById();
    case 'PUT':
      return updateFacultyById();
    case 'DELETE':
      return deleteFacultyById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getFacultyById() {
    const data = await prisma.faculty.findFirst(convertQueryToPrismaUtil(req.query, 'faculty'));
    return res.status(200).json(data);
  }

  async function updateFacultyById() {
    await facultyValidationSchema.validate(req.body);
    const data = await prisma.faculty.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    await notificationHandlerMiddleware(req, data.id);
    return res.status(200).json(data);
  }
  async function deleteFacultyById() {
    await notificationHandlerMiddleware(req, req.query.id as string);
    const data = await prisma.faculty.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
