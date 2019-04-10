var btnBasket = document.getElementById('basket-btn');
var goodsListSection = document.getElementById('goods-list-section');

//Создаем класс для товара. //Creating the class for the product 
class GoodsItem {
    constructor (title, price, src) {
        this.title = title;
        this.price = price;
        this.src = src;
    }
    //метод возвращает html-разметку отрисовка корзины. //Method for return the HTML tag. Paint the basket
    render () {
        return `<div class="goods-list__product-box">
        <span class="goods-list__product-box__name">${this.title}</span>
        <div class="goods-list__product-box__price">${this.price}</div>
        <img class="goods-list__product-box__img" src=${this.src} height="100px" alt="">
        <input type="submit" value="X" class="goods-list-item__product-box__delete" onclick="deleteProductStringBasket()">
        </div>`
    }
    
}

//Создаем класс для списка товаров GoodsList. //Creating the class for the GoodsList
class GoodsList {
    constructor () {
        this.goods = [];
    }
     //метод для заполнения списка goods. //Method to fill the goods
    fetchGoods () {
        this.goods = [
            { title : 'Зефир', price : 300, src : 'image/products_photo/zefir_photo/zefir_7.jpg' },
            { title : 'Маршмеллоу', price : 400, src : 'image/products_photo/marshmelo_photo/marsh_3.jpg' },
            { title : 'Маршмеллоу на палочке', price : 500, src : 'image/products_photo/marsh_on_stick_photo/onstick_4_2.jpg' }
        ];
    }

    // Метод вывод списка товаров. Для каждого элемента массива goods будем создавать экземпляр
    // класса GoodsItem и запрашивать его разметку
    render () {
        let listHtml = '';
        let goodsList = document.getElementById('goods-list__product-box'); 
        
        this.goods.forEach (good => {
            const goodItem = new GoodsItem (good.title, good.price, good.src);
            listHtml += goodItem.render();
        });
        goodsList.innerHTML = listHtml;
    }
    

    //Метод для вывода итоговой суммы корзины
    addTotalPrice () {
        let totalPrice = document.getElementById('goods-list__total'); 
        let sum = 0;
        this.goods.forEach (good => { 
            sum += good.price
        });
        totalPrice.innerText = `Итого  ${sum} рублей`;
    }
}

// //Создаем класс корзина Cart
// class Cart {
//     constructor () {
//         this.goods = [];
//     }

var renderGoodsList = () => {
    const list =  new GoodsList ();
    list.fetchGoods();
    list.render();
    list.addTotalPrice ();
    goodsListSection.style.display = 'block';
};

btnBasket.addEventListener('click', renderGoodsList);
window.addEventListener('click', function (evt) {console.log(evt)});