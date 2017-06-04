/*
 * Archivo principal de funcionalidad de JS
 */

/*MODAL SERVICES (BLANCA) */

(function main(){
	var boxes = Array.from(document.getElementsByClassName("box-services"));
	var modal = document.getElementById("box-services-modal");
	var bodyModal, close, img;
	boxes.forEach(function(box,i){
		box.addEventListener("click", function(){
			modal.innerHTML = "";
			bodyModal = document.createElement("div");
			bodyModal.classList.add("modal-body");
			bodyModal.innerHTML = box.innerHTML;
		 			
			modal.appendChild(bodyModal);
			modal.classList.remove("hide");
			close = document.createElement("div");
			close.classList.add("close");
			img = document.createElement("img");
			img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
			close.appendChild(img);
			modal.appendChild(close);
			close.addEventListener("click",function(){
				modal.classList.add("hide");
			});
		});		
	});
})();



/*
funcion autoinvocada
(function miAlert(){
	....
})()
Es equivalente a:
function miAlert(){
	...
};
miAlert(); */

/* MODAL WORK */

(function main(){
	var boxes = Array.from(document.getElementsByClassName("col-4"));/* col-4 para que muestre solo 1 producto */
	var modal = document.getElementById("box-work-modal");
	var bodyModal, close, img;
	boxes.forEach(function(box){
		box.addEventListener("click", function(){
			modal.innerHTML = "";
			bodyModal = document.createElement("div");
			bodyModal.classList.add("modal-body");
			bodyModal.innerHTML = box.innerHTML;
	
			modal.appendChild(bodyModal);
			modal.classList.remove("hide");

			close = document.createElement("div");
			close.classList.add("close");

			img = document.createElement("img");
			img.setAttribute("src", "http://tojaeurope.com/gallery/Close-icon.png");
			
			close.appendChild(img);
			modal.appendChild(close);
			close.addEventListener("click",function(){
				modal.classList.add("hide");
			});
		});		
	});
})();
