const controlTable = document.getElementById("control");
for (var i = 0; i < 15; i++) {
	newDiv = document.createElement("div");
	newContentDiv = document.createElement("div");

	newContentDiv.textContent = `${i + 1}.`;
	newContentDiv.title = i + 1;
	newDiv.appendChild(newContentDiv);
	newContentDiv.classList.add("item");
	newIconDiv = document.createElement("div");
	newIconDiv.classList.add("addIcon");
	newDiv.classList.add("items");
	//newIconDiv.textContent = 'bla bla'; 
	newDiv.appendChild(newIconDiv);
	if ((i) % 2 === 0) {
		newDiv.classList.add("white");
	} else {
		newDiv.classList.add("grey");
	};
	newDiv.style.cursor = "pointer";

	controlTable.appendChild(newDiv);
}