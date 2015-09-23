console.log('hello Saarland!')
d=document.createElement('div')
d.innerHTML='<input id="x"> + <input id="y"> = <span id="z"></span>'
document.body.appendChild(d)


addNumbers=function(){
    z.textContent=parseFloat(x.value)+parseFloat(y.value)
}

x.onkeyup=y.onkeyup=addNumbers
s = document.createElement('script')
s.src="https://code.jquery.com/jquery-2.1.4.min.js"
s.onload=function(){
    // lets get some data with jQuery
    jQuery.getJSON('https://health.data.ny.gov/resource/5q8c-d6xq.json?$limit=1000').then(function(xx){
        4
    })
}
document.head.appendChild(s)