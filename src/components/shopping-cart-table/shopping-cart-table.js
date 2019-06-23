import React from 'react';
import { connect } from 'react-redux';
import './shopping-cart-table.css';
import { onDeletedBook, onDeletedAllBooks, onAddedToCart } from '../../actions';

const ShoppingCartTable = ({ items, total, onDeleted, onIncreased, onDecreased }) => {

  const renderRow = (item, idx) => {
    const { id, total, count, title } = item;
  
    return (
      <tr key={id}>
        <td>{idx+1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button onClick={()=>{onDeleted(id);}} className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
          </button>
          <button onClick={()=>{onIncreased(id);}} className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-plus-circle" />
          </button>
          <button onClick={()=>{onDecreased(id);}} className="btn btn-outline-warning btn-sm float-right">
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
          
        </thead>

        <tbody>
          {
            items.map(renderRow)
          }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.cartItems,
    total: state.orderTotal
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleted: (id) => {
      dispatch(onDeletedAllBooks(id));
    },
    onDecreased: (id) => {
      dispatch(onDeletedBook(id));
    },
    onIncreased: (id) => {
      dispatch(onAddedToCart(id));
    }
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(ShoppingCartTable);
