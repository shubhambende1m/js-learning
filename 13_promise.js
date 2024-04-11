let notesReady = false;
const promise = new Promise(function (success, reject) {
  if (notesReady) {
    success(`Here you go guys Please use this notes...`);
  } else {
    reject(`Sorry... i don't have notes`);
  }
});

promise
  .then(function (onSuccess) {
    console.log(onSuccess);
  })
  .catch(function (onFailure) {
    console.log(onFailure);
  })
  .finally(function () {
    console.log(`Finally I Must My Notes....`);
  });

//async and await
