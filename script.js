const allQuizData = [
    {
        category: "Geography",
        difficulty: "Easy",
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris",
        explanation: "Paris is known as the 'City of Love' and is a major European city and a global center for art, fashion, gastronomy and culture."
    },
    {
        category: "Geography",
        difficulty: "Easy",
        question: "Which country is famous for the Pyramids of Giza?",
        options: ["Greece", "Egypt", "Italy", "China"],
        answer: "Egypt",
        explanation: "The Great Pyramid of Giza is the oldest and largest of the three pyramids in the Giza pyramid complex, bordering what is now El Giza, Egypt."
    },
    {
        category: "Geography",
        difficulty: "Medium",
        question: "Which country is famous for the Great Barrier Reef?",
        options: ["Brazil", "Australia", "Mexico", "Thailand"],
        answer: "Australia",
        explanation: "The Great Barrier Reef is the world's largest coral reef system, composed of over 3,000 individual reefs and 900 islands stretching for over 2,300 kilometres."
    },
    {
        category: "Geography",
        difficulty: "Medium",
        question: "What is the longest river in South America?",
        options: ["Nile", "Mississippi", "Amazon", "Yangtze"],
        answer: "Amazon",
        explanation: "The Amazon River is the largest river by discharge volume of water in the world, and the second longest in length."
    },
    {
        category: "Geography",
        difficulty: "Hard",
        question: "Which city is known as the 'Eternal City'?",
        options: ["Athens", "Rome", "Jerusalem", "Istanbul"],
        answer: "Rome",
        explanation: "Rome has been known as the 'Eternal City' (Latin: Urbs Aeterna; Italian: La Città Eterna) by ancient Romans and poets for over two thousand years."
    },

    {
        category: "Science",
        difficulty: "Easy",
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars",
        explanation: "Mars gets its reddish hue from iron oxide (rust) on its surface."
    },
    {
        category: "Science",
        difficulty: "Easy",
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "NACL"],
        answer: "H2O",
        explanation: "Water is essential for all known forms of life."
    },
    {
        category: "Science",
        difficulty: "Medium",
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Quartz"],
        answer: "Diamond",
        explanation: "Diamond is an allotrope of carbon, where the carbon atoms are arranged in a variation of the face-centered cubic crystal structure called a diamond cubic."
    },
    {
        category: "Science",
        difficulty: "Hard",
        question: "What is the primary gas found in the Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
        answer: "Nitrogen",
        explanation: "Nitrogen makes up approximately 78% of the Earth's atmosphere by volume."
    },
    {
        category: "Science",
        difficulty: "Hard",
        question: "What is the study of fungi called?",
        options: ["Botany", "Zoology", "Mycology", "Geology"],
        answer: "Mycology",
        explanation: "Mycology is the branch of biology concerned with the study of fungi, including their genetic and biochemical properties, their taxonomy and their uses to humans as well as their dangers."
    },

    {
        category: "Art",
        difficulty: "Medium",
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: "Leonardo da Vinci",
        explanation: "Leonardo da Vinci was a true Renaissance polymath, excelling as a painter, sculptor, architect, musician, scientist, inventor, anatomist, geologist, cartographer, botanist, and writer."
    },
    {
        category: "Art",
        difficulty: "Medium",
        question: "Which art form uses clay to create sculptures and pottery?",
        options: ["Painting", "Drawing", "Ceramics", "Photography"],
        answer: "Ceramics",
        explanation: "Ceramics is the art and technology of making objects from clay and other raw materials, which are then hardened by heat."
    },
    {
        category: "Art",
        difficulty: "Hard",
        question: "Which art movement is Salvador Dalí associated with?",
        options: ["Impressionism", "Cubism", "Surrealism", "Abstract Expressionism"],
        answer: "Surrealism",
        explanation: "Salvador Dalí was a prominent Spanish surrealist artist known for his technical skill, precise draftsmanship, and striking and bizarre images."
    },
    {
        category: "Art",
        difficulty: "Hard",
        question: "What material is typically used in classical sculptures like Michelangelo's David?",
        options: ["Bronze", "Wood", "Marble", "Clay"],
        answer: "Marble",
        explanation: "Marble has been a favored material for sculpture since ancient times due to its relative softness, homogeneity, and relative isotropism, which makes it easy to carve."
    },
    {
        category: "Art",
        difficulty: "Easy",
        question: "What are the three primary colors in painting?",
        options: ["Red, Green, Blue", "Red, Yellow, Blue", "Orange, Green, Purple", "Black, White, Gray"],
        answer: "Red, Yellow, Blue",
        explanation: "Primary colors are those that cannot be created by mixing other colors. Red, yellow, and blue are the traditional primary colors in subtractive color theory, used in painting."
    },
    {
        category: "Art",
        difficulty: "Easy",
        question: "Which famous artist is known for painting 'Starry Night'?",
        options: ["Pablo Picasso", "Vincent van Gogh", "Claude Monet", "Leonardo da Vinci"],
        answer: "Vincent van Gogh",
        explanation: "Vincent van Gogh was a Dutch Post-Impressionist painter who is among the most famous and influential figures in the history of Western art."
    },
    {
        category: "Art",
        difficulty: "Easy",
        question: "What is origami?",
        options: ["Japanese painting", "Paper folding art", "Korean calligraphy", "Chinese pottery"],
        answer: "Paper folding art",
        explanation: "Origami is the art of paper folding, which is often associated with Japanese culture."
    },
    {
        category: "Art",
        difficulty: "Medium",
        question: "Which Renaissance artist is famous for the Sistine Chapel ceiling?",
        options: ["Donatello", "Raphael", "Michelangelo", "Botticelli"],
        answer: "Michelangelo",
        explanation: "Michelangelo's frescoes on the Sistine Chapel ceiling are among the most famous artworks of the High Renaissance."
    },
    {
        category: "Art",
        difficulty: "Hard",
        question: "Who is considered the pioneer of Cubism?",
        options: ["Claude Monet", "Vincent van Gogh", "Pablo Picasso", "Henri Matisse"],
        answer: "Pablo Picasso",
        explanation: "Pablo Picasso, along with Georges Braque, is widely considered the pioneer of the Cubism art movement."
    },

    {
        category: "General",
        difficulty: "Easy",
        question: "How many continents are there in the world?",
        options: ["5", "6", "7", "8"],
        answer: "7",
        explanation: "The seven continents are Asia, Africa, North America, South America, Antarctica, Europe, and Australia."
    },
    {
        category: "General",
        difficulty: "Easy",
        question: "What is the largest animal on Earth?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        answer: "Blue Whale",
        explanation: "The blue whale is the largest animal known to have ever existed, reaching lengths of up to 30 meters (98 feet) and weighing over 190 metric tons."
    },
    {
        category: "General",
        difficulty: "Easy",
        question: "Which bird lays the largest eggs?",
        options: ["Chicken", "Ostrich", "Eagle", "Penguin"],
        answer: "Ostrich",
        explanation: "The ostrich lays the largest eggs of any living land animal."
    },
    {
        category: "General",
        difficulty: "Medium",
        question: "What is the capital of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
        answer: "Tokyo",
        explanation: "Tokyo is the world's most populous metropolitan area and the largest urban economy."
    },
    {
        category: "General",
        difficulty: "Medium",
        question: "How many bones are in the adult human body?",
        options: ["206", "210", "198", "212"],
        answer: "206",
        explanation: "An adult human skeleton has 206 bones, compared to over 300 bones in infants (some of which fuse together as growth occurs)."
    },
    {
        category: "General",
        difficulty: "Medium",
        question: "What is the process by which plants make their own food?",
        options: ["Respiration", "Digestion", "Photosynthesis", "Germination"],
        answer: "Photosynthesis",
        explanation: "Photosynthesis is the process used by plants, algae, and cyanobacteria to convert light energy into chemical energy."
    },
    {
        category: "General",
        difficulty: "Hard",
        question: "What is the longest continuously inhabited city in the world?",
        options: ["Athens", "Byblos", "Damascus", "Jericho"],
        answer: "Damascus",
        explanation: "Damascus, the capital of Syria, is widely considered to be the oldest continuously inhabited city in the world, with evidence of habitation dating back over 11,000 years."
    },
    {
        category: "General",
        difficulty: "Hard",
        question: "Which of the following is NOT a primary color of light?",
        options: ["Red", "Green", "Blue", "Yellow"],
        answer: "Yellow",
        explanation: "The primary colors of light (additive primaries) are Red, Green, and Blue. Mixing them in different proportions can create all other colors of light. Yellow is a secondary color of light."
    },
    {
        category: "General",
        difficulty: "Hard",
        question: "What is the name of the galaxy our solar system is in?",
        options: ["Andromeda", "Triangulum", "Centaurus A", "Milky Way"],
        answer: "Milky Way",
        explanation: "The Milky Way is the galaxy that contains our Solar System, with the name describing the galaxy's appearance from Earth: a hazy band of light seen in the night sky formed from stars that cannot be individually distinguished by the naked eye."
    },

    {
        category: "History",
        difficulty: "Easy",
        question: "Who was the first president of the United States?",
        options: ["Abraham Lincoln", "Thomas Jefferson", "George Washington", "John Adams"],
        answer: "George Washington",
        explanation: "George Washington served as the first President of the United States from 1789 to 1797."
    },
    {
        category: "History",
        difficulty: "Easy",
        question: "What ancient civilization built the pyramids?",
        options: ["Roman", "Greek", "Egyptian", "Mesopotamian"],
        answer: "Egyptian",
        explanation: "The ancient Egyptians built massive pyramids as tombs for their pharaohs and queens during the Old and Middle Kingdom periods."
    },
    {
        category: "History",
        difficulty: "Easy",
        question: "In which year did the Titanic sink?",
        options: ["1905", "1912", "1920", "1931"],
        answer: "1912",
        explanation: "The RMS Titanic sank in the early morning of 15 April 1912 in the North Atlantic Ocean, four days into her maiden voyage from Southampton to New York City."
    },
    {
        category: "History",
        difficulty: "Medium",
        question: "In which year did World War II end?",
        options: ["1918", "1945", "1950", "1939"],
        answer: "1945",
        explanation: "World War II officially ended with the surrender of Japan on September 2, 1945."
    },
    {
        category: "History",
        difficulty: "Medium",
        question: "The ancient Roman Empire was founded in what year BC?",
        options: ["753 BC", "27 BC", "44 BC", "1 BC"],
        answer: "27 BC",
        explanation: "The Roman Empire was officially established in 27 BC when Octavian was granted the title of Augustus by the Roman Senate."
    },
    {
        category: "History",
        difficulty: "Medium",
        question: "Who was the queen of England during William Shakespeare's time?",
        options: ["Queen Victoria", "Queen Mary I", "Queen Elizabeth I", "Queen Anne"],
        answer: "Queen Elizabeth I",
        explanation: "William Shakespeare lived and wrote during the Elizabethan era, named after Queen Elizabeth I, who reigned from 1558 to 1603."
    },
    {
        category: "History",
        difficulty: "Hard",
        question: "Who was the first emperor of Rome?",
        options: ["Julius Caesar", "Nero", "Augustus", "Caligula"],
        answer: "Augustus",
        explanation: "Augustus, born Gaius Octavius, was the first Roman emperor, reigning from 27 BC until his death in AD 14."
    },
    {
        category: "History",
        difficulty: "Hard",
        question: "The Renaissance began in which European country?",
        options: ["France", "England", "Italy", "Germany"],
        answer: "Italy",
        explanation: "The Renaissance, a period of rebirth in art, science, and culture, originated in Florence, Italy, in the 14th century."
    },
    {
        category: "History",
        difficulty: "Hard",
        question: "The Cold War was primarily a geopolitical tension between which two superpowers?",
        options: ["USA and China", "USA and Soviet Union", "Germany and France", "Britain and India"],
        answer: "USA and Soviet Union",
        explanation: "The Cold War was a period of geopolitical rivalry between the United States and its allies and the Soviet Union and its satellite states, lasting from the mid-1940s until the early 1990s."
    },

    {
        category: "Sports",
        difficulty: "Easy",
        question: "How many players are on a soccer (football) team?",
        options: ["9", "10", "11", "12"],
        answer: "11",
        explanation: "A standard soccer team has 11 players on the field, including the goalkeeper."
    },
    {
        category: "Sports",
        difficulty: "Easy",
        question: "Which color belt signifies a beginner in martial arts like Judo or Karate?",
        options: ["Black", "Red", "White", "Yellow"],
        answer: "White",
        explanation: "In many martial arts, a white belt typically signifies a beginner student."
    },
    {
        category: "Sports",
        difficulty: "Medium",
        question: "Which sport is known as the 'King of Sports'?",
        options: ["Basketball", "Soccer", "Tennis", "Cricket"],
        answer: "Soccer",
        explanation: "Soccer, or football, is the most popular sport globally, with an estimated 3.5 billion fans."
    },
    {
        category: "Sports",
        difficulty: "Medium",
        question: "In basketball, how many points is a free throw worth?",
        options: ["1", "2", "3", "4"],
        answer: "1",
        explanation: "A free throw in basketball is an uncontested shot from a designated line, awarded after certain fouls, and is worth one point."
    },
    {
        category: "Sports",
        difficulty: "Medium",
        question: "How many bases are there in a game of baseball?",
        options: ["3", "4", "5", "6"],
        answer: "4",
        explanation: "In baseball, there are four bases: home plate, first base, second base, and third base."
    },
    {
        category: "Sports",
        difficulty: "Hard",
        question: "How many players are on a standard baseball team?",
        options: ["7", "8", "9", "10"],
        answer: "9",
        explanation: "A baseball team consists of nine players who bat and field, with specific defensive positions."
    },
    {
        category: "Sports",
        difficulty: "Hard",
        question: "Which country has won the most FIFA World Cups?",
        options: ["Germany", "Italy", "Brazil", "Argentina"],
        answer: "Brazil",
        explanation: "Brazil holds the record for the most FIFA World Cup wins, with five titles (1958, 1962, 1970, 1994, 2002)."
    },
    {
        category: "Sports",
        difficulty: "Hard",
        question: "In which city were the first ancient Olympic Games held?",
        options: ["Athens", "Olympia", "Sparta", "Corinth"],
        answer: "Olympia",
        explanation: "The ancient Olympic Games were held in Olympia, Greece, a sanctuary site for the worship of Zeus."
    },

    {
        category: "Technology",
        difficulty: "Easy",
        question: "What does 'CPU' stand for?",
        options: ["Central Power Unit", "Central Processing Unit", "Computer Personal Unit", "Control Processing Unit"],
        answer: "Central Processing Unit",
        explanation: "The CPU is the electronic circuitry that executes instructions comprising a computer program."
    },
    {
        category: "Technology",
        difficulty: "Easy",
        question: "Which of these is a popular social media platform for sharing photos and videos?",
        options: ["LinkedIn", "Twitter", "Instagram", "Reddit"],
        answer: "Instagram",
        explanation: "Instagram is a widely used social networking service for sharing photos and videos."
    },
    {
        category: "Technology",
        difficulty: "Medium",
        question: "What does HTML stand for?",
        options: ["HyperText Markup Language", "High-Tech Multi Language", "Hyperlink and Text Markup Language", "Home Tool Markup Language"],
        answer: "HyperText Markup Language",
        explanation: "HTML is the standard markup language for documents designed to be displayed in a web browser."
    },
    {
        category: "Technology",
        difficulty: "Medium",
        question: "Which company developed the Android operating system?",
        options: ["Apple", "Microsoft", "Google", "Samsung"],
        answer: "Google",
        explanation: "Android is a mobile operating system based on a modified version of the Linux kernel and other open-source software, primarily designed for touchscreen mobile devices such as smartphones and tablets. Android is developed by a consortium of developers known as the Open Handset Alliance, with the main commercial sponsor being Google."
    },
    {
        category: "Technology",
        difficulty: "Medium",
        question: "What is 'RAM' short for in computing?",
        options: ["Random Access Memory", "Read-Only Access Module", "Rapid Application Management", "Remote Access Mechanism"],
        answer: "Random Access Memory",
        explanation: "RAM is a form of computer data storage that can be accessed randomly at any time, in any order and from any physical location."
    },
    {
        category: "Technology",
        difficulty: "Hard",
        question: "What does 'HTTP' stand for?",
        options: ["HyperText Transfer Protocol", "High Technology Test Program", "Home Tool Transfer Process", "Hyperlink Texting Protocol"],
        answer: "HyperText Transfer Protocol",
        explanation: "HTTP is the foundation of data communication for the World Wide Web."
    },
    {
        category: "Technology",
        difficulty: "Hard",
        question: "What is the common name for a malicious software program that disguises itself as a legitimate one?",
        options: ["Virus", "Worm", "Trojan Horse", "Spyware"],
        answer: "Trojan Horse",
        explanation: "A Trojan horse, or Trojan, is a type of malicious code or software that looks legitimate but can take control of your computer. It is designed to damage, disrupt, steal, or in general inflict some other harmful action on your data or network."
    },
    {
        category: "Technology",
        difficulty: "Hard",
        question: "Which programming language is often used for artificial intelligence and machine learning?",
        options: ["Java", "C++", "Python", "JavaScript"],
        answer: "Python",
        explanation: "Python is a very popular language for AI and machine learning due to its simplicity, large libraries, and active community."
    },

    {
        category: "Animals",
        difficulty: "Easy",
        question: "Which animal is known as the 'ship of the desert'?",
        options: ["Camel", "Horse", "Elephant", "Yak"],
        answer: "Camel",
        explanation: "Camels are well-adapted to desert conditions, able to go for long periods without water."
    },
    {
        category: "Animals",
        difficulty: "Easy",
        question: "What do bats eat?",
        options: ["Fish", "Insects", "Berries", "Grass"],
        answer: "Insects",
        explanation: "Most bat species are insectivores, consuming large quantities of insects, which makes them valuable for pest control."
    },
    {
        category: "Animals",
        difficulty: "Easy",
        question: "Which of these animals lays eggs?",
        options: ["Dog", "Cat", "Chicken", "Cow"],
        answer: "Chicken",
        explanation: "Chickens are birds that lay eggs. Mammals like dogs, cats, and cows give birth to live young."
    },
    {
        category: "Animals",
        difficulty: "Medium",
        question: "Which bird is known for its ability to mimic human speech?",
        options: ["Eagle", "Sparrow", "Parrot", "Ostrich"],
        answer: "Parrot",
        explanation: "Parrots are known for their ability to imitate a wide range of sounds, including human speech."
    },
    {
        category: "Animals",
        difficulty: "Medium",
        question: "What is a group of lions called?",
        options: ["Herd", "Pack", "Pride", "Flock"],
        answer: "Pride",
        explanation: "A group of lions is called a pride, typically consisting of several adult females, their cubs, and a few adult males."
    },
    {
        category: "Animals",
        difficulty: "Medium",
        question: "Which animal spins a web?",
        options: ["Ant", "Spider", "Bee", "Worm"],
        answer: "Spider",
        explanation: "Spiders are arachnids that are well-known for spinning webs to catch prey."
    },
    {
        category: "Animals",
        difficulty: "Hard",
        question: "What is the fastest land animal?",
        options: ["Lion", "Cheetah", "Gazelle", "Horse"],
        answer: "Cheetah",
        explanation: "The cheetah is the fastest land animal, capable of running at speeds of up to 120 km/h (75 mph) over short distances."
    },
    {
        category: "Animals",
        difficulty: "Hard",
        question: "Which marine mammal is known for its complex songs?",
        options: ["Dolphin", "Orca", "Humpback Whale", "Seal"],
        answer: "Humpback Whale",
        explanation: "Humpback whales are famous for their elaborate and long 'songs,' which are thought to be used for communication, especially during mating season."
    },
    {
        category: "Animals",
        difficulty: "Hard",
        question: "What is the scientific term for the fear of spiders?",
        options: ["Claustrophobia", "Hydrophobia", "Arachnophobia", "Agoraphobia"],
        answer: "Arachnophobia",
        explanation: "Arachnophobia is a specific phobia characterized by an irrational fear of spiders and other arachnids."
    },

    {
        category: "Food",
        difficulty: "Easy",
        question: "Which of these is a root vegetable?",
        options: ["Spinach", "Carrot", "Tomato", "Cucumber"],
        answer: "Carrot",
        explanation: "Carrots are root vegetables, typically orange in color, and are a good source of beta-carotene."
    },
    {
        category: "Food",
        difficulty: "Easy",
        question: "From which bean is coffee made?",
        options: ["Kidney bean", "Soybean", "Coffee bean", "Jelly bean"],
        answer: "Coffee bean",
        explanation: "Coffee beans are the seeds of the Coffea plant and are roasted and ground to produce coffee."
    },
    {
        category: "Food",
        difficulty: "Easy",
        question: "What is the main ingredient in guacamole?",
        options: ["Tomato", "Onion", "Avocado", "Lime"],
        answer: "Avocado",
        explanation: "Guacamole is a popular dip made primarily from mashed ripe avocados, salt, and sometimes lime juice, cilantro, and chili."
    },
    {
        category: "Food",
        difficulty: "Medium",
        question: "Which fruit is famous for keeping the doctor away?",
        options: ["Banana", "Apple", "Orange", "Grape"],
        answer: "Apple",
        explanation: "The proverb 'An apple a day keeps the doctor away' suggests that eating fruit is beneficial for health."
    },
    {
        category: "Food",
        difficulty: "Medium",
        question: "Which Italian dish is made from thin, flat pasta sheets layered with sauce and cheese?",
        options: ["Pizza", "Spaghetti", "Lasagna", "Ravioli"],
        answer: "Lasagna",
        explanation: "Lasagna is a classic Italian dish made with layers of pasta, meat or vegetable sauce, and cheese, baked in an oven."
    },
    {
        category: "Food",
        difficulty: "Medium",
        question: "What is sushi traditionally wrapped in?",
        options: ["Lettuce", "Rice paper", "Nori (seaweed)", "Cabbage"],
        answer: "Nori (seaweed)",
        explanation: "Sushi, particularly maki rolls, is typically wrapped in nori, an edible dried seaweed."
    },
    {
        category: "Food",
        difficulty: "Hard",
        question: "What is the main ingredient in traditional Japanese miso soup?",
        options: ["Tofu", "Seaweed", "Miso paste", "Mushrooms"],
        answer: "Miso paste",
        explanation: "Miso soup's primary ingredient is miso paste, a traditional Japanese seasoning produced by fermenting soybeans with salt and kōji (a fungus)."
    },
    {
        category: "Food",
        difficulty: "Hard",
        question: "What is the process of fermenting grapes to make wine called?",
        options: ["Distillation", "Brewing", "Vinification", "Baking"],
        answer: "Vinification",
        explanation: "Vinification is the process of converting grapes into wine by fermentation. Brewing is for beer, distillation for spirits."
    },
    {
        category: "Food",
        difficulty: "Hard",
        question: "Which spice comes from the dried stigma of a flower?",
        options: ["Cinnamon", "Pepper", "Saffron", "Turmeric"],
        answer: "Saffron",
        explanation: "Saffron is derived from the stigma and styles of the saffron crocus flower, making it one of the most expensive spices by weight."
    },

    {
        category: "Music",
        difficulty: "Easy",
        question: "How many strings does a standard violin have?",
        options: ["3", "4", "5", "6"],
        answer: "4",
        explanation: "A standard violin has four strings, tuned in perfect fifths: G, D, A, and E."
    },
    {
        category: "Music",
        difficulty: "Easy",
        question: "Which instrument is played by blowing air through it and pressing keys?",
        options: ["Guitar", "Drums", "Flute", "Cello"],
        answer: "Flute",
        explanation: "The flute is a woodwind instrument that produces its sound from the flow of air across an opening."
    },
    {
        category: "Music",
        difficulty: "Medium",
        question: "Which famous band sang 'Bohemian Rhapsody'?",
        options: ["The Beatles", "Led Zeppelin", "Queen", "Pink Floyd"],
        answer: "Queen",
        explanation: "Bohemian Rhapsody is a song by the British rock band Queen, written by Freddie Mercury for the band's 1975 album A Night at the Opera."
    },
    {
        category: "Music",
        difficulty: "Medium",
        question: "Which instrument has black and white keys?",
        options: ["Guitar", "Drums", "Piano", "Trumpet"],
        answer: "Piano",
        explanation: "The piano is a musical instrument played using a keyboard, which is a row of keys that the performer presses down or strikes with the fingers and thumbs of both hands."
    },
    {
        category: "Music",
        difficulty: "Medium",
        question: "What musical term means 'very fast'?",
        options: ["Andante", "Allegro", "Largo", "Adagio"],
        answer: "Allegro",
        explanation: "In music, 'allegro' is an Italian tempo marking meaning 'fast, quick, and bright'."
    },
    {
        category: "Music",
        difficulty: "Hard",
        question: "Who composed the 'Moonlight Sonata'?",
        options: ["Wolfgang Amadeus Mozart", "Johann Sebastian Bach", "Ludwig van Beethoven", "Frederic Chopin"],
        answer: "Ludwig van Beethoven",
        explanation: "Ludwig van Beethoven was a German composer and pianist. He is one of the most revered figures in the history of classical music."
    },
    {
        category: "Music",
        difficulty: "Hard",
        question: "What genre of music originated in New Orleans in the early 20th century?",
        options: ["Blues", "Jazz", "Country", "Rock and Roll"],
        answer: "Jazz",
        explanation: "Jazz is a music genre that originated in the African-American communities of New Orleans, United States, in the late 19th and early 20th centuries, with its roots in blues and ragtime."
    },
    {
        category: "Music",
        difficulty: "Hard",
        question: "Which classical composer was deaf in his later life?",
        options: ["Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Ludwig van Beethoven", "Franz Schubert"],
        answer: "Ludwig van Beethoven",
        explanation: "Ludwig van Beethoven began losing his hearing in the late 1790s and was almost completely deaf by 1818, yet continued to compose some of his greatest works."
    }
];

