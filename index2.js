setInterval(() => {
    d = new Date();
    h=d.getHours()
    m=d.getMinutes()
    s=d.getSeconds()
    // console.log(second)
    hr=30*h + m/2;
    mr=6*m;
    sr=6*s;

    document.getElementById("hour").innerHTML = h;
    document.getElementById("minute").innerHTML = m;
    document.getElementById("second").innerHTML = s;

    hour.style.transform = `rotate(${hr}deg)`;
    minute.style.transform = `rotate(${mr}deg)`;
    second.style.transform = `rotate(${sr}deg)`;
    console.log(d)

}, 1000);