
import { PrismaClient } from '@prisma/client'
import bcryptjs from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Check if test user already exists
  const existingUser = await prisma.user.findUnique({
    where: {
      email: 'john@doe.com'
    }
  })

  if (!existingUser) {
    // Create test user with admin privileges
    const hashedPassword = await bcryptjs.hash('johndoe123', 12)

    await prisma.user.create({
      data: {
        email: 'john@doe.com',
        name: 'John Doe',
        password: hashedPassword,
      }
    })

    console.log('Test user created: john@doe.com')
  } else {
    console.log('Test user already exists')
  }

  console.log('Database seeded successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
