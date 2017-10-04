...
//document selector and addEventListener is repeated,so good to abstract away
//status check, getting the response.
function addListener(selector,eventName,cb){
  document.querySelector(selector).addEventListener(eventName,cb)
}
//document.querySelector('#foo').addEventListener('submit', function (event) {
  //var xhr = new XMLHttpRequest();
function fetch(url,cb){
  var xhr=new XMLHttpRequest();
  xhr.addEventListener('load', function () {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      return cb(response);
      // ... do something with the response
    }
  });
  xhr.open("GET",URl,);
  xhr.send ();
}

addListener('#foo','submit',(event)=>{
  var url =
  fetch (url,(response))=>{
    
  }
})

//  xhr.open('GET', 'https://example.com/search?query=' + event.target[0].value);
//  xhr.send();
//});

document.querySelector('#bar').addEventListener('click', function (event) {
  var xhr = new XMLHttpRequest();

  xhr.addEventListener('load', function () {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      // ... do something with the response
    }
  });

  var element = document.querySelector('#baz');
  xhr.open('GET', 'https://lulz.org/search?query=' + element.value);
  xhr.send();
});
...
