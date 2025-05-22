import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as fileType from 'file-type';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const uploadDir = path.join(__dirname, 'uploads');

const files = fs.readdirSync(uploadDir);

for (const file of files) {
  const filePath = path.join(uploadDir, file);

  // Skip if it already has an extension
  if (path.extname(file)) continue;

  const buffer = fs.readFileSync(filePath);
  const type = await fileType.fileTypeFromBuffer(buffer); // ✅ Correct call

  if (!type) {
    console.warn(`Skipping unknown file: ${file}`);
    continue;
  }

  const newFilePath = `${filePath}.${type.ext}`;
  fs.renameSync(filePath, newFilePath);
  console.log(`Renamed: ${file} ➜ ${path.basename(newFilePath)}`);
}
