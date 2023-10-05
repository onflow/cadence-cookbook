import PropTypes from 'prop-types';
import { HeaderSimple as Header } from '../_common';

// ----------------------------------------------------------------------

export default function SimpleLayout({ children }) {
  return (
    <>
      <Header />

      {children}
    </>
  );
}

SimpleLayout.propTypes = {
  children: PropTypes.node,
};