const achievements = [
    { id: "perfect_score", name: "Quiz Master! 🌟", description: "Achieved a perfect score on any quiz difficulty.", condition: (score, total, time, difficulty, currentAttempts, categoriesAttempted) => score === total },
    { id: "speed_demon_easy", name: "Speed Demon! ⏱️", description: "Completed an Easy quiz with a perfect score in under 15 seconds.", condition: (score, total, time, difficulty, currentAttempts, categoriesAttempted) => difficulty === 'Easy' && score === total && time <= 15 },
    { id: "first_try_pro", name: "First Try Pro! ✅", description: "Got a perfect score on your very first attempt (after a full session reset).", condition: (score, total, time, difficulty, currentAttempts, categoriesAttempted) => score === total && currentAttempts.totalAttempts === 1 },
    { id: "curiosity_unlocked", name: "Curiosity Unlocked 💡", description: "Attempted quizzes in at least 3 different categories.", condition: (score, total, time, difficulty, currentAttempts, categoriesAttempted) => categoriesAttempted && categoriesAttempted.size >= 3 },
    { id: "difficulty_conqueror", name: "Difficulty Conqueror 🏔️", description: "Completed a Hard quiz with at least 80% score.", condition: (score, total, time, difficulty, currentAttempts, categoriesAttempted) => difficulty === 'Hard' && (score / total) >= 0.8 },
];

