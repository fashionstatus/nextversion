# Clothing Store E-Commerce Website - Glaubhan

## Summary

This is an e-commerce website for a Indian clothing store called Glaubhan that showcases my ability to design and implement e-commerce websites using component-based frameworks (React.js/Next.js) for the front end and Shopify for the back end.

Live Demo: [https://clothing-store.glaubhanta.com/](https://clothing-store.glaubhanta.com/)

> You can use this credit card information to test buying a product:
>- Card number: 4242424242424242
>- Expiry date: any date in the future
>- Name on card: enter at least two words
>- Security code: enter any three digits

## Responsive Design

I designed a responsive layout for mobile and desktop using Figma and implemented the design using TypeScript, React.js/Next.js, and Tailwind CSS, ensuring it works properly on different screen sizes.

Design: [ ](https://#)

## Shopify Integration

I used Shopify for the back end by setting it up to run in the headless mode. product images and information, pages, menus, etc. are all configured and stored on the Shopify platform and retrieved and displayed on the front end using React.js/Next.js.

## GraphQL API

The data is retrieved from Shopify using the Storefront GraphQL API. API calls are run on the server using server components and server actions and are cached for faster response time. I used the Shopify integration provided by Vercel but modified the queries and added extra functionality (queries) for missing parts (like the Best Seller items)

## Customizability

I have divided every section into smaller components that can be easily modified and re-used in the future. I have made multiple custom-made components for displaying product images/information with the ability to show different product images on hover and for each color variant. I customized different pages/items that are handled by Shopify like the checkout page, email, logo, favicon, etc. to provide a uniform visual experience to the end-user.

## Animations

I have added custom-made reveal animations using Framer Motion.

## Slider

I have integrated multiple sliders and heavily customized them with color, size, animations, thumbnails, etc. to match the design and the feel of the website.

## Accessibility

I improved the website's accessibility by adding ARIA properties and testing how the website behaves for people with disabilities. I adjusted the heading/section structure of the website and added screen-reader-only titles to the sections that needed it.

![Website Structure](/screenshots/structure.png)

## SEO Optimization

This website is optimized for search engines using metadata like description, keywords, OpenGraph, Twitter card, and more. 

## Asset Optimization

All of the images used in this website have responsive sizes according to the device size to limit bandwidth usage and deliver a great end-user experience. All of the fonts are cached and served from the same server for faster load times. Video assets are compressed and served in multiple formats to support different browsers.

## Lighthouse Benchmark

![Lighthouse score](/screenshots/lighthouse.png)

## To Do

There are more features that I would like to add in the future like a blog, wishlist, pagination, contact us page, i18n, etc.

## Tech Stack
- Shopify
- TypeScript
- React.js
- Next.js v14
- Tailwind CSS
- Swiper
- Framer Motion

## Screenshots
- Home Page

  <a href="/screenshots/screenshot-desktop.png"><img src="/screenshots/screenshot-desktop.png" alt="Desktop Screenshot" height="800px"/></a>
  <a href="/screenshots/screenshot-mobile.png"><img src="/screenshots/screenshot-mobile.png" alt="Mobile Screenshot" height="800px"/></a>
  
- Product Page

  <a href="/screenshots/screenshot-desktop-product.png"><img align="top" src="/screenshots/screenshot-desktop-product.png" alt="Desktop Screenshot - Product Page" width="312px"/></a>
  <a href="/screenshots/screenshot-mobile-product.png"><img src="/screenshots/screenshot-mobile-product.png" alt="Mobile Screenshot - Product Page" width="64px"/></a>

## Author
Rashid Shamloo

- Portfolio - [glaubhanta.com](https://www.glaubhanta.com)
- Linkedin - [glaub-hanta](https://www.linkedin.com/in/glaub-hanta/)
- Dev.to - [@glaubhanta](https://dev.to/glaubhanta)
- Twitter - [@glaubhanta](https://www.twitter.com/glaubhanta)
- Email - [glaubhanta@gmail.com](mailto:glaubhanta@gmail.com)

