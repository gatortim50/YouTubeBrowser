import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          type="text" id="search" placeholder="Search"
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
        <div className="sort-options">

          <form>
            <label htmlFor="assign-to">Order By</label>
            <select defaultValue="relevance" onChange={event => this.props.handleOrderByChange(this.state.term, event)}>
              <option value="date">Date</option>
              <option value="rating">Rating</option>
              <option value="relevance">Relevance</option>
            </select>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
