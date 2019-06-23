
const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 0,
  orderItems: 0
};

const updateCartItems = (cartItems, item, idx) => {

  if (item.count === 0) {
    return [...cartItems.slice(0,idx),...cartItems.slice(idx+1)];
  }

  if (idx === -1) {
    return [...cartItems, item];
  }

  return [
    ...cartItems.slice(0,idx),
    item,
    ...cartItems.slice(idx+1)
  ];
};

const updateCartItem = (book,item = {}, quantity) => {
  const {
    id = book.id,
    title = book.title,
    total = 0,
    count = 0} = item;

  return {
    id,
    title,
    total: total + quantity * book.price,
    count: count + quantity
  };
};

const updateOrder = (state, bookId, quantity, totalQuantity) => {
  const book = state.books.find(book=>book.id===bookId);
  const sameBookIdx = state.cartItems.findIndex(item=>item.id===book.id);
  const item = state.cartItems[sameBookIdx];

  let newItem = updateCartItem(book,item, quantity);

  return {
    ...state,
    cartItems: updateCartItems(state.cartItems,newItem,sameBookIdx),
    orderTotal: state.orderTotal + book.price * totalQuantity,
    orderItems: state.orderItems + quantity
  };
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'BOOKS_REQUESTED':
      return {
        ...state,
        books:[],
        loading:true,
        error: null
      };
    case 'BOOKS_LOADED':
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };
    case 'BOOKS_ERROR':
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      };
    case 'BOOK_ADDED_TO_CART':
      return updateOrder(state,action.payload,1,1);
    case 'DELETED_BOOK':
      return updateOrder(state,action.payload,-1,-1);
    case 'DELETED_ALL_BOOKS':
      const item = state.cartItems.find(({id})=>id === action.payload);
      return updateOrder(state,action.payload,-item.count,-item.count);

    default:
      return state;
  }
};

export default reducer;
