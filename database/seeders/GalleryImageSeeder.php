<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GalleryImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //hero-section
        DB::table('gallery_images')->insert([
            'gallery_id' => 1,
            'image_id' => 1
        ]);

        DB::table('gallery_images')->insert([
            'gallery_id' => 1,
            'image_id' => 2
        ]);

        DB::table('gallery_images')->insert([
            'gallery_id' => 1,
            'image_id' => 3
        ]);

        DB::table('gallery_images')->insert([
            'gallery_id' => 2,
            'image_id' => 4
        ]);

        DB::table('gallery_images')->insert([
            'gallery_id' => 2,
            'image_id' => 5
        ]);

        DB::table('gallery_images')->insert([
            'gallery_id' => 2,
            'image_id' => 6
        ]);

        DB::table('gallery_images')->insert([
            'gallery_id' => 2,
            'image_id' => 7
        ]);
    }
}
