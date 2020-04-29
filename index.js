var flag1 = false;
var flag2 = false;
var i=1;

function change1()
{console.log("button clicked")
var a = document.getElementById('ten')
var b = document.getElementById('five')

	    a.className = 'click';
    b.className = 'five';
	console.log(a)
	flag1 = true;
	flag2 = false;
	
}
function change2()
{console.log("button clicked")
var a = document.getElementById('ten')
var b = document.getElementById('five')

	    b.className = 'click';
    a.className = 'ten';
	flag2 = true;
	flag1 = false;
	

}

var ad = document.getElementById('add');
ad.innerHTML = 
`<div id="btn btn-group" style="border-style: solid; border-radius: 25px;border-width:1px">
<button id="plus" onclick="plus()" class="btn btn-default">+</button>
<button id="val" class="btn btn-default">1</button>
<button id="minus" onclick="minus()" class="btn btn-default">-</button>
</div>
<br>
<br>
`

function plus()
{
	i = i+1;
	document.getElementById('val').innerHTML = i;
	

}


function minus()
{
	if(i>=1) {i = i-1;}
	document.getElementById('val').innerHTML = i;
	
}

function payable(){
if(flag1===true)
{document.getElementById('amount').innerHTML = "Rs " + 399*i;

}

if(flag2===true)
{document.getElementById('amount').innerHTML = "Rs " + 209*i;

}
}