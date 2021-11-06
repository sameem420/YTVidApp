import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  onFormSubmit(e) {
    e.preventDefault();
    this.props.onTermSubmit(this.state.searchTerm);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Search for videos</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
