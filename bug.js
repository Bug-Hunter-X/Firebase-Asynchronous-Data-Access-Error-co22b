The Firebase SDK may throw an error if you try to access a property of a document snapshot before the data has fully loaded.  This often happens when using asynchronous operations. For example:

```javascript
db.collection('myCollection').doc('myDoc').get().then(doc => {
  console.log(doc.data().myField); // Error: Cannot read properties of undefined
});
```

This happens because `doc.data()` might return `undefined` before the data loads. The asynchronous nature means `console.log` executes before Firebase has fetched the data.