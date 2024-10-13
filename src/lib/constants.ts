export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: 'RELEVANCE' | 'BEST_SELLING' | 'CREATED_AT' | 'PRICE';
  reverse: boolean;
};

export const defaultSort: SortFilterItem = {
  title: 'Relevance',
  slug: null,
  sortKey: 'RELEVANCE',
  reverse: false
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  { title: 'Trending', slug: 'trending-desc', sortKey: 'BEST_SELLING', reverse: false }, // asc
  { title: 'Latest arrivals', slug: 'latest-desc', sortKey: 'CREATED_AT', reverse: true },
  { title: 'Price: Low to high', slug: 'price-asc', sortKey: 'PRICE', reverse: false }, // asc
  { title: 'Price: High to low', slug: 'price-desc', sortKey: 'PRICE', reverse: true }
];

export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart'
};

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden';
export const DEFAULT_OPTION = 'Default Title';
// https://admin.shopify.com/store/muce5c-ic/api/2024-10/orders.json
//
export const SHOPIFY_GRAPHQL_API_ENDPOINT = 'https://muce5c-ic.myshopify.com/admin/api/2024-10/graphql.json'
// '/store/muce5c-ic/api/2024-10/orders.json' ;//'/api/2023-01/graphql.json';
//curl -X GET "https://muce5c-ic.myshopify.com/admin/api/2023-01/shopify_payments/balance/transactions.json" -H "X-Shopify-Access-Token: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"
//Would you please confirm whether you're making this request to a development store? Generally, payouts wouldn't exist for a development store.


