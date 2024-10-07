import { Routes } from '@angular/router';
import { RoutingUrls } from './constant/routing-url';

export const routes: Routes = [
    {
        path: RoutingUrls.USER,
        loadComponent: () => import('./modules/user/display-user/display-user.component').then((mod) => mod.DisplayUserComponent)
    },
    {
        path: `${RoutingUrls.ADD_USER}/:id`,
        loadComponent: () => import('./modules/user/add-user/add-user.component').then((mod) => mod.AddUserComponent)
    },
    {
        path: RoutingUrls.ADD_USER,
        loadComponent: () => import('./modules/user/add-user/add-user.component').then((mod) => mod.AddUserComponent)
    },
    {
        path: RoutingUrls.PRODUCT,
        loadComponent: () => import('./modules/product/display-product/display-product.component').then((mod) => mod.DisplayProductComponent)
    },
    {
        path: RoutingUrls.ADD_PRODUCT,
        loadComponent: () => import('./modules/product/add-product/add-product.component').then((mod) => mod.AddProductComponent)
    },
    {
        path: '',
        redirectTo: RoutingUrls.USER,
        pathMatch: 'full'
    },
];
