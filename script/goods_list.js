var btnBasket = document.getElementById('basket-btn');
var goodsListSection = document.getElementById('goods-list-section');

//Создаем класс для товара. //Creating the class for the product 
class GoodsItem {
    constructor (title, price) {
        this.title = title;
        this.price = price;
    }
    //метод возвращает html-разметку отрисовка корзины. //Method for return the HTML tag. Paint the basket
    render () {
        return `<div class="goods-list__product-box">
        <span class="goods-list__product-box__name">${this.title}</span>
        <div class="goods-list__product-box__price">${this.price}</div>
        
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
            { title : 'Товар', price : 'Цена', src : 'image/products_photo/zefir_photo/zefir_7.jpg' },
            { title : 'Зефир', price : 300, src : 'image/products_photo/zefir_photo/zefir_7.jpg' },
            { title : 'Маршмеллоу', price : 400, src : 'image/products_photo/marshmelo_photo/marsh_3.jpg' },
            { title : 'Маршмеллоу на палочке', price : 500, src : 'image/products_photo/marsh_on_stick_photo/onstick_4_2.jpg' }
        ];
    }

    // Метод вывод списка товаров. Для каждого элемента массива goods будем создавать экземпляр
    // класса GoodsItem и запрашивать его разметку

    render () {
        let listHtml = '';
        this.goods.forEach (good => {
            const goodItem = new GoodsItem (good.title, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector ('.goods-list').innerHTML = listHtml;
    }
}

var renderGoodsList = () => {
    const list =  new GoodsList ();
    list.fetchGoods();
    list.render();
    goodsListSection.style.display = 'block';
};



// //Отрисовка корзины
// //Paint the basket
// const renderGoodsItem = (title, price) => {
//     return `<div class="goods-list__product-box">
//     <span class="goods-list__product-box__name">${title}</span>
//     <div class="goods-list__product-box__price">${price}</div>
    
//     <input type="submit" value="X" class="goods-list-item__product-box__delete" onclick="deleteProductStringBasket()">
//     </div>`
// };

// //создание массива с товарами GoodList
// const renderGoodsList = () => {
//     let goodsList = goods.map(item => renderGoodsItem(item.title, item.price));
//     document.querySelector('.goods-list').innerHTML = goodsList.join('');
//     goodsListSection.style.display = 'block';
// };

btnBasket.addEventListener('click', renderGoodsList);

window.addEventListener('click', function (evt) {console.log(evt)});
