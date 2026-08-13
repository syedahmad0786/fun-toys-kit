/** PNG-in-ICO (Vista+). Width/height 0 means 256. */

export function pngsToIco(pngBuffers) {
  const count = pngBuffers.length;
  const header = 6 + 16 * count;
  let offset = header;
  const entries = pngBuffers.map((buf) => {
    const width = buf.readUInt32BE(16);
    const height = buf.readUInt32BE(20);
    const entry = { width, height, size: buf.length, offset, buf };
    offset += buf.length;
    return entry;
  });
  const out = Buffer.alloc(offset);
  out.writeUInt16LE(0, 0);
  out.writeUInt16LE(1, 2);
  out.writeUInt16LE(count, 4);
  entries.forEach((e, i) => {
    const o = 6 + i * 16;
    out.writeUInt8(e.width >= 256 ? 0 : e.width, o);
    out.writeUInt8(e.height >= 256 ? 0 : e.height, o + 1);
    out.writeUInt8(0, o + 2);
    out.writeUInt8(0, o + 3);
    out.writeUInt16LE(1, o + 4);
    out.writeUInt16LE(32, o + 6);
    out.writeUInt32LE(e.size, o + 8);
    out.writeUInt32LE(e.offset, o + 12);
    e.buf.copy(out, e.offset);
  });
  return out;
}
