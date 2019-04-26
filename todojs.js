function ekle(){
	var li=document.createElement("li");
	var cbox=document.createElement("input");
	cbox.type="checkbox";
	cbox.id="checkbox";
	cbox.onchange=chcked;
	var lbl=document.createElement("label");
	lbl.textContent=document.getElementById("yeniyapılacak").value;
    var textinput=document.createElement("input");
    textinput.type="text";
	var dzltbtn=document.createElement("button");
    dzltbtn.textContent="Düzelt";
	dzltbtn.className="dzlt";
	dzltbtn.onclick=dzlt;
	var silbtn=document.createElement("button");
    silbtn.textContent="Sil";
	silbtn.className="sil";
	silbtn.onclick=sil;
	li.appendChild(cbox);
	li.appendChild(lbl);
	li.appendChild(textinput);
	li.appendChild(dzltbtn);
	li.appendChild(silbtn);
	document.getElementById("yapacaklarım").appendChild(li);
}

var dzlt=function(){
    var li=this.parentNode;
	var textinput=li.querySelector("input[type=text]");
	var label=li.querySelector("label");
	var btn=li.querySelector("button.dzlt");
	var togle=li.classList.contains("dzlt");
	if(togle){
		btn.textContent="Düzelt";
		label.textContent=textinput.value;
	}
	else{
		btn.textContent="Değiştir";
		textinput.value=label.textContent;
	}
	li.classList.toggle("dzlt");
}
var sil=function(){
	var li=this.parentNode;
	var ul=li.parentNode;
	ul.removeChild(li);
}
var chcked=function(){
	var li=this.parentNode;
	var c=document.getElementById("checkbox");
	var yaptıklarım=document.getElementById("yaptıklarım");
	var yapacaklarım=document.getElementById("yapacaklarım");
	if(c.checked==false){
		yapacaklarım.appendChild(li);
	}
	else{
		c.checked=true;
		yaptıklarım.appendChild(li);
	}
}