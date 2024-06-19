const year = document.querySelector(".footer__year");
const burgerBtn = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".nav-mobile");
const navBtns = document.querySelectorAll(".nav__link");

const handleYear = () => {
	const currentYear = new Date().getFullYear();

	year.innerText = currentYear;
};

const handleNav = () => {
	burgerBtn.classList.toggle("is-active");
	mobileNav.classList.toggle("nav-mobile--active");
	navBtns.forEach((i) => {
		i.addEventListener("click", () => {
			burgerBtn.classList.remove("is-active");
			mobileNav.classList.remove("nav-mobile--active");
		});
	});
};

handleYear();

burgerBtn.addEventListener("click", handleNav);
