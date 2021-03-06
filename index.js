var recipes = {};

 function updateObjectWithKeyAndValue(object, key, value) {
   var cloneObject = Object.assign(
     {}, object, {
       [key]: value
     }
   );
   return cloneObject;
 }

 function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
   object[key] = value;
   return object;
 }

 function deleteFromObjectByKey(object, key) {
   var newObj = Object.assign({}, object);
   newObj.key;
   return newObj;
 }

 function destructivelyDeleteFromObjectByKey(object, key) {
   delete object[key];
   return object;
 }
