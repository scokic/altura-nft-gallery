# Altura NFT Gallery

## Getting Started

You can visit the app on the url: [altura-nft-gallery.vercel.app](https://altura-nft-gallery.vercel.app/).
Simply enter wallet address and press enter!

### Running the app locally

1. Clone GitHub repo [https://github.com/scokic/altura-nft-gallery](https://github.com/scokic/altura-nft-gallery)
2. Register and create API key on [Alchemy](https://www.alchemy.com/)
3. Create `.env.local` file with the variable called `ALCHEMY_API_KEY=$YOUR_ALCHEMY_API_KEY`
4. Run `npm run dev` and open `localhost:3000` in your browser

### Wallets used for testing

- 0x12102797AaFBe6ea5F24b7b1728849191c9b05da - 24 nft's
- 0x135FB3c7e03F51d29C895a3793c7bD1C01Dd6837 - 64 nft's
- 0x586887754C9967Db778a377a05dD46F6e3190E9f - 0 minted NFT's (no results)
- test - any string can be used for forcing error (3 times retrying)

## Stack

I checked out your website [alturanft.com](https://www.alturanft.com/) and saw that you are using NextJS and TailwindCSS so those are the technologies I used for my project. Next is great for SEO and websites where we need SSR, which is why it's a great choice for this type of app.
For better developer experience I also added TypeScript, React Query, and Zustand. I chose not to use any UI library since that would not show my ability to make UI components myself.

- [NextJS](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Alchemy](https://www.alchemy.com/)
- [React Query](https://react-query-v3.tanstack.com/)
- [Zustand](https://github.com/pmndrs/zustand)

## Additional info

The app is hosted via Vercel on on the link: [altura-nft-gallery.vercel.app](https://altura-nft-gallery.vercel.app/).
Every merge/PR to main branch triggers redeploy.

## Room for improvements

- Simplifying data fetching
- Making modal more reusable by using portal and simplifying the logic
- Remapping the data into our prefered data type
- Thinking of a solution to use different media for NFT's (currently using thumbnails)
- Input field validation can be improved, currently we're only checking if input is empty
- We can disable page scroll on mobile when modal is opened. This can be done via simple custom hook
