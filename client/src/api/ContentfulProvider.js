import React from "react";
import PropTypes from "prop-types";
import { createClient } from "contentful";

const client = createClient({
  space: "n3fm6fi09s7u",
  environment: "master",
  accessToken:
    "c470cd56eb1ea2f1fd452382cca835a1c76c27bd5a33292e1425be87a22b3441"
});

class ContentfulProvider extends React.Component {
  // make the query for the SDK
  // and the render function required
  static propTypes = {
    query: PropTypes.object.isRequired,
    render: PropTypes.func.isRequired
  };


  // set default state for the data to be fetched
  // and possible errors
  state = {
    error: null,
    items: [],
    query: this.props.query
  };

  componentDidMount() {
    // make the API call
    client
      .getEntries(this.state.query)
      .then(({ items }) =>
        this.setState({
          items
        })
      )
      .catch(error =>
        this.setState({
          error
        })
      );
  }

  render() {
    // return and render the function
    // that was passed in via `render` prop
    return this.props.render({
      items: this.state.items,
      error: this.state.error
    } );
    
  }
}

export default ContentfulProvider;
