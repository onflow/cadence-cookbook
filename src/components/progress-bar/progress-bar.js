'use client';

import { useEffect } from 'react';
import NProgress from 'nprogress';
import StyledProgressBar from './styles';

// ----------------------------------------------------------------------

export default function ProgressBar() {
  useEffect(() => {
    NProgress.configure({ showSpinner: false });

    const handleAnchorClick = (event) => {
      const targetUrl = event.currentTarget.href;
      const currentUrl = window.location.href;
      if (targetUrl !== currentUrl) {
        NProgress.start();
      }
    };

    const handleMutation = () => {
      const anchorElements = document.querySelectorAll('a[href]');

      const filteredAnchors = Array.from(anchorElements).filter((element) => {
        const href = element.getAttribute('href');
        return href && href.startsWith('/');
      });

      filteredAnchors.forEach((anchor) => anchor.addEventListener('click', handleAnchorClick));
    };

    const mutationObserver = new MutationObserver(handleMutation);

    mutationObserver.observe(document, { childList: true, subtree: true });

    window.history.pushState = new Proxy(window.history.pushState, {
      apply: (target, thisArg, argArray) => {
        NProgress.done();
        return target.apply(thisArg, argArray);
      },
    });
  });

  return <StyledProgressBar />;
}
