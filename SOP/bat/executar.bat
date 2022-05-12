md htmllocal
cd htmllocal

md assets
md pages
md styles
md scripts

cd assets
echo oi>img1.png
echo oi>img2.png
echo oi>img3.png
echo oi>img4.png
cd ..

cd pages
echo oi>page1.html
echo oi>page2.html
echo oi>page3.html
cd ..

cd styles
echo oi>styles1.css
echo oi>styles2.css
echo oi>styles3.css
cd ..

cd scripts
echo oi>script1.js
echo oi>script2.js
echo oi>script3.js
cd..

dir \s
tree
