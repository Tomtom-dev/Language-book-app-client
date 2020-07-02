export function selectUserBooks(reduxState) {
  return reduxState.user.books;
}

export const getUserInfos = state => state.userReducer