#Know issues:
 - Editing sass files that are imported by other sass will not take effect unless gulp is restarted or the sass that import them are resaved.



Don't forget to use sass/compass spriting for images (sprites)

Optimal folder structure would be

_sass/
	_base.sass
	home.sass
	about.sass
_js/
	base/
		base1.js
		base2.js
	home/
		js-1.js	
		js-2.js
	about/
		js-1.js		
_pugincludes/
	head.pug
	header.pug
	footer.pug
	nav.pug
about/
	index.pug
services/
	index.pug			
index.pug 

app/
	css/
		home.css
		about.css
	js/
		home/
			home.js
		about/
			about.js
	imgs/
		home/
			img1.jpg
		about/
			img1.png
		services/
			img1.jpg
			img2.jpg
			img3.jpg
	index.html

	about/
	services/



