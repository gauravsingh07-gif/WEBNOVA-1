var tl = gsap.timeline();
tl.from("#loader h1",{
    x:-1200,
    delay:0.5,
    duration:1.5,
    stagger:0.5
})
tl.to("#loader",{
    display:"none"
})
tl.from("#nav",{
    y:-1500,
    duration:0.8,
    opacity:0,
    delay:0.25,
    ease:Power4
})


tl.from("#page3 .class1 .first",{
    opacity:0,
    onStart: function(){
         var count = document.querySelector(".first h4");
 var counting = 0;
setInterval(function(){
  if(counting<1500){
    counting++
    count.innerHTML = counting
  }
  else{
    count.innerHTML = counting
  }
},0.0001)
    }
})
//seconds k liye
tl.from("#timer fourthbox",{
    opacity:0,
    onStart: function(){
         var count = document.querySelector(".fourthbox");
 var counting = 60;
setInterval(function(){
  if(counting>0){
    counting--
    count.innerHTML = counting
  }
  else{
    count.innerHTML = counting
  }
},1000)
    }
})

//minutes k liye
tl.from("#timer thirdbox",{
    opacity:0,
    onStart: function(){
         var count = document.querySelector(".thirdbox");
 var counting = 60;
setInterval(function(){
  if(counting>0){
    counting--
    count.innerHTML = counting
  }
  else{
    count.innerHTML = counting
  }
},60000)
    }
})
//hours k liye
tl.from("#timer secondbox",{
    opacity:0,
    onStart: function(){
         var count = document.querySelector(".seconndbox");
 var counting = 60;
setInterval(function(){
  if(counting>0){
    counting--
    count.innerHTML = counting
  }
  else{
    count.innerHTML = counting
  }
},36000000)
    }
})

//day k liye
tl.from("#timer firstbox",{
    opacity:0,
    onStart: function(){
         var count = document.querySelector(".firstbox");
 var counting = 60;
setInterval(function(){
  if(counting>0){
    counting--
    count.innerHTML = counting
  }
  else{
    count.innerHTML = counting
  }
},86400000)
    }
})

