import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const galleryDir = path.join(process.cwd(), 'public', 'img', 'gallery');

  const files = fs.readdirSync(galleryDir);
  const images = files
    .filter(file => /\.(jpe?g|png|gif|webp)$/i.test(file))
    .map(file => `/img/gallery/${file}`);

  return NextResponse.json(images);
}