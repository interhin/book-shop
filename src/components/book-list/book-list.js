import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { connect } from 'react-redux';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import { withBookstoreService } from '../hoc';
import { booksLoaded, booksRequested, booksError, onAddedToCart } from '../../actions';
import { compose } from '../../utils';

import './book-list.css';

class BookList extends Component {

  componentDidMount() {
    const { bookstoreService,
            booksLoaded,
            booksRequested,
            booksError } = this.props;
    booksRequested();
    bookstoreService.getBooks()
      .then((data)=>{
        booksLoaded(data);
      })
      .catch((error)=>{
        booksError(error);
      });
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <li key={book.id}><BookListItem book={book} onAddedToCart={()=>{onAddedToCart(book.id)}}/></li>
            )
          })
        }
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
  booksError,
  onAddedToCart
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
