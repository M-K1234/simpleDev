# Frontend development tool
A little tool for making some common frontend tasks easier. 

# Installation

`npm i simpledev --save`

Used via script tag in you html:

`<script src=".../simple-dev.js"></script`

# Usage
When making a http request from client side, if you had to display the 
data in a list, in many cases, you would have to write the html for the 
list and loop through some data. The looping could be done via specifying 
a script or with directives in the html tags, depending on the framework 
you use.

With this tool, you have to write less code to achieve this and thus making
your html more readable and easier to manage.

Below are some examples:

### makeListArray(data, listID)

To use, you must provide an array of objects, to the data parameter and specify an
id for the list that is to be populated. 

IMPORTANT: The child elements inside the Li element, must have id's that match the names of the
properties on the objects in the array, that you want to be added to the html. 

Html
```
<ul id="list">
   <li>
       <p id="data1" ></p>
       <p id="data2" ></p>
       <p id="data3"></p>
    </li>
</ul>
```

Javascript
```javacript

let objectArray = [{data1: val1, data2: val2, data3: val3}, ...];

makeListArray(objectArray, 'list');
```

### sendReq(method, url, options) with makeListArray

Simply specify request method, a url and specify options only if needed, if not, you don't
have to give it a value. 

Below is a real example, with a call to imdb's API:

```
<!DOCTYPE html>
<html>
    <head>
        <title>Test</title>
        <script src="./node_modules/simpledev/simple-dev.js"></script>
    </head>
    <body>

        <ul id="list">
            <li>
                <p id="Title"></p>
            </li>
        </ul>
        
        <script>
            let url = 'http://www.omdbapi.com/?apikey=*******&s=shawshank';

            sendReq('GET', url).then(res => {
                
                const data = JSON.parse(res.response)
                makeListArray(data.Search, 'list')
            });
        </script>
    </body>
</html>
```

This code prints:
```
* The Shawshank Redemption

* Shawshank: The Redeeming Feature

* Hope Springs Eternal: A Look Back at 'The Shawshank Redemption'

* The Shawshank Redemption: Behind the Scenes

* The Shawshank Redemption: Cast Interviews

* The Shawshank Redemption (Scene)

* The Shawshank Reflection
```
NOTE: The documentation is far from complete, but it is going to be updated as 
frequently as possible 