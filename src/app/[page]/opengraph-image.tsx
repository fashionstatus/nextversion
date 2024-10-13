import OpengraphImage from '@/components/common/opengraph-image';
import { getPage } from '@/lib/shopify';

export const runtime = 'nodejs';
type Params = {
  slug: string;
}
export  async function generateStaticParams() {
    return [ { slug: [""] } ]

 /* const pages = await ContentStore.collections.pages.all();

  if (!pages) {
      return [{ slug: 'not-found' }];
  }

  return pages.map(page => ({
      slug: page.slug
  })); */
}

export default async function Image({ params }: { params: { page: string } }) {
  const page = await getPage(params.page);
  const title = page.seo?.title || page.title;

  return await OpengraphImage({ title });
}