const LOCAL_STORAGE_LEADERBOARD_KEY = 'quiz_leaderboard';
const LOCAL_STORAGE_ACHIEVEMENTS_KEY = 'quiz_achievements';
const LOCAL_STORAGE_ATTEMPTS_KEY = 'quiz_attempts_count';
const LOCAL_STORAGE_CATEGORIES_ATTEMPTED_KEY = 'quiz_categories_attempted';

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startQuizBtn = document.getElementById('start-quiz-btn');
const retakeQuizBtn = document.getElementById('retake-quiz-btn');

const categorySelect = document.getElementById('category-select');
const difficultySelect = document.getElementById('difficulty-select');

const questionNumberSpan = document.getElementById('question-number');
const totalQuestionsSpan = document.getElementById('total-questions');
const quizTimerSpan = document.getElementById('quiz-timer');
const questionCountdownSpan = document.getElementById('question-countdown');
const multimediaContainer = document.getElementById('multimedia-container');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const fiftyFiftyBtn = document.getElementById('fifty-fifty-btn');
const fiftyFiftyCountSpan = document.getElementById('fifty-fifty-count');
const hintBtn = document.getElementById('hint-btn');
const hintCountSpan = document.getElementById('hint-count');

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');

const finalScoreDisplay = document.getElementById('final-score');
const finalTimeDisplay = document.getElementById('final-time');
const playerNameInput = document.getElementById('player-name');
const saveScoreBtn = document.getElementById('save-score-btn');
const achievementsDisplay = document.getElementById('achievements-display');
const leaderboardDisplay = document.getElementById('leaderboard-display');
const quizReviewContainer = document.getElementById('quiz-review-container');

