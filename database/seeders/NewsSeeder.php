<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('news')->insert([
            'slug' => 'Blast Off This SUMMER With 50% Sale',
            'title' => 'Blast Off This SUMMER With 50% Sale',
            'article' => 'Dungeon Souls and OST are now 50% off. The promo started in June 22, 2017 and will end in July 5, 2017. The game has recently been updated (v1.0.4) with Razer Chroma effects and redesigned user interface.',
            'image_name' => 'images/dungeon-souls.png',
            'author_id' => 1
        ]);
    }
}
