/* eslint-disable react/no-danger */
import PropTypes from 'prop-types';
import uuid from 'react-uuid';

export default function StructuredData({ data }) {
  return (
    <section>
      <script
        key={`structured-data-${uuid()}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </section>
  );
}

StructuredData.propTypes = {
    data: PropTypes.object,
  };
  