<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class BlogSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('blogs')->insert([
            'slug' => 'Is virtual reality coming to reality?',
            'title' => 'Is virtual reality coming to reality?',
            'article' => 'A common way of thinking about virtual realities is that they\'re somehow fake realities, that what you perceive in VR isn\'t real. I think that\'s wrong,” he told the Guardian. “The virtual worlds we\'re interacting with can be as real as our ordinary physical world.',
            'image_name' => 'https://i.pcmag.com/imagery/roundups/02Qp8NssQCHrqFVFEOXnkxr-28..v1623684908.jpg',
            'author_id' => 1
        ]);
    }
}
