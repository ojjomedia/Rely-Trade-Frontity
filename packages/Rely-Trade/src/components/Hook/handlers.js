
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

    const { Id } = state.source.get("/");

    //3. add link to data
    const currentPageData = state.source.data[link];
    const newPageData = {
      id: '420',
      items,
      link,
      Id,
      title: {rendered: "Products"},
      type: "page",
      name: "Products",
      isPostType: true,
      isArchive: true,
      isProducts: true,
      // isPostTypeArchive: true,
      isFetching: currentPageData.isFetching,
      isReady: currentPageData.isReady,
    };
    const archive = libraries.source.handlers.find(
      handler => handler.name == "post archive"
    );
    await archive.func({ link, params, state, libraries, force });
    Object.assign(currentPageData, newPageData);
  },
  }

  export const ProductItem = {
    name: "Shop",
    priority: 10,
    pattern: "/shop",
    func: async ({ link, params, state, libraries, force }) => {
      //1.get all posts fron the fetaured cat
      const response = await libraries.source.api.get({
        endpoint: "product",
        params: { per_page: 100 },
      });
  
      //2. add items to the state
      const items = await libraries.source.populate({ response, state, force });
  
      const { Id } = state.source.get("/product");
  
      //3. add link to data
      const currentPageData = state.source.data[link];
      const newPageData = {
        id: '220',
        items,
        link,
        Id,
        title: {rendered: "Shop"},
        type: "page",
        name: "Shop",
        isPostType: true,
        isArchive: true,
        isShop: true,
        // isPostTypeArchive: true,
        isFetching: currentPageData.isFetching,
        isReady: currentPageData.isReady,
      };
      const archive = libraries.source.handlers.find(
        handler => handler.name == "post archive"
      );
      await archive.func({ link, params, state, libraries, force });
      Object.assign(currentPageData, newPageData);
    },
  };