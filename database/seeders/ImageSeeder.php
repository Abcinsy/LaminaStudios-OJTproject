<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //hero-section
        DB::table('images')->insert([
            'id' => 1,
            'name' => 'badbotsrise_splash',
            'image_name' => 'images/badbotsrise.jpg',
            'description' => null
        ]);

        DB::table('images')->insert([
            'id' => 2,
            'name' => 'dungeonsouls_splash',
            'image_name' => 'images/dungeonsouls.jpg',
            'description' => null
        ]);

        DB::table('images')->insert([
            'id' => 3,
            'name' => 'journeytovalhalla_splash',
            'image_name' => 'images/journeytovalhalla.jpg',
            'description' => null
        ]);

        DB::table('images')->insert([
            'id' => 4,
            'name' => 'tower_mechanic',
            'image_name' => 'Art/05.png',
            'description' => 'Tower Mechanic'
        ]);

        DB::table('images')->insert([
            'id' => 5,
            'name' => 'labyrinth_explorer',
            'image_name' => 'Art/10.png',
            'description' => 'Labyrinth Explorer'
        ]);

        DB::table('images')->insert([
            'id' => 6,
            'name' => 'magician_of_the_void',
            'image_name' => 'Art/Wizard%20Steam.png',
            'description' => 'Magician of the Void'
        ]);

        DB::table('images')->insert([
            'id' => 7,
            'name' => 'warrior_of_the_abyss',
            'image_name' => 'Art/Warrior_Cathedral.jpg',
            'description' => 'Warrior of the Abyss'
        ]);
    }
}
