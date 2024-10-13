import OpengraphImage from '@/components/common/opengraph-image';

export const runtime = 'nodejs';

export function generateStaticParams() {
  return [ { slug: [""] } ]
}
 

export default async function Image() {
  return await OpengraphImage();
}
