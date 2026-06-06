const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

async function main() {
  const surahs = await prisma.surah.findMany({
    orderBy: { number: 'asc' }
  });
  
  const dir = path.join(process.cwd(), 'src', 'data');
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(
    path.join(dir, 'surahs.json'), 
    JSON.stringify(surahs, null, 2)
  );
  
  console.log('Successfully exported surahs.json');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
