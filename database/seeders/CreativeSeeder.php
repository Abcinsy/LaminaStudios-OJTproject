<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CreativeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // DB::table('creatives')->insert([
        //     'name' => ,
        //     'title' => ,
        //     'description' => ,
        //     'image' =>
        // ]);

        DB::table('creatives')->insert([
            'name' => 'April Gianan',
            'title' => 'Founder & Game Producer',
            'description' => "April is the Founder and Game Producer at Lamina Studios. She also oversees the game development on a daily basis and interacts with the team, made up of great talents. She is responsible for bringing the team together and in charge of music, graphical assets, voice actors, and other requirements needed for the game. She is also directly in contact with the community and assists the game developer to prepare the game for different platforms. She has been in the IT industry for over ten years. She has a background in Computer Science, Computer Network Administration, and Cybersecurity. While she finds game development as a new field for her, she gets more inspired and interested working with diverse team composed of very talented individuals in the industry. She is the Project Manager and Executive Producer of Dungeon Souls.",
            'image_name' => 'https://www.laminastudios.com/assets/images/april-gianan-600x571.jpg'
        ]);

        DB::table('creatives')->insert([
            'name' => 'Diogo Braga',
            'title' => 'Dev. Lead & Software Engineer',
            'description' => "Diogo is the former Lead Game Developer of Dungeon Souls and former CTO of Lamina Studios. Over the course of six years, Diogo has developed game mechanic engines in Game Maker. He has also made a few games for android using Game Maker and has done a few applications for Windows using Visual Studio. He has experience in java and C/C++ development. Whether it is an application based for consumer purposes or a scientific-driven development, his best skill is making video games using Game Maker. Diogo likes to look into opportunities in developing video games and desktop applications. Diogo has worked on many features of Dungeon Souls' such as controller support implementation, Alienware FX and Logitech keyboard and mouse lightning effects as well as with Logitech Arx Control lightning implementation. He has worked also on the game story and did the scripts for several characters. His game design expertise has led to more added features of the game: Arcane Forge, Split Screen, Razer lightning implementation, and porting the game to consoles. Diogo is very creative and innovative in terms of his game design concepts as well in software or game development. As many do not know, Diogo has some experience in music composition and vocal singing too. He got recognition for his dissertation on Early Detection of Parkinson's Disease through Voice.",
            'image_name' => 'https://www.laminastudios.com/assets/images/diogo-thumb-1400x1333.jpg'
        ]);

        DB::table('creatives')->insert([
            'name' => 'Igor Grincu',
            'title' => 'Pixel Artist & Animator',
            'description' => "Pixel artist since 2012, driven by passion and inconsistency. He always tend to experiment with new techniques and discover the new (for me) part of pixel art. Most of my works were more like experiments and first tries that turned out the way you see it now.",
            'image_name' => 'https://www.laminastudios.com/assets/images/igor-grincu-600x571.png'
        ]);

        DB::table('creatives')->insert([
            'name' => 'Piotrek Antoniak',
            'title' => 'Illustrator',
            'description' => "Piotrek is a Digital Artist and has a Master's degree in Computer Science. He loves fantasy, sci-fi, anime and video games. Visit his Deviant Art profile page to check out his portfolio.",
            'image_name' => 'https://www.laminastudios.com/assets/images/piotrek-antoniak-600x571.jpg'
        ]);

        DB::table('creatives')->insert([
            'name' => 'Paul Benedict Galves',
            'title' => 'Game Designer & Graphic Artist',
            'description' => "Paul is an animator and graphic artist. He is also a Multi Media Arts student at the De La Salle College St. Benilde. Paul has worked on Dungeon Souls' logos, concept art, Steam trading cards, graphical assets for Lamina Studios and promotional arts. Paul is a game designer as well..",
            'image_name' => 'https://www.laminastudios.com/assets/images/paul-galvez-600x571.jpg'
        ]);

        DB::table('creatives')->insert([
            'name' => 'Christian Argante',
            'title' => 'Pixel Artist & Animator',
            'description' => "Christian or \"Xian\" as they call him is a pixel artist and animator currently based in Manila, Philippines. He likes slaying evil dragons and rescuing damsels in his free time.",
            'image_name' => 'https://www.laminastudios.com/assets/images/xian-570x543-600x571.png'
        ]);

        DB::table('creatives')->insert([
            'name' => 'Unfamiliar Identity',
            'title' => 'Game Composer',
            'description' => "Unfamiliar Identity is the anonymous Australian based Orchestral Electronic Composer who started in early 2012. Their music combines the emotive, and story based qualities of contemporary orchestral music with modern day Electronic Dance Music genre production, in particular Dubstep.",
            'image_name' => 'https://www.laminastudios.com/assets/images/ui-600x571.png'
        ]);

        DB::table('creatives')->insert([
            'name' => 'Jackdaw',
            'title' => 'Game Composer',
            'description' => "Christopher van Eijk aka \"Jackdaw\" says that music has always run through his veins. He has been composing and producing since he was 13 years old. He loves to incorporate a touch of soul and melancholy into his work. His dream is to do a soundtrack on the same scale as the Final Fantasy games.",
            'image_name' => 'https://www.laminastudios.com/assets/images/christopher-eijk-600x571.png'
        ]);

        DB::table('creatives')->insert([
            'name' => 'Digital Sun Enterprises',
            'title' => 'Game Composer',
            'description' => "David Viano aka \"Digital Sun Enterprises\" approached music in 2001, learning to play the guitar. Through a path that leads him between musical genres and bands until in 2012 when he discovered \"computer music.\" He has had a musical journey leading him to all types of music genres.",
            'image_name' => 'https://www.laminastudios.com/assets/images/david-viano-1400x1333.png'
        ]);

        DB::table('creatives')->insert([
            'name' => "Joe O'Quinn",
            'title' => 'Game Composer',
            'description' => "Joe O'Quinn is an ambitious composer whose passion it is to convey the powerful experiences that music has given him to anyone who listens to his music; to capture a memory or an emotion and revel in its magnificence. His creations seem to be a combination of sound, noise, and a little bit of modern orchestral music. He utilizes every imaginable sonic style available, if the necessity warrants itself. He realizes the significance of the video game and film medium as vastly relevant to today's creative outlets, and has yearned to keep gaining experience these thrilling worlds.",
            'image_name' => 'https://www.laminastudios.com/assets/images/joe-oquinn-600x571.png'
        ]);

        DB::table('creatives')->insert([
            'name' => 'Ovais Malik',
            'title' => 'Voice Actor',
            'description' => "Ovais is a multilingual voice actor (English, Urdu, Hindi) specializing in everything from video games, animation and film, to commercials, movie trailers, documentaries, ADR and more. His background stems from on-camera acting, being a musician of over 17 years and theater, all of which have played an integral role in his continual growth as a voice over talent. He's worked with the likes of William Mesa, widely considered one of Hollywood's biggest Visual Effects Directors. A few recent projects/clients include: Dungeon Souls (Video Game) - Voice of \"Judgement\" and \"Redeemer\" Miner Wars 2081 (Video Game)- Voice of 9 characters, including the main role of \"Valentine\" \"The Black Prince\" (Feature Film)- ADR Dharma Civilization Foundation (Documentary)- Narrator MetLife, Engility, Kenco Sporting Goods (Commercials) \"The Human Condition\" (Short)- Voice of \"Man in the dark.\"",
            'image_name' => 'https://www.laminastudios.com/assets/images/ovais-malik-600x571.jpg'
        ]);

        DB::table('creatives')->insert([
            'name' => 'Pippa Vos',
            'title' => 'Voice Actor',
            'description' => "Pippa Vos speaks perfect English and is fluent in Brazilian Portuguese and Spanish. She is a global Voice Actor heard in the US, Brazil, Mexico, Portugal and more. Pippa's voice is extremely versatile from fun and light to sexy and low. She also has an arsenal of diverse character voices from an old man to little girl or Caribbean sorceress she can create what is needed. Accents are: Caribbean, French, Russian, British, Latin, American and African. Project credits: Xbox, Hasbro, Expedia, Intellijoy, 3A Sound, Pronunciator LLC, Fortune Island for Apple.",
            'image_name' => 'https://www.laminastudios.com/assets/images/pippa-vos-600x571.jpg'
        ]);

        DB::table('creatives')->insert([
            'name' => 'Alexandra Silva',
            'title' => 'Pixel Artist',
            'description' => 'Alexandra Silva is a Pixel Artist who worked on Dungeon Souls Valentine\'s Day update. She also designed the new level called "Love Temple."  She worked to redesign the UI/UX of the game.',
            'image_name' => 'https://www.laminastudios.com/assets/images/alexandrasilva-570x543-600x571.png'
        ]);

        DB::table('creatives')->insert([
            'name' => 'Yannik Langener',
            'title' => 'Voice Actor',
            'description' => 'Yannik was born in Stuttgart, Germany. At an early age, "he had always found immense joy in imitating voices and perform some acting. A few years later, he found his way into the voice acting industry. He also have been involved on a number of small animation projects, abridged series, one of his favorite video games and even a song or two. He intends to make the voice acting seriously as a profession. He finds that in this industry, there will be more opportunities for him and he will try to breach into new areas of the creative business."',
            'image_name' => 'https://www.laminastudios.com/assets/images/yannik-570x543-1-600x571.png'
        ]);

        DB::table('creatives')->insert([
            'name' => 'Valentina Hincape Garay',
            'title' => 'Game Artist',
            'description' => 'Valentina Garay is currently pursuing a Bachelor\'s degree in 3D Animation at SENA in Bogota, Colombia. She has various skills such as Video/Audio editing, 3D Modeling, 2D/3D Animation, Concept and Environment Illustration, Composition, and Script writing. She is also familiar with transmedia products.',
            'image_name' => 'https://www.laminastudios.com/assets/images/valentina-284x270-600x570.png'
        ]);

        DB::table('creatives')->insert([
            'name' => 'Christian Jay Duran',
            'title' => 'Web Developer & Mobile App Developer',
            'description' => 'Christian is a fresh IT graduate who has innovative skills in developing web applications. He has worked on the Logitech Arx Control web app which is another feature added to the game. He also created an android application for the web app he designed and has made sure that the app can be viewed on different devices (desktop or mobile). He designed the old version of Lamina Studios\' website. He is continuing to learn android application development and is also interested in game development as well.',
            'image_name' => 'https://www.laminastudios.com/assets/images/christian-duran-600x571.jpg'
        ]);

        DB::table('creatives')->insert([
            'name' => 'Harryson Perryman',
            'title' => 'Graphic Artist (Volunteer)',
            'description' => 'Harrison is an animator and concept artist. His inspirations come from various games such as Nuclear Throne, Blazing Beaks, Dungeon Souls and other rougelike games. His profile is a Nuclear Throne fanart that he created.',
            'image_name' => 'https://www.laminastudios.com/assets/images/harrison-perryman-600x600.jpg'
        ]);

        DB::table('creatives')->insert([
            'name' => 'Elias Frost',
            'title' => 'Pixel Artist & Animator',
            'description' => 'Elias Frost is a Pixel Artist & Animator. He designed the Dungeon Souls Steam achievements. Elias also develops his own game under his own studio name Elias Frost Games. He has several pixel artwork available online.',
            'image_name' => 'https://www.laminastudios.com/assets/images/elias-thumb-600x571.png'
        ]);

        DB::table('creatives')->insert([
            'name' => 'Matthew Rock',
            'title' => 'Game Composer',
            'description' => 'Matthew Rock is a composer and lifelong gamer with a passion for great game music.',
            'image_name' => 'https://www.laminastudios.com/assets/images/matt-rock-600x571.png'
        ]);

        DB::table('creatives')->insert([
            'name' => 'Gokce Cimen',
            'title' => 'Pixel Artist & Animator',
            'description' => 'Gokce is an industrial designer and a pixel artist. He has been making pixel art since the early 90s and still continues to do so. He\'s also a moderator at Pixel Joint. Gokce loves miniature painting, playing board games and writes movie reviews on a Turkish geek site.',
            'image_name' => 'https://www.laminastudios.com/assets/images/gokce_600x571.png'
        ]);

        DB::table('creatives')->insert([
            'name' => 'Sohom Sahaun',
            'title' => 'Game Developer',
            'description' => 'Sahaun is a passionate Game Maker Developer. He loves Game Maker, Pixel Art, Programming, Music, Books, Maths and Chills.',
            'image_name' => 'https://www.laminastudios.com/assets/images/sohom_600x571.png'
        ]);

        DB::table('creatives')->insert([
            'name' => 'Jarrod Muddyman',
            'title' => 'Game Developer',
            'description' => 'Jarrod enjoys game development as it allowed him to create his own world. According to him, it is one of the best ways to express oneself. He has a Bachelor\'s degree in Information Technology at Chrisholm Institute and he is also the Lead Game Developer of Overseer. Overseer is still under development. He developed a game called Christmas Run when he was 15-16 years old and also developed Arcade Galaxy.',
            'image_name' => 'https://www.laminastudios.com/assets/images/jarrod-muddyman-600x571.png'
        ]);

        DB::table('creatives')->insert([
            'name' => 'Elu',
            'title' => 'Game Composer',
            'description' => 'Elu is the youngest among the game composers we have in the group. He likes many things related to art such as music, drawings, and fiction, all of which he loves to create by himself. Self-taught, he uses a method of trial and error, which he finds the most interesting, challenging, and in-depth, the best method with which he can understand the inner workings of different things, art being one of them.',
            'blurb' => 'Elu our Game Composer Made Some artworks that are outstanding! You can see the artworks below.',
            'links' => json_encode([
                'github' => 'https://github.com'
            ]),
            'image_name' => 'https://www.laminastudios.com/assets/images/elu-1400x1333.png',
            'is_featured' => 1
        ]);

        DB::table('creatives')->insert([
            'name' => 'Bastiàn Leal Baeza',
            'title' => 'Pixel Artist & Animator',
            'description' => 'Bastián has a four-year university degree with major in Computer Engineering, Information Technology and Software Engineering. He has developed websites and developed applications, but his two greatest passions are video games and movies because he believes that through them he is able to express emotions, convey message, and to tell stories in a unique way. He started doing pixel art when he worked on his thesis which is a 2D video game and he was able to deepen his skills in designing pixel art. He continued to learn more and get into illustration and later became his hobby. Some of his works are uploaded on Deviantart until he has contacted by Lamina Studios to work on Dungeon Souls v1.0.5 which gave him the opportunity to showcase his skills. His contributions to Dungeon Souls includes different arenas such as the following: Halloween, Christmas, Power Core, Razer Chroma, and Rockstone Mountain, new items and new enemies. Currently, he is doing his best to improve his skills and aim to develop his own video games in the future. He would like to share to the world the stories and the world that he imagined for his future video game.',
            'image_name' => 'https://www.laminastudios.com/assets/images/bastian_600x571.png'
        ]);

        DB::table('creatives')->insert([
            'name' => 'Piotr Wronarow Icz',
            'title' => 'Pixel Artist & Animator',
            'description' => 'Piotr is a video game and pixel art enthusiast since the 80\'s, and his first experience was Commodore 64. He received an education in aesthetics and philosophy of art, but became a working musician as a fretless bass and chapman stick player (recenly including instrumental prog metal band Zero Machine. After deciding to became a pixel artist in his late 30\'s he read all the books, studied all the tutorials, attended all the online courses and watched all the videos he could possibly find, while simultaneously practicing daily.',
            'image_name' => 'https://www.laminastudios.com/assets/images/gawrone_600x571.png'
        ]);

    }
}
