import { Storage } from "@google-cloud/storage";

const storage = new Storage(); // 在 Cloud Run 會用預設 service account
const bucketName = process.env.BUCKET_NAME!;

export async function listMaterialImages() {
  const [files] = await storage.bucket(bucketName).getFiles();
  // 先回傳檔名，之後再做 signed URL
  return files.map((f) => f.name);
}
