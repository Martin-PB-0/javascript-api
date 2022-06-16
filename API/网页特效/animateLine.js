 function animateLine(obj, target, callBack) {
     clearInterval(obj.timer);
     obj.timer = setInterval(function() {
         var step = (target - obj.offsetLeft) / 10;
         if (step == 0) {
             clearInterval(obj.timer);
             callBack && callBack();
         } else {
             step = step > 0 ? Math.ceil(step) : Math.floor(step);
             obj.style.left = obj.offsetLeft + step + 'px';
         }
         // if (target - obj.offsetLeft >= 0) {
         //     if (obj.offsetLeft == target) {
         //         clearInterval(obj.timer)
         //     } else {
         //         obj.style.left = obj.offsetLeft + 1 + 'px';
         //     }
         // } else {
         //     if (obj.offsetLeft == target) {
         //         clearInterval(obj.timer)
         //     } else {
         //         obj.style.left = obj.offsetLeft - 1 + 'px';
         //     }
         // }

     }, 20)
 }