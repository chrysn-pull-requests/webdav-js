[ ! -d ./tmp ] && mkdir -p ./tmp;

node src/example.generator.js > ./tmp/example-local.js;
npm run --silent terser -- ./tmp/example-local.js -c -m -e > ./tmp/example-local-min.js;
node src/example.generator.js --cdn > ./tmp/example-cdn.js;
npm run --silent terser -- ./tmp/example-cdn.js -c -m -e > ./tmp/example-cdn-min.js;

printf 'javascript:' > ./examples/bookmarklet/source-min.js;
cat ./tmp/example-cdn-min.js >> ./examples/bookmarklet/source-min.js;

printf '<script type="text/javascript">' > ./examples/apache-directory-list/header.html;
cat ./tmp/example-cdn-min.js >> ./examples/apache-directory-list/header.html;
printf '</script><!--' >> ./examples/apache-directory-list/header.html;

printf '<script type="text/javascript">' > ./examples/apache-directory-list-local/header.html;
cat ./tmp/example-local-min.js >> ./examples/apache-directory-list-local/header.html;
printf '</script><!--' >> ./examples/apache-directory-list-local/header.html;