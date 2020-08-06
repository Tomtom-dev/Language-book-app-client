export function selectBookDetails(reduxState) {
  return reduxState.books.details;
}


export const selectBooks = (state) => state.books.selectionBooks;
