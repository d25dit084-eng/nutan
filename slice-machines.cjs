const sharp = require('sharp');
const path = require('path');

async function slice() {
  const input = path.join(__dirname, 'public', 'machinery-lineup.png');
  const meta = await sharp(input).metadata();
  console.log('Image meta:', meta.width, 'x', meta.height);

  // Width is 1024, Height is 189
  // In machinery-lineup.png:
  // 1. Soda Dispenser (leftmost): x: 0 to 125, y: 0 to 189
  // 2. Soda Machine 2: x: 120 to 220, y: 0 to 189
  // 3. Soda Machine 3: x: 215 to 345, y: 0 to 189
  // 4. Stainless Storage/Filling: x: 345 to 495, y: 0 to 189
  // 5. Beverage Cooler: x: 495 to 610, y: 0 to 189
  // 6. Softy Ice Cream: x: 610 to 680, y: 0 to 189
  // 7. Capping/Sealing Machine: x: 680 to 790, y: 0 to 189
  // 8. Bottle Filling / Complete Plant: x: 790 to 1024, y: 0 to 189

  const slices = [
    { name: 'machine-soda-dispenser.png', left: 5, top: 25, width: 90, height: 160 },
    { name: 'machine-soda-taps.png', left: 90, top: 15, width: 85, height: 170 },
    { name: 'machine-soda-large.png', left: 175, top: 20, width: 100, height: 165 },
    { name: 'machine-filling-sealing.png', left: 395, top: 10, width: 110, height: 175 },
    { name: 'machine-cooler.png', left: 505, top: 5, width: 105, height: 180 },
    { name: 'machine-softy.png', left: 615, top: 20, width: 68, height: 165 },
    { name: 'machine-capping.png', left: 680, top: 40, width: 105, height: 145 },
    { name: 'machine-plant.png', left: 785, top: 10, width: 235, height: 175 },
  ];

  for (const s of slices) {
    const outPath = path.join(__dirname, 'public', s.name);
    await sharp(input)
      .extract({ left: s.left, top: s.top, width: s.width, height: s.height })
      .toFile(outPath);
    console.log('Saved', s.name);
  }
}

slice().catch(console.error);
