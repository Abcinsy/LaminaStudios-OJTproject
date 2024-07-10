<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PartnerStudioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('partner_studios')->insert([
            'id' => 1,
            'name' => 'High Leap Studios',
            'blurb' => 'We build games from bright ideas',
            'description' => 'High Leap Studios is more than just a studio! We aim to showcase HIGH LEAP of game innovation while bringing you along the journey of creating games. We are your reliable source of transforming your bright game ideas into elating and thrilling 2D games!',
            'link' => 'https://highleapstudios.com',
            'image_name' => 'imgdev/1.png',
            'show' => 1,
            'is_featured' => 1
        ]);

        DB::table('partner_studios')->insert([
            'id' => 2,
            'name' => 'Nuclear Diamond Games',
            'blurb' => '',
            'description' => '',
            'link' => 'https://www.facebook.com/NuclearDiamondGames/',
            'image_name' => 'imgdev/2.png',
            'show' => 1,
            'is_featured' => 0
        ]);

        DB::table('partner_studios')->insert([
            'id' => 3,
            'name' => 'Polylab Studio',
            'blurb' => '',
            'description' => 'A primitive man trying to survive the world while playing and creating fun games',
            'link' => 'https://www.facebook.com/PolylabIndieGame/',
            'image_name' => 'imgdev/3.png',
            'show' => 1,
            'is_featured' => 1
        ]);

        DB::table('partner_studios')->insert([
            'id' => 4,
            'name' => 'Solitary Studios',
            'blurb' => 'Pinoy horror indie dev',
            'description' => 'We are a Pinoy Indie Horror Game Developer living in Laguna Philippines. We are developing different kinds of games but decided to stick to one genre (Horror Genre). We are also in partnership with Lamina Studios. A USA-based publisher & game developer company.',
            'link' => 'https://www.facebook.com/SolitaryStudios/',
            'image_name' => 'imgdev/4.png',
            'show' => 1,
            'is_featured' => 1
        ]);

    }
}
