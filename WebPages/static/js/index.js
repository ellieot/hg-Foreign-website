let currentIndex = 0; //当前页面索引
let ableToScroll = true; //当前是否允许滑动
let menuBar = document.querySelector('header ul'); //上栏按钮

/**
 * 滑动页面
 * @param {*} isMoveUp 是否向上滑动
 * @param {*} coolDown 滑动冷却时间，单位毫秒
 */
function scrollPage(isMoveUp, coolDown) {
	if (ableToScroll) {
		let h = window.innerHeight;
		if (!isMoveUp) {
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
		for (let i = 0; i < menuBar.children.length; i++) {
			menuBar.children[i].className = '';
		}
		if (window.innerWidth > 768 && currentIndex > 0) {
			menuBar.children[currentIndex - 1].className = 'underline';
		}
		setTimeout(() => {
			ableToScroll = true;
		}, coolDown);
	}
}

/**
 * 直接定位至某页面
 * @param {*} index 页面索引，0开头
 * @param {*} coolDown 冷却时间，毫秒 
 */
function moveToPage(index, coolDown) {
	if (ableToScroll) {
		let h = window.innerHeight;
		currentIndex = index;
		window.scrollTo({
			top: currentIndex * 0.93 * h,
			behavior: 'smooth'
		});
		ableToScroll = false;
		for (let i = 0; i < menuBar.children.length; i++) {
			menuBar.children[i].className = '';
		}
		if (window.innerWidth > 768 && currentIndex > 0) {
			menuBar.children[currentIndex - 1].className = 'underline';
		}
		setTimeout(() => {
			ableToScroll = true;
		}, coolDown);
	}
}

//鼠标滚轮事件
window.addEventListener('wheel', (e) => {
	scrollPage(e.deltaY < 0, 500);
});

//上栏按钮事件
for (let i = 0; i < menuBar.children.length; i++) {
	menuBar.children[i].addEventListener('click', (e) => {
		e.stopPropagation();
		moveToPage(i + 1, 150);
	});
}

//点击logo返回首页
document.querySelector('header .logo').addEventListener('click', (e) => {
	moveToPage(0, 100);
});

//手机端附加事件
if (window.innerWidth < 768) {
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
		endY = e.targetTouches[0].pageY;
		scrollPage(endY - startY > 0, 500);
	});
}

//提交按钮
let submitButton = document.querySelector('.mainContent .contact .submitInfo .button');
let submitForm = document.querySelector('.mainContent .contact .submitInfo form').children;
submitButton.addEventListener('click', (e) => {
	e.stopPropagation();
	let existEmpty = false;
	for (let i = 0; i < submitForm.length; i++) {
		if (submitForm[i].children[0].value === '') {
			submitForm[i].children[0].style.borderColor = 'red';
			submitForm[i].children[1].style.display = 'block';
			existEmpty = true;
		} else {
			submitForm[i].children[0].style.borderColor = 'rgba(255, 255, 255, 0.45)';
			submitForm[i].children[1].style.display = 'none';
		}
	}
	if (!existEmpty) {
		let name = submitForm[0].children[0].value;
		let email = submitForm[1].children[0].value;
		let demand = submitForm[2].children[0].value;
		let userInfo = {
			name: name,
			mail: email,
			demand: demand
		}
		let data = JSON.stringify(userInfo);
		fetch('/submit', {
			method: 'POST',
			body: data,
			headers: new Headers({
				'Content-Type': 'application/json'
			})
		}).then(result => result.json()).then(response => {
			console.log(response);
		});
	}
});