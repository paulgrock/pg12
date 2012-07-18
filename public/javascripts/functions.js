(function(){
  boo();
  foo();
  var foo = function(){
    alert('foo?');
  }  
  function boo(){
    alert('boo?');
  }  

})()