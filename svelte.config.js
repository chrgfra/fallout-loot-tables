import adapterGhpages from "svelte-adapter-ghpages";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    paths: {
      base: "/src"
    },
    adapter: adapterGhpages({
      fallback: 'index.html',
    })
  }
};
export default config;
