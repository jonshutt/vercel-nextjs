'use server';

import prisma from "@/lib/prisma";

export type ProjectSummary = {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
};

export async function getProjects(): Promise<ProjectSummary[]> {
  const projects = await prisma.project.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      description: true,
      createdAt: true,
    },
  });

  return projects;
}

export type PostSummary = {
  id: number;
  title: string;
  summary: string | null;
  updatedAt: Date;
};

export async function getPosts(): Promise<PostSummary[]> {
  const posts = await prisma.post.findMany({
    orderBy: { updated_at: "desc" },
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
