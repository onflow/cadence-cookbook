import PropTypes from "prop-types";
import Script from 'next/script'

export default function GTag({ gtagId }) {
  return (<>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${gtagId}`}></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${gtagId}');
        `}
      </Script>
    </>
  );
}

GTag.propTypes = {
  gtagId: PropTypes.string,
};
