import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Departments
  const dept1 = await prisma.department.create({
    data: { name: 'Engineering' },
  });

  const dept2 = await prisma.department.create({
    data: { name: 'Human Resources' },
  });

  console.log(`Created departments: ${dept1.name}, ${dept2.name}`);

  // Seed Users
  const user1 = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@example.com',
      departmentId: dept1.id,
      profileImage: 'path/to/alice.jpg',
      birthdate: new Date('1990-01-01'),
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Bob',
      email: 'bob@example.com',
      departmentId: dept2.id,
      profileImage: 'path/to/bob.jpg',
      birthdate: new Date('1992-02-02'),
    },
  });

  console.log(`Created users: ${user1.name}, ${user2.name}`);

  // Seed Projects
  const project1 = await prisma.project.create({
    data: {
      name: 'Project Alpha',
      startDate: new Date('2023-01-01'),
    },
  });

  const project2 = await prisma.project.create({
    data: {
      name: 'Project Beta',
      startDate: new Date('2023-02-01'),
    },
  });

  console.log(`Created projects: ${project1.name}, ${project2.name}`);

  // Seed UserProject links
  await prisma.userProject.create({
    data: {
      userId: user1.id,
      projectId: project1.id,
    },
  });

  await prisma.userProject.create({
    data: {
      userId: user2.id,
      projectId: project2.id,
    },
  });

  console.log(`Linked users and projects`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
