window.addEventListener('load', function() {
    var previewImg = document.querySelector('.preview_img');
    var proMask = document.querySelector('#pro_mask');
    var amplify = document.querySelector('.amplify');
    var amplifyImg = document.querySelector('#amplifyImg');
    previewImg.addEventListener('mouseover', function() {
        proMask.style.display = 'block';
        amplify.style.display = 'block';
    })
    previewImg.addEventListener('mouseout', function() {
        proMask.style.display = 'none';
        amplify.style.display = 'none';
    })
    previewImg.addEventListener('mousemove', move);

    function move(e) {

        var x = e.pageX - previewImg.offsetLeft;
        var y = e.pageY - previewImg.offsetTop;
        // 遮罩框移动距离
        var maskX = x - proMask.offsetWidth / 2;
        var maskY = y - proMask.offsetHeight / 2;
        // 遮罩框可移动最大距离
        var maskWidthMax = previewImg.offsetWidth - proMask.offsetWidth;
        var maskHeightMax = previewImg.offsetHeight - proMask.offsetHeight;
        if (maskX < 0) {
            maskX = 0;
        } else if (maskX > maskWidthMax) {
            maskX = maskWidthMax;
        } else {
            proMask.style.left = maskX + 'px';
        }
        if (maskY < 0) {
            maskY = 0;
        } else if (maskY > maskHeightMax) {
            maskY = maskHeightMax;
        } else {
            proMask.style.top = maskY + 'px';
        }
        // 遮挡框移动距离 / 遮挡狂最大移动距离 = 大图移动距离 / 大图最大移动距离
        // 大图最大移动距离
        var amplifyImgMaxX = amplifyImg.offsetWidth - amplify.offsetWidth;
        var amplifyImgMaxY = amplifyImg.offsetHeight - amplify.offsetHeight;
        // 大图移动距离 = 遮挡框移动距离 * 大图最大移动距离 / 遮挡狂最大移动距离
        var amplifyImgX = maskX * amplifyImgMaxX / maskWidthMax;
        var amplifyImgY = maskY * amplifyImgMaxY / maskHeightMax;
        amplifyImg.style.left = -amplifyImgX + 'px';
        amplifyImg.style.top = -amplifyImgY + 'px';
    }

})