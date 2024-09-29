import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      name: 'Aman Maurya',
      email: 'aman@gmail.com',
      password: 'securepassword',  // Use a hashed password in production
    },
  });

  console.log('User created');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
