import { ModuleData } from '../types';

export const module1Data: ModuleData = {
  id: 'module-1',
  tierRequired: 1,
  title: 'Niveau 1 : Les Fondations du PEA & des ETF',
  tagline: 'Comprendre le fonctionnement du PEA, la puissance des ETF et les bases de l\'investissement en bourse.',
  description: 'Apprenez à choisir le courtier idéal, à comprendre l\'importance de minimiser vos frais et à poser les bases solides de votre patrimoine futur.',
  duration: 'Durée estimée : 60-70 minutes',
  badge: 'Fondations solides',
  exerciseType: 'portfolio_builder',
  checklistTitle: 'Checklist : Prêt à ouvrir votre PEA et choisir vos premiers ETF ?',
  checklist: [
    {
      id: 'm1-c1',
      text: 'Choisir un courtier à frais ultra-bas (éviter absolument les banques traditionnelles).',
      category: 'courtier'
    },
    {
      id: 'm1-c2',
      text: 'Ouvrir un PEA (Plan d\'Épargne en Actions) pour prendre date fiscalement dès aujourd\'hui.',
      category: 'fiscalite'
    },
    {
      id: 'm1-c3',
      text: 'Comprendre la différence entre l\'investissement en actions individuelles et via un ETF.',
      category: 'etf'
    },
    {
      id: 'm1-c4',
      text: 'Évaluer son profil de risque et définir son horizon d\'investissement (minimum 5 à 10 ans).',
      category: 'psychologie'
    },
    {
      id: 'm1-c5',
      text: 'Comprendre le mécanisme de capitalisation des dividendes (intérêts composés).',
      category: 'interets'
    }
  ],
  chapters: [
    {
      id: 'm1-ch1',
      order: 1,
      content: {
        id: 'm1-ch1',
        title: '1. Pourquoi investir en Bourse via un PEA ?',
        explanation: 'La bourse est historiquement l\'un des placements les plus performants à long terme, mais l\'impôt peut lourdement impacter vos gains. En France, le PEA (Plan d\'Épargne en Actions) est une enveloppe fiscale exceptionnelle conçue pour encourager l\'épargne productive.\n\nLe grand avantage du PEA réside dans sa fiscalité : après 5 ans d\'ouverture, vos gains et dividendes sont totalement exonérés d\'impôt sur le revenu. Seuls les prélèvements sociaux (actuellement de 17,2 %) restent dus lors des retraits. Cela signifie que tout l\'argent qui reste dans le PEA grandit à l\'abri de l\'impôt, maximisant ainsi l\'effet boule de neige.',
        bulletPoints: [
          'Exonération fiscale : Zéro impôt sur le revenu sur vos plus-values après 5 ans d\'ancienneté du plan.',
          'Plafond de versement : Vous pouvez y verser jusqu\'à 150 000 € de capital (les gains peuvent dépasser ce montant).',
          'Prendre date : Même si vous n\'y versez que 10 €, ouvrez votre PEA dès maintenant pour lancer le compteur des 5 ans !',
          'Liberté de retrait : Vous pouvez retirer vos fonds à tout moment, mais un retrait avant 5 ans entraîne la clôture du plan (sauf cas exceptionnels).'
        ],
        examples: [
          {
            bad: {
              text: 'Investir sur un compte-titres ordinaire (CTO) sans utiliser son PEA au préalable.',
              explanation: 'Vous subirez la "flat tax" de 30 % sur tous vos gains et dividendes chaque année, ce qui ampute lourdement votre rendement à long terme.'
            },
            good: {
              text: 'Ouvrir un PEA immédiatement chez un courtier en ligne et y placer un premier versement dérisoire pour "activer" la date fiscale.',
              explanation: 'Vous sécurisez l\'ancienneté fiscale du PEA le plus tôt possible, même si vous ne commencez à investir sérieusement que dans quelques mois ou années.'
            }
          }
        ],
        practicalTip: 'Prenez date aujourd\'hui. L\'ouverture d\'un PEA ne prend que quelques minutes en ligne et ne vous engage à rien.',
        quickExercise: {
          prompt: 'Réfléchissez à l\'âge qu\'aura votre PEA dans 5 ans si vous l\'ouvrez aujourd\'hui. Quel projet de vie cet argent pourra-t-il financer à ce moment-là ?',
          placeholder: 'Mon projet dans 5 ans (ex: apport immobilier, indépendance financière, complément de retraite)...',
          guidance: 'Avoir un objectif concret à long terme est la meilleure source de discipline pour épargner régulièrement.'
        }
      }
    },
    {
      id: 'm1-ch2',
      order: 2,
      content: {
        id: 'm1-ch2',
        title: '2. Qu\'est-ce qu\'un ETF (Tracker) ?',
        explanation: 'Acheter des actions individuelles (comme L\'Oréal, Total ou Apple) demande du temps, des compétences approfondies et vous expose à un risque majeur : si l\'entreprise fait faillite, vous perdez tout.\n\nUn ETF (Exchange Traded Fund), aussi appelé "Tracker", est un produit d\'investissement révolutionnaire. C\'est un panier d\'actions qui réplique fidèlement un indice boursier existant (comme le CAC 40 ou le MSCI World). En achetant une seule part d\'un ETF MSCI World, vous investissez instantanément dans plus de 1 400 grandes entreprises mondiales. Si l\'une d\'elles trébuche, l\'impact sur votre portefeuille est négligeable.',
        bulletPoints: [
          'Diversification instantanée : Des centaines ou milliers d\'actions réunies en un seul produit.',
          'Frais de gestion dérisoires : Généralement entre 0,1 % et 0,4 % par an, contre 1,5 % à 2,5 % pour les fonds traditionnels des banques physiques.',
          'Simplicité d\'achat : Se négocie en bourse aussi simplement qu\'une action ordinaire, en un clic depuis votre PEA.',
          'Performance : Plus de 90 % des gérants professionnels de fonds échouent à battre les indices de référence à long terme. Avec un ETF, vous faites mieux qu\'eux avec zéro effort.'
        ],
        examples: [
          {
            bad: {
              text: 'Passer des heures à lire la presse financière pour essayer de deviner quelle action va monter la semaine prochaine.',
              explanation: 'C\'est s\'apparenter à du casino. Le risque de perte est maximal et les frais de courtage répétés vont grignoter vos performances.'
            },
            good: {
              text: 'Acheter régulièrement un ETF global diversifié et laisser l\'économie mondiale travailler pour soi.',
              explanation: 'Vous bénéficiez de la croissance des plus grandes entreprises mondiales (Apple, Microsoft, LVMH, Nestlé...) de manière passive et sécurisée.'
            }
          }
        ],
        practicalTip: 'Ne cherchez pas l\'aiguille dans la botte de foin : achetez simplement la botte de foin en choisissant un ETF large !',
        quickExercise: {
          prompt: 'Pourquoi un ETF diversifié mondial présente-t-il moins de risques qu\'une action isolée d\'une start-up technologique ?',
          placeholder: 'Votre explication en une ou deux phrases...',
          guidance: 'Pensez à la diversification : la faillite d\'une seule start-up fait perdre 100% du capital investi, alors que la faillite d\'une entreprise parmi 1400 dans un ETF mondial n\'a aucun impact visible.'
        }
      }
    },
    {
      id: 'm1-ch3',
      order: 3,
      content: {
        id: 'm1-ch3',
        title: '3. Le pouvoir des Intérêts Composés',
        explanation: 'Albert Einstein aurait décrit les intérêts composés comme la "huitième merveille du monde". C\'est le principe magique par lequel vos intérêts génèrent eux-mêmes des intérêts, créant une croissance exponentielle à long terme.\n\nAu début, la différence semble minime. Mais après 10, 20 ou 30 ans, la courbe s\'envole littéralement. En bourse, si vous réinvestissez systématiquement vos dividendes et laissez fructifier vos plus-values à l\'abri de la fiscalité (ce que permet idéalement le PEA), votre capital finit par croître beaucoup plus vite grâce aux gains passés qu\'à vos propres versements mensuels.',
        bulletPoints: [
          'Effet boule de neige : Les gains de cette année s\'ajoutent au capital et produiront des gains encore plus grands l\'année prochaine.',
          'Le facteur Temps : Plus vous commencez tôt, plus l\'effet exponentiel sera spectaculaire. Commencer à 20 ans avec 50 € par mois rapporte plus que commencer à 45 ans avec 200 € par mois !',
          'ETF Capitalisants (Acc) : Privilégiez les ETF qui réinvestissent automatiquement les dividendes au sein du fonds pour maximiser cet effet sans impôt ni frottement de frais.'
        ],
        examples: [
          {
            bad: {
              text: 'Retirer chaque petite plus-value ou dividende du PEA pour s\'offrir de petits achats impulsifs.',
              explanation: 'Vous brisez net l\'effet des intérêts composés. Votre capital de base n\'augmentera jamais assez pour générer une véritable rente à long terme.'
            },
            good: {
              text: 'Laisser les dividendes se réinvestir automatiquement et régulièrement au sein de votre PEA pendant des décennies.',
              explanation: 'Votre capital grossit de manière autonome et profite à fond du mécanisme de la capitalisation géométrique.'
            }
          }
        ],
        practicalTip: 'Le temps est votre meilleur allié en bourse, bien plus que la quantité d\'argent investie au départ. Soyez patient.',
        quickExercise: {
          prompt: 'Si vous investissez 200 € par mois à un taux moyen de 8 % par an pendant 30 ans, d\'après vous, quel sera l\'ordre de grandeur de votre capital final ? (Votre apport personnel total est de 72 000 €).',
          placeholder: 'Votre estimation (ex: 100 000 €, 150 000 €, plus de 250 000 € ?)...',
          guidance: 'La réponse va vous surprendre : le capital final approche les 300 000 € ! Près des 3/4 de cette somme proviennent uniquement des intérêts composés et non de votre épargne.'
        }
      }
    },
    {
      id: 'm1-ch4',
      order: 4,
      content: {
        id: 'm1-ch4',
        title: '4. Choisir son Courtier PEA',
        explanation: 'C\'est l\'erreur numéro un des débutants : ouvrir leur PEA dans leur banque traditionnelle de réseau (BNP, Société Générale, Crédit Agricole...). Ces établissements prélèvent des frais exorbitants qui viennent détruire une part colossale de vos rendements.\n\nLes banques traditionnelles facturent souvent des frais de tenue de compte, des droits de garde annuels (un pourcentage de votre capital boursier prélevé chaque année !) et des frais de courtage très élevés sur chaque transaction. À l\'inverse, les courtiers en ligne spécialisés ou certaines banques en ligne ne prélèvent aucun droit de garde ni frais de tenue de compte, et leurs frais de transaction sont limités par la loi française à 0,5 % maximum (souvent réduits à 0,2 % chez les meilleurs).',
        bulletPoints: [
          'Zéro droit de garde : C\'est la condition non négociable pour choisir votre courtier.',
          'Frais de courtage minimes : Cherchez des tarifs inférieurs à 0,3 % par ordre d\'achat ou de vente.',
          'Loi Pacte : Depuis 2020, les frais de courtage sur PEA sont légalement plafonnés à 0,5 % pour les ordres passés en ligne.',
          'Interface claire : Privilégiez des courtiers modernes avec une application mobile simple pour passer vos ordres d\'ETF mensuels sereinement.'
        ],
        errorsToAvoid: [
          'Ne signez jamais pour des "fonds maisons" ou OPCVM recommandés par votre conseiller bancaire classique. Ils ont de gros frais et sous-performent systématiquement.',
          'Ne payez jamais de frais d\'abonnement mensuel pour détenir un compte bourse.'
        ],
        practicalTip: 'Les meilleurs courtiers en ligne pour le PEA en France s\'appellent BoursoBank, Fortuneo, Bourse Direct ou encore EasyBourse. Comparez les grilles tarifaires avant d\'ouvrir.',
        quickExercise: {
          prompt: 'Vérifiez si votre courtier actuel (ou votre banque actuelle) facture des "droits de garde" sur les comptes d\'investissement.',
          placeholder: 'Nom de votre banque et présence de frais ou droits de garde...',
          guidance: 'Si votre banque facture des droits de garde, sachez que vous pouvez transférer votre PEA existant vers un courtier en ligne sans perdre l\'ancienneté fiscale !'
        }
      }
    },
    {
      id: 'm1-ch5',
      order: 5,
      content: {
        id: 'm1-ch5',
        title: '5. Sécurité, risques et volatilité',
        explanation: 'L\'investissement en actions comporte des risques. Les marchés financiers ne montent pas en ligne droite : ils traversent des cycles de hausse (marchés haussiers) et des périodes de baisse (marchés baissiers ou corrections).\n\nLa volatilité est le prix à payer pour obtenir des rendements largement supérieurs à ceux du Livret A ou des fonds en euros. À long terme (plus de 10 ans), la bourse mondiale n\'a cependant jamais perdu d\'argent. Le véritable risque n\'est pas la baisse des marchés, mais votre réaction psychologique face à cette baisse. Vendre ses ETF en panique pendant une baisse temporaire est le seul moyen de transformer une perte virtuelle en perte réelle.',
        bulletPoints: [
          'Volatilité temporaire : Les baisses font partie du jeu normal de l\'économie boursière.',
          'Argent disponible : N\'investissez jamais l\'argent dont vous pourriez avoir besoin dans les 3 à 5 prochaines années. Constituez-vous d\'abord une épargne de précaution (Livret A/LDDS).',
          'La patience paye : À long terme, l\'économie mondiale progresse grâce à l\'innovation, la démographie et l\'inflation. Les ETF diversifiés en profitent mécaniquement.',
          'Règle d\'or : On ne perd pas d\'argent tant qu\'on ne vend pas !'
        ],
        practicalTip: 'Investissez uniquement de l\'argent "perdu psychologiquement" : si vous n\'avez pas besoin de ces fonds à court terme, la baisse du marché doit vous laisser totalement indifférent.',
        quickExercise: {
          prompt: 'Si votre portefeuille d\'ETF de 10 000 € subit une crise passagère et affiche temporairement une baisse de 20 % (valeur à 8 000 €), quelle est l\'attitude rationnelle à adopter ?',
          placeholder: 'Votre réaction face à la baisse...',
          guidance: 'L\'attitude rationnelle est de ne rien faire, ou mieux, de continuer à investir mensuellement pour acheter des parts d\'ETF moins chères (soldes d\'actions !).'
        }
      }
    },
    {
      id: 'm1-ch6',
      order: 6,
      content: {
        id: 'm1-ch6',
        title: '6. Gestion Passive vs Gestion Active',
        explanation: 'La gestion active consiste, pour un gérant de fonds, à sélectionner des actions individuelles dans l\'espoir de battre la moyenne du marché. La gestion passive, elle, se contente de répliquer le marché via des indices (ETF).\n\nToutes les études scientifiques d\'envergure (comme le rapport d\'indices S&P SPIVA) démontrent que sur un horizon de 10 ans, plus de 90 % des fonds actifs de grandes institutions financières sous-performent leur indice de référence. Pourquoi ? Parce que prédire l\'avenir est extrêmement complexe, et parce que les frais de gestion prélevés par ces fonds actifs (souvent 2 % par an) agissent comme un boulet financier permanent qui plombe leur rendement cumulé.',
        bulletPoints: [
          'Frais réduits : Les ETF ont des frais 5 à 10 fois inférieurs aux fonds classiques.',
          'Performance constante : Vous obtenez exactement le rendement du marché boursier, sans risque de mauvais arbitrage humain.',
          'Gain de temps : Zéro heure passée à analyser les rapports financiers individuels complexes des entreprises.',
          'Sérénité de long terme : Moins de transactions, moins de frottements de courtage, plus de rendement net d\'impôt.'
        ],
        examples: [
          {
            bad: {
              text: 'Faire confiance à un conseiller bancaire classique qui vous propose le fonds actions maison "Sélection Active Europe".',
              explanation: 'Ce fonds prendra 2 % de frais par an et a de grandes chances de réaliser une performance inférieure de 1,5 % à 2 % par rapport à un simple ETF passif Europe.'
            },
            good: {
              text: 'Investir sur un simple ETF répliquant un indice global avec des frais inférieurs à 0,3 % par an.',
              explanation: 'Vous surperformez passivement la quasi-totalité des investisseurs professionnels et conservez la quasi-intégralité de vos gains.'
            }
          }
        ],
        practicalTip: 'Acceptez de ne pas faire mieux que la moyenne du marché pour réussir : c\'est le secret qui vous rendra plus riche que la majorité des experts.',
        quickExercise: {
          prompt: 'Expliquez pourquoi des frais de gestion de 2 % par an sont une catastrophe comparés à des frais d\'ETF de 0,2 % sur une période de 20 ans.',
          placeholder: 'Votre explication sur les frais cumulés...',
          guidance: 'La différence de 1,8 % de frais par an cumulée sur 20 ans ampute votre patrimoine d\'environ 30 % à 40 % de sa valeur finale potentielle en raison des intérêts composés perdus.'
        }
      }
    },
    {
      id: 'm1-ch7',
      order: 7,
      content: {
        id: 'm1-ch7',
        title: '7. Le Cadre Légal et les Règles du PEA',
        explanation: 'Le PEA est un contrat hautement réglementé par l\'État français. Il dispose de règles précises qu\'il convient de maîtriser pour éviter tout faux pas fiscal ou clôture accidentelle.\n\nTout d\'abord, sachez que vous n\'êtes autorisé à posséder qu\'un seul PEA par personne physique (deux pour un couple marié ou pacsé). De plus, l\'ouverture du plan démarre officiellement au jour du tout premier versement (la "prise de date"), même si le versement n\'est que de quelques euros. Les versements cumulés ne peuvent dépasser 150 000 € (le plafond de versement), mais la valeur globale de votre portefeuille peut tout à fait dépasser ce montant au fil de vos gains et de la capitalisation.',
        bulletPoints: [
          'Règle des 5 ans : Tout retrait partiel effectué après 5 ans d\'ancienneté fiscale n\'entraîne pas la clôture du plan et permet de continuer à faire des versements ultérieurs.',
          'Retrait prématuré : Tout retrait effectué avant 5 ans entraîne la clôture automatique du PEA et la taxation des gains à la flat-tax (sauf cas de création d\'entreprise ou licenciement).',
          'PEA Jeune : Les jeunes rattachés au foyer fiscal de leurs parents peuvent ouvrir un "PEA Jeune" plafonné à 20 000 €.',
          'Transfert possible : Vous pouvez déménager votre PEA d\'un établissement à un autre à tout moment sans réinitialiser l\'ancienneté de votre plan.'
        ],
        examples: [
          {
            bad: {
              text: 'Retirer 100 € de son PEA au bout de 3 ans d\'ouverture pour financer un imprévu passager.',
              explanation: 'Cela entraîne la clôture définitive de votre PEA, la vente forcée de toutes vos positions boursières et la perte de votre précieux compteur d\'âge fiscal.'
            },
            good: {
              text: 'Utiliser son épargne de précaution (Livret A) pour faire face aux imprévus et laisser son PEA intact pendant au moins 5 ans.',
              explanation: 'Vous protégez votre compteur d\'âge fiscal et sécurisez l\'exemption d\'impôts totale sur tous vos gains futurs.'
            }
          }
        ],
        practicalTip: 'Pensez au transfert ! Si vous avez ouvert un PEA dans une banque traditionnelle il y a quelques années, demandez son transfert chez un courtier en ligne pas cher pour garder l\'antériorité fiscale.',
        quickExercise: {
          prompt: 'Quel est l\'impact fiscal précis d\'un retrait partiel effectué 6 ans après l\'ouverture de votre PEA ?',
          placeholder: 'Votre réponse sur la fiscalité après 5 ans...',
          guidance: 'Le gain associé au retrait est exonéré d\'impôt sur le revenu. Seuls les prélèvements sociaux de 17,2 % sont prélevés au prorata de la plus-value retirée, et votre PEA reste actif.'
        }
      }
    },
    {
      id: 'm1-ch8',
      order: 8,
      content: {
        id: 'm1-ch8',
        title: '8. Dividendes : Distribution vs Capitalisation',
        explanation: 'Les entreprises qui composent un indice boursier distribuent régulièrement une partie de leurs bénéfices sous forme de dividendes. Lorsque vous détenez un ETF, vous avez deux manières de gérer ces dividendes selon le type d\'ETF choisi :\n\n- Les ETF **Distribuants (Dist / D)** : Ils vous versent ces dividendes en espèces directement sur le compte espèces de votre PEA. C\'est à vous de décider de les réemployer manuellement.\n- Les ETF **Capitalisants (Acc / C)** : Ils ne vous versent rien en espèces. Les dividendes perçus sont immédiatement et automatiquement réinvestis par le gérant au sein de l\'ETF, augmentant ainsi mécaniquement la valeur de vos parts.\n\nPour le PEA et une stratégie de capitalisation à long terme, les ETF capitalisants sont largement supérieurs.',
        bulletPoints: [
          'Zéro frottement de courtage : Pas de petits ordres d\'achats manuels à passer (qui génèrent des frais de transaction minimes) pour réinvestir les dividendes.',
          'Optimisation mathématique : Les dividendes travaillent instantanément 24h/24 et 7j/7, augmentant la puissance des intérêts composés.',
          'Simplicité administrative : Pas d\'espèces qui dorment sur votre compte espèces bêtement sans produire d\'intérêts.',
          'Choix fiscal neutre : Au sein du PEA, aucun choix n\'entraîne de taxation immédiate, mais l\'automatisation des ETF capitalisants évite de commettre des erreurs de timing.'
        ],
        examples: [
          {
            bad: {
              text: 'Prendre un ETF distribuant et laisser les dividendes s\'accumuler sur le compte espèces du PEA pendant des années sans les réinvestir.',
              explanation: 'Cette épargne dormante ne produit aucun rendement et subit de plein fouet l\'érosion monétaire de l\'inflation.'
            },
            good: {
              text: 'Sélectionner des ETF portant la mention "Acc" ou "C" (pour "Accumulating" ou "Capitalisation") dans leur dénomination.',
              explanation: 'Le fonds travaille en totale autonomie, vos dividendes sont réinvestis instantanément à la source, maximisant la capitalisation.'
            }
          }
        ],
        practicalTip: 'Recherchez toujours les lettres "C" ou "Acc" dans le nom de l\'ETF pour vous assurer qu\'il s\'agit d\'un ETF capitalisant (ex: Amundi MSCI World UCITS ETF EUR Acc).',
        quickExercise: {
          prompt: 'Dans quel cas un investisseur pourrait-il préférer un ETF distribuant (Dist), et pourquoi est-ce moins pertinent en phase de constitution de patrimoine ?',
          placeholder: 'Votre explication sur l\'arbitrage...',
          guidance: 'Le format Distribuant est utile en phase de rente (pour consommer ses gains). En phase de capitalisation active, il impose des frais de courtage et une perte de temps inutiles pour réinvestir.'
        }
      }
    },
    {
      id: 'm1-ch9',
      order: 9,
      content: {
        id: 'm1-ch9',
        title: '9. Décrypter les Frais Cachés à Éviter',
        explanation: 'En investissement boursier, les frais sont votre pire ennemi de long terme. Un écart de frais en apparence minime peut représenter des dizaines de milliers d\'euros de manque à gagner sur 20 ou 30 ans. Il convient d\'analyser et de chasser tous les frais parasites.\n\nIl existe deux grandes catégories de frais :\n1. Les frais liés à votre enveloppe (le PEA) chez votre courtier : frais de tenue de compte, droits de garde, frais de transaction (courtage).\n2. Les frais intégrés dans le produit financier (l\'ETF) : le TER (Total Expense Ratio) ou frais de gestion annuels courants.\n\nCertaines banques traditionnelles y ajoutent des "frais d\'entrée" ou des "frais de sortie" sur les OPCVM classiques. Heureusement, ces frais d\'entrée/sortie sont de 0 % sur la quasi-totalité des ETF négociés en direct.',
        bulletPoints: [
          'Droits de garde : Prélèvement fixe ou proportionnel au capital, facturé par les banques physiques simplement pour conserver vos titres. À fuir absolument !',
          'Frais de change : Facturés lorsque vous achetez un titre libellé dans une autre devise. Chez certains courtiers, ils sont élevés. Astuce : achetez des ETF cotés en Euro.',
          'Plafond loi Pacte : Les frais de courtage en ligne sur PEA sont plafonnés légalement à 0,5 % par ordre.',
          'Frais de transfert : Si vous quittez votre banque, des frais de transfert sont facturés par ligne de titre (souvent remboursés par votre nouveau courtier en ligne).'
        ],
        examples: [
          {
            bad: {
              text: 'Acheter un fonds proposé par sa banque avec 2 % de frais d\'entrée et 1,8 % de frais de gestion annuels.',
              explanation: 'Dès le premier jour, vous perdez 2 % de votre capital. Ensuite, le fonds doit surperformer le marché de 1,8 % chaque année simplement pour égaler un simple ETF gratuit à l\'achat et à frais minimes.'
            },
            good: {
              text: 'Sélectionner des ETF liquides et réputés avec un TER compris entre 0,10 % et 0,38 % par an, sans droits de garde ni frais de tenue de compte.',
              explanation: 'La quasi-totalité de l\'argent investi travaille directement pour vous et se capitalise sans être captée par des intermédiaires financiers.'
            }
          }
        ],
        practicalTip: 'Lisez toujours le KID (Document d\'Informations Clés) avant d\'acheter un ETF : la ligne "frais courants" doit y être clairement mentionnée et analysée.',
        quickExercise: {
          prompt: 'Si vous investissez 10 000 € à 7 % de rendement moyen par an, quelle sera la différence de capital final au bout de 25 ans entre un produit à 0,2 % de frais et un produit à 1,8 % de frais ?',
          placeholder: 'Votre estimation du coût des frais sur 25 ans...',
          guidance: 'Le produit avec 0,2 % de frais cumulera environ 51 000 €. Celui avec 1,8 % de frais cumulera seulement 36 000 €. Ces "petits" 1,6 % d\'écart de frais vous ont coûté 15 000 € d\'intérêts perdus !'
        }
      }
    },
    {
      id: 'm1-ch10',
      order: 10,
      content: {
        id: 'm1-ch10',
        title: '10. La Psychologie de l\'Investisseur Passif',
        explanation: 'On dit souvent que la bourse est un jeu psychologique où les impatients transfèrent leur argent aux patients. C\'est d\'autant plus vrai pour l\'investisseur passif en ETF.\n\nLa méthode passive ne requiert aucun génie mathématique, mais elle exige une discipline de fer et un détachement total face à l\'actualité financière anxiogène. Les chaînes d\'information continue vivent du sensationnalisme et adorent annoncer l\'apocalypse financière imminente. Votre rôle consiste à ignorer ce "bruit de fond". Si vous investissez pour les 15 ou 20 prochaines années, une baisse du marché de 15 % cette semaine n\'a absolument aucune importance sur votre objectif final.',
        bulletPoints: [
          'Le marché progresse à long terme : Malgré les guerres, les crises sanitaires et les récessions, les indices mondiaux ont toujours fini par rebondir et battre de nouveaux sommets.',
          'Éviter le FOMO (Fear Of Missing Out) : N\'achetez pas des actions à la mode au sommet simplement parce que "tout le monde en parle" sur les réseaux sociaux.',
          'Automatiser pour se détacher : Moins vous regardez votre portefeuille boursier, mieux vous dormez et moins vous êtes tenté de faire des transactions impulsives nuisibles.',
          'L\'ennui est payant : Un bon investissement passif doit être d\'un ennui mortel. C\'est le prix de la réussite patrimoniale solide.'
        ],
        examples: [
          {
            bad: {
              text: 'Consulter l\'application de son courtier 3 fois par jour et vendre ses ETF MSCI World dès que l\'indice affiche rouge.',
              explanation: 'Vous accumulez du stress, commettez des erreurs de timing catastrophiques, payez des frais de transaction et sabotez vos gains à long terme.'
            },
            good: {
              text: 'Se connecter une fois par mois, placer son ordre DCA en 3 minutes de manière robotique, puis fermer l\'application jusqu\'au mois suivant.',
              explanation: 'Vous préservez votre charge mentale, lissez les variations de marché de manière sereine et laissez le temps faire son œuvre d\'accumulation passive.'
            }
          }
        ],
        practicalTip: 'Désinstallez les applications d\'actualité boursière ou de suivi quotidien des cours. Votre objectif est à long terme, le quotidien ne vous concerne pas.',
        quickExercise: {
          prompt: 'Quelle phrase simple pouvez-vous vous répéter pour garder votre calme et continuer votre DCA si les journaux annoncent "Krach historique en Bourse" ?',
          placeholder: 'Votre mantra d\'investisseur...',
          guidance: 'Un excellent mantra : "Le marché est en solde, mon DCA achète aujourd\'hui plus de parts à bas prix pour mon avenir." ou encore "Je n\'ai pas besoin de cet argent avant 15 ans."'
        }
      }
    }
  ]
};
