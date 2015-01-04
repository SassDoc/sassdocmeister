SASS = node_modules/node-sass/bin/node-sass
BROWSERIFY = node_modules/browserify/bin/cmd.js
UGLIFY = node_modules/uglify-js/bin/uglifyjs

CSS += node_modules/normalize-css/normalize.css
CSS += node_modules/codemirror/lib/codemirror.css
CSS += node_modules/codemirror/theme/monokai.css

SCSS != find scss -name '*.scss'

all: css/main.css js/main.js

css/main.css: $(CSS) $(SCSS) css
	(cat $(CSS); $(SASS) --stdout scss/main.scss) | $(SASS) --output-style compressed > $@

js/main.js: src/main.js js
	$(BROWSERIFY) $< | $(UGLIFY) > $@

css js:
	mkdir $@
