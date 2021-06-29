import {
  HomePage,
  ShopPage,
  LoginPage,
  SignUpPage,
  ProductPage,
  CartPage,
  CheckoutPage
} from '../pages';

export const routes = [
  {
    path: '/',
    name: 'homePage',
    component: HomePage
  },
  {
    path: '/shop',
    name: 'shopPage',
    component: ShopPage
  },
  {
    path: '/login',
    name: 'loginPage',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'signupPage',
    component: SignUpPage
  },
  {
    path: '/product/:id',
    name: 'productPage',
    component: ProductPage
  },
  {
    path: '/cart',
    name: 'cartPage',
    component: CartPage
  },
  {
    path: '/checkout',
    name: 'checkoutPage',
    component: CheckoutPage
  }
];
