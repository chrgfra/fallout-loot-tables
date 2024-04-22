import adapterGhpages from "svelte-adapter-ghpages";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    paths: {
      base: "/chrgfra.github.io"
    },
    adapter: adapterGhpages({
      fallback: '200.html',
    })
  }
};
export default config;
