
          function init(){
          	var width=document.documentElement.clientWidth;
          	//动态设置设备的html字体大小
            document.documentElement.style.fontSize = width /10+ 'px';
          }
          
          init()
          //当屏幕宽度变化时
          window.addEventListener('resize',init)
          //当切换横竖屏时
          window.addEventListener('orientationchange',init)
          
