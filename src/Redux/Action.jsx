export const addingBlog = (blog) => {
  return {
    type: "ADD_BLOG",
    payload: blog,
  };
};
export const removedBlog = (id) => {
  return {
    type: "REMOVE_BLOG",
    payload: id,
  };
};

export const editBlog = (blog) => {
  return {
    type: "EDIT_BLOG",
    payload: blog,
  };
};
