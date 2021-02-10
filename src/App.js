import './App.css';
import Layout from './containers/hoc/Layout/Layout';
import MainContainer from './containers/MainContainer/MainContainer';
import React from 'react';

class App extends React.Component {
  componentDidMount() {
    document.title = 'Sova Health';
  }

  render() {
    return (
      <Layout>
        <MainContainer />
      </Layout>
    );
  }
}

export default App;
