function renderFullPage() {
    return `<!doctype html>
<html lang="en-US">
  <head>
    <title>Fill me in</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charset="utf-8" />
    <link rel=StyleSheet href="/static/css/style.css" type="text/css">
  </head>
  <body>
    <div id="app"></div>
    <script defer src="/static/scripts/bundle.js"></script>
  </body>
</html>`;
}

export default renderFullPage;
