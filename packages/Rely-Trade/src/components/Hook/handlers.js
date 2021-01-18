export const ProductPage = {
  name: "Products",
  priority: 10,
  pattern: "/products",
  func: async ({ link, params, state, libraries, force }) => {
    //1.get all posts fron the fetaured cat
    const response = await libraries.source.api.get({
      endpoint: "posts",
    });

    //2. add items to the state
    const items = await libraries.source.populate({ response, state, force });

    const { Id } = state.source.get("/");

    //3. add link to data
    const currentPageData = state.source.data[link];
    const newPageData = {
      id: "420",
      items,
      link,
      Id,
      title: { rendered: "Products" },
      type: "page",
      name: "Products",
      isPostType: false,
      isArchive: true,
      isProducts: true,
      // isPostTypeArchive: true,
      isFetching: currentPageData.isFetching,
      isReady: currentPageData.isReady,
    };
    const archive = libraries.source.handlers.find(
      (handler) => handler.name == "post archive"
    );
    await archive.func({ link, params, state, libraries, force });
    Object.assign(currentPageData, newPageData);
  },
};
