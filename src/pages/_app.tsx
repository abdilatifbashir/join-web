import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import { wrapper } from '../redux/store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};

    //Anything returned here can be accessed by the client
    return { pageProps: pageProps };
  }

  render() {
    //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
    const { Component, pageProps }: any = this.props;

    return <Component {...pageProps} />;
  }
}

export default wrapper.withRedux(MyApp);
