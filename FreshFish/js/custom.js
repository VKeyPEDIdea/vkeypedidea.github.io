$(document).ready(

	function () {
		owl.owlCarousel({
			loop: true,
			margin: 10,
			nav: true,
			items: 1,
			dots: false,
			navText: '',
			navContainerClass: "slider-nav",
			navClass: ["icon-arrow-back", "icon-arrow-next"],
			onInitialized: function(e) {
				slideAmountTag.innerText = e.item.count;
				slideCurrentNumber.innerText = 1;
			}
		});
	}
);

// Slider
var owl = $('.owl-carousel');
var sliderNav = document.getElementsByClassName('slider-nav');
var slideAmountTag = document.getElementById('slideAll');
var slideCurrentNumber = document.getElementById('slideCurrentNumber');

owl.on('changed.owl.carousel', function(e) {
	if (e.item.index - 2 > e.item.count) {
		slideCurrentNumber.innerText = 1;
	} else if (e.item.index - 2 < 1) {
		slideCurrentNumber.innerText = e.item.count;
	} else	{
		slideCurrentNumber.innerText = e.item.index - 2;
	}
});

// Item
var itemImage = document.getElementsByClassName('catalog-item__img-value');
var btnCart = document.getElementsByClassName("btn--cart");
var itemCounter = document.getElementsByClassName("item-counter");
var addItemBtn = document.getElementsByClassName('item-counter__plus');
var removeItemBtn = document.getElementsByClassName('item-counter__minus');
var counterItemBtn = document.getElementsByClassName('item-counter__number');

// Cart
var cartPriceTag = document.getElementById('cart-price-value');
var cartAmountTag = document.getElementById('cart-amount-value');
var cartPrice = +cartPriceTag.innerHTML;
var cartAmount = +cartAmountTag.innerHTML;

// Показать количество слайдов

// Показать счетчик добавления товара
function showItemCounter() {
	var id = this.getAttribute("data-id");
	var btn = document.querySelector('.btn--cart[data-id="' + id + '"]');
	var counter = document.querySelector('.item-counter[data-id="' + id + '"]');
	var img = document.querySelector('.catalog-item__img[data-id="' + id + '"]');

	btn.style.display = 'none';
	counter.style.display = 'flex';
	img.style.border = '2px solid #F17101';
}

// Скрыть счетчик добавления товара
function hideItemCounter(n) {
	var id = n.getAttribute("data-id");
	var btn = document.querySelector('.btn--cart[data-id="' + id + '"]');
	var counter = document.querySelector('.item-counter[data-id="' + id + '"]');
	var img = document.querySelector('.catalog-item__img[data-id="' + id + '"]');

	btn.style.display = 'inline-block';
	counter.style.display = 'none';
	img.style.border = '2px solid #707070';
}

// Добавить +1 товар в корзину
function addItemToCart() {
	var id = this.getAttribute("data-id");
	var counterTag = document.querySelector('.item-counter__number[data-id="' + id + '"]');
	var counter = +counterTag.innerHTML;
	var priceTag = document.querySelector('.catalog-item__price-value[data-id="' + id + '"]');
	var price = +priceTag.innerHTML;

	counter++;
	counterTag.innerText = counter;
	cartAmount++;
	cartAmountTag.innerText = cartAmount;
	cartPrice = cartPrice + price;
	cartPriceTag.innerHTML = cartPrice;
}

// Удалить -1 товар из корзины
function removeItemFromCart() {
	var id = this.getAttribute("data-id");
	var counterTag = document.querySelector('.item-counter__number[data-id="' + id + '"]');
	var counter = +counterTag.innerHTML;
	var removeBtn = document.querySelector('.item-counter__minus[data-id="' + id + '"]');
	var priceTag = document.querySelector('.catalog-item__price-value[data-id="' + id + '"]');
	var price = +priceTag.innerHTML;

	counter--;

	if (counter < 1) {
		hideItemCounter(removeBtn);
		counter = 0;
	}
	counterTag.innerText = counter;

	cartAmount--;
	cartAmountTag.innerText = cartAmount;
	cartPrice = cartPrice - price;
	cartPriceTag.innerHTML = cartPrice;
}

// Обработчик события клика на кнопку Добавить +1 товар
for (var i = 0; i < addItemBtn.length; i++) {
	addItemBtn[i].addEventListener('click', addItemToCart, false);
}

// Обработчик события клика на кнопку Удалить -1 товар
for (var i = 0; i < removeItemBtn.length; i++) {
	removeItemBtn[i].addEventListener('click', removeItemFromCart, false);
}

// Обработчик события клика на кнопку Добавить в корзину
for (var i = 0; i < btnCart.length; i++) {
	btnCart[i].addEventListener('click', showItemCounter, false);
	btnCart[i].addEventListener('click', addItemToCart, false);
}

/* Чек лист верстки
	Сверстать поп-ап
*/