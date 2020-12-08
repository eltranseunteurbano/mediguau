const perrosObject = [
  {
    name: 'Labrador',
    description: 'Los labradores retrievers son excelentes perros de familia, siempre que tengas en cuenta que necesitan hacer ejercicio y recibir adiestramiento. Son perros criados para trabajar y trabajan duro, y les encanta que les asignen tareas. Los labradores suelen llevarse bien con los demás perros, otras mascotas y niños, siempre que el adiestramiento haya atenuado su exuberancia natural. Son perros fuertes y necesitan cierto adiestramiento en obediencia desde una edad muy temprana para evitar que acaben arrastrando a sus propietarios por la calle cuando les parezca.',
    peso: '27kgs - 33kgs.',
    energia: 'Media',
    animo: [5, 'Este amigo te alegrará los días y te hará reír hasta más no poder. Con su personalidad dulce y energética te hará los días más emocionantes'],
    paseo: [2, 'Lo debes sacar a pasear 2 veces al día, por lo menos entre 45 minutos a 1 hora.'],
    alimentacion: 2,
    vida: '10 - 12 años.',
    atencion: 'Media',
    colores: 'Negro, Amarillo, Chocolate.',
    adoptar: 'Cacchorritosco.'
  },
  {
    name: 'Golden Retriever',
    description: 'El golden retriever es de temperamento apacible, inteligente y cariñoso. Son juguetones, aunque dóciles con los niños, y tienden a llevarse bien con otras mascotas y con los extraños. Estos perros tienen ganas de agradar, lo que probablemente explique por qué responden tan bien al adiestramiento en obediencia, hecho que hace que sean perros de apoyo muy populares.',
    peso: '27kgs - 30kgs.',
    energia: 'Media',
    animo: [5, 'Este amigo te alegrará los días y te hará reír hasta más no poder. Con su personalidad dulce y energética te hará los días más emocionantes.'],
    paseo: [3, 'Lo debes sacar a pasear 3 veces al día, por lo menos entre 45 minutos a 1 hora.'],
    alimentacion: 3,
    vida: '10 - 13 años.',
    atencion: 'Alta',
    colores: 'Dorados en distintos tonos.',
    adoptar: 'Cacchorritosco.'
  },
  {
    name: 'Galgo',
    description: 'El temperamento del Galgo es el del perro de compañía ideal, es un compañero amable, nunca agresivo. Es cierto que algunos galgos pueden mostrarse a veces distantes con los extraños, pero no hostiles. En cualquier caso, basta un gesto o un simple acercamiento para romper el hielo y ganarse su afecto.',
    peso: '23kgs – 25kgs.',
    energia: 'Media',
    animo: [5, 'Este amigo te alegrará los días y te hará reír hasta más no poder. Con su personalidad dulce y energética te hará los días más emocionantes.'],
    paseo: [3, 'Lo debes sacar a pasear 3 veces al día, por lo menos entre 45 minutos a 1 hora.'],
    alimentacion: 3,
    vida: '10 - 18 años.',
    atencion: 'Alta',
    colores: 'Café en distintos tonos.',
    adoptar: 'Paraíso de la mascota.'
  },
  {
    name: 'Poodle',
    description: 'Los poodles son famosos por su inteligencia y fácil adiestramiento. Son perros juguetones, activos, amantes de la diversión y con sentido del ridículo. Se sienten realizados siendo el centro de atención y pueden desarrollar malas costumbres, como ladrar de forma molesta, si se los ignora o deja solos.',
    peso: '3kgs – 32kgs.',
    energia: 'Alta',
    animo: [5, 'Este amigo te alegrará los días y te hará reír hasta más no poder. Con su personalidad dulce y energética te hará los días más emocionantes.'],
    paseo: [3, 'Lo debes sacar a pasear 3 veces al día, por lo menos entre 45 minutos a 1 hora.'],
    alimentacion: 3,
    vida: '10 - 14 años.',
    atencion: 'Alta',
    colores: 'Cualquier sólido, como blanco, negro, gris, marrón y albaricoque.',
    adoptar: 'Paraíso de la mascota.'
  },
  {
    name: 'Pastor aléman',
    description: 'Los pastores alemanes se llevan bien con los niños y otras mascotas si crecen juntos, pero, tienden a dudar de la gente extraña, debido a sus instintos de guardianes.Se considera que esta raza es lista y fácil de adiestrar. Algunos pastores alemanes que no se han criado debidamente pueden ser muy excitables y nerviosos.',
    peso: '34kgs – 43kgs.',
    energia: 'Media',
    animo: [4, 'Este amigo te ayudará en momentos donde necesites de paz y tranquilidad porque su personalidad hace que tus emociones se disipen.'],
    paseo: [3, 'Lo debes sacar a pasear 3 veces al día, por lo menos entre 45 minutos a 1 hora.'],
    alimentacion: 3,
    vida: '10 - 12 años.',
    atencion: 'Media',
    colores: 'Negro y café.',
    adoptar: 'Paraíso de la mascota.'
  },
  {
    name: 'Corgi',
    description: 'Son conocidos por su inteligencia viva y su fuerte voluntad. Son perros activos, animados y nunca quieren estar fuera de la acción. En su mente, son perros grandes en cuerpos pequeños.',
    peso: '11kgs – 13kgs.',
    energia: 'Media',
    animo: [4, 'Este amigo te ayudará en momentos donde necesites de paz y tranquilidad porque su personalidad hace que tus emociones se disipen.'],
    paseo: [3, 'Lo debes sacar a pasear 3 veces al día, por lo menos entre 45 minutos a 1 hora.'],
    alimentacion: 3,
    vida: '11 - 13 años.',
    atencion: 'Alta',
    colores: 'Beige, negro y cobrizo, con o sin manchas blancas.',
    adoptar: 'Paraíso de la mascota.'
  },
  {
    name: 'Charles Spaniel',
    description: 'Además de ser un excelente compañero de hogar, el Charles Spaniel es también un gran perro de caza de presas pequeñas, lo que coloquialmente se conoce cómo perro cobrador.Sin embargo, con el paso de los años se ha ido adaptando más a los hogares cómo perro de compañía, debido a su carácter dulce y cariñoso, muy juguetón y respetuoso.',
    peso: '5kgs – 9kgs.',
    energia: 'Media',
    animo: [4, 'Este amigo te ayudará en momentos donde necesites de paz y tranquilidad porque su personalidad hace que tus emociones se disipen.'],
    paseo: [3, 'Lo debes sacar a pasear 3 veces al día, por lo menos entre 45 minutos a 1 hora.'],
    alimentacion: 3,
    vida: '12 - 15 años.',
    atencion: 'Alta',
    colores: 'Negro, cobrizo, con o sin manchas blancas o de color.',
    adoptar: 'Paraíso de la mascota.'
  },
  {
    name: 'Boston terrier',
    description: 'Creado a partir de cruces entre Bulldogs y terriers de origen inglés, el Boston Terrier fue concebido originalmente para participar en competiciones de peleas de perros. Sin embargo, ese pasado violento ha quedado ya olvidado y en la actualidad es uno de los perros más amables y cariñosos que existen. Un compañero ideal y afectuoso.',
    peso: '6kgs – 7kgs.',
    energia: 'Alta',
    animo: [5, 'Este amigo te alegrará los días y te hará reír hasta más no poder. Con su personalidad dulce y energética te hará los días más emocionantes.'],
    paseo: [2, 'Lo debes sacar a pasear 2 veces al día, por lo menos entre 30 a 70 minutos.'],
    alimentacion: 2,
    vida: '10 - 12 años.',
    atencion: 'Media',
    colores: 'Negro o atigrado, con manchas blancas que pueden aparecer en el hocico, el pecho, la frente y las patas.',
    adoptar: 'Paz animal.'
  },
  {
    name: 'Bulldog francés',
    description: 'El bulldog francés es un perro de casa de temperamento apacible que se siente realizado siendo el centro de atención. De hecho, la exige. Este perro es ideal para un hogar unipersonal, puesto que podría competir por tu atención con los demás miembros de la familia. El bulldog francés no ladra mucho, solo cuando encuentra una verdadera causa de excitación.',
    peso: '11kgs – 15kgs.',
    energia: 'Media',
    animo: [4, 'Este amigo te ayudará en momentos donde necesites de paz y tranquilidad porque su personalidad hace que tus emociones se disipen.'],
    paseo: [3, 'Lo debes sacar a pasear 3 veces al día, por lo menos entre 30 a 80 minutos.'],
    alimentacion: 2,
    vida: '9 - 11 años.',
    atencion: 'Media',
    colores: 'Negro, blanco o leonado.',
    adoptar: 'Paz animal.'
  },
  {
    name: 'Pug',
    description: 'Esta raza de pequeño tamaño llama la atención, en primer lugar, por su aspecto, en el que destacan su cara oscura y su nariz achatada. Los Pug son perros braquicéfalos, una conformación anatómica que se asocia a algunos problemas de salud. En cuanto al carácter, estos perros son realmente simpáticos, alegres y juguetones. Eso sí, no podemos esperar que nos acompañen en largas caminatas o en pruebas de canicross.',
    peso: '6kgs – 8kgs.',
    energia: 'Baja',
    animo: [3, 'Este amigo te acompañará siempre que te quieras relajar o sientas mucha presión y necesites a alguien con quien dejar atrás todo lo malo.'],
    paseo: [2, 'Lo debes sacar a pasear 2 veces al día, por lo menos entre 20 a 35 minutos.'],
    alimentacion: 3,
    vida: '13 - 15 años.',
    atencion: 'Alta',
    colores: 'Negro, plata, albaricoque y leonado.',
    adoptar: 'Paz animal.'
  },
  {
    name: 'Chihuahua',
    description: 'Son excelentes perros de compañía, les gusta que les presten atención y son fieles a sus propietarios, por lo tanto son perros muy  activos y les gusta estar ocupados. Como muchos perros pequeños, pueden ser más propensos a ladrar qué algunos perros grandes.',
    peso: '1kgs – 3kgs.',
    energia: 'Alta',
    animo: [1, 'Este amigo tiene un genio un poco elevado, por lo que siempre sabrás que está a tu lado y te protegerá de extraños o personas mal intencionadas.'],
    paseo: [3, 'Lo debes sacar a pasear 3 veces al día, por lo menos entre 30 a 40 minutos.'],
    alimentacion: 2,
    vida: '14 - 18 años.',
    atencion: 'Alta',
    colores: 'Variedad de colores.',
    adoptar: 'Paz animal.'
  },
  {
    name: 'Schnauzer',
    description: 'Los Schnauzers, perros muy adaptables que aprenden rápido, pueden ser tan felices viviendo en un piso en la ciudad como en el campo. Estos intrépidos perros son sociables y les gusta participar en las actividades familiares. Además son perritos robustos, atentos e intrépidos. Las ganas de jugar de los schnauzers los convierte en perros ideales para familias con niños con buen comportamiento. También tienen fama de obedientes, de aprender rápidamente y de entregarse a su familia.',
    peso: '5kgs – 10kgs.',
    energia: 'Media',
    animo: [5, 'Este amigo te alegrará los días y te hará reír hasta más no poder. Con su personalidad dulce y energética te hará los días más emocionantes.'],
    paseo: [3, 'Lo debes sacar a pasear 3 veces al día, por lo menos entre 30 a 40 minutos.'],
    alimentacion: 3,
    vida: '14 - 16 años.',
    atencion: 'Alta',
    colores: 'Pardo.',
    adoptar: 'Paraíso de la mascota.'
  },
  {
    name: 'Yorkshire terrier',
    description: 'El pequeño tamaño del Yorkshire terrier contradice su auténtica personalidad, que es enérgica, viva y dominante. Los Yorkshire terriers son cariñosos, pero también exigen mucha atención; esta raza es una buena elección para alguien que quiera consentir a un perro.Los Yorkshire terriers son excelentes perros de guarda.',
    peso: '5kgs – 10kgs.',
    energia: 'Media',
    animo: [5, 'Este amigo te alegrará los días y te hará reír hasta más no poder. Con su personalidad dulce y energética te hará los días más emocionantes.'],
    paseo: [3, 'Lo debes sacar a pasear 3 veces al día, por lo menos entre 30 a 40 minutos.'],
    alimentacion: 3,
    vida: '14 - 16 años.',
    atencion: 'Alta',
    colores: 'Plata y negro.',
    adoptar: 'Paraíso de la mascota.'
  },
  {
    name: 'Shiba inu',
    description: 'De las seis razas caninas genuinas de Japón, Shiba Inu es la más pequeña en tamaño, la palabra shiba se usa en japonés para designar el término “pequeño”. Es enérgico, ágil como un felino, muy despierto y siempre con ganas de trabajar y agradar, el Shiba Inu fue en sus orígenes un perro de caza especialmente eficaz en terrenos montañosos y abruptos. Hoy en día, es un perro de compañía muy apreciado y querido, con rasgos físicos muy parecidos a los del Akita Inu y famoso por sus inconfundibles orejas erguidas.',
    peso: '10kgs – 12kgs.',
    energia: 'Alta',
    animo: [1, 'Este amigo tiene un genio un poco elevado, por lo que siempre sabrás que está a tu lado y te protegerá de extraños o personas mal intencionadas.'],
    paseo: [3, 'Lo debes sacar a pasear 3 veces al día, por lo menos entre 20 a 30 minutos.'],
    alimentacion: 3,
    vida: '12 - 14 años',
    atencion: 'Alta',
    colores: 'Café claro con blanco.',
    adoptar: 'Paraíso de la mascota.'
  },
  {
    name: 'Border collie',
    description: 'Los border collies son perros activos y trabajadores que viven mejor en el campo. La raza es muy inteligente, aprende con rapidez y responde bien a los elogios. Dados sus instintos de pastoreo, son protectores con su familia y territorio y resultan excelentes perros de guarda. Cuidarán de los niños de la familia. Aunque se llevan bien con los niños y otras mascotas con las que crecen.',
    peso: '13kgs – 20kgs.',
    energia: 'Alta',
    animo: [5, 'Este amigo te alegrará los días y te hará reír hasta más no poder. Con su personalidad dulce y energética te hará los días más emocionantes.'],
    paseo: [3, 'Lo debes sacar a pasear 3 veces al día, por lo menos entre 45 minutos a 1 hora.'],
    alimentacion: 2,
    vida: '12 - 14 años.',
    atencion: 'Media',
    colores: 'Negro, blanco, sable.',
    adoptar: 'Paraíso de la mascota.'
  },
  {
    name: 'Husky siberiano',
    description: 'Los Huskies siberianos, son simpáticos e inteligentes, aunque algo independientes y tozudos. Se sienten realizados con la compañía de las personas, aunque necesitan un adiestramiento sólido y moderado desde que son cachorros. Son perros criados para correr, y su amor por esta actividad en ocasiones puede superar a su amor por sus propietarios. Los huskies siberianos tienden a ser simpáticos con las personas, incluidos los niños.',
    peso: '20kgs – 35kgs.',
    energia: 'Media',
    animo: [5, 'Este amigo te alegrará los días y te hará reír hasta más no poder. Con su personalidad dulce y energética te hará los días más emocionantes.'],
    paseo: [3, 'Lo debes sacar a pasear 3 veces al día, por lo menos entre 45 minutos a 1 hora.'],
    alimentacion: 2,
    vida: '11 - 13 años.',
    atencion: 'Media',
    colores: 'Negro, blanco.',
    adoptar: 'Cachorritosco.'
  },
  {
    name: 'Bóxer',
    description: 'Los boxers son perros inteligentes, muy enérgicos y juguetones a los que les gusta estar ocupados. Su temperamento refleja su crianza. Prefieren estar en compañía de sus propietarios y son mascotas fieles que protegerán a su familia y su hogar de los extraños.',
    peso: '22kgs – 36kgs.',
    energia: 'Alta',
    animo: [1, 'Este amigo tiene un genio un poco elevado, por lo que siempre sabrás que está a tu lado y te protegerá de extraños o personas mal intencionadas.'],
    paseo: [3, 'Lo debes sacar a pasear 3 veces al día, por lo menos entre 45 minutos a 1 hora.'],
    alimentacion: 2,
    vida: '8 - 10 años.',
    atencion: 'Alta',
    colores: 'Negro, blanco y café.',
    adoptar: 'Cachorritosco.'
  },
  {
    name: 'Bichón frisé',
    description: 'El bichón de pelo rizado se considera una estupenda mascota todo terreno juguetona y dulce. Los bichones se llevan bien con otras mascotas. Por lo general se considera que se llevan muy bien con los niños. Son fáciles de adiestrar.',
    peso: '3kgs – 6kgs.',
    energia: 'Media',
    animo: [4, 'Este amigo te ayudará en momentos donde necesites de paz y tranquilidad porque su personalidad hace que tus emociones se disipen.'],
    paseo: [3, 'Lo debes sacar a pasear 3 veces al día, por lo menos entre 30 a 45 minutos.'],
    alimentacion: 3,
    vida: '12 - 15 años.',
    atencion: 'Alta',
    colores: 'Blanco.',
    adoptar: 'Cachorritosco.'
  },
  {
    name: 'Foxhound Inglés',
    description: 'El temperamento del foxhound inglés, al igual que cualquier otro perro, se define por la genética, el aprendizaje y las experiencias vividas. No obstante, de forma general, hablamos de un perro de temperamento sociable y amistoso. Es muy dinámico, sociable y demanda compañía frecuente.',
    peso: '25kgs – 45kgs.',
    energia: 'Alta',
    animo: [5, 'Este amigo te alegrará los días y te hará reír hasta más no poder. Con su personalidad dulce y energética te hará los días más emocionantes.'],
    paseo: [3, 'Lo debes sacar a pasear 3 veces al día, por lo menos entre 45 minutos a 1 hora.'],
    alimentacion: 2,
    vida: '12 - 14 años.',
    atencion: 'Alta',
    colores: 'Blanco y café.',
    adoptar: 'Paz animal.'
  }
  
]

export default perrosObject;