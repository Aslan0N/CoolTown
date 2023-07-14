const initialState = localStorage.getItem("Blogs")
  ? JSON.parse(localStorage.getItem("Blogs"))
  : [];



export const BlogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_BLOG":
      return [...state, action.payload];
    case "REMOVE_BLOG":
      return state.filter((item)=> item.id !== action.payload)
    case"EDIT_BLOG":
    const myBlogForEdit = action.payload
    const editBlogsArr = state.map((item)=>{
      if(item.id === myBlogForEdit.id){
        return myBlogForEdit
      }else{
        return {...item}
      }
    })
    return state = editBlogsArr
    default:
      return state;
  }
};
