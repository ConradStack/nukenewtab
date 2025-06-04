/* This is a base64-encoded placeholder icon */
const canvas = document.createElement('canvas');
canvas.width = 16;
canvas.height = 16;
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#667eea';
ctx.fillRect(0, 0, 16, 16);
ctx.fillStyle = 'white';
ctx.font = 'bold 12px Arial';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('N', 8, 8);
console.log(canvas.toDataURL());
// Use the output from above to create actual icon files
