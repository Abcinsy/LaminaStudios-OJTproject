<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PartnerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('partners')->insert([
            'id' => 1,
            'name' => 'Alienware',
            'image_name' => 'img2/1.png',
            'web_url' => 'https://www.dell.com/en-us/gaming/alienware?cs=19',
            'is_featured' => 1
        ]);

        DB::table('partners')->insert([
            'id' => 2,
            'name' => 'Dropleaf',
            'image_name' => 'img2/16.png',
            'web_url' => 'https://www.rootsoft.com',
            'is_featured' => 1
        ]);

        DB::table('partners')->insert([
            'id' => 3,
            'name' => 'Gamepedia',
            'image_name' => 'img2/3.png',
            'web_url' => 'https://www.fandom.com',
            'is_featured' => 1
        ]);

        DB::table('partners')->insert([
            'id' => 4,
            'name' => 'Logitech',
            'image_name' => 'img2/4.png',
            'web_url' => 'https://www.logitech.com/en-us',
            'is_featured' => 1
        ]);

        DB::table('partners')->insert([
            'id' => 5,
            'name' => 'Steam',
            'image_name' => 'img2/5.png',
            'web_url' => 'https://store.steampowered.com',
            'is_featured' => 1
        ]);

        DB::table('partners')->insert([
            'id' => 6,
            'name' => 'GOG.com',
            'image_name' => 'img2/6.png',
            'web_url' => 'https://www.gog.com',
            'is_featured' => 1
        ]);

        DB::table('partners')->insert([
            'id' => 7,
            'name' => 'Xbox',
            'image_name' => 'img2/7.png',
            'web_url' => 'https://www.xbox.com/en-US/xbox-one',
            'is_featured' => 1
        ]);

        DB::table('partners')->insert([
            'id' => 8,
            'name' => 'Humble Bundle',
            'image_name' => 'img2/8.png',
            'web_url' => 'https://www.humblebundle.com',
            'is_featured' => 1
        ]);

        DB::table('partners')->insert([
            'id' => 9,
            'name' => 'IndieGala',
            'image_name' => 'img2/9.png',
            'web_url' => 'https://www.indiegala.com',
            'is_featured' => 1
        ]);

        DB::table('partners')->insert([
            'id' => 10,
            'name' => 'Bundle Stars',
            'image_name' => 'img2/10.png',
            'web_url' => 'https://www.bundlestars.com',
            'is_featured' => 1
        ]);

        DB::table('partners')->insert([
            'id' => 11,
            'name' => 'Gamelyst',
            'image_name' => 'img2/11.png',
            'web_url' => 'https://www.gamelyst.com',
            'is_featured' => 1
        ]);

        DB::table('partners')->insert([
            'id' => 12,
            'name' => 'Green Man Gaming',
            'image_name' => 'img2/12.png',
            'web_url' => 'https://www.greenmangaming.com',
            'is_featured' => 1
        ]);

        DB::table('partners')->insert([
            'id' => 13,
            'name' => 'IndieGameStand',
            'image_name' => 'img2/13.png',
            'web_url' => 'https://www.indiegamestand.com',
            'is_featured' => 1
        ]);

        DB::table('partners')->insert([
            'id' => 14,
            'name' => 'Razer',
            'image_name' => 'img2/14.png',
            'web_url' => 'https://www.razerzone.com',
            'is_featured' => 1
        ]);

        DB::table('partners')->insert([
            'id' => 15,
            'name' => 'MoGi Group',
            'image_name' => 'img2/15.png',
            'web_url' => 'https://www.mogi-group.com',
            'is_featured' => 1
        ]);

        DB::table('partners')->insert([
            'id' => 16,
            'name' => 'BicolIT',
            'image_name' => 'img2/17.png',
            'web_url' => 'https://www.facebook.com/groups/BicolIT/',
            'is_featured' => 1
        ]);

        DB::table('partners')->insert([
            'id' => 17,
            'name' => 'Smilegate Stove',
            'image_name' => 'img2/18.png',
            'web_url' => 'https://page.onstove.com',
            'is_featured' => 1
        ]);

        DB::table('partners')->insert([
            'id' => 18,
            'name' => 'Black Shell Media',
            'image_name' => 'img2/2.png',
            'web_url' => 'https://www.blackshellmedia.com',
            'is_featured' => 1
        ]);

    }
}
