const companyMembers = [
  {
    id: "AdamPellegrine",
    name: "Adam Pellegrine",
    bio: `
      <p>Adam is very excited to be performing with this amazing group of dancers in Jerboa.  He hails from the University of Alabama where he trained in theater and dance.  Adam has performed across the nation and around the world, most recently coming off the national tour of Urban Cowboy the Musical.  He has also performed throughout the city, including the world premier of Nutcracker: Rated R at the Theater for the New City, as well as the role of Jack in The Naked Dead Elephant… at the Cherry Lane Theater.  Some of  his favorite roles include Bernardo in West Side Story, Anthony Martini in One Flew Over the Cuckoo’s Nest, and Rosencrantz in Shakespearear’s Hamlet.  He would like to extend a special thank you to family and friends for all of their love, guidance, and support and for being there with him every step of the way.</p>
      `
  },
  {
    id: "AlexandraSipe",
    name: "Alexandra Sipe",
    bio: `
      <p>Alexandra Sipe found movement at University of Idaho, where she quickly got wrapped up in ballet, contemporary dance, and yoga. She spent her college career touring with Dancers, Drummers, Dreamers and traveling to train at American Dance Festival. Sipe is currently a freelance dance artist and has performed for Bridge Project, Converge, and Seattle International Dance Festival as well as in shows in New York City, Portland, and Washington DC.</p>
      <p>Alexandra teaches bungee fitness and yoga. While not dancing or upside down, Sipe enjoys writing spy novels and hanging out with her cat, Dude.</p>
    `
  },
  {
    id: "AlexUng",
    name: "Alex Ung",
    active:true,
    bio: `
      <p>In his second year with JERBOA Dance, Alex Ung is giddy to be in his first burlesque show. A hip hop dancer turned contemporary/modern, Alex started his career in college as a hip hop teacher/choreographer. Now his styles vary from crew-style hip hop to contemporary jazz to Broadway and Musical Theatre, and even contemporary ballet. He’s taught at Pacific Northwest Ballet School, Seattle Children’s Theatre, Bainbridge Ballet, Northwest School of Dance, and Momentum Dance. He’s made award-winning choreography for Bainbridge Ballet Competition Dance Team and also choreographed for Olympic Performance Group. On stage, Alex has performed with Peaches Christ Productions, Seattle Musical Theatre, Bainbridge Performing Arts, Olympic Ballet Theatre, Olympic Performance Group, Seattle PRIDE Mainstage, and Pacific MusicWorks, among other dance and theater companies. He spends his free time rock climbing, biking, and backpacking (as mountains and ocean are not native to this Iowan), while also finding time to teach and substitute at PNB School and Seattle Children’s Theatre, and creating with his amazing JERBOA Dance comrades.</p>
    `
  },
  {
    id: "AndreasFetz",
    name: "Andreas Fetz"
  },
  {
    id:"AndresLopez",
    name: "Andrés Lopez",
    bio: `
      <p>Andrés Lopez was born and raised in Medellin, Colombia. He graduated from the University of Antioquia, where eventually he became a teacher.</p>
      <p>He has spent a summer in Cuba studying Video Dance with Silvina Szperling, and a year in Brazil taking studied in fashion photography. He’s been part of dance collectives in Medellin allowing him to travel with contemporary dance companies. Andrés is very excited to be making his Seattle dance debut.</p>
    `
  },
  {
    id:"AngelaHarriell",
    name:"Angela Harriell",
    bio: `
      <p>Choreographer Angela Harriell is the founder of The Love Show, and she has presented her work in venues such as Galapagos Art Space, The Flea Theater, CBGB and HERE, as well as festivals like White Wave, Howl!, The New York Burlesque Festival and the Philly Fringe Fest. She has also set and directed two off off Broadway productions, the most recent, Nutcracker: Rated R, which has sold out month-long runs for 3 seasons. A piece from the show was selected to be presented at the National Arts Club, where Angela performed as part of a special gala with such luminaries as Elaine Stritch, Tammy Grimes, Charles Busch and Julie Halston. She will be remounting Nutcracker: Rated R again in 2009. Currently Angela is working as a performer, choreographer, and teacher.</p>
    `
  },
  {
    id:"BridgetGunning",
    name:"Bridget Gunning",
    bio: `
      <p>Bridget Gunning is an artist, mover, improviser, aerialist and and practitioner based out of Seattle, WA. Bridget brings over 15 years of professional experience as a solo and group performer . Her interest lies in the intersection of circus arts, dance, theater and somatic movement techniques. Hailing from Tucson, AZ, Bridget spent her youth in the pool as a competitive swimmer. She held the Arizona State Record for the 25-yard backstroke when she was 8-years-old. Outside of the pool, she always sang songs and danced dances to entertain family and friends. She decided to get out of the pool and onto the stage where she could use her body to express and create art. She began her formal ballet training at the age of 16. She made up for lost time in the dance world with classical training at The Academy of Ballet in Tucson, AZ. She danced in many ballets and theater productions and was active in her artistic and academic communities as a performer and choreographer. This creative and physical practice translated well into the circus arts. She began her aerial studies in 2001 under the instruction of Nanette Robinson and Nathan Dryden of ZUZI! Dance Company. Here she began her love with aerial through the low flying trapeze and Skinner Releasing Technique. Bridget came to Seattle in 2006 to seek more Skinner Releasing training as well as to connect with other artists and make a career as a performer. She worked as a free lance dancer with choreographers across the Northwest including Manifold Motion, Dancing People Company, Acorn Dance, Lingo Dance Company, Dayna Hanson and The Asterisk Project to name a few. She is showcased weekly at The Pink Door, where she is the resident Trapeze Artist. Her work includes Seattle’s Original Girl Gang: The Aerialistas, Lo-Fi Arts Festival, Seattle Erotic Arts Festival, Emerald City Trapeze Arts, ticktock dance, On The Boards’ 12-Minutes Max, COCA, Aloft Aerial Arts, Animate Objects Physical Theater, Stimulate Dance and Madame Rex Entertainment. Bridget is a Certified Yoga Teacher and Personal Trainer. She holds a BA from the University of Arizona where she studied dance, sociology and psychology. Bridget is in her second year of teacher training in Open Source Forms with Stephanie Skura. Bridget runs her own studio and performance company Apex Aerial Arts in Seattle. She is really, really, super excited to premier as a performer with Jerboa Dance!</p>
    `
  },
  {
    id:"ChelseaReinschmidt",
    name: "Chelsea Reinschmidt",
    bio: `
      <p>Chelsea took their first ballet class at the age of 3 but didn’t like the pink shoes or the standing still thing. However, their love of movement started young and they spent the bulk of their youth competing in the Texas junior olympic women’s  gymnastics program. In their 20s, they discovered AcroYoga and partner acrobatics and briefly toured with a local circus troupe in Chicago. In 2012, they began modern dance as well as tap, jazz, ballet and hip hop at eXit Space school of dance where they currently dance. They are excited to perform with Jerboa where they get a chance to combine their love of both dance and acrobatics.</p>
    `
  },
  {
    id:"ChristinaJohnson",
    name:"Christina Johnson",
    bio: `
      <p>Christina Johnson fell in love with dance back in the 1990s.  She was dancing in Portland, OR with BodyVox, Bent, and Kinetic Images dance companies and entertaining the idea of being a “dancer”.  She moved to Seattle where she co-founded Jerboa Dance, and has dedicated her professional life to the arts ever since.  Her time in Seattle was spent learning and performing with many prominent companies and choreographers, including: Cheronne Wong, BetterBiscuit, XODO, Alethea Adsitt, Fusion, and Seattle Jazz. After finding success in Seattle and to continue her growth as an artist, she moved across the country. Having joined the New York dance scene in 2005, Christina is proud to have been on stage with The Love Show, Shir Dance Theater, Eva Dean Dance, Anahid Sofian Dance Company, Gilgamesh Theater, Witches in Bikinis, & independentdancemaker/Kara Tatelbaum.</p>
    `
  },
  {
    id:"ConstanzeVillines",
    name:"Constanze Villines",
    bio: `
      <p>Constanze Villines trained at SVN, Tanzprojekt, as well as the Munich Opera dance academy (Bosl Stiftung) until age eleven. She then expanded her dance training to tap, jazz, and contemporary/modern in Los Angeles, Texas, and Seattle. Constnaze has also trained in gymnastics, rhythmical gymnastics, and contact improvisation. She has danced for Brigitta Toma, Tanztheater Salome, Marlo Ariz, Sapience Dance Collective (Sara Sader & Amy Weaver), Cyrus Khambatta, Maya Soto, Alicia Mullikin, and 3 rd Shift Dance (Xaviera Vandermay), amongst others. She has had the pleasure of performing at The Munich Opera, Tanztheater Salome, Tollwood Festival, Dance Experiment Los Angeles, VE’s Standing in the Storm, Body Politics, Converge Dance Festival, The Seattle Intl. Dance Festival, and more.</p>
      
      <p>As a choreographer, Constanze’s work has been shown in Germany as part of the Tollwood Festival and throughout the country. Since moving to Seattle in 2009, she has worked and collaborated with different Seattle artists and since 2013 produces, together with Cyrus Khambatta, The Seattle International Dance Festival. She is the managing director of Khambatta Dance Company and since 2014 the artistic director of reflexion Dance Company. Constanze’s choreographic works have been shown throughout Seattle at Velocity Dance Center, Body Politics Festival Tacoma, The Seattle International Dance Festival, The Pocket Theater, Out on a Limb Dance Festival in Olympia, and more. Her work has been commissioned for the 2016 The Glossary at The Neptune Theater and the 2016 LitCrawl.</p>
    `
  },
  {
    id:"DavidLorenceSchleiffers",
    name:"David Lorence Schleiffers",
    bio: `
      <p>David stumbled upon a career in dance after being cast as a chorus boy in the musical 42nd Street in 2005. Since then, he has studied with 5th Avenue Theatre, Dance This…, Bill Evans, Hannah C. Wiley and Catherine Cabeen. He was recently a part of the Young Choreographers Lab with Amy O’Neil, a six-week workshop sponsored by the Seattle Theatre Group where he trained with    choreographers such as Anne Green Gilbert, Donald Bryd, and Mark Haim. Currently, he is  working towards a BA in Dance at the University of Washington.  His work, Watermark, Part 1, will be showcased at the American College Dance Festival, which will be held in Utah this March. Locally, he has danced with Redd Legg Dance Company and Chamber Dance Company.</p>
    `
  },
  {
    id:"ElizabethBurwell",
    name:"Elizabeth Burwell",
    bio: `
      <p>After graduating from Birmingham-Southern College with a degree in French and dance, Elizabeth moved to New York to pursue a career in dance. She’s danced with such notables as Saba Dance Theater, Kenny Larson and Beth Soll. She also appeared in Lois Greenfield’s Breaking Bounds calendar. Elizabeth and her husband, Clay, own High Performance NYC, a private personal training facility in New York. There, she works as a personal trainer fusing her dance training with various other techniques such as Pilates and Kettlebells to help her clients get fit. She feels very lucky to have two careers that she loves. Speaking of love, she recently got a Doberman puppy named Zulu.</p>
    `
  },
  {
    id:"EmmaCurtiss",
    name:"Emma Curtiss",
    bio: `
      <p>Emma Curtiss has been performing circus for many years now. She currently coaches at the School of Acrobatics and New Circus Arts in Seattle and is one of the founders of the IMPulse Circus Collective. Always seeking out ways to revolve, orbit and glide, her focus of late has been on her Roue Cyr (Cyr wheel). Her disciplines also include Aerials and Fan Juggling.</p>
    `
  },
  {
    id:"EricVlach",
    name:"Eric Vlach",
    bio: `
      <p>Eric Vlach, originally from Portland, Oregon, graduated from NYU’s Tisch School of the Arts in 2005 with a B.F.A. in dance. As a freelance dancer and digital designer, he manages to satisfy both his artistic and techno-geek appetites. This season, in addition to Jerboa Dance, Eric is working with Lydia Johnson Dance and Eglevsky Ballet.</p>
    `
  },
  {
    id:"FinnCronin",
    name:"Finn Cronin",
    bio: `
      <p>Ms. Cronin received her formal training at L’Academie de Danse Classique Princesse Grace in Monte Carlo, Blue Lake Fine Arts, and Ballet Iowa. In 1996 she attended Idyllwild Arts Academy in California, where she found her focus in modern dance. In 1998, she returned to Germany to travel and gather inspiration while working toward her degree in European studies. She has danced for Tanzforum Aki Kato, Complete in Motion, and was a guest artist for a season at the Mannheim Nationaltheater in Germany. Since moving to Seattle in 2005, she has danced with The Seattle Opera, Bumbershoot, and was chosen as one of Seattle’s up and coming choreographers for NEXT fest NW. Ms.Cronin has also choreographed for Social Living Productions and is one of the founding members of Splinter Dance Company.</p>
    `
  },
  {
    id:"Hanna-LeeSakakibara",
    name:"Hanna-Lee Sakakibara",
    bio: `
      <p>Hanna-Lee was born and raised in Jerusalem, Israel, to a Japanese father and Australian Mother. She began dancing at the age of 4. Graduating from high school she decided to pursue her dance career and moved to NY to study at the Alvin Ailey Dance School. She is currently represented by MSA dancers and choreographers agency, and recently received her artist visa to continue and dance in the U.S.</p>
    `
  },
  {
    id:"JacquelynCorcoran",
    name:"Jacquelyn S. Corcoran",
    bio: `
      <p>Jacquelyn S. Corcoran Is Co-founder of Underscore Dance Lab, an experimental dance performance company she created with her partner Shakira Rae Adams, currently based out of Seattle WA. She most recently relocated from Ohio where for the past few years she has performed as a solo artist in many showcases and with multiple choreographers in the Ohio/Kentucky area. She has taught contemporary and modern dance at Contemporary Dance Theater for the past eight years as well as performed in and co produced their showcase series Performance and Time Arts. She was also a multi scholarship recipient at both American Dance Festival and Bates Dance Festival. Jacquelyn was a founding member of MamLuft&Co. Dance in Cincinnati Ohio from 2007-2011, the city’s premier modern dance company. She holds a Bachelor of Arts in Dance from Texas Woman’s University and has had the honor of studying with prolific artists, such as Jesse Zarrit, Kathleen Hermesdorf, David Dorfman, and Larry Keigwin to name a few, in her lifetime. She is forever humbled by her experiences and the many great artists she can say helped inform her dancing body thus far.</p>

      <p>“To understand what I am saying, you have to believe that dance is something other than technique. We forget where the movements come from. They are born from life.” ― Pina Bausch</p>
    `
  },
  {
    id:"JaimeWaliczek",
    name:"Jaime Waliczek",
    bio: `
      <p>Jaime Waliczek took dance classes growing up in Chicago at Gus Giordano and Studio Two while doing high level competitive gymnastics.  She continued her training at the University of Illinois, Urbana-Champaign. After moving to Seattle, Jaime performed with the Eastside Moving Company from 2000-2002, working with people like Deborah Wolf and Wade Madsen, and whet her choreography appetite by created her first modern work. After that, Jaime started teaching yoga and performing full time when she danced with Fusion Dance, Better Biscuit, XODO, Unexpected, R Dance, and Seattle Jazz along with DASS Dance and the Seattle Opera, as dance captain. She then worked with some choreographers at the University of Washington while she completed her Master’s degree in nutrition and with Angela Harriell for Nutcracker Rated R and other of her works while living in NYC for the 2007 season. In addition to her work with Jerboa Dance, Jaime’s choreography has been shown in the DUMBO festival, the Cool NY festival, DNA Works in Progress, and guest performances for events and shows including Around the World in 80 Sips and Trip and Fall. Her extensive background in gymnastics and yoga inform her movement and choreography. Jaime loves performing but has an intense itch to create works as well and is excited to be back from her hiatus starting a family to get back on stage.</p>
    `
  },
  {
    id:"JenniferElder",
    name:"Jennifer Elder",
    bio: `
      <p>Jennifer Elder discovered her love of dance at the age of 12 after gymnastics, baton twirling, tennis, horseback riding, track and field and swimming didn’t quite work out. A native of the Pacific Northwest, Jen received her dance training at the Southwest Washington Dance Center in Ballet and Modern where she was a member of the Southwest Washington Ballet Ensemble and Blacken Tan Dance. She later went on to earn her BFA in Modern Dance graduating Cum Laude from the University of Utah. While attending the U of U, she danced for the department’s Performing Dance Company, performing original works by Abby Fiat, Eric Handman, and Brent Schneider. Since moving to Seattle in 2008, Jen has made her own work, which has appeared in the BOOST Dance Festival, Northwest Dance Festival, and TAKE pause. Jen has had the honor to dance for local Seattle artists and companies such as Marlo Martin, Michele Miller/Catapult, Khambatta Dance Company, DASSdance, Whibey Island Dance Theater, Jerboa Dance Company, Redd Legg Dance, and Northwest Dance Syndrome. Currently, Jen is proud to be a continuing member of Badmarmar Dance under the direction of Marlo Martin.</p>
    `
  },
  {
    id:"JesusChapa-Malacara",
    name:"Jesus Chapa-Malacara",
    bio: `
      <p>Jesus was born in Monterrey, Mexico, grew up in Kansas City, MO and now lives in a queer feminists’ commune (with cats) in Brooklyn.  He started dancing 5 years ago while a junior in college and has since trained and performed all over the US and in Pakistan and Spain.  Other credits include The Love Show (NYC), Hamza (Islamabad), Dakshina/Daniel Singh (DC).  He has also played the rat king in the Nutcracker: Rated very much G, maybe slightly PG.  Training: Ailey, New Haven Ballet, ADF, Peridance.  Other pursuits include photography, food, writing and political rabble rousing.  He holds a BA in Political Science from Yale.</p>
    `
  },
  {
    id:"JulieSmith",
    name:"Julie Smith",
    bio: `
      <p>Julie is so excited to be performing with Jerboa Dance! She holds a BFA in acting and trained at the Martha Graham School of dance. Julie danced with her Graham teacher’s modern company, Coyote Dancers, for two NYC seasons and soon landed her first Off Broadway show. She went on to perform in many regional theatres, for Disney, and went on the road with national tours of Gigi and CanCan. Her favorite roles include; “Val”, in the European tour of A Chorus Line, and most recently, the 1st cover for the leading lady, “Stephanie”, in the Broadway tour of Saturday Night Fever. Julie now is also pursuing acting in Film and TV! She has a small recurring part on One Life to Live, and played her first supporting role in an indie feature film last year.</p>
    `
  },
  {
    id:"KarenGrady",
    name:"Karen Grady",
    bio: `
      <p>Karen Grady is a lover of life, a dancer, a performer, a choreographer, a fitness instructor, a dance educator, and a mother. She teaches contemporary dance technique, ballet, modern, yoga, creative movement, GYROTONIC® and choreography to students of all ages. Originally from Colorado, Karen moved to Seattle in 2002 to expand her experiences as a performing artist and to study at Cornish College of the Arts. Karen graduated from Cornish in 2006 with a B.F.A. in dance and received an outstanding artist award at graduation. Karen started dancing with Jerboa Dance in 2002, she enjoys the work of Jamie Waliczek because of its dynamic variety and creativity! She now spends most of her days at her Gyrotonic studio in Bellevue Washington.</p>
    `
  },
  {
    id:"KatieSawicki",
    name:"Katie Sawicki",
    bio: `
      <p>Katie studied ballet and modern dance at NC School of the Arts, American Dance Festival, Princeton Ballet School, and the Hungarian National Ballet Academy. After performing with Princeton Ballet II and American Repertory Ballet Katie retired from performing and taught ballet, jazz, tap and gymnastics for several years before moving to Seattle.  She has performed in Seattle with Arc Dance Productions, XODO, Eastside Moving Company, and others.</p>
    `
  },
  {
    id:"MeganCourtney",
    name:"Megan Courtney"
  },
  {
    id:"MeghanShepard",
    name:"Meghan Shepard",
    bio: `
      <p>Even though Meghan Shepard took her first dance class at age 3, she really began her career at 16.  Spending 3 years in LA, she expanded her training and experience by working with multiple choreographers. Returning to Portland, Meghan performed locally and went on her first tour with  Extreme Dance Co. Meghan then moved to Seattle to further pursue dance. In 2007, she graduated Magna Cum Laude from Cornish College of the Arts where she performed with many prominent choreographers. Meghan continues to dance in Seattle, and has been dancing with Jerboa Dance since 2008. She is thrilled to be dancing again in the company’s new season.</p>
    `
  },
  {
    id:"MorganHoughton",
    name:"Morgan Houghton",
    bio: `
      <p>Born in Seattle WA Morgan began dancing during High School. First taking Jazz at a local studio he began thoroughly enjoying himself. Martial arts, sports and stunt work with friends propelled him to continue dancing in college where he eventually came to realize that he truly had a passion for dance. As one who has always loved movement in so many various forms, Morgan continues to dance and pounce on any opportunities to do more stunt work, photo shoots and anything that inspires movement, drives the soul and allows Morgan to play. He would like to thank his parents for their unending support throughout his life and their encouragement with whatever drove him at the time. He would also like to thank all the dance instructors over the years that continued to inspire and challenge him. Without these people and many more Morgan would not be where he is today.</p>
    `
  },
  {
    id:"NoaSagie",
    name:"Noa Sagie",
    bio: `
      <p>Noa Sagie was born and raised in Kfar Bialik, Israel. She graduated from the “Reut” school of the arts and trained with the “Haia Tzur School For Contemporary Dance” until the age of 18. After completion of her studies she was recruited to the IDF, Israeli Defense Force, where she proudly served for over two years in the Intelligence Force. At the age of 21, she moved to NYC after being accepted to the Alvin Ailey Dance School. While still in school, she received the LCU Foundation scholarship. After finishing her studies with honors and receiving her work permit, she currently resides in New York choreographing and dancing in different projects. Her recent works were presented at the Citigroup Theater at the Joan Weill Center for Dance in 2006 and 2007.</p>
    `
  },
  {
    id:"PamelaTurpen",
    name:"Pamela Turpen"
  },
  {
    id:"PamVlach",
    name:"Pam Vlach",
    bio: `
      <p>Pam Vlach moved to Seattle in 2002 to attend the UW and received her BA in Communication in 2006.  She has spent time in New York studying lyrical and jazz under the direction of Suzi Taylor and Joe Lanteri at Steps on Broadway. Additionally, she studied tap under the direction of Roxane Butterfly in the summer of 2005 and performed choreography by Sonia Dawkins and Savion Glover in Dance this…! at the Seattle Paramount Theatre. Recent credits include Excerpts From the Soul of a Woman (2008), Black Nativity at Seattle’s Intiman Theatre (2007), Macy’s Thanksgiving Day Parade (2007), Masters of Lindy Hop and Tap at the Century Ballroom (2007), Young Scrooge in A Tap Dance Christmas Carol (2005), and En L’Air (2005, 2006, 2008). Pam was a founding member of the Solesound Tap Company.  Recent choreography credits include a music video for Nordstrom showcasing their spring line in March of 2007.</p>
    `
  },
  {
    id:"PhenixLaughlin",
    name:"Phenix Laughlin",
    bio: `
      <p>Phenix Laughlin has lived and danced in Seattle for 3 years. He was raised in Colorado, and found his love of dance with the guidance of Kari Herman, Chris Harris, and Lisa Wood. As a student at Cornish College of the Arts, Phenix danced in works choreographed by Wade Madsen, Gerard Theoret, and Bruce Mccormick. He has also danced with Interweave Dance Company in Boulder, CO., as well as The Guild Dance Company in Seattle. Outside of dance, Phenix finds happiness in creating visual art and making sweet treats in the kitchen. He also finds love and gratitude in his family and close friends in Colorado.</p>
    `
  },
  {
    id:"RachelKoshiol",
    name:"Rachel Koshiol",
    bio: `
      <p>Rachel Koshiol started dance classes at the age of 4 and has been moving ever since. While growing up in Minnesota, Rachel danced competitively at Hopkins Dance Center while spending her summers training at MDT and Ballet Arts. During the summer of 2004, Rachel attended American Ballet Theatre’s summer intensive program in Detroit, MI. During college, she paused her dance career to focus on studies but felt called to return immediately after graduation. For two seasons, she competed at an adult level, and during the winter of 2014, she preformed with the Minnesota Dance Collaborative for their opening season of “HoliDaydream”. Since moving to Seattle, Rachel has worked with choreographers including Alicia Mullikin, Marlo Ariz, Maya Soto and Maxie Jamal. She continues to preform in a diverse mix productions, most recently for USC Event’s “Paradiso Festival”. Rachel craves unique styles that blur lines of standard genres and push her physical and mental boundaries. She is excited to continue her exploration with Jerboa Dance.</p>
    `
  },
  {
    id:"RenadoTozer",
    name:"Renado Tozer",
    bio: `
      <p>Renado Tozer is thrilled for his fourth season with Jerboa Dance Company. He has been involved with dance and movement theatre for over 15 years. Although never a competitive dancer, he was a national competitive gymnast for near 12 years (coach for 5 years), and has been trained in ballet, jazz, modern and lyrical at Pam’s School of Dance in Toledo, Ia., at the University of the Arts summer camp in Philadelphia, Pa., The Edge in LA, and Webster Conservatory/University in St. Louis, Mo.(where he attended college for musical theatre). Professionally, he has been involved in a very diverse variety of productions including; BumperShoot with Movement Theatre in Seattle, Wa., Miss Continental in Chicago, Ill., Webster University Dance BFA, and after a short hiatus due to injuries, he bounced back in to joining Diversity Dance Company, turned Splinter Dance Company. Currently he is working with Issaquah Dance Theatre as a hip hop teacher, New Vision Dance Company out of Issaquah and One Degree/Flash Mob out of Seattle.</p>
    `
  },
  {
    id:"SarahChampion",
    name:"Sarah Champion",
    bio: `
      <p>Sarah Champion has been a performer her entire life. She is classically trained in ballet, jazz, modern, hip hop, lyrical and is an internationally award winning ballroom and latin performer. Sarah is the co-founder and former artistic director of After Midnight Cabaret and has performed with various local dance and performance based companies for many years. Sarah is excited to be on stage again with Jerboa Dance.</p>
    `
  },
  {
    id:"SeanCalavan",
    name:"Sean Calavan",
    bio: `
      <p>Sean Calavan started taking dance class on a whim when he was 8 years old, and has loved it ever since. In 1999, he received the Dance With the Force award from the LADF convention/competition, and spent the summer training at EDGE performing Arts Center in Hollywood, CA. Since then, Sean has performed onboard 7 different ships for Holland America in addition to working as an assistant choreographer for the company that hires the entertainment, Stiletto Entertainment in Los Angeles. In LA, he has worked with many choreographers including Patti Columbo, John Charron, Tommy Tune, Carla Kama, Adam Parson, Mandy Moore, and Terri Best. Sean is very excited to be making his Seattle dance debut with Jerboa Dance, and is looking forward to a new adventure in the Pacific Northwest.</p>
    `
  },
  {
    id:"ShakiraRaeAdams",
    name:"Shakira Rae Adams",
    bio: `
      <p>Shakira Rae Adams is the Co-Founder of Underscore Dance Lab in partnership with Jacquelyn Corcoran. Shakira’s training resides from Ghana, West Africa where she studied with Bernard Woma. Her dance journey began at Bowling Green State University studying under Dr. Halifu Osumare, Tammy Starr and Deborah Tell, while pursuing her Bachelor in Music Education specializing in classical trumpet performance. Shakira loved to move and found such passion in allowing her soul to speak to the world when her words could not. “Dance kept me sane through my education. Dance gave me breathe and brought me to life when the end was far from sight.” Shakira couldn’t learn enough about movement, so she pursued a Master’s of Education in Sports Medicine with an emphasis on kinesiology. As she pursued a MD she found herself with less time to do what she really wanted to do. Directions shifted and she earned her Bachelor of Science in Nursing at the University of Cincinnati’s accelerated nursing program. A year ago she uprooted and moved to Seattle to continue to dive into the arts with her lovely partner. Together they began Underscore Dance Lab to have an outlet to create, explore and share their views on dance. Shakira wears many hats in life to keep her mind active and ever expanding. “I am not bored, ever! Arts have given me a way to express my inner most thoughts and feelings, an outlet to deal with the stress and a way to tell a story. No matter where times go, the arts live within me and I will continue to make a difference.”</p>
    `
  },
  {
    id:"ShannonAdams",
    name:"Shannon Adams",
    bio: `
      <p>Shannon comes from Salt Lake City, Utah.  She is a lover of all forms of dance and has been trained in Korean folk dance, jazz, ballet, tap, and modern.  She has also studied at the EDGE Dance studio, Performing Dance Center, Broadway Dance Center, Steps on Broadway, Dancespace/Dance New Amsterdam, Joffrey Ballet School, Parson’s Dance Company Summer Program, and American Dance Festival.  Training at The School at Jacob’s Pillow Jazz Program brought the opportunity to work with such legends as Chet Walker, Patti Wilcox, Luigi, and Matt Mattox.  Mrs. Adams graduated Cum Laude in 2004 from the University of Utah with a BFA in Modern Dance. She was the recipient of two Elizabeth R. Hayes scholarships, as well as the Kennecott Scholars scholarship.  At the University of Utah, she had the fortunate opportunity to study with Abby Fiat, Donna White, Steve Koester, Brent Schneider, Tandy Beal, Jon Scoville, Kaye Richards, Pamela Geber, and Eric Handman.  Shannon was also a guest performer with Utah Ballet, and she performed in Performing Dance Company working with such choreographers as Ronald K. Brown, Doug Elkins, and David Dorfman.</p>

      <p>Shannon has a great love and passion for teaching. She has taught and choreographed for various studios and high-schools in Utah, Texas and in the Seattle area.  Outside of Shannon’s voracious appetite for all things dance, she is seen chasing her three kids, spending time with family, eating good food, people watching, and going to live music concerts.</p>
    `
  },
  {
    id:"StellaKutz",
    name:"Stella Kutz",
    active:true,
    bio: `
      <p>Stella was born and raised in South Seattle and studied at Spectrum Dance Theater  under Dale A. Merrill.  Stella received her Bachelor of Fine Arts in Performance Choreography from the University of Nevada, Las Vegas.  She has performed internationally at the Edinburgh and Montreal Fringe Festivals.</p>

      <p>Upon graduation, Stella furthered her training with a Pilates Certification.  She has since completed a teacher training study program in yoga under Richard Freeman in Boulder, Colorado.  </p>

      <p>Stella has performed with notable artists, such as:  Relay Dance Collective, Pat Graney, Gail Gilbert,  Kristina Dillard, Paula Peters, Rhonda Cinotto, Dance Contemporary, Jerboa Dance, and many more.</p>

      <p>Currently, Stella is pursuing her passion for performance by creating an interactive performance and rehearsal space for like minded artists and communities.</p>
    `
  },
  {
    id:"ThomasPhelan",
    name:"Thomas Phelan",
    bio: `
      <p>Thomas Phelan grew up in Fort Collins, CO. It was there at Colorado State University he earned his BFA in performing arts. After graduation Thomas danced and taught at Alaska Dance Theatre before moving to Seattle where he currently lives and works. His Seattle performance credits include Whim W’him, Coriolis Dance, House of Verlaine, The Cabiri, Alana O Rogers, The Robbie Turner Revue, Khambatta Dance Company, and The Can Can. Thomas has a passion for teaching and shares experience and creates within realms of ballet, contemporary dance, gymnastics, diving, acrobatics, aerial arts, burlesque, and prides himself on being able to survive entry level hip hop classes.</p>
    `
  },
  {
    id:"WarrenWoo",
    name:"Warren Woo",
    active:true,
    bio: `
      <p>Warren Woo is a photographer, videographer, yoga instructor, trainer, choreographer, and dancer in the Seattle area. He graduated as a dance major at the University of Washington and actively participated as a dance student association officer, performer, and choreographer, along, with conducting honors research on dance partnering. Born in Hawaii and having to relocate often, he was homeschooled and studied music in his youth. His development as a physical mover began with Ultimate Frisbee, yoga, running and weight training in his late teens. He found his passion for dance in social partner dance and gradually found his way to ballet, contemporary and circus training over the years. Frequently collaborating with those in the area he has had the opportunity to present work at Converge Dance Festival, and perform at the UW, Full Tilt, Strictly Seattle, Men in Dance, Battle for the Dance Belt, and companies including the Cabiri, Karin Stevens Dance, Relay Dance Collective, Northwest Ballet Theater, and more.</p>
    `
  }
];

export default companyMembers;