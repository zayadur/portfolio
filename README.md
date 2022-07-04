# Built with React and Next.js

This project was bootstrapped with `npx create-next-app .`

`npm run dev` to run the development environment.\
`npm run build` to build a public distribution.\
`npm run start` to start a production server.

Go to [http://localhost:3000](http://localhost:3000) to view the project.

# Layout
### components and logic
`./components` holds React components to render HTML\
`./lib` handles data fetching and computations\

### routing and data
`./pages` is a Next.js standard that automatically hands routing\
`./pages/api` contains API endpoints\
`./pages/projects` drives a route for `~/projects/[id]`\

### assets
`./projects` contains markdown files to easily add project details\
`./public` holds static assets like images\
`./styles` holds stylesheets used across various components

# Takeaways

[Create ProjectList component](https://github.com/zayadur/portfolio/commit/d5211f7bfb469443e20cdc3bea0637742c0f5b70)

- fetching data with `getStaticProps` & `getServerSideProps` are to be used in pages, not components!
- `props` in pages are passed down to `<Components />`, so use prop `names` in `<Components />` without importing modules with data, and assign `props={props}` to respective `<Components />` on page.

