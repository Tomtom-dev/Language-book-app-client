export const getBooksRespond = state => state.bookReducerState.list

export function selectBookDetails(reduxState) {
  return reduxState.books.details;
}
