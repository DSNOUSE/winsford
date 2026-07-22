const fs = require('fs');
const path = require('path');

const tracePath = path.join(__dirname, '..', '.next', 'trace');

if (!fs.existsSync(tracePath)) {
  process.exit(0);
}

try {
  fs.unlinkSync(tracePath);
} catch (error) {
  if (error.code === 'EPERM' || error.code === 'EBUSY') {
    console.error('\nAnother Next.js process is locking .next/trace.');
    console.error('Stop other dev servers (Ctrl+C) or end node.exe in Task Manager, then retry.\n');
    process.exit(1);
  }

  throw error;
}
