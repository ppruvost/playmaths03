/* ============================================================
   ====================  LISTE DES QUESTIONS  ==================
   ============================================================ */

const questions = [
  {
    question: "Lorsqu’un tissu glisse sur une table de coupe horizontale, la force qui s’oppose au mouvement est :",
    options: ["la gravité", "la poussée d’Archimède", "le frottement", "la force magnétique"],
    bonne_reponse: "le frottement",
    explication: "Le frottement entre le tissu et la table ralentit le mouvement."
  },
  {
    question: "Sur un plan incliné, un rouleau de tissu a tendance à :",
    options: ["rester immobile", "monter seul", "descendre la pente", "tourner sur lui-même sans bouger"],
    bonne_reponse: "descendre la pente",
    explication: "La composante du poids parallèle au plan l'entraîne vers le bas."
  },
  {
    question: "Quand une couturière pousse un chariot de matériel sur un sol horizontal, le mouvement commence seulement si :",
    options: ["la poussée est nulle", "la poussée est plus forte que les frottements", "la poussée est égale aux frottements", "les frottements sont plus forts"],
    bonne_reponse: "la poussée est plus forte que les frottements",
    explication: "Il faut dépasser les frottements pour mettre le chariot en mouvement."
  },
  {
    question: "Plus un plan est incliné, plus un rouleau de tissu :",
    options: ["ralentit", "s’arrête", "accélère", "reste immobile"],
    bonne_reponse: "accélère",
    explication: "L’inclinaison augmente la composante du poids qui fait accélérer l’objet."
  },
  {
    question: "Sur un plan horizontal, un objet continue son mouvement si :",
    options: ["une force continue agit sur lui", "une force arrête d’agir sur lui", "aucune force ne s’applique", "les frottements augmentent"],
    bonne_reponse: "une force continue agit sur lui",
    explication: "Les frottements l’arrêtent si aucune force ne compense."
  },
  {
    question: "Lorsqu’un rouleau de tissu roule moins bien sur une surface rugueuse, c’est parce que :",
    options: ["la gravité augmente", "le frottement augmente", "la masse diminue", "la vitesse augmente"],
    bonne_reponse: "le frottement augmente",
    explication: "Une surface rugueuse crée davantage de frottement."
  },
  {
    question: "Pour faciliter le déplacement d’un mannequin de couture, on peut :",
    options: ["augmenter le frottement", "réduire le frottement", "le poser sur un plan incliné", "augmenter sa masse"],
    bonne_reponse: "réduire le frottement",
    explication: "Des roulettes ou un sol lisse réduisent les frottements."
  },
  {
    question: "Lorsqu’on tire un tissu sur un plan incliné pour le remonter, il faut fournir :",
    options: ["moins de force", "autant de force que son poids total", "une force supérieure au poids projeté sur la pente", "aucune force"],
    bonne_reponse: "une force supérieure au poids projeté sur la pente",
    explication: "Il faut compenser la partie du poids qui tire l’objet vers le bas."
  },
  {
    question: "Un mannequin de couture reste immobile sur un plan horizontal lorsque :",
    options: ["les forces sont équilibrées", "la poussée est plus forte que les frottements", "le poids augmente", "le sol est glissant"],
    bonne_reponse: "les forces sont équilibrées",
    explication: "Si aucune force ne l'entraîne, il reste immobile."
  },
  {
    question: "Lorsque l’on incline légèrement la table de repassage, un fer posé dessus :",
    options: ["reste forcément immobile", "se déplace selon l’inclinaison", "monte la pente", "tourne sur lui-même"],
    bonne_reponse: "se déplace selon l’inclinaison",
    explication: "La composante du poids le fait glisser vers le bas."
  },
  {
    question: "Si un chariot chargé de tissus a du mal à démarrer, c’est généralement parce que :",
    options: ["sa masse est faible", "les frottements statiques sont élevés", "la roue est trop légère", "la pente est trop faible"],
    bonne_reponse: "les frottements statiques sont élevés",
    explication: "Le frottement statique s’oppose au début du mouvement."
  },
  {
    question: "Plus la masse d’un rouleau de tissu est grande, plus :",
    options: ["il glisse facilement", "il accélère vite sur un plan horizontal", "il est difficile à mettre en mouvement", "il est insensible au frottement"],
    bonne_reponse: "il est difficile à mettre en mouvement",
    explication: "Une masse plus grande demande plus de force pour dépasser les frottements."
  },
  {
    question: "Quand un tissu est tiré avec une force constante sur une table horizontale, la vitesse devient constante lorsque :",
    options: ["la force devient nulle", "la force est égale au frottement dynamique", "la masse augmente", "le plan est incliné"],
    bonne_reponse: "la force est égale au frottement dynamique",
    explication: "L’équilibre des forces donne un mouvement à vitesse constante."
  },
  {
    question: "Sur un plan incliné, un rouleau de tissu plus lourd :",
    options: ["descend plus lentement", "descend à la même accélération (hors frottements)", "reste immobile", "monte la pente"],
    bonne_reponse: "descend à la même accélération (hors frottements)",
    explication: "Sans frottements, la masse n’influence pas l’accélération d’une chute ou d’une descente."
  },
  {
    question: "Pour empêcher un mannequin de glisser sur un plan incliné, il faut :",
    options: ["réduire les frottements", "ajouter un revêtement antidérapant", "soulever le mannequin", "augmenter l’inclinaison"],
    bonne_reponse: "ajouter un revêtement antidérapant",
    explication: "Cela augmente les frottements et empêche le glissement."
  },
  {
    question: "Quand on pousse un chariot de couture en descente, celui-ci accélère car :",
    options: ["le poids aide au mouvement", "le poids s’annule", "les frottements disparaissent", "la masse diminue"],
    bonne_reponse: "le poids aide au mouvement",
    explication: "La composante du poids dans la pente augmente la force qui fait avancer le chariot."
  },
  {
    question: "Une boîte de bobines placée sur une table inclinée reste immobile si :",
    options: ["la pente est très forte", "le frottement est supérieur à la force qui la fait glisser", "la masse est faible", "le poids est nul"],
    bonne_reponse: "le frottement est supérieur à la force qui la fait glisser",
    explication: "Si les frottements sont trop forts, l’objet n'est pas entraîné."
  },
  {
    question: "Si l’on réduit les frottements entre un tissu et une table (par exemple en utilisant du papier sulfurisé), alors :",
    options: ["il devient plus difficile à déplacer", "il glisse plus facilement", "il ne peut plus s’arrêter", "il devient plus lourd"],
    bonne_reponse: "il glisse plus facilement",
    explication: "Réduire les frottements diminue la force nécessaire au mouvement."
  },
  {
    question: "Sur un sol rugueux, un mannequin à roulettes aura tendance à :",
    options: ["aller plus vite", "ralentir", "ne pas subir de frottements", "se soulever légèrement"],
    bonne_reponse: "ralentir",
    explication: "Le sol rugueux augmente le frottement et freine le mouvement."
  },
  {
    question: "Si l’on pousse un chariot de couture vers le haut d’une rampe, il finira par s’arrêter car :",
    options: ["sa masse augmente", "la gravité s’oppose au mouvement", "les frottements disparaissent", "la pente devient horizontale"],
    bonne_reponse: "la gravité s’oppose au mouvement",
    explication: "Le poids agit vers le bas et freine le chariot jusqu'à l'arrêt."
  }
];
/* ============================================================
   ====================  FIN DES QUESTIONS  ==================
   ============================================================ */
