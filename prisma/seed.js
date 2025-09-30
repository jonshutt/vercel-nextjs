const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const seedProjects = [
  {
    name: 'Arcadia Analytics',
    description:
      'Modular analytics suite delivering real-time cohort insights and shared workspaces for growth teams.',
  },
  {
    name: 'Summit Sprints',
    description:
      'Community platform that helps outdoor teams plan ambitious expeditions with shared itineraries and dashboards.',
  },
  {
    name: 'Waypoint Studio',
    description:
      'Component-driven design system powering landing pages and client portals for a distributed agency.',
  },
];

async function main() {
  await prisma.project.deleteMany();
  await prisma.project.createMany({ data: seedProjects });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error('Seeding failed:', error);
    await prisma.$disconnect();
    process.exit(1);
  });