let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];
let quizQuestions = [];

let timerInterval;
let quizStartTime;
let timeTaken = 0;

let questionTimerInterval;
let currentQuestionCountdownValue = 10;

let fiftyFiftyLifelines = 1;
let hintLifelines = 1;

let currentCategory = 'All';
let currentDifficulty = 'All';

let globalAchievements = loadAchievements();
let leaderboard = loadLeaderboard();
let quizAttempts = loadQuizAttempts();
let categoriesAttempted = loadCategoriesAttempted();

const API_KEY = "";
const MODEL_NAME = "gemini-2.5-flash-preview-05-20";

async function fetchWithExponentialBackoff(apiUrl, payload, retries = 3, delay = 1000) {
    for (let i = 0; i < retries; i++) {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (response.ok) {
                return await response.json();
            } else if (response.status === 429 && i < retries - 1) {
                await new Promise(res => setTimeout(res, delay));
                delay *= 2;
            } else {
                throw new Error(`API error: ${response.status} ${response.statusText}`);
            }
        } catch (error) {
            if (i === retries - 1) throw error;
            await new Promise(res => setTimeout(res, delay));
            delay *= 2;
        }
    }
}

function initializeApp() {
    populateCategorySelect();
    displayLeaderboard();
    startScreen.classList.remove('hidden');
    quizScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
}

