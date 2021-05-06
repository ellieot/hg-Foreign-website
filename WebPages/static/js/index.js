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
		setTimeout(() => {
			ableToScroll = true;
		}, 500);
	}
});

//上栏按钮
let menuBar = document.querySelector('header ul');
for (let i = 0; i < menuBar.children.length; i++) {
	menuBar.children[i].addEventListener('click', (e) => {
		e.stopPropagation();
		if (ableToScroll) {
			let h = window.innerHeight;
			currentIndex = i + 1;
			window.scrollTo({
				top: currentIndex * 0.93 * h,
				behavior: 'smooth'
			});
			ableToScroll = false;
			setTimeout(() => {
				ableToScroll = true;
			}, 1000);
		}
	});
}

//点击logo返回首页
document.querySelector('header .logo').addEventListener('click', (e) => {
	if (ableToScroll) {
		currentIndex = 0;
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
		ableToScroll = false;
		setTimeout(() => {
			ableToScroll = true;
		}, 1000);
	}
});

//手机端展开按钮
let isMenuOpen = false;
document.querySelector('header .unfoldButton').addEventListener('click', (e) => {
	e.stopPropagation();
	isMenuOpen = !isMenuOpen;
	if (isMenuOpen) {
		menuBar.style.display = 'flex';
	} else {
		menuBar.style.display = 'none';
	}
});
document.querySelector('body').addEventListener('click', (e) => {
	isMenuOpen = false;
	menuBar.style.display = 'none';
});

//手机端滑动事件
let startY, endY;
document.querySelector('body').addEventListener('touchstart', (e) => {
	startY = e.targetTouches[0].pageY;
});

document.querySelector('body').addEventListener('touchmove', (e) => {
	if (ableToScroll) {
		let h = window.innerHeight;
		endY = e.targetTouches[0].pageY;
		if (endY - startY < 0) {
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
		setTimeout(() => {
			ableToScroll = true;
		}, 500);
	}
});