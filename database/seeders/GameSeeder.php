<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GameSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('games')->insert([
            'id' => 1,
            'partner_studio_id' => 1,
            'name' => 'Bad Bots Rise',
            'image_name' => 'devs/hl/BBR.png',
            'is_featured' => 1
        ]);

        DB::table('games')->insert([
            'id' => 2,
            'partner_studio_id' => 1,
            'name' => 'Aninag',
            'image_name' => 'devs/hl/AN.png',
            'is_featured' => 1
        ]);

        DB::table('games')->insert([
            'id' => 3,
            'partner_studio_id' => 1,
            'name' => 'Life of a Commander',
            'image_name' => 'devs/hl/LOAC.png',
            'is_featured' => 1
        ]);

        DB::table('games')->insert([
            'id' => 4,
            'partner_studio_id' => 1,
            'name' => 'Runny Dodge',
            'image_name' => 'devs/hl/RD.png',
            'is_featured' => 1
        ]);

        DB::table('games')->insert([
            'id' => 5,
            'partner_studio_id' => 1,
            'name' => 'Super Sale Showdown',
            'image_name' => 'devs/hl/SSS.png',
            'is_featured' => 1
        ]);

        DB::table('games')->insert([
            'id' => 6,
            'partner_studio_id' => 1,
            'name' => 'Hero? U Dead',
            'image_name' => 'devs/hl/HUD.png',
            'is_featured' => 1
        ]);

        DB::table('games')->insert([
            'id' => 7,
            'partner_studio_id' => 4,
            'name' => 'GoodNight',
            'image_name' => 'devs/ss/GN.png',
            'is_featured' => 1
        ]);

        DB::table('games')->insert([
            'id' => 8,
            'partner_studio_id' => 4,
            'name' => 'LUCAS - Basement Demo',
            'image_name' => 'devs/ss/L.png',
            'is_featured' => 1
        ]);

        DB::table('games')->insert([
            'id' => 9,
            'partner_studio_id' => 4,
            'name' => 'Left Behind',
            'image_name' => 'devs/ss/LB.png',
            'is_featured' => 1
        ]);

        DB::table('games')->insert([
            'id' => 10,
            'partner_studio_id' => 4,
            'name' => 'Nyctophobia Bloodline',
            'image_name' => 'devs/ss/NB.png',
            'is_featured' => 1
        ]);

        DB::table('games')->insert([
            'id' => 11,
            'partner_studio_id' => 4,
            'name' => 'Nyctophobia Devil Unleashed',
            'image_name' => 'devs/ss/ND.png',
            'is_featured' => 1
        ]);

        DB::table('games')->insert([
            'id' => 12,
            'partner_studio_id' => 4,
            'name' => 'RonRon',
            'image_name' => 'devs/ss/RR.png',
            'is_featured' => 1
        ]);

        DB::table('games')->insert([
            'id' => 13,
            'partner_studio_id' => 4,
            'name' => 'Triple Hell',
            'image_name' => 'devs/ss/TH.png',
            'is_featured' => 1
        ]);

        DB::table('games')->insert([
            'id' => 14,
            'partner_studio_id' => 4,
            'name' => 'The Missing',
            'image_name' => 'devs/ss/TM.png',
            'is_featured' => 1
        ]);

        DB::table('games')->insert([
            'id' => 15,
            'partner_studio_id' => 4,
            'name' => 'UNDER',
            'image_name' => 'devs/ss/U.png',
            'is_featured' => 1
        ]);

        DB::table('games')->insert([
            'id' => 16,
            'partner_studio_id' => 4,
            'name' => 'UPLOADED',
            'image_name' => 'devs/ss/UP.png',
            'is_featured' => 1
        ]);

        DB::table('games')->insert([
            'id' => 17,
            'partner_studio_id' => 3,
            'name' => 'Journey to Valhalla',
            'image_name' => 'devs/pl/JTV.jpg',
            'is_featured' => 1
        ]);
    }
}
