import React from 'react';
import {Helmet} from 'react-helmet';
class PageName extends React.PureComponent {
  render() {
    return (
      <>
        <Helmet>
          <title>{this.props.namePage}</title>
        </Helmet>
      </>
    );
  }
}
export default PageName;