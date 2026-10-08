const sharp = require('sharp');
const path = require('path');

async function extractCards() {
  const refPath = path.join(__dirname, 'public', 'reference-exact-ui.jpg');

  // Featured Products images (6 cards):
  // Card 1: Soda Dispensing
  // Card 2: Automatic Bottle Filling
  // Card 3: Capping & Sealing
  // Card 4: Beverage Display Cooler
  // Card 5: Softy Ice Cream
  // Card 6: Complete Beverage Plant
  const featured = [
    { name: 'prod-soda.png', left: 55, top: 560, width: 85, height: 70 },
    { name: 'prod-filling.png', left: 210, top: 565, width: 110, height: 65 },
    { name: 'prod-capping.png', left: 375, top: 562, width: 100, height: 68 },
    { name: 'prod-cooler.png', left: 545, top: 560, width: 85, height: 70 },
    { name: 'prod-softy.png', left: 708, top: 565, width: 75, height: 65 },
    { name: 'prod-plant.png', left: 845, top: 562, width: 125, height: 68 },
  ];

  // Category images (5 cards):
  // Card 1: Soda Machines
  // Card 2: Filling & Sealing
  // Card 3: Refrigeration & Display
  // Card 4: Ice Cream Machines
  // Card 5: Complete Plants
  const categories = [
    { name: 'cat-soda.png', left: 45, top: 335, width: 70, height: 80 },
    { name: 'cat-filling.png', left: 232, top: 335, width: 85, height: 80 },
    { name: 'cat-cooler.png', left: 428, top: 335, width: 55, height: 80 },
    { name: 'cat-softy.png', left: 615, top: 335, width: 65, height: 80 },
    { name: 'cat-plant.png', left: 792, top: 335, width: 80, height: 80 },
  ];

  for (const item of [...featured, ...categories]) {
    await sharp(refPath)
      .extract({ left: item.left, top: item.top, width: item.width, height: item.height })
      .toFile(path.join(__dirname, 'public', item.name));
    console.log('Extracted', item.name);
  }
}

extractCards().catch(console.error);
