import {makeOrder} from "./reusable_functions/makeOrder.cy";
import {createNewUser} from "./reusable_functions/createNewUser.cy";
import Login from "./reusable_functions/login.cy";

describe('Перевірка додавання товарів в кошик та оформлення замовлення', () => {
    it('Замовлення товарів працює коректно', () => {
        Login();
        makeOrder('0820399гвр');
    });
})