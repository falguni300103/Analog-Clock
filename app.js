setInterval(()=>{
    var date=new Date();
    var htime=date.getHours();
    var mtime=date.getMinutes();
    var stime=date.getSeconds();
    var hrotation= 30*htime + mtime/2;
    var mrotation= 6*mtime;
    var srotation= 6*stime;

    
    hour.style.transform=`rotate(${hrotation}deg)`
    minute.style.transform=`rotate(${mrotation}deg)`
    second.style.transform=`rotate(${srotation}deg)`

})