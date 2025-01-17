import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function getPageBySlug(slug: string) {
  return prisma.page.findFirst({
    where: {
      slug,
      published: true,
    },
  });
}

export async function getPagesBySection(section: string, subsection?: string) {
  return prisma.page.findMany({
    where: {
      section,
      subsection: subsection || undefined,
      published: true,
    },
    orderBy: {
      updatedAt: 'desc',
    },
  });
}
