import { getCollections, getPages, getProducts } from '@/lib/shopify';
import { validateEnvironmentVariables } from '@/lib/utils';
import { MetadataRoute } from 'next';

type Route = {
  url: string;
  lastModified: string;
  changeFrequency: string; priority: number;
};

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? 'https://clothing-store.rashidshamloo.com'
  : 'http://localhost:3000';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  validateEnvironmentVariables();

  const routesMap = [''].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString() , changeFrequency :  "yearly" , priority:1
  }));

  const collectionsPromise = getCollections().then((collections) => 
     
      collections.map((collection) => (
         {
      url: 'http://localhost:3000/collections.json' , // `${baseUrl}${collection.path}`,
      lastModified: collection.updatedAt
     }  ))
  );

  const productsPromise = getProducts({}).then((products) =>
    products.map((product) => ({
      url:  'http://localhost:3000/products.json' , // `${baseUrl}/product/${product.handle}`,
      lastModified: product.updatedAt
    }))
  );

  const pagesPromise = getPages().then((pages) =>
    pages.map((page) => ({
      url: 'http://localhost:3000/pages.json' , // `${baseUrl}/${page.handle}`,
      lastModified: page.updatedAt
    }))
  );

  let fetchedRoutes: Route[] = [];
 /*
  try {
    fetchedRoutes = (await Promise.all([collectionsPromise, productsPromise, pagesPromise])).flat();
  } catch (error) {
    throw JSON.stringify(error, null, 2);
  }
  */
  let rt  =  [    // new Date()
    {
      url: 'https://muce5c-ic.myshopify.com/',
      lastModified: "2422",
      changeFrequency:"yearly",
      priority: 1,
    },
    {
      url: 'https://muce5c-ic.myshopify.com/collections/all',
      lastModified:  "2422" ,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: 'https://muce5c-ic.myshopify.com/pages/contact',
      lastModified:  "2422",
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ]
  
  return [    // new Date()
    {
      url: 'https://muce5c-ic.myshopify.com/',
      lastModified: "2422",
      changeFrequency:"yearly",
      priority: 1,
    },
    {
      url: 'https://muce5c-ic.myshopify.com/collections/all',
      lastModified:  "2422" ,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: 'https://muce5c-ic.myshopify.com/pages/contact',
      lastModified:  "2422",
      changeFrequency: "weekly",
      priority: 0.5,
    },
  ]
  
  
  //[...routesMap, ...fetchedRoutes];
}
