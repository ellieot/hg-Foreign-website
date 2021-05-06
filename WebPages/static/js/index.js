let currentIndex = 0;
let ableToScroll = true;

//鼠标滚轮事件
window.addEventListener('wheel', (e) => {
	if (ableToScroll) {
		let h = window.innerHeight;
		if (e.deltaY > 0) {
			if (currentIndex < 4) {
				currentIndex++;
			}
		} else {
			if (currentIndex > 0) {
				currentIndex--;
			}
		}
		window.scrollTo({
			top: currentIndex * 0.93 * h,
			behavior: 'smooth'
		});
		ableToScroll = false;
	}
	setTimeout(() => {
		ableToScroll = true;
	}, 500);
});

//上栏按钮
let navButtons = document.querySelector('header ul').children;
for (let i = 0; i < navButtons.length; i++) {
	navButtons[i].addEventListener('click', () => {
		if (ableToScroll) {
			let h = window.innerHeight;
			currentIndex = i + 1;
			window.scrollTo({
				top: currentIndex * 0.93 * h,
				behavior: 'smooth'
			});
			ableToScroll = false;
		}
		setTimeout(() => {
			ableToScroll = true;
		}, 1000);
	});
}