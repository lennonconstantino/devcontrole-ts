const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  console.log('Testando conexão com Prisma...')
  // Teste simples
  const result = await prisma.$queryRaw`SELECT 1 as test`
  console.log('Conexão OK:', result)
}

main()
  .catch(e => console.error('Erro:', e))
  .finally(() => prisma.$disconnect())
