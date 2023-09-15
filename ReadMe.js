// ! ขั้นตอนแรก
// ? คลิกขวาเปิด Command Prompt หรือ git bash
// ? พิมพ์คำสั่ง composer create-project laravel/laravel project_order

// ! ขั้นตอนที่ 2 สร้าง database ใน phpmyadmin ชื่อ order_db เลือก Charset: utf8 Collation: utf_8_general_ci

// ! ขั้นตอนที่ 3 เปิด .env (วิธีการเปิด ctrl + p แล้วพิมพ์ env แล้วเลือก .env)
// ? DB_CONNECTION=mysql
// ? DB_HOST=127.0.0.1
// ? DB_PORT=3306
// * DB_DATABASE=order_db
// ? DB_USERNAME=root
// ? DB_PASSWORD=

// ! ขั้นตอนที่ 4 เพิมฟิลด์ที่ migration path('project_order/database/migrations')
// ? ในตาราง users ให้เป็นแบบนี้
//   $table->string('email')->nullable();
//   $table->string('is_role')->default('A');
// ? ในตาราง password_resets ให้เป็นแบบนี้
//   $table->string('email')->nullable();
// ? ในตาราง failed_jobs ให้เป็นแบบนี้
//   $table->string('uuid')->nullable();

// ! ขั้นตอนที่ 5 แก้ไข model path('project_order/app/Models/User.php')
// protected $fillable = [
//     'name',
//     'email',
//     'password',
// *   'is_role'
// ];

// ! ขั้นตอนที่ 6 พิมพ์คำสั่ง php artisan migrate
// ? จากนั้น พิมพ์คำสั่ง composer require laravel/ui
// ? จากนั้น พิมพ์คำสั่ง php artisan ui bootstrap --auth

// ! ขั้นตอนที่ 7 create middleware Admin จะทำให้แอดมินเข้า route หรือหน้านั้น ๆ ได้
// ? พิมพ์คำสั่ง php artisan make:middleware IsAdmin

// ! ขั้นตอนที่ 8 แก้ไข middleware IsAdmin path('project_order/app/Http/Middleware/IsAdmin.php') ที่ handle
// if(auth()->user()->is_role == 'S') {
//     return $next($request);
// }else {
//     return redirect()->route('home')->with('error', 'You are not allowed to access this page');
// }

// ! ขั้นตอนที่ 9 แก้ไขเพิ่ม Kernel path('project_order/app/Http/Kernel.php') ที่ protected $routeMiddleware
// 'is_admin' => \App\Http\Middleware\IsAdmin::class,

// ! ขั้นตอนที่ 10 แก้ไข route path('project_order/routes/web.php')
// ? เพิ่ม use App\Http\Controllers\HomeController;
// ? เพิ่ม use Illuminate\Support\Facades\Auth;
// ? เพิ่ม Route::get('admin/home', [HomeController::class, 'adminHome'])->name('admin.home')->middleware('is_admin');

// ! ขั้นตอนที่ 11 แก้ไข HomeController path('project_order/app/Http/Controllers/HomeController.php')
// ? เพิ่ม public function adminHome()
// public function adminHome()
// {
//     return view('adminHome');
// }

// ! ขั้นตอนที่ 12 สร้าง view adminHome path('project_order/resources/views/adminHome.blade.php') และแก้ไขเหมืน home.blade.php

// ! ขั้นตอนที่ 13 แก้ไข redirect path('project_order/app/Http/Controllers/Auth/LoginController.php')
// ? เพิ่ม use use Illuminate\Http\Request;
// ? แก้ไข protected $redirectTo = RouteServiceProvider::HOME; เป็น protected $redirectTo = '/home';
// * เพิ่ม function login(Request $request)
// public function login(Request $request)
// {
//     $input = $request->all();
//     $this->validate($request, [
//         'email' => 'required|email',
//         'password' => 'required',
//     ]);

