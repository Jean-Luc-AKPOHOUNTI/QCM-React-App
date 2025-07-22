const questions = [
    // Catégorie : "Littérature",
    {
        category: "Littérature",
        question: "Qui est l'auteur du roman 'L'enfant noir' ?",
        choices: [
            { label: "A", text: "Ahmadou Kourouma" },
            { label: "B", text: "Camara Laye" },
            { label: "C", text: "Cheikh Hamidou Kane" },
            { label: "D", text: "Chinua Achebe" }
        ],
        answer: "B"
    },
    {
        category: "Littérature",
        question: "Quel écrivain nigérian a écrit 'Le monde s’effondre' ?",
        choices: [
            { label: "A", text: "Ngũgĩ wa Thiong'o" },
            { label: "B", text: "Wole Soyinka" },
            { label: "C", text: "Chinua Achebe" },
            { label: "D", text: "Ben Okri" }
        ],
        answer: "C"
    },
    {
        category: "Littérature",
        question: "Quel prix Nobel a été attribué à Wole Soyinka ?",
        choices: [
            { label: "A", text: "Prix Goncourt" },
            { label: "B", text: "Prix Renaudot" },
            { label: "C", text: "Prix Nobel de Littérature" },
            { label: "D", text: "Prix Booker" }
        ],
        answer: "C"
    },
    {
        category: "Littérature",
        question: "Quel est le roman le plus célèbre de Cheikh Hamidou Kane ?",
        choices: [
            { label: "A", text: "Les soleils des indépendances" },
            { label: "B", text: "L’aventure ambiguë" },
            { label: "C", text: "L’enfant noir" },
            { label: "D", text: "Allah n'est pas obligé" }
        ],
        answer: "B"
    },
    {
        category: "Littérature",
        question: "Quel écrivain ivoirien a écrit 'Les soleils des indépendances' ?",
        choices: [
            { label: "A", text: "Ahmadou Kourouma" },
            { label: "B", text: "Tierno Monénembo" },
            { label: "C", text: "Mongo Beti" },
            { label: "D", text: "Calixthe Beyala" }
        ],
        answer: "A"
    },
    {
        category: "Littérature",
        question: "Quelle autrice camerounaise a écrit 'Les Honneurs perdus' ?",
        choices: [
            { label: "A", text: "Fatou Diome" },
            { label: "B", text: "Calixthe Beyala" },
            { label: "C", text: "Nayra Waheed" },
            { label: "D", text: "Ama Ata Aidoo" }
        ],
        answer: "B"
    },
    {
        category: "Littérature",
        question: "Dans quel pays est né Tchicaya U Tam’si ?",
        choices: [
            { label: "A", text: "Congo-Brazzaville" },
            { label: "B", text: "Sénégal" },
            { label: "C", text: "Côte d'Ivoire" },
            { label: "D", text: "Gabon" }
        ],
        answer: "A"
    },
    {
        category: "Littérature",
        question: "Quel est le thème central du roman 'Allah n’est pas obligé' ?",
        choices: [
            { label: "A", text: "L’esclavage" },
            { label: "B", text: "La guerre civile" },
            { label: "C", text: "L’amour interdit" },
            { label: "D", text: "La sorcellerie" }
        ],
        answer: "B"
    },
    {
        category: "Littérature",
        question: "Quel écrivain sénégalais est aussi connu pour son travail de cinéaste ?",
        choices: [
            { label: "A", text: "Birago Diop" },
            { label: "B", text: "Ousmane Sembène" },
            { label: "C", text: "Alioune Diop" },
            { label: "D", text: "Boubacar Boris Diop" }
        ],
        answer: "B"
    },
    {
        category: "Littérature",
        question: "Quel est le nom du personnage principal dans 'L’Aventure ambiguë' ?",
        choices: [
            { label: "A", text: "Salif Keïta" },
            { label: "B", text: "Samba Diallo" },
            { label: "C", text: "Kouam Tawa" },
            { label: "D", text: "Ousmane" }
        ],
        answer: "B"
    },
    {
        category: "Littérature",
        question: "Fatou Diome est connue pour son roman :",
        choices: [
            { label: "A", text: "Le ventre de l’Atlantique" },
            { label: "B", text: "Les bouts de bois de Dieu" },
            { label: "C", text: "Le devoir de violence" },
            { label: "D", text: "Un enfant du pays" }
        ],
        answer: "A"
    },
    {
        category: "Littérature",
        question: "Quelle œuvre de Mongo Beti critique la colonisation ?",
        choices: [
            { label: "A", text: "Perpétue et l’habitude du malheur" },
            { label: "B", text: "Ville cruelle" },
            { label: "C", text: "Le pauvre Christ de Bomba" },
            { label: "D", text: "Le ventre de l’Atlantique" }
        ],
        answer: "C"
    },
    {
        category: "Littérature",
        question: "Boubacar Boris Diop a écrit sur quel événement historique ?",
        choices: [
            { label: "A", text: "La guerre d’Algérie" },
            { label: "B", text: "Le génocide rwandais" },
            { label: "C", text: "La traite négrière" },
            { label: "D", text: "La guerre du Biafra" }
        ],
        answer: "B"
    },
    {
        category: "Littérature",
        question: "Quel auteur est l'un des fondateurs de la négritude ?",
        choices: [
            { label: "A", text: "Léopold Sédar Senghor" },
            { label: "B", text: "Mongo Beti" },
            { label: "C", text: "Kossi Efoui" },
            { label: "D", text: "Kourouma Ahmadou" }
        ],
        answer: "A"
    },
    {
        category: "Littérature",
        question: "Le roman 'Et l’on dévora la terre' a été écrit par :",
        choices: [
            { label: "A", text: "Aminata Sow Fall" },
            { label: "B", text: "Naïr Bensalah" },
            { label: "C", text: "Yamen Manaï" },
            { label: "D", text: "Yamen Ba" }
        ],
        answer: "C"
    },

    // Catégorie : "Musique"
    {
        category: "Musique",
        question: "Qui est considéré comme le roi de l’afrobeat ?",
        choices: [
            { label: "A", text: "Fela Kuti" },
            { label: "B", text: "Youssou N'Dour" },
            { label: "C", text: "Salif Keita" },
            { label: "D", text: "Davido" }
        ],
        answer: "A"
    },
    {
        category: "Musique",
        question: "Quel artiste est connu pour la chanson *7 Seconds* avec Neneh Cherry ?",
        choices: [
            { label: "A", text: "Alpha Blondy" },
            { label: "B", text: "Tiken Jah Fakoly" },
            { label: "C", text: "Youssou N'Dour" },
            { label: "D", text: "Magic System" }
        ],
        answer: "C"
    },
    {
        category: "Musique",
        question: "Quel genre musical est associé à Papa Wemba ?",
        choices: [
            { label: "A", text: "Highlife" },
            { label: "B", text: "Makossa" },
            { label: "C", text: "Soukous" },
            { label: "D", text: "Gqom" }
        ],
        answer: "C"
    },
    {
        category: "Musique",
        question: "Quel chanteur ivoirien est connu pour le tube *Premier Gaou* ?",
        choices: [
            { label: "A", text: "DJ Arafat" },
            { label: "B", text: "Koffi Olomidé" },
            { label: "C", text: "Magic System" },
            { label: "D", text: "Meiway" }
        ],
        answer: "C"
    },
    {
        category: "Musique",
        question: "Quel style musical est dominé par les artistes comme Burna Boy et Wizkid ?",
        choices: [
            { label: "A", text: "Afrobeat" },
            { label: "B", text: "Afrobeats" },
            { label: "C", text: "Ndombolo" },
            { label: "D", text: "Kizomba" }
        ],
        answer: "B"
    },
    {
        category: "Musique",
        question: "Quel chanteur reggae ivoirien est connu pour son engagement politique ?",
        choices: [
            { label: "A", text: "Tiken Jah Fakoly" },
            { label: "B", text: "DJ Lewis" },
            { label: "C", text: "A'salfo" },
            { label: "D", text: "Fally Ipupa" }
        ],
        answer: "A"
    },
    {
        category: "Musique",
        question: "Quel artiste est surnommé le 'Rossignol de la musique africaine' ?",
        choices: [
            { label: "A", text: "Salif Keita" },
            { label: "B", text: "Burna Boy" },
            { label: "C", text: "Koffi Olomidé" },
            { label: "D", text: "Awilo Longomba" }
        ],
        answer: "A"
    },
    {
        category: "Musique",
        question: "Quel instrument est souvent utilisé dans la musique traditionnelle griotique ?",
        choices: [
            { label: "A", text: "Balafon" },
            { label: "B", text: "Kora" },
            { label: "C", text: "Djembe" },
            { label: "D", text: "Tous les précédents" }
        ],
        answer: "D"
    },
    {
        category: "Musique",
        question: "Quel artiste béninois est célèbre pour avoir mêlé jazz et musique traditionnelle ?",
        choices: [
            { label: "A", text: "Stan Tohon" },
            { label: "B", text: "Angélique Kidjo" },
            { label: "C", text: "Gnonas Pedro" },
            { label: "D", text: "Fela Kuti" }
        ],
        answer: "B"
    },
    {
        category: "Musique",
        question: "De quel pays vient le zouglou ?",
        choices: [
            { label: "A", text: "Sénégal" },
            { label: "B", text: "Côte d'Ivoire" },
            { label: "C", text: "Congo" },
            { label: "D", text: "Bénin" }
        ],
        answer: "B"
    },
    {
        category: "Musique",
        question: "Qui est l’interprète de *Jerusalema* ?",
        choices: [
            { label: "A", text: "Burna Boy" },
            { label: "B", text: "Master KG" },
            { label: "C", text: "Diamond Platnumz" },
            { label: "D", text: "Davido" }
        ],
        answer: "B"
    },
    {
        category: "Musique",
        question: "Quel artiste béninois a remporté plusieurs Grammy Awards ?",
        choices: [
            { label: "A", text: "Stan Tohon" },
            { label: "B", text: "Angélique Kidjo" },
            { label: "C", text: "Richard Flash" },
            { label: "D", text: "Fémi Kuti" }
        ],
        answer: "B"
    },
    {
        category: "Musique",
        question: "Quel genre musical naît de la fusion entre rumba congolaise et musiques modernes ?",
        choices: [
            { label: "A", text: "Coupé-décalé" },
            { label: "B", text: "Soukous" },
            { label: "C", text: "Makossa" },
            { label: "D", text: "Gospel" }
        ],
        answer: "B"
    },
    {
        category: "Musique",
        question: "Qui est l’auteur du célèbre morceau *Zoblazo* ?",
        choices: [
            { label: "A", text: "Koffi Olomidé" },
            { label: "B", text: "Meiway" },
            { label: "C", text: "DJ Arafat" },
            { label: "D", text: "Bebi Philip" }
        ],
        answer: "B"
    },
    {
        category: "Musique",
        question: "Quel chanteur congolais est connu pour ses performances scéniques spectaculaires ?",
        choices: [
            { label: "A", text: "Papa Wemba" },
            { label: "B", text: "Fally Ipupa" },
            { label: "C", text: "Awilo Longomba" },
            { label: "D", text: "Youssou N'Dour" }
        ],
        answer: "C"
    },

    //   Catégorie : "Cinéma",
    {
        category: "Film",
        question: "Quel film béninois retrace l’histoire de Bio Guerra ?",
        choices: [
            { label: "A", text: "Le Roi Guézo" },
            { label: "B", text: "La colère de Bio Guerra" },
            { label: "C", text: "Résistance au Dahomey" },
            { label: "D", text: "L'Éveil des guerriers" }
        ],
        answer: "B"
    },
    {
        category: "Film",
        question: "Quel acteur joue le rôle principal dans le film *Black Panther* ?",
        choices: [
            { label: "A", text: "Chadwick Boseman" },
            { label: "B", text: "Michael B. Jordan" },
            { label: "C", text: "John Boyega" },
            { label: "D", text: "Idris Elba" }
        ],
        answer: "A"
    },
    {
        category: "Film",
        question: "Dans quel pays est situé le royaume fictif de Wakanda ?",
        choices: [
            { label: "A", text: "Afrique du Sud" },
            { label: "B", text: "Nigéria" },
            { label: "C", text: "Afrique de l'Est" },
            { label: "D", text: "Ce pays n'existe pas" }
        ],
        answer: "D"
    },
    {
        category: "Film",
        question: "Quel est le premier film africain à remporter un Oscar ?",
        choices: [
            { label: "A", text: "Timbuktu" },
            { label: "B", text: "Tsotsi" },
            { label: "C", text: "La Noire de..." },
            { label: "D", text: "The Boy Who Harnessed the Wind" }
        ],
        answer: "B"
    },
    {
        category: "Film",
        question: "Qui a réalisé le film béninois *L’Arbre sans fruit* ?",
        choices: [
            { label: "A", text: "Jean Odoutan" },
            { label: "B", text: "Nadjieka Tognon" },
            { label: "C", text: "Aïcha Macky" },
            { label: "D", text: "Angèle Ahouandjinou" }
        ],
        answer: "C"
    },
    {
        category: "Film",
        question: "Quel film retrace la vie d’une jeune fille vendue comme esclave au Nigeria ?",
        choices: [
            { label: "A", text: "Lionheart" },
            { label: "B", text: "Félicité" },
            { label: "C", text: "The Slave Girl" },
            { label: "D", text: "Half of a Yellow Sun" }
        ],
        answer: "C"
    },
    {
        category: "Film",
        question: "Quel pays est connu pour avoir une industrie cinématographique nommée Nollywood ?",
        choices: [
            { label: "A", text: "Ghana" },
            { label: "B", text: "Nigeria" },
            { label: "C", text: "Afrique du Sud" },
            { label: "D", text: "Kenya" }
        ],
        answer: "B"
    },
    {
        category: "Film",
        question: "Qui est l’héroïne dans *The Woman King* ?",
        choices: [
            { label: "A", text: "Lupita Nyong'o" },
            { label: "B", text: "Viola Davis" },
            { label: "C", text: "Danai Gurira" },
            { label: "D", text: "Thuso Mbedu" }
        ],
        answer: "B"
    },
    {
        category: "Film",
        question: "Quel film béninois évoque la migration des jeunes vers l’Europe ?",
        choices: [
            { label: "A", text: "Adjaho" },
            { label: "B", text: "Africa Paradis" },
            { label: "C", text: "Le Voyage" },
            { label: "D", text: "Retour au pays natal" }
        ],
        answer: "B"
    },
    {
        category: "Film",
        question: "Quel film nigérian de Genevieve Nnaji a été diffusé sur Netflix ?",
        choices: [
            { label: "A", text: "Road to Yesterday" },
            { label: "B", text: "Lionheart" },
            { label: "C", text: "Blood Sisters" },
            { label: "D", text: "Fifty" }
        ],
        answer: "B"
    },
    {
        category: "Film",
        question: "Quel personnage est célèbre pour la phrase : « I am your father » ?",
        choices: [
            { label: "A", text: "Darth Vader" },
            { label: "B", text: "Yoda" },
            { label: "C", text: "Obi-Wan Kenobi" },
            { label: "D", text: "Luke Skywalker" }
        ],
        answer: "A"
    },
    {
        category: "Film",
        question: "Quel est le nom du célèbre réalisateur béninois du film *Barbecue Pejo* ?",
        choices: [
            { label: "A", text: "Richard Flash" },
            { label: "B", text: "Jean Odoutan" },
            { label: "C", text: "André Dossou" },
            { label: "D", text: "Ismael Comlan" }
        ],
        answer: "B"
    },
    {
        category: "Film",
        question: "Quel film met en scène un jeune garçon qui construit une éolienne pour sauver son village ?",
        choices: [
            { label: "A", text: "The Boy Who Harnessed the Wind" },
            { label: "B", text: "Chibok Girl" },
            { label: "C", text: "Village Hope" },
            { label: "D", text: "Rising Sun" }
        ],
        answer: "A"
    },
    {
        category: "Film",
        question: "Dans quel film retrouve-t-on le personnage Simba ?",
        choices: [
            { label: "A", text: "Tarzan" },
            { label: "B", text: "Madagascar" },
            { label: "C", text: "Le Roi Lion" },
            { label: "D", text: "Zootopie" }
        ],
        answer: "C"
    },
    {
        category: "Film",
        question: "Quel film africain est basé sur les Amazones du Dahomey ?",
        choices: [
            { label: "A", text: "La Reine Guerrière" },
            { label: "B", text: "The Woman King" },
            { label: "C", text: "La Fureur d’Agodjié" },
            { label: "D", text: "Amazones d’Afrique" }
        ],
        answer: "B"
    },

    // Catégorie : Sport
    {
        category: "Sport",
        question: "Quel pays a remporté la Coupe du Monde de football 1998 ?",
        choices: [
            { label: "A", text: "Brésil" },
            { label: "B", text: "Allemagne" },
            { label: "C", text: "France" },
            { label: "D", text: "Italie" }
        ],
        answer: "C"
    },
    {
        category: "Sport",
        question: "Qui est considéré comme le roi du football ?",
        choices: [
            { label: "A", text: "Diego Maradona" },
            { label: "B", text: "Pelé" },
            { label: "C", text: "Zinédine Zidane" },
            { label: "D", text: "Cristiano Ronaldo" }
        ],
        answer: "B"
    },
    {
        category: "Sport",
        question: "Quelle discipline sportive est associée à Serena Williams ?",
        choices: [
            { label: "A", text: "Golf" },
            { label: "B", text: "Basketball" },
            { label: "C", text: "Tennis" },
            { label: "D", text: "Athlétisme" }
        ],
        answer: "C"
    },
    {
        category: "Sport",
        question: "Quel est le pays d'origine d'Usain Bolt ?",
        choices: [
            { label: "A", text: "Kenya" },
            { label: "B", text: "Nigéria" },
            { label: "C", text: "Jamaïque" },
            { label: "D", text: "États-Unis" }
        ],
        answer: "C"
    },
    {
        category: "Sport",
        question: "Combien de joueurs compte une équipe de football sur le terrain ?",
        choices: [
            { label: "A", text: "9" },
            { label: "B", text: "10" },
            { label: "C", text: "11" },
            { label: "D", text: "12" }
        ],
        answer: "C"
    },
    {
        category: "Sport",
        question: "Quel athlète a remporté 8 médailles d'or aux Jeux Olympiques de Pékin ?",
        choices: [
            { label: "A", text: "Michael Phelps" },
            { label: "B", text: "Usain Bolt" },
            { label: "C", text: "Carl Lewis" },
            { label: "D", text: "Mark Spitz" }
        ],
        answer: "A"
    },
    {
        category: "Sport",
        question: "En quelle année les Jeux Olympiques modernes ont-ils commencé ?",
        choices: [
            { label: "A", text: "1896" },
            { label: "B", text: "1900" },
            { label: "C", text: "1912" },
            { label: "D", text: "1924" }
        ],
        answer: "A"
    },
    {
        category: "Sport",
        question: "Quel basketteur est surnommé 'King James' ?",
        choices: [
            { label: "A", text: "Michael Jordan" },
            { label: "B", text: "LeBron James" },
            { label: "C", text: "Kobe Bryant" },
            { label: "D", text: "Stephen Curry" }
        ],
        answer: "B"
    },
    {
        category: "Sport",
        question: "Quelle est la durée d’un match de rugby (temps réglementaire) ?",
        choices: [
            { label: "A", text: "60 minutes" },
            { label: "B", text: "70 minutes" },
            { label: "C", text: "80 minutes" },
            { label: "D", text: "90 minutes" }
        ],
        answer: "C"
    },
    {
        category: "Sport",
        question: "Quelle ville a accueilli les JO d'été en 2016 ?",
        choices: [
            { label: "A", text: "Tokyo" },
            { label: "B", text: "Londres" },
            { label: "C", text: "Pékin" },
            { label: "D", text: "Rio de Janeiro" }
        ],
        answer: "D"
    },
    {
        category: "Sport",
        question: "Quel sport est le plus pratiqué au monde ?",
        choices: [
            { label: "A", text: "Basketball" },
            { label: "B", text: "Football" },
            { label: "C", text: "Cricket" },
            { label: "D", text: "Tennis" }
        ],
        answer: "B"
    },
    {
        category: "Sport",
        question: "Combien de grands chelems de tennis existent-ils ?",
        choices: [
            { label: "A", text: "3" },
            { label: "B", text: "4" },
            { label: "C", text: "5" },
            { label: "D", text: "6" }
        ],
        answer: "B"
    },
    {
        category: "Sport",
        question: "Quelle nation africaine a remporté la CAN 2019 ?",
        choices: [
            { label: "A", text: "Cameroun" },
            { label: "B", text: "Sénégal" },
            { label: "C", text: "Algérie" },
            { label: "D", text: "Nigeria" }
        ],
        answer: "C"
    },
    {
        category: "Sport",
        question: "Qui détient le record de buts en Coupe du Monde ?",
        choices: [
            { label: "A", text: "Pelé" },
            { label: "B", text: "Ronaldo" },
            { label: "C", text: "Miroslav Klose" },
            { label: "D", text: "Messi" }
        ],
        answer: "C"
    },
    {
        category: "Sport",
        question: "Quel est le sport national du Japon ?",
        choices: [
            { label: "A", text: "Judo" },
            { label: "B", text: "Sumo" },
            { label: "C", text: "Karate" },
            { label: "D", text: "Aïkido" }
        ],
        answer: "B"
    },

    // Catégorie : Histoire (monde)
    {
        category: "Histoire",
        question: "En quelle année a eu lieu la chute du mur de Berlin ?",
        choices: [
            { label: "A", text: "1987" },
            { label: "B", text: "1989" },
            { label: "C", text: "1990" },
            { label: "D", text: "1991" }
        ],
        answer: "B"
    },
    {
        category: "Histoire",
        question: "Qui était le premier président des États-Unis ?",
        choices: [
            { label: "A", text: "Thomas Jefferson" },
            { label: "B", text: "John Adams" },
            { label: "C", text: "Abraham Lincoln" },
            { label: "D", text: "George Washington" }
        ],
        answer: "D"
    },
    {
        category: "Histoire",
        question: "Quel empire a construit le Colisée ?",
        choices: [
            { label: "A", text: "Grec" },
            { label: "B", text: "Perse" },
            { label: "C", text: "Romain" },
            { label: "D", text: "Égyptien" }
        ],
        answer: "C"
    },
    {
        category: "Histoire",
        question: "Quel traité a mis fin à la Première Guerre mondiale ?",
        choices: [
            { label: "A", text: "Traité de Trianon" },
            { label: "B", text: "Traité de Versailles" },
            { label: "C", text: "Traité de Paris" },
            { label: "D", text: "Traité de Yalta" }
        ],
        answer: "B"
    },
    {
        category: "Histoire",
        question: "Qui était Cléopâtre ?",
        choices: [
            { label: "A", text: "Une impératrice grecque" },
            { label: "B", text: "Une reine égyptienne" },
            { label: "C", text: "Une prêtresse romaine" },
            { label: "D", text: "Une philosophe perse" }
        ],
        answer: "B"
    },
    {
        category: "Histoire",
        question: "Quel événement historique a eu lieu le 11 septembre 2001 ?",
        choices: [
            { label: "A", text: "Invasion de l’Irak" },
            { label: "B", text: "Attentats contre le World Trade Center" },
            { label: "C", text: "Crise des subprimes" },
            { label: "D", text: "Mort de Ben Laden" }
        ],
        answer: "B"
    },
    {
        category: "Histoire",
        question: "Quel personnage a fondé l’Empire mongol ?",
        choices: [
            { label: "A", text: "Attila" },
            { label: "B", text: "Tamerlan" },
            { label: "C", text: "Gengis Khan" },
            { label: "D", text: "Kubilaï Khan" }
        ],
        answer: "C"
    },
    {
        category: "Histoire",
        question: "Qui était Nelson Mandela ?",
        choices: [
            { label: "A", text: "Président du Nigéria" },
            { label: "B", text: "Roi du Zimbabwe" },
            { label: "C", text: "Leader anti-apartheid" },
            { label: "D", text: "Empereur du Ghana" }
        ],
        answer: "C"
    },
    {
        category: "Histoire",
        question: "La Révolution française a commencé en quelle année ?",
        choices: [
            { label: "A", text: "1776" },
            { label: "B", text: "1789" },
            { label: "C", text: "1804" },
            { label: "D", text: "1815" }
        ],
        answer: "B"
    },
    {
        category: "Histoire",
        question: "Quel empire a utilisé la langue latine ?",
        choices: [
            { label: "A", text: "Grec" },
            { label: "B", text: "Romain" },
            { label: "C", text: "Chinois" },
            { label: "D", text: "Byzantin" }
        ],
        answer: "B"
    },
    {
        category: "Histoire",
        question: "Quel philosophe a bu la ciguë ?",
        choices: [
            { label: "A", text: "Platon" },
            { label: "B", text: "Socrate" },
            { label: "C", text: "Aristote" },
            { label: "D", text: "Descartes" }
        ],
        answer: "B"
    },
    {
        category: "Histoire",
        question: "Qui a inventé l'imprimerie en Europe ?",
        choices: [
            { label: "A", text: "Galilée" },
            { label: "B", text: "Léonard de Vinci" },
            { label: "C", text: "Gutenberg" },
            { label: "D", text: "Newton" }
        ],
        answer: "C"
    },
    {
        category: "Histoire",
        question: "Quelle ville a été détruite par une éruption du Vésuve en 79 ?",
        choices: [
            { label: "A", text: "Athènes" },
            { label: "B", text: "Rome" },
            { label: "C", text: "Pompéi" },
            { label: "D", text: "Alexandrie" }
        ],
        answer: "C"
    },
    {
        category: "Histoire",
        question: "Quel explorateur a découvert l’Amérique en 1492 ?",
        choices: [
            { label: "A", text: "Magellan" },
            { label: "B", text: "Vasco de Gama" },
            { label: "C", text: "Christophe Colomb" },
            { label: "D", text: "Marco Polo" }
        ],
        answer: "C"
    },
    {
        category: "Histoire",
        question: "Quel mur symbolisait la division entre l'Est et l'Ouest ?",
        choices: [
            { label: "A", text: "Mur de Chine" },
            { label: "B", text: "Mur d’Hadrien" },
            { label: "C", text: "Mur de Berlin" },
            { label: "D", text: "Mur du Kremlin" }
        ],
        answer: "C"
    },
    {
        category: "Personnages_Historiques",
        question: "Qui était le premier président des États-Unis ?",
        choices: [
            { label: "A", text: "George Washington" },
            { label: "B", text: "Abraham Lincoln" },
            { label: "C", text: "Theodore Roosevelt" },
            { label: "D", text: "John F. Kennedy" }
        ],
        answer: "A"
    },
    {
        category: "Personnages_Historiques",
        question: "Quel dirigeant est associé à la politique de l'Apartheid en Afrique du Sud ?",
        choices: [
            { label: "A", text: "Nelson Mandela" },
            { label: "B", text: "F. W. de Klerk" },
            { label: "C", text: "Pieter Botha" },
            { label: "D", text: "Jacob Zuma" }
        ],
        answer: "C"
    },
    {
        category: "Personnages_Historiques",
        question: "Qui a dirigé l'Allemagne nazie durant la Seconde Guerre mondiale ?",
        choices: [
            { label: "A", text: "Joseph Staline" },
            { label: "B", text: "Adolf Hitler" },
            { label: "C", text: "Benito Mussolini" },
            { label: "D", text: "Winston Churchill" }
        ],
        answer: "B"
    },
    {
        category: "Personnages_Historiques",
        question: "Qui a été le leader de la lutte non-violente pour l'indépendance de l'Inde ?",
        choices: [
            { label: "A", text: "Jawaharlal Nehru" },
            { label: "B", text: "Subhas Chandra Bose" },
            { label: "C", text: "Mahatma Gandhi" },
            { label: "D", text: "Bhagat Singh" }
        ],
        answer: "C"
    },
    {
        category: "Personnages_Historiques",
        question: "Quel dictateur a mené la Révolution culturelle en Chine ?",
        choices: [
            { label: "A", text: "Deng Xiaoping" },
            { label: "B", text: "Mao Zedong" },
            { label: "C", text: "Chiang Kai-shek" },
            { label: "D", text: "Sun Yat-sen" }
        ],
        answer: "B"
    },
    {
        category: "Personnages_Historiques",
        question: "Qui était le dictateur italien durant la Seconde Guerre mondiale ?",
        choices: [
            { label: "A", text: "Benito Mussolini" },
            { label: "B", text: "Adolf Hitler" },
            { label: "C", text: "Joseph Staline" },
            { label: "D", text: "Winston Churchill" }
        ],
        answer: "A"
    },
    {
        category: "Personnages_Historiques",
        question: "Qui est connu pour avoir écrit la Déclaration d'indépendance américaine ?",
        choices: [
            { label: "A", text: "George Washington" },
            { label: "B", text: "Thomas Jefferson" },
            { label: "C", text: "Benjamin Franklin" },
            { label: "D", text: "John Adams" }
        ],
        answer: "B"
    },
    {
        category: "Personnages_Historiques",
        question: "Quel roi français est associé à la Révolution française ?",
        choices: [
            { label: "A", text: "Louis XIV" },
            { label: "B", text: "Louis XVI" },
            { label: "C", text: "Napoléon Bonaparte" },
            { label: "D", text: "Charles X" }
        ],
        answer: "B"
    },
    {
        category: "Personnages_Historiques",
        question: "Qui a été le premier empereur de France ?",
        choices: [
            { label: "A", text: "Napoléon Bonaparte" },
            { label: "B", text: "Louis XVI" },
            { label: "C", text: "Charlemagne" },
            { label: "D", text: "François Ier" }
        ],
        answer: "A"
    },
    {
        category: "Personnages_Historiques",
        question: "Qui a dirigé la Russie pendant la Révolution bolchévique ?",
        choices: [
            { label: "A", text: "Joseph Staline" },
            { label: "B", text: "Vladimir Lénine" },
            { label: "C", text: "Nikita Khrouchtchev" },
            { label: "D", text: "Leon Trotsky" }
        ],
        answer: "B"
    },
    {
        category: "Personnages_Historiques",
        question: "Qui a été le premier président sud-africain post-Apartheid ?",
        choices: [
            { label: "A", text: "Jacob Zuma" },
            { label: "B", text: "Thabo Mbeki" },
            { label: "C", text: "Nelson Mandela" },
            { label: "D", text: "F. W. de Klerk" }
        ],
        answer: "C"
    },
    {
        category: "Personnages_Historiques",
        question: "Quel leader révolutionnaire cubain est célèbre pour son rôle dans la révolution de 1959 ?",
        choices: [
            { label: "A", text: "Fidel Castro" },
            { label: "B", text: "Che Guevara" },
            { label: "C", text: "Raúl Castro" },
            { label: "D", text: "Hugo Chávez" }
        ],
        answer: "A"
    },
    {
        category: "Personnages_Historiques",
        question: "Quel président américain a aboli l'esclavage ?",
        choices: [
            { label: "A", text: "Theodore Roosevelt" },
            { label: "B", text: "Abraham Lincoln" },
            { label: "C", text: "Franklin D. Roosevelt" },
            { label: "D", text: "John F. Kennedy" }
        ],
        answer: "B"
    },
    {
        category: "Personnages_Historiques",
        question: "Qui était le dirigeant de l'Empire britannique durant son apogée ?",
        choices: [
            { label: "A", text: "Winston Churchill" },
            { label: "B", text: "Victoria" },
            { label: "C", text: "Elizabeth II" },
            { label: "D", text: "George VI" }
        ],
        answer: "B"
    },
    {
        category: "Personnages_Historiques",
        question: "Quel pharaon égyptien est célèbre pour avoir unifié l'Égypte antique ?",
        choices: [
            { label: "A", text: "Toutankhamon" },
            { label: "B", text: "Ramsès II" },
            { label: "C", text: "Narmer" },
            { label: "D", text: "Akhenaton" }
        ],
        answer: "C"
    },

];
export default questions;
