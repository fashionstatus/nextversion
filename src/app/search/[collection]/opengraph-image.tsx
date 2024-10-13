import OpengraphImage from '@/components/common/opengraph-image';
import { getCollection } from '@/lib/shopify';

export const runtime = 'nodejs';
export const dynamicParams = false;
type Params = {
  slug: string;
}
export async function generateStaticParams() {
  return [ { slug: [""] } ]
}
 

export default async function Image({ params }: { params: { collection: string } }) {
  const collection = await getCollection(params.collection);
  const title = collection?.seo?.title || collection?.title;

  return await OpengraphImage({ title });
}