//     if(auth()->attempt(array('email' => $input['email'], 'password' => $input['password'])))
//     {
//         if (auth()->user()->is_role == 'S') {
//             return redirect()->route('admin.home');
//         }else{
//             return redirect()->route('home');
//         }
//     }else{           
//         return redirect()->route('login')
//             ->with('error','Email-Address And Password Are Wrong.');
//     }
// }

// ! ขั้นตอนที่ 14 สร้าง seeder สำหรับสร้าง User และ Admin
// ? พิมพ์คำสั่ง php artisan make:seeder CreateUsersSeeder
// ? เพิ่ม USE App\Models\User;
// * แก้ไข seeder path('project_order/database/seeders/CreateUsersSeeder.php') ที่ public function run()
// public function run()
//     {
//         $user = [
//             [
//                 'name' => 'Admin',
//                 'email' => 'admin@soat.com',
//                 'is_role' => 'S',
//                 'password' => bcrypt('a111111')
//             ],
//             [
//                 'name' => 'User',
//                 'email' => 'user@soat.com',
//                 'is_role' => 'A',
//                 'password' => bcrypt('a111111')

//             ],
//         ];
//         foreach ($user as $key => $value) {
//             User::create($value);
//         }
//     }
// ? พิมพ์คำสั่ง php artisan db:seed --class=CreateUsersSeeder

// ! ขั้นตอนที่ 15 สร้าง พิมพ์คำสั่ง php artisan serve

// + ติดตั้ง React ใน Laravel 
// ! ขั้นตอนที่ 16 ติดตั้ง React ใน Laravel
// ? พิมพ์คำสั่ง npm install --save-dev react react-dom @babel/preset-react
// * แก้ไข app.js path('/resources/js/app.js')
// import React from 'react'
// import ReactDOM from 'react-dom'
// function App() {
//     return (
//         <div>
//             <h1 className='text-green-700 text-lg'>Hello World</h1>
//             <p className='text-lg text-green-700 font-bold'><i className="fa-solid fa-house"></i>สวัสดีชาวโลก</p>
//             <button type="button" className="btn btn-primary">Primary</button>
//         </div>
//     )
// }

// ReactDOM.render(<App />, document.getElementById('root'))
// * แก้ไข webpack.mix.js path('/webpack.mix.js')
// mix.js('resources/js/app.js', 'public/js')
// *     .react()
//     .sass('resources/sass/app.scss', 'public/css')
//     .sourceMaps();
// ? จากนั้น สร้างไฟล์ index.blade.php path('/resources/views/index.blade.php') ก็อปปี้โค้ดจาก welcome.blade.php
// * แก้ไข index.blade.php path('/resources/views/index.blade.php') ในส่วนของ body
// <div id="root"></div>
// <script src="{{ mix('/js/app.js') }}"></script>

// + ติดตั้ง bootstarp 5.3.0 with react in laravel เพื่อใช้ css
// ? Link https://getbootstrap.com
// * แก้ไข index.blade.php path('/resources/views/index.blade.php') ในส่วนของ head
// <link href="{{ asset('css/app.css') }}" rel="stylesheet">
// <link href="{{ asset('scss/app.scss') }}" rel="stylesheet">

