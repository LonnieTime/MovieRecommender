function displayRandomImages()   
{  
     
   var imageArray = [  
   {   
    
     src: "https://media.discordapp.net/attachments/770271623303004160/897328180841549834/The-Princess-And-The-Frog-poster.jpg?width=246&height=369",  
     
     width: "600",  
     height: "350"  
    
  
   },   
   {   
    
     src: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_240x360_crop_center.progressive.jpg?v=1573652543",  
     
     width: "280",  
     height: "350"  
    
  
   },  
   {   
    
     src: "https://www.washingtonpost.com/graphics/2020/entertainment/2020-oscar-nominees-movie-poster-design/img/750/NFWXKBY3CVEM5KEC2N3FQ6B4SI.jpg",  
     
     width: "280",  
     height: "350"  
    
  
   },  
   {  
     src: "https://m.media-amazon.com/images/I/A16XEWILpEL._AC_SL1500_.jpg",  
     width: "320",  
     height: "350" 
     
      
   },   
   {  
     src: "https://i.pinimg.com/736x/fe/e7/ea/fee7eab62f787cf7bbd3aa3cce3ac833.jpg",  
     width: "320",  
     height: "350"  
   },  

 {
   src: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/4940c5878babf3dc5d2ca567b7558178_9e62fc4c-4116-48e5-a4f5-3a99c73ae7b1_240x360_crop_center.progressive.jpg?v=15 73651499",  
     width: "320",  
     height: "350" 
   
   }, 
   {  
     src: "https://media.discordapp.net/attachments/770271623303004160/897334713545527326/baby-driver-rory-hi-res.jpg?width=249&height=369",  
     width: "350",  
     height: "350"  
    } ];  
      
    
    var arrayLength = imageArray.length;  
    var newArray = [];  
    for (var i = 0; i < arrayLength; i++) {  
        newArray[i] = new Image();  
        newArray[i].src = imageArray[i].src;  
        newArray[i].width = imageArray[i].width;  
        newArray[i].height = imageArray[i].height; 
        newArray[i].margin = imageArray[i].margin;
    }  
     
   
  function getRandomNum(min, max)   
  {  
        
      imgNo = Math.floor(Math.random() * (max - min + 1)) + min;  
      return newArray[imgNo];  
  }    
  
  
  var newImage = getRandomNum(0, newArray.length - 1);  
   
    
  var images = document.getElementsByTagName('img');  
  var l = images.length;  
  for (var p = 0; p < l; p++) {  
     images[0].parentNode.removeChild(images[0]);  
  }  
     
  document.body.appendChild(newImage);  
}  