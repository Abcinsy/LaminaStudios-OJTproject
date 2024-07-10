<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class EventSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('events')->insert([
            'id' => 1,
            'name' => 'AMAC 2016',
            'blurb' => 'A convention held in Legazpi City, Albay, Philippines',
            'description' => 'Lamina Studios is one of the sponsors of AMAC 2016 event which is a gathering of Multimedia Arts Students and Professionals in Albay.',
            'image_name' => 'img/amac.jpg',
            'show' => 1
        ]);

        DB::table('events')->insert([
            'id' => 2,
            'name' => 'Versus 2017',
            'blurb' => 'Event held in Porto, Portugal',
            'description' => 'Diogo Braga, our Lead Game Developer presented Dungeon Souls at Versus 2017 event in Porto, Portugal. This event was held at the ISEP Association Living Room and is sponsored by the following: Versus, IEEE (Porto, Portugal) and Lamina Studios.',
            'image_name' => 'img/versus.jpg',
            'show' => 1
        ]);

        DB::table('events')->insert([
            'id' => 3,
            'name' => 'Bicol IT: Level Up Indie Games Trends and Innovations',
            'blurb' => 'September 30, 2017',
            'description' => 'Bicol IT Indie Game Dev Talk in association with Lamina Studios.',
            'image_name' => 'img/bicol.jpg',
            'show' => 1
        ]);

    }
}
