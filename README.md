# poc
poc

For TOp level LPL, I have used vnm : 16.17.0
For Shell : 18.11.0
For mfe1 : 16.17.0
For mfe2 : 12.20.0
for mfe3 : 8.9.3
For monolithic : 8.9.3

So inside mfe3, I have created library to import this in shell, and ppublish it as a library.
Here is the steps in mfe3
ng build mfe-library-v1
cd dist/mfe-library-v1
npm publish(before this one, you might need to login : npm login)

Go to the Shell directory : 
npm install mfe-library-v1

Then we can use this library