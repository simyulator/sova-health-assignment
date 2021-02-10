import React from 'react';
import './Layout.css';
import Toolbar from '../../../components/Navigation/Toolbar/Toolbar';
import Sidedrawer from '../../../components/Navigation/Sidedrawer/Sidedrawer';
import Backdrop from '../../../components/UI/Backdrop/Backdrop';
import Footer from '../../../components/Footer/Footer';

class Layout extends React.Component {
  state = {
    showSideDrawer: false,
  };

  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    let backdrop = this.state.showSideDrawer ? (
      <Backdrop clicked={this.sideDrawerClosedHandler} />
    ) : null;

    return (
      <div className='container'>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <Sidedrawer
          closed={this.sideDrawerClosedHandler}
          open={this.state.showSideDrawer}
        />

        {backdrop}
        <main className='Content'>{this.props.children}</main>
        <hr className='solid-divider' />
        <Footer />
      </div>
    );
  }
}

export default Layout;
