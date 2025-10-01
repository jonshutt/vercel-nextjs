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

export async function getPosts() {
  const posts = await prisma.post.findMany({
    orderBy: { updated_at: 'desc' },
    select: {
      id: true,
      title: true,
      summary: true,
      updated_at: true,
    },
  });

  return posts.map(({ updated_at, ...rest }) => ({
    ...rest,
    updatedAt: updated_at,
  }));
}
