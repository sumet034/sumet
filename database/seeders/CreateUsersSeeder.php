<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class CreateUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = [
            [
                'name' => 'Admin',
                'email' => 'admin@soat.com',
                'is_role' => 'S',
                'password' => bcrypt('a111111')
            ],
            [
                'name' => 'User',
                'email' => 'user@soat.com',
                'is_role' => 'A',
                'password' => bcrypt('a111111')

            ],
        ];
        foreach ($user as $key => $value) {
            User::create($value);
        }
    }
}
