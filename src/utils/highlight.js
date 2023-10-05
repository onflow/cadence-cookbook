import hljs from 'highlight.js';
import 'highlight.js/styles/base16/tomorrow-night.css';

// ----------------------------------------------------------------------

hljs.configure({
  languages: ['javascript', 'sh', 'bash', 'html', 'scss', 'css', 'json'],
});

if (typeof window !== 'undefined') {
  window.hljs = hljs;
}
