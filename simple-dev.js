/**
 * Takes data in form of an array, that can contain objects. The id must be for a list html element and 
 * the list element must contain a Li element, that can have various elements
 * in it. This function simply loops the Li element, running through all data in array.
 * @param {Array.<Object> | Object} data List of object
 * @param {HTMLCollection} liChildren The child elements inside Li element
 * @returns {void} No return value
 */
function makeListArray(data = Array[Object] | Object, listID = ''){

    try {

        // Gets Li element
        let liElement = document.getElementById(listID).getElementsByTagName('LI')[0];

        // Gets Li element child elements
        let liChildren = liElement.children;

        // String that is used to build up Li elements
        let generatedListItems = '';

        // Gets properties from object in data array
        propertiesList = Object.keys(data[0]);
    
        // Checks if data is an array
        if(Array.isArray(data)) {
    
            // Used to store properties that are specified on Li element
            let propertiesList = [];
    
            // Checks if data array contains objects, like in the case of returned data from an API call
            if(data[0] instanceof Object) {
                
                // Runs through each data element
                for(let i = 0; i < data.length; i++) {
                            
                    // Runs through all the child elements for each data Li element
                    for(let x = 0; x < liChildren.length; x++) {
                
                        // Adds the specific part of the data to the Li child element
                        for(let y = 0; y<propertiesList.length; y++) {
                        
                            // Checks if the id name specified on Li child element, matches the property name on
                            // the current object
                            if(liChildren[x].id == propertiesList[y]) {
                        
                                // Adds value for the current property on the current object 
                                liChildren[x].innerHTML = data[i][propertiesList[y]];

                                // Goes on to next data index, if value to Li child element is added
                                break;
                                
                            }
                            
                        }
                        
                    }
                    
                    // Once Li element has been prepared, it is appended as a string to what will
                    // become a larger string of Li elements
                    generatedListItems+= liChildren.outerHTML.toString();
                    
                }
                
                // After al Li elements have been added in a large string, it is finally set
                // as a HTML value for the Li element
                liElement.outerHTML = generatedListItems;   
            
            }
           
        } 
        // If data is a single object. The logic is the same as explained above 
        else if(data instanceof Object) {
    
            
            let liElement = document.getElementById(listID).getElementsByTagName('LI')[0];
            let liChildren = liElement.children;
            let generatedListItems = '';
            let propertiesList = Object.keys(data);
                 
            
            for(let i = 0; i<liChildren.length; i++) {
    
                for(let y = 0; y < propertiesList.length; y++){
                  
                    if(liChildren[i].id == propertiesList[y]) {
                        
                        liChildren[i].innerHTML = data[propertiesList[y]]
                        break;
             
                    }
                }
            }                    
                            
            generatedListItems+= liElement.outerHTML.toString();    
            
            liElement.outerHTML = generatedListItems;   
            
        }
    } catch (error) {
        console.log(error)
    }
}

/**
 * Can send http requests
 * @param {String} method Request method
 * @param {String} url Request url
 */
function sendReq(method, url){

    // Used to make http requests
    var xhttp = new XMLHttpRequest();

    // Returns promise. When resolves when request is succesful
    return new Promise((resolve, reject) => {
  
        try {

            // 
            xhttp.onreadystatechange = function() {
    
                if (this.readyState == 4 && this.status == 200) {
                    
                    resolve(xhttp);
                }
            };

            xhttp.open(method, url, true);

            xhttp.send();

        } catch (error) {

            console.log(error)
            reject(error);
        }
    
  });
}
 
function promiseOnClick(id, promise, action) {

    if(document.getElementById(id).tagName == 'BUTTON'){
    document.getElementById(id).onclick = (ev) => {
      promise.then(action);
    }
}
}

function addProperties( propertyToSet = [{ id: '', prop: '', val: ''}]){
    try{
   
    for(let i = 0; i < propertyToSet.length; i++) {

        let htmlElement = document.getElementById(propertyToSet[i].id);
            
        if(htmlElement.id == propertyToSet[i].id) {
            htmlElement[propertyToSet[i].prop] = propertyToSet[i].val;
                  
        }
    }
} catch (err) {
        console.log(err)

    }
}

function addAttributes( attributeToSet = [{ id: '', attr: '', val: ''}]){
    try{
   
    for(let i = 0; i < attributeToSet.length; i++) {

        let htmlElement = document.getElementById(attributeToSet[i].id);
            
        if(htmlElement.id == attributeToSet[i].id) {
            htmlElement.setAttribute(attributeToSet[i].attr,  attributeToSet[i].val);
                  
        }
    }
} catch (err) {
        console.log(err)

    }
}