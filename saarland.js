console.log('hello Saarland!')
d=document.createElement('div')
d.innerHTML='<input id="x"> + <input id="y"> = <span id="z"></span>'
document.body.appendChild(d)


addNumbers=function(){
    z.textContent=parseFloat(x.value)+parseFloat(y.value)
}

// some more interesting Math under saarland
saarland=function(){}
saarland.unique=function(x){ // find unique elements of an Array
    var y={}
    x.forEach(function(xi){
        if(!y[xi]){
            y[xi]=true
        }
    })
    return Object.getOwnPropertyNames(y)
}



x.onkeyup=y.onkeyup=addNumbers
s = document.createElement('script')
s.src="https://code.jquery.com/jquery-2.1.4.min.js"
s.onload=function(){
    // lets get some data with jQuery
    var dataURL='https://health.data.ny.gov/resource/u4ud-w55t.json?$limit=1000'
    jQuery.getJSON(dataURL).then(function(dt){
        // so now we have the data, lets do somethign with it
        $('<div id="dataAnalysis"><hr><h3>Analysisng some data</h3></div>').appendTo(document.body)
        $('<li>Retrieved '+dt.length+' reccords from <a href="'+dataURL+'" target="_blank">health.data.ny.gov/resource/u4ud-w55t</a></li>').appendTo(dataAnalysis)
        $('<li>Now do some statistics on <select id="selParm"></select>:</li>').appendTo(document.body)
        // get parameters available in the data array
        saarland.parms=Object.getOwnPropertyNames(dt[0])
        saarland.parms.forEach(function(p){
            // add each possible parameter to the select element
            $('<option value="'+p+'">'+p+'</option>').appendTo(selParm)
        })
        // listen to a parameter selection
        selParm.onchange=function(){
            var p=saarland.parms[this.selectedIndex]
            console.log(p+'was selected for analysis')
            var id='Analysis of '+p
            $('<div id="'+id+'"><h3 style="color:maroon">Analysis of '+p+'</h3> </div>').appendTo(document.body)
        }
        

        //dt.map(function(di,i){
        //    4
        //})
    })
}
document.head.appendChild(s)