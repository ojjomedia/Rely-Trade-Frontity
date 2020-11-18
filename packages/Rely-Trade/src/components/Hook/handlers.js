// Do not use `libraries.source.handlers.push()` here.
export const postHandler = {
    pattern: "/product/",
    func: async ({ route, params, state, libraries }) => {
      const response = await libraries.source.api.get({
        endpoint: "/wp/v2/product"
      });
  
      // You can name this as `items`... .
      const items = await libraries.source.populate({ response, state });
  
      Object.assign(state.source.data[route], {
        isArchive: true,
        isPostType: true,
        // ...and use it directly here without using `map()`.
        items
      });
    }
  };