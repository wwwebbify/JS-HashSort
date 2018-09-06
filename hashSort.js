function hashSort(arr){
var hash = {};
var sorted = [];
var returnArr = [];

 function sortItems(item){

  if(sorted.length === 0){
   sorted.push(item);
   return;
  }

  var found = false;
  var mid = Math.floor(sorted.length/2);
  var top = sorted.length;
  var bot = 0;

  while(!found){

   if(mid===sorted.length){mid--;}

   if(sorted[mid] === item){
    found = true
    
   }else if(sorted[mid] < item){
   
    if(top-mid <= 1){
     found = true;
     mid++;
    }else{
     bot = mid;
     mid = Math.floor((top-bot)/2)+bot;
    }
 
   }else if(sorted[mid] > item){
   
    if(mid-bot === 0){
     found = true;
    }else{
     top = mid;
     mid = Math.floor((top-bot)/2)+bot;
 
     if(top===mid){mid--;}
    }
   }
  }//END WHILE

  sorted.splice(mid,0,item);

 }//END sortItem

arr.forEach(function(item){
 if(typeof hash[item] === 'undefined'){
  hash[item] = {
   'values' : [item]
  };

  sortItems(item);
 } else {

  hash[item].values.push(item);
 }
});

sorted.forEach(function(value){
 returnArr.push(hash[value].values);
});
return returnArr;
}
