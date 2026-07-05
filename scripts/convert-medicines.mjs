/**
 * One-time conversion: MedicineInventory xlsx → public/data/medicines.json
 * Run: node scripts/convert-medicines.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import XLSX from "xlsx";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const input = path.join(root, "src/assets/MedicineInventory (1).xlsx");
const output = path.join(root, "public/data/medicines.json");

const wb = XLSX.readFile(input);
const ws = wb.Sheets["Medicine Inventory"];
const rows = XLSX.utils.sheet_to_json(ws, { header: 1 });

const medicines = rows
  .slice(3)
  .filter((row) => row[0] && row[3])
  .map((row) => ({
    itemCode: String(row[0]).trim(),
    company: String(row[1] || "").trim(),
    range: String(row[2] || "").trim(),
    name: String(row[3]).trim(),
    category: String(row[4] || "").trim(),
    packSize: row[5] != null ? String(row[5]).trim() : "",
  }));

fs.mkdirSync(path.dirname(output), { recursive: true });
fs.writeFileSync(output, JSON.stringify(medicines, null, 2));
console.log(`Wrote ${medicines.length} medicines to public/data/medicines.json`);
