const { parse } = require('url');

const getPath = (url) => {
  const parsedUrl = parse(url, true);
  parsedUrl.pathname = (parsedUrl.pathname || '')
    .toLowerCase()
    .replace('.html', '');
  return parsedUrl;
};

module.exports = {
  getPath,
};
