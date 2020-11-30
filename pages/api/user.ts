import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// POST /api/user
// Required fields in body: name, email
export default async function handle(req, res) {
  const result = await prisma.yonetim.create({
    data: {
      // ...req.body,
      kullanici: req.ad,
      ad: req.ad,
      kisa_ad: "asdsad",
      yetkiler: "sadsadsadsadsadsad"
    },
  })
  res.json(result)
}
