var arr=document.querySelectorAll(".drumButton");

for(var i=0;i<arr.length;i++)
{ 
	
    arr[i].addEventListener("click", function (event)
    	{
    		
    		playSound(this.innerHTML);
    	});
}

document.addEventListener("keydown", function (event) {
	playSound(event.key);
});

function playSound(char)
{
	switch(char)
    		{
    			case "w":
    				new Audio('sounds/tom-1.mp3').play();
    				animate("w");
    				break;
    			case "a":
    				new Audio('sounds/tom-2.mp3').play();
    				animate("a");
    				break;
    			case "s":
    				new Audio('sounds/tom-3.mp3').play();
    				animate("s");
    				break;
    			case "d":
    				new Audio('sounds/tom-4.mp3').play();
    				animate("d");
    				break;
    			case "j":
    				new Audio('sounds/snare.mp3').play();
    				animate("j");
    				break;
    			case "k":
    				new Audio('sounds/crash.mp3').play();
    				animate("k");
    				break;
    			case "l":
    				new Audio('sounds/kick-bass.mp3').play();
    				animate("l");
    				break;
    			default:
    				console.log(this.innerHTML);
    		}
}

function animate(key)
{
	document.querySelector("."+key).classList.add("pressed");

	setTimeout(function(){ document.querySelector("."+key).classList.remove("pressed"); }, 100);
}
