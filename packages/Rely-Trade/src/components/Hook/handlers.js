
export const ProductPage = {
  name: "Products",
  priority: 10,
  pattern: "/products",
  func: async ({ link, params, state, libraries, force }) => {
    //1.get all posts fron the fetaured cat
    const response = await libraries.source.api.get({
      endpoint: "posts",
      params: { per_page: 100 },
    });

    //2. add items to the state
    const items = await libraries.source.populate({ response, state, force });

    const { id } = state.source.get("/");

    //3. add link to data
    const currentPageData = state.source.data[link];
    const newPageData = {
      id,
      items,
      link,
      type: "page",
      name: "Products",
      isPostType: true,
      isArchive: true,
      isProducts: true,
      // isPostTypeArchive: true,
      isFetching: currentPageData.isFetching,
      isReady: currentPageData.isReady,
    };
    Object.assign(currentPageData, newPageData);
  },
  }