import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req, res) {
  const posts = await prisma.gorevlendirmeler.findMany({
    // where: { aktif: "1" }
    // include: { author: true },
  })
  res.json(posts)
}
