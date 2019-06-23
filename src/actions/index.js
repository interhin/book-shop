
const booksLoaded = (newBooks) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks
  };
};

const booksRequested = () => {
  return {
    type: 'BOOKS_REQUESTED'
  }
};

const booksError = (error) => {
  return {
    type: 'BOOKS_ERROR',
    payload:error
  }
};

const onAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  }
};

const onDeletedBook = (idx) => {
  return {
    type: 'DELETED_BOOK',
    payload: idx
  }
}

const onDeletedAllBooks = (idx) => {
  return {
    type: 'DELETED_ALL_BOOKS',
    payload: idx
  }
}

export {
  booksLoaded,
  booksRequested,
  booksError,
  onAddedToCart,
  onDeletedBook,
  onDeletedAllBooks
};
