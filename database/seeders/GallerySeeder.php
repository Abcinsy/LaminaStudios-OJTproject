<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('galleries')->insert([
            'id' => 1,
            'name' => 'hero_section'
        ]);

        DB::table('galleries')->insert([
            'id' => 2,
            'name' => 'featured_creative'
        ]);
    }
}
