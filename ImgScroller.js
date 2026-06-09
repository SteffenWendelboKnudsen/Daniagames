// JavaScript Document
const scrollers =
document.querySelectorAll(".scroller")

//if a user hasn't opted in for reduced motion, when we add the animation
if (!window.matchmedia("(prefers-reduced-motion:reduce)").matches) {
	addAnimation();
}

function addAnimation() {
	scrollers.forEach((scroller) => {
		// add data-animated="true" to every "scroller" on the page
		scroller.setAttribute("data-animted",true);
		
		// Make an array from the elements within .scroller-inner
		const scrollerInner = 
			  scroller.querySelector(".scroller_inner");
		const scrollerContent = 
			  Array.from(scrollerInner.children);
		
		// for each item in the array, clone it
		// add aria-hidden to it
		// add it into the 'scroller-inner'
		scrollerContent.forEach((item) => {
			const duplicatedItem = item.cloneNode(true);
			duplicatedItem.setAttribute("aria-hidden",true);
			scrollerInner.appendChild(duplicatedItem);
		});
	});
}