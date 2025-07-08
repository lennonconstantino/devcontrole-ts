# Remover tudo
rm -rf node_modules
rm -rf .next
rm -rf node_modules/@prisma
rm package-lock.json

# Reinstalar
npm install

npm list @auth/prisma-adapter
npm list @next-auth/prisma-adapter

# Se você está usando NextAuth v4, use:
npm install @next-auth/prisma-adapter

# Se você está usando Auth.js v5 (NextAuth v5), use:
#npm install @auth/prisma-adapter

# "next-auth": "^4.24.11",
#  "prisma": "^6.11.1", -> "^2.24.1",

# Gerar cliente
npx prisma generate && npx prisma db push

npm install @prisma/client@latest prisma@latest

node -e "console.log(require('@prisma/client'))"

ls -lrt node_modules/@prisma/
