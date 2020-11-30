import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(req, res) {
  const postId = req.query.numara

  if (req.method === 'GET') {
    handleGET(postId, res)
  } else if (req.method === 'DELETE') {
    handleDELETE(postId, res)
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    )
  }
}

// GET /api/post/:id
async function handleGET(postId, res) {
  const post = await prisma.gorevlendirmeler.findUnique({
    where: { numara: Number(postId) },
    // include: { author: true },
  })
  res.json(post)
}

// DELETE /api/post/:id
async function handleDELETE(postId, res) {
  const post = await prisma.gorevlendirmeler.delete({
    where: { numara: Number(postId) },
  })
  res.json(post)
}
