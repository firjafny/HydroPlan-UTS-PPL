/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => view.render('landing'))

Route.get('/login', async ({ view }) => view.render('login'))
Route.get('/register', async ({ view }) => view.render('register'))
Route.get('/dashboard', async ({ view }) => view.render('dashboard'))
Route.get('/detail-tanaman', async ({ view }) => view.render('detail_tanaman'))
Route.get('/tambah-rencana', async ({ view }) => view.render('tambah_rencana'))
Route.get('/landing', async ({ view }) => view.render('landing'))
  