function populateCategorySelect() {
    const categories = new Set(allQuizData.map(q => q.category));
    categorySelect.innerHTML = '<option value="All">All Categories</option>';
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
}

function prepareQuizQuestions() {
    currentCategory = categorySelect.value;
    currentDifficulty = difficultySelect.value;

    if (currentCategory !== 'All') {
        categoriesAttempted.add(currentCategory);
        saveCategoriesAttempted(categoriesAttempted);
    }

    let filteredQuestions = allQuizData;

    if (currentCategory !== 'All') {
        filteredQuestions = filteredQuestions.filter(q => q.category === currentCategory);
    }
    if (currentDifficulty !== 'All') {
        filteredQuestions = filteredQuestions.filter(q => q.difficulty === currentDifficulty);
    }

    for (let i = filteredQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filteredQuestions[i], filteredQuestions[j]] = [filteredQuestions[j], filteredQuestions[i]];
    }

    // Ensure we pick at most 10 questions to keep the quiz manageable
    quizQuestions = filteredQuestions.slice(0, Math.min(10, filteredQuestions.length));
    if (quizQuestions.length === 0) {
        alert("No questions found for the selected category and difficulty. Please try different options.");
        location.reload();
        return;
    }
}

function loadQuestion() {
    clearInterval(questionTimerInterval);

    currentQuestionCountdownValue = 10;
    questionCountdownSpan.textContent = currentQuestionCountdownValue;

    questionNumberSpan.textContent = currentQuestionIndex + 1;
    totalQuestionsSpan.textContent = quizQuestions.length;

    const currentQuestion = quizQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    multimediaContainer.innerHTML = '';
    if (currentQuestion.image) {
        const img = document.createElement('img');
        img.src = currentQuestion.image;
        img.alt = "Question image";
        img.classList.add('w-full', 'max-h-48', 'object-contain', 'rounded-lg', 'mb-4');
        multimediaContainer.appendChild(img);
    }
    if (currentQuestion.audio) {
        const audio = document.createElement('audio');
        audio.controls = true;
        audio.src = currentQuestion.audio;
        audio.classList.add('w-full', 'mb-4');
        multimediaContainer.appendChild(audio);
    }

    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add(
            'option-button',
            'w-full', 'py-3', 'px-4', 'border', 'border-gray-300', 'rounded-lg',
            'text-left', 'text-gray-700', 'hover:bg-blue-50', 'hover:border-blue-400',
            'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-500', 'transition', 'duration-200'
        );
        const userSelectedOption = userAnswers.find(ua => ua.questionIndex === currentQuestionIndex);
        if (userSelectedOption && userSelectedOption.selectedOption === option) {
            button.classList.add('selected');
        }
        button.onclick = (event) => selectOption(event, option);
        optionsContainer.appendChild(button);
    });

    updateLifelineButtons();
    updateNavigationButtons();

    questionTimerInterval = setInterval(() => {
        currentQuestionCountdownValue--;
        questionCountdownSpan.textContent = currentQuestionCountdownValue;

        if (currentQuestionCountdownValue <= 0) {
            clearInterval(questionTimerInterval);
            const userAnswered = userAnswers.some(ua => ua.questionIndex === currentQuestionIndex);
            if (!userAnswered) {
                userAnswers.push({ questionIndex: currentQuestionIndex, selectedOption: "Time's Up!", isCorrect: false, explanationFetched: false });
            }
            if (currentQuestionIndex < quizQuestions.length - 1) {
                nextQuestion();
            } else {
                submitQuiz();
            }
        }
    }, 1000);
}

