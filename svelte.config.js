// import adapterGhpages from "svelte-adapter-ghpages";

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//   kit: {
//     paths: {
//       base: "/fallout-loot-tables"
//     },
//     adapter: adapterGhpages({
//       fallback: 'index.html',
//     })
//   }
// };
// export default config;

import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter(),
  }
};