// + ติดตั้ง fontawesome 6.3.0 with react in laravel เพื่อใช้ icon
// ? พิมพ์คำสั่ง npm install @fortawesome/fontawesome-free
// * แก้ไข app.scss path('/resources/sass/app.scss') 
// @import '~@fortawesome/fontawesome-free/css/all';
// *{ margin: 0; padding: 0; }
// body{ font-family: 'Prompt', sans-serif; font-size: 0.95em; line-height: 1.7em;  scroll-behavior: smooth;}
// h1,h2,h3,h4,h5{ line-height: 2em; clear: both; margin-bottom: 0 !important;}
// h2{ padding: 0 10px; color: #000; margin: 5px 0 0 0; }
// p{ padding: 0; margin-bottom: 0 !important;}
// .n{ font-weight: normal; font-style: normal; }
// .b{ font-weight: bold; font-style: normal; }
// .i{ font-weight: normal; font-style: italic; }
// .bi{ font-weight: bold; font-style: italic; }
// ul,ol{padding: 0;}
// li{ margin: 0 0 0 0em; padding: 0; }
// code{ background: #FFF; }
// #container{ width: 900px; margin: 20px auto 0; border: 1px solid #333; padding: 20px; background: #FFF; }
// #instruction{ padding: 10px 10px 0; background: #e6e6e6; }
// #footer{ width: 940px; margin: 0 auto; padding: 10px 0 20px; }
// .right{text-align: right;}
// .type{ font-family: 'Prompt', sans-serif; height: 5em; width: 98%;font-size: 1em;clear: both;margin: 20px auto 10px;padding: 5px 1%; }
// input[type="submit"]{font-weight: normal; font-style: normal;}
// * แก้ไข index.blade.php path('/resources/views/index.blade.php') ในส่วนของ head
// <link href="{{ asset('css/app.css') }}" rel="stylesheet">
// <link href="{{ asset('scss/app.scss') }}" rel="stylesheet">

// + ติดตั้ง tailwindcss 3.2.7 with react in laravel เพื่อใช้ในการสร้าง UI
// ? Link https://tailwindcss.com/docs/guides/laravel#mix
// ? พิมพ์คำสั่ง npm install -D tailwindcss postcss autoprefixer
// ? พิมพ์คำสั่ง npx tailwindcss init
// ? พิมพ์คำสั่ง npm install -D autoprefixer
// ? พิมพ์คำสั่ง npm i --save-dev tailwindcss-textshadow
// * แก้ไข tailwind.config.js path('/tailwind.config.js')
// const colors = require("tailwindcss/colors");

// module.exports = {
//   content: [
//     "./resources/**/*.blade.php",
//     "./resources/**/*.js",
//     "./resources/**/*.vue",
//   ],
//   theme: {
//     colors: {
//       ...colors,
//       custom: colors.custom,
//       sunshade: colors.sunshade,
//   },
//     extend: {
//       colors: {
//         sunshade: {
//             DEFAULT: "#FF9027",
//             50: "#FFEEDF",
//             100: "#FFE4CA",
//             200: "#FFCFA1",
//             300: "#FFBA79",
//             400: "#FFA550",
//             500: "#FF9027",
//             600: "#EE7400",
//             700: "#B65800",
//             800: "#7E3D00",
//             900: "#462200",
//         },
//     },
//     },
//   },
//   plugins: [
//     require("tailwindcss-textshadow"),
//   ],
// }

// * แก้ไข app.css path('/resources/css/app.css')
// @tailwind base;
// @tailwind components;
// @tailwind utilities;
// * แก้ไข webpack.mix.js path('/webpack.mix.js')
// .postCss("resources/css/app.css", "public/css", [
//     require("tailwindcss"),
//   ])

// + ติดตั้ง sidebar with react in laravel เพื่อใช้ในการสร้างเมนูด้านข้าง
// ? Link https://flowbite.com/docs/components/sidebar/#default-sidebar

// + ติดตั้ง react-router-dom 6.8.2 with react in laravel เพื่อใช้ในการเปลี่ยนหน้า
// ? Link https://reactrouter.com/en/6.8.2/components/link
// ? พิมพ์คำสั่ง npm install --save react-router-dom

// + ติดตั้ง react-notifications 1.4.0 with react in laravel เพื่อใช้แสดงข้อความแจ้งเตือน
// ? Link https://www.npmjs.com/package/react-notifications
// ? พิมพ์คำสั่ง npm install --save react-notifications

// + ติดตั้ง react-bootstrap 2.0.0 with react in laravel เพื่อใช้กำหนด meta tag in hader
// ? Link https://www.npmjs.com/package/react-helmet
// ? พิมพ์คำสั่ง npm install --save react-helmet

// + ติดตั้ง react-redux with react in laravel เพื่อใช้ในการจัดการข้อมูล
// ? Link https://www.npmjs.com/search?q=keywords:react
// ? พิมพ์คำสั่ง npm install react-redux