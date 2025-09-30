'use server';

import prisma from '@/lib/prisma';

export async function getProjects() {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      name: true,
      description: true,
      createdAt: true,
    },
  });

  return projects;
}
