const Markdown = require('markdown-it');
const hljs = require('highlight.js');

function getHighLight (str, lang) {
  if (!!lang && hljs.getLanguage(lang)) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
          hljs.highlight(lang, str, true).value +
          '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + Markdown.utils.escapeHtml(str) + '</code></pre>';
  }

  return '';
}

function vueTempateWrap (content) {
  const escapeContent = escape(content);

  return `
<template>
  <section class="markdown-content" v-html="content" v-once />
</template>
<script>
export default {
  created() {
    this.content = unescape(\`${escapeContent}\`);
  }
};
</script>
`;
}

module.exports = function (source) {
  const md = new Markdown({
    html: true,
    highlight: getHighLight
  });

  this.cacheable && this.cacheable();

  return vueTempateWrap(md.render(source));
};
