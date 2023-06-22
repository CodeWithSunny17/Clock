setInterval(() => {
    d = new Date();
    h=d.getHours()
    m=d.getMinutes()
    s=d.getSeconds()
    // console.log(second)
    hr=h*10.4347;
    mr=m*4.0678;
    sr=s*4.0678;

    document.getElementById("hour").innerHTML = h;
    document.getElementById("minute").innerHTML = m;
    document.getElementById("second").innerHTML = s;
    // document.getElementById("hd").innerHTML = h;
    // document.getElementById("md").innerHTML = m;
    // document.getElementById("sd").innerHTML = s;

    // hour.style.transform = `rotate(${hr}deg)`;
    // minute.style.transform = `rotate(${mr}deg)`;
    // second.style.transform = `rotate(${sr}deg)`;
    hd.style.height= `${hr}px`;
    md.style.height= `${mr}px`;
    sd.style.height= `${sr}px`;


}, 1000);