function selectOption(event, selectedOption) {
    clearInterval(questionTimerInterval);
    document.querySelectorAll('.option-button').forEach(btn => {
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answer;

    const existingAnswerIndex = userAnswers.findIndex(ua => ua.questionIndex === currentQuestionIndex);
    if (existingAnswerIndex > -1) {
        userAnswers[existingAnswerIndex] = { questionIndex: currentQuestionIndex, selectedOption, isCorrect, explanationFetched: userAnswers[existingAnswerIndex].explanationFetched || false };
    } else {
        userAnswers.push({ questionIndex: currentQuestionIndex, selectedOption, isCorrect, explanationFetched: false });
    }
}

function nextQuestion() {
    clearInterval(questionTimerInterval);
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function previousQuestion() {
    clearInterval(questionTimerInterval);
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function updateNavigationButtons() {
    if (currentQuestionIndex === 0) {
        prevBtn.disabled = true;
        prevBtn.classList.add('opacity-75', 'cursor-not-allowed');
    } else {
        prevBtn.disabled = false;
        prevBtn.classList.remove('opacity-75', 'cursor-not-allowed');
    }

    if (currentQuestionIndex === quizQuestions.length - 1) {
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        submitBtn.classList.add('hidden');
    }
}

function startTimer() {
    quizStartTime = Date.now();
    timerInterval = setInterval(() => {
        const elapsedSeconds = Math.floor((Date.now() - quizStartTime) / 1000);
        timeTaken = elapsedSeconds;
        const minutes = Math.floor(elapsedSeconds / 60);
        const seconds = elapsedSeconds % 60;
        quizTimerSpan.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function useFiftyFifty() {
    if (fiftyFiftyLifelines <= 0) return;

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const options = Array.from(optionsContainer.children);
    const correctAnswer = currentQuestion.answer;

    let wrongOptions = options.filter(btn => btn.textContent !== correctAnswer);

    for (let i = 0; i < 2 && wrongOptions.length > 0; i++) {
        const randomIndex = Math.floor(Math.random() * wrongOptions.length);
        wrongOptions[randomIndex].style.opacity = '0.3';
        wrongOptions[randomIndex].style.pointerEvents = 'none';
        wrongOptions.splice(randomIndex, 1);
    }
    fiftyFiftyLifelines--;
    updateLifelineButtons();
    alert("Two wrong answers have been removed!");
}

async function useHint() {
    if (hintLifelines <= 0) return;

    const currentQuestion = quizQuestions[currentQuestionIndex];
    const prompt = `Give a concise, helpful hint for the following quiz question without revealing the answer directly.
    Question: "${currentQuestion.question}"
    Options: ${currentQuestion.options.join(', ')}`;

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;
    const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };

    const originalHintText = hintBtn.textContent;
    hintBtn.disabled = true;
    hintBtn.innerHTML = '<div class="loading-spinner"></div> Loading Hint...';

    try {
        const result = await fetchWithExponentialBackoff(apiUrl, payload);
        const aiHint = result?.candidates?.[0]?.content?.parts?.[0]?.text || "Could not generate hint.";
        alert(`✨ AI Hint: ${aiHint}`);
    } catch (error) {
        console.error("Error generating AI hint:", error);
        alert("Failed to get AI hint. Please try again later.");
    } finally {
        hintLifelines--;
        updateLifelineButtons();
        hintBtn.textContent = originalHintText;
    }
}

function updateLifelineButtons() {
    fiftyFiftyCountSpan.textContent = fiftyFiftyLifelines;
    hintCountSpan.textContent = hintLifelines;

    fiftyFiftyBtn.disabled = fiftyFiftyLifelines <= 0;
    if (fiftyFiftyLifelines <= 0) {
        fiftyFiftyBtn.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        fiftyFiftyBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }

    hintBtn.disabled = hintLifelines <= 0;
    if (hintLifelines <= 0) {
        hintBtn.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        hintBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
}

function submitQuiz() {
    clearInterval(questionTimerInterval);
    stopTimer();
    score = 0;
    quizQuestions.forEach((q, index) => {
        const userAnswer = userAnswers.find(ua => ua.questionIndex === index);
        if (userAnswer && userAnswer.isCorrect) {
            score++;
        }
    });
    showResult();
    if (score === quizQuestions.length) {
        triggerConfetti();
    }
    displayQuizReview();
    displayLeaderboard();
    checkAndUnlockAchievements();
    
    if (playerNameInput.value.trim() !== "" || score === quizQuestions.length) {
        saveScoreBtn.disabled = false;
        playerNameInput.disabled = false;
    } else {
        saveScoreBtn.disabled = true;
        playerNameInput.disabled = false;
    }

    const storedName = localStorage.getItem('last_player_name');
    if (storedName) {
        playerNameInput.value = storedName;
    }
}

function showResult() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    finalScoreDisplay.textContent = `${score} / ${quizQuestions.length}`;
    finalTimeDisplay.textContent = formatTime(timeTaken);

    if (score === quizQuestions.length) {
        finalScoreDisplay.classList.add('text-green-600');
        finalScoreDisplay.classList.remove('text-blue-600', 'text-red-600');
    } else if (score >= quizQuestions.length / 2) {
        finalScoreDisplay.classList.add('text-blue-600');
        finalScoreDisplay.classList.remove('text-green-600', 'text-red-600');
    } else {
        finalScoreDisplay.classList.add('text-red-600');
        finalScoreDisplay.classList.remove('text-green-600', 'text-blue-600');
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function triggerConfetti() {
    const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#795548', '#9E9E9E', '#607D8B'];
    const confettiCount = 75;

    for (let i = 0; i < confettiCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('confetti-particle');
        particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 20 - 10}vh`;
        
        particle.style.animationDelay = `${Math.random() * 2}s`;
        
        document.body.appendChild(particle);

        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }
}

function loadLeaderboard() {
    try {
        const storedLeaderboard = localStorage.getItem(LOCAL_STORAGE_LEADERBOARD_KEY);
        return storedLeaderboard ? JSON.parse(storedLeaderboard) : [];
    } catch (e) {
        console.error("Error loading leaderboard from localStorage:", e);
        return [];
    }
}

function saveLeaderboard(currentLeaderboard) {
    try {
        localStorage.setItem(LOCAL_STORAGE_LEADERBOARD_KEY, JSON.stringify(currentLeaderboard));
    } catch (e) {
        console.error("Error saving leaderboard to localStorage:", e);
    }
}

function displayLeaderboard() {
    leaderboardDisplay.innerHTML = '';
    if (leaderboard.length === 0) {
        leaderboardDisplay.innerHTML = '<p class="text-gray-600">No scores yet. Be the first!</p>';
        return;
    }

    const sortedLeaderboard = [...leaderboard].sort((a, b) => {
        if (b.score !== a.score) {
            return b.score - a.score;
        }
        return a.time - b.time;
    }).slice(0, 10);

    const ul = document.createElement('ul');
    ul.classList.add('list-disc', 'list-inside', 'text-gray-700', 'space-y-1');

    sortedLeaderboard.forEach((entry, index) => {
        const li = document.createElement('li');
        li.classList.add('flex', 'justify-between', 'items-center', 'py-1');
        const rankClass = index < 3 ? 'font-bold text-blue-600' : 'font-semibold';
        li.innerHTML = `
            <span class="${rankClass}">#${index + 1}. ${entry.name}</span>
            <span class="${rankClass}">${entry.score}/${quizQuestions.length} (${formatTime(entry.time)})</span>
        `;
        ul.appendChild(li);
    });
    leaderboardDisplay.appendChild(ul);
}

function saveCurrentScoreToLeaderboard() {
    const playerName = playerNameInput.value.trim();
    if (!playerName) {
        alert("Please enter your name to save your score!");
        return;
    }
    if (score === 0) {
        alert("Score is 0. Only positive scores are saved to leaderboard.");
        return;
    }

    localStorage.setItem('last_player_name', playerName);

    const newEntry = {
        name: playerName,
        score: score,
        totalQuestions: quizQuestions.length,
        time: timeTaken,
        date: new Date().toISOString()
    };

    leaderboard.push(newEntry);
    saveLeaderboard(leaderboard);
    displayLeaderboard();
    saveScoreBtn.disabled = true;
    alert("Score saved to leaderboard!");
}

function loadAchievements() {
    try {
        const storedAchievements = localStorage.getItem(LOCAL_STORAGE_ACHIEVEMENTS_KEY);
        return new Set(storedAchievements ? JSON.parse(storedAchievements) : []);
    } catch (e) {
        console.error("Error loading achievements from localStorage:", e);
        return new Set();
    }
}

function saveAchievements(achievementsSet) {
    try {
        localStorage.setItem(LOCAL_STORAGE_ACHIEVEMENTS_KEY, JSON.stringify(Array.from(achievementsSet)));
    } catch (e) {
        console.error("Error saving achievements to localStorage:", e);
    }
}

function checkAndUnlockAchievements() {
    const newlyUnlockedAchievements = [];
    achievements.forEach(achievement => {
        if (!globalAchievements.has(achievement.id)) {
            const conditionMet = achievement.condition(
                score,
                quizQuestions.length,
                timeTaken,
                quizAttempts,
                categoriesAttempted,
                currentDifficulty
            );
            if (conditionMet) {
                globalAchievements.add(achievement.id);
                newlyUnlockedAchievements.push(achievement);
            }
        }
    });
    saveAchievements(globalAchievements);
    displayAchievements(newlyUnlockedAchievements);
}

function displayAchievements(newlyUnlocked = []) {
    achievementsDisplay.innerHTML = '';

    if (globalAchievements.size === 0) {
        achievementsDisplay.innerHTML = '<p class="text-gray-600">No achievements unlocked yet. Keep playing!</p>';
        return;
    }

    const ul = document.createElement('ul');
    ul.classList.add('list-none', 'space-y-3');

    globalAchievements.forEach(achId => {
        const achievement = achievements.find(a => a.id === achId);
        if (achievement) {
            const li = document.createElement('li');
            li.classList.add('achievement-card', 'p-4', 'rounded-lg', 'shadow-sm', 'flex', 'flex-col', 'items-start');
            
            const isNew = newlyUnlocked.some(na => na.id === achId);
            const newBadge = isNew ? '<span class="ml-2 bg-yellow-300 text-yellow-800 text-xs font-bold px-2 py-1 rounded-full">NEW!</span>' : '';

            li.innerHTML = `
                <h4 class="text-lg font-bold mb-1 flex items-center">${achievement.name} ${newBadge}</h4>
                <p class="text-sm">${achievement.description}</p>
            `;
            ul.appendChild(li);
        }
    });
    achievementsDisplay.appendChild(ul);
}

function loadQuizAttempts() {
    try {
        const stored = localStorage.getItem(LOCAL_STORAGE_ATTEMPTS_KEY);
        return stored ? JSON.parse(stored) : { totalAttempts: 0, categoryAttempts: {} };
    } catch (e) {
        console.error("Error loading quiz attempts:", e);
        return { totalAttempts: 0, categoryAttempts: {} };
    }
}

function saveQuizAttempts(attempts) {
    try {
        localStorage.setItem(LOCAL_STORAGE_ATTEMPTS_KEY, JSON.stringify(attempts));
    }
    catch (e) {
        console.error("Error saving quiz attempts:", e);
    }
}

function loadCategoriesAttempted() {
    try {
        const stored = localStorage.getItem(LOCAL_STORAGE_CATEGORIES_ATTEMPTED_KEY);
        return new Set(stored ? JSON.parse(stored) : []);
    } catch (e) {
        console.error("Error loading categories attempted:", e);
        return new Set();
    }
}

function saveCategoriesAttempted(categoriesSet) {
    try {
        localStorage.setItem(LOCAL_STORAGE_CATEGORIES_ATTEMPTED_KEY, JSON.stringify(Array.from(categoriesSet)));
    } catch (e) {
        console.error("Error saving categories attempted:", e);
    }
}

function displayQuizReview() {
    quizReviewContainer.innerHTML = '';

    quizQuestions.forEach((question, index) => {
        const userAnswer = userAnswers.find(ua => ua.questionIndex === index);
        const isCorrect = userAnswer ? userAnswer.isCorrect : false;
        const userSelected = userAnswer ? userAnswer.selectedOption : "No answer selected";

        const reviewItem = document.createElement('div');
        reviewItem.classList.add(
            'bg-white', 'p-4', 'rounded-lg', 'shadow-sm', 'border',
            isCorrect ? 'border-green-400' : 'border-red-400',
            'mb-4'
        );

        reviewItem.innerHTML = `
            <p class="font-bold text-lg mb-2 text-gray-800">Q${index + 1}: ${question.question}</p>
            <p class="text-gray-700">Your Answer: <span class="${isCorrect ? 'correct-answer-text' : 'wrong-answer-text'}">${userSelected}</span></p>
            ${!isCorrect ? `<p class="text-gray-700">Correct Answer: <span class="correct-answer-text">${question.answer}</span></p>` : ''}
            <p class="text-gray-700 mt-2 font-semibold">Explanation:</p>
            <p class="text-gray-600 text-sm" id="explanation-${index}">${question.explanation}</p>
            ${!isCorrect && !userAnswer.explanationFetched ? `<button class="mt-4 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-lg shadow transition duration-300 ease-in-out get-ai-explanation-btn" data-question-index="${index}">✨ Get AI Explanation</button>` : ''}
        `;
        quizReviewContainer.appendChild(reviewItem);
    });

    document.querySelectorAll('.get-ai-explanation-btn').forEach(button => {
        button.addEventListener('click', async (event) => {
            const questionIndex = parseInt(event.target.dataset.questionIndex);
            await getAiExplanationForQuestion(questionIndex);
            event.target.remove();
        });
    });
}

async function getAiExplanationForQuestion(questionIndex) {
    const questionData = quizQuestions[questionIndex];
    const userAnswer = userAnswers.find(ua => ua.questionIndex === questionIndex);

    const prompt = `The user answered the following quiz question incorrectly.
    Question: "${questionData.question}"
    Correct Answer: "${questionData.answer}"
    User's Answer: "${userAnswer.selectedOption}"
    Existing basic explanation: "${questionData.explanation}"

    Please provide a more detailed and engaging explanation focusing on why the correct answer is right and why the user's selected option was wrong. Keep it educational and concise for a quiz review. Start with 'AI Explanation:'`;

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${API_KEY}`;
    const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };

    const explanationElement = document.getElementById(`explanation-${questionIndex}`);
    const originalExplanation = explanationElement.textContent;
    explanationElement.innerHTML = '<div class="flex items-center justify-center"><div class="loading-spinner"></div> Loading AI explanation...</div>';

    try {
        const result = await fetchWithExponentialBackoff(apiUrl, payload);
        const aiExplanation = result?.candidates?.[0]?.content?.parts?.[0]?.text || "Could not generate AI explanation.";
        explanationElement.innerHTML = `<strong>AI Explanation:</strong> ${aiExplanation}`;
        const uaIndex = userAnswers.findIndex(ua => ua.questionIndex === questionIndex);
        if (uaIndex > -1) {
            userAnswers[uaIndex].explanationFetched = true;
        }
    } catch (error) {
        console.error("Error generating AI explanation:", error);
        explanationElement.textContent = `Error getting AI explanation: ${originalExplanation}`;
        alert("Failed to get AI explanation. Please try again later.");
    }
}

function startQuiz() {
    prepareQuizQuestions();

    startScreen.classList.add('hidden');
    resultScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');

    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    fiftyFiftyLifelines = 1;
    hintLifelines = 1;
    
    quizAttempts.totalAttempts = (quizAttempts.totalAttempts || 0) + 1;
    quizAttempts.categoryAttempts[currentCategory] = (quizAttempts.categoryAttempts[currentCategory] || 0) + 1;
    saveQuizAttempts(quizAttempts);

    loadQuestion();
    startTimer();
}

startQuizBtn.addEventListener('click', startQuiz);
retakeQuizBtn.addEventListener('click', startQuiz);
saveScoreBtn.addEventListener('click', saveCurrentScoreToLeaderboard);

nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', previousQuestion);
submitBtn.addEventListener('click', submitQuiz);

fiftyFiftyBtn.addEventListener('click', useFiftyFifty);
hintBtn.addEventListener('click', useHint);

initializeApp();
