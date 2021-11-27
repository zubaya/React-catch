import { Component, Fragment } from 'react';

class StorePicker extends Component {
  render() {
    return (
      <Fragment>
        <form className="store-selector">
          <h2>Please Enter a store</h2>
          <input type="text" required placeholder="Store Name" />
          <button type="submit">Visit Store -> </button>
        </form>
      </Fragment>
    );
  }
}

export default StorePicker;
