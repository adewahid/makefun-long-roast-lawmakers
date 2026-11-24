import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The senator who wrote a 400-page bill to regulate the internet just emailed the committee a screenshot of his Word document pasted into another Word document, saved as 'final_FINAL_v2_REAL.pdf.docx'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
