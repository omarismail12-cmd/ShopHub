import PropTypes from 'prop-types';

function Layout({ children }) {
    return (
      <div className="px-6 md:px-10 lg:px-16 xl:px-20 py-6 max-w-screen-xl mx-auto">
        {children}
      </div>
    );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;