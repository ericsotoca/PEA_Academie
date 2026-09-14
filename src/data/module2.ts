import { ModuleData } from '../types';

export const module2Data: ModuleData = {
  id: 'module-2',
  tierRequired: 2,
  title: 'Niveau 2 : Stratégies DCA & Portefeuilles Lazy',
  tagline: 'Mettre en place un plan d\'investissement passif automatisé et performant grâce à l\'effet DCA.',
  description: 'Découvrez comment les ETF synthétiques ouvrent les portes des marchés mondiaux sur votre PEA, apprenez à automatiser vos versements et composez votre allocation Lazy idéale.',
  duration: 'Durée estimée : 60-70 minutes',
  badge: 'Stratégie Passive',
  exerciseType: 'dca_simulator',
  checklistTitle: 'Checklist : Votre plan d\'investissement passif est-il en place ?',
  checklist: [
    {
      id: 'm2-c1',
      text: 'Comprendre le fonctionnement d\'un ETF à réplication synthétique (Swap) éligible au PEA.',
      category: 'technique'
    },
    {
      id: 'm2-c2',
      text: 'Calculer son budget d\'épargne mensuel dédié aux ETF.',
      category: 'budget'
    },
    {
      id: 'm2-c3',
      text: 'Choisir son allocation cible (ex: 100% MSCI World ou 90% MSCI World / 10% Emerging Markets).',
      category: 'allocation'
    },
    {
      id: 'm2-c4',
      text: 'Mettre en place un virement automatique de son compte bancaire courant vers son compte espèce PEA.',
      category: 'automatisation'
    },
    {
      id: 'm2-c5',
      text: 'Planifier un rappel mensuel à date fixe pour exécuter son achat d\'ETF (DCA).',
      category: 'discipline'
    }
  ],
  chapters: [
    {
      id: 'm2-ch1',
      order: 1,
      content: {
        id: 'm2-ch1',
        title: '1. Le secret du PEA : Les ETF synthétiques (Swap)',
        explanation: 'Légalement, le PEA ne devrait contenir que des actions d\'entreprises ayant leur siège social dans l\'Union Européenne (ou l\'Espace Économique Européen).\n\nMais alors, comment est-il possible d\'investir sur les plus grandes entreprises américaines comme Apple, Amazon, Tesla ou Nvidia dans un PEA ?\n\nC\'est grâce à la réplication synthétique (via un contrat appelé "Swap"). Le gérant de l\'ETF (par exemple Amundi ou BNP Paribas) détient un panier d\'actions européennes éligibles, mais signe un contrat financier d\'échange de performance (un "Swap") avec une grande institution financière (comme la Société Générale ou BNP). Cette dernière s\'engage à échanger la performance du panier européen contre celle de l\'indice américain (comme le S&P 500). C\'est une méthode extrêmement encadrée, sécurisée, et validée à 100 % par l\'Autorité des Marchés Financiers (AMF).',
        bulletPoints: [
          'Éligibilité géographique élargie : Vous pouvez investir sur les États-Unis (S&P 500), le Japon ou même le monde entier (MSCI World) au sein de la fiscalité avantageuse du PEA.',
          'Risque de contrepartie : Le risque que l\'émetteur du Swap fasse faillite existe mais est légalement limité à moins de 10 % de la valeur du fonds (et généralement collatéralisé à plus de 100 %).',
          'Frais de swap : Inclus directement dans les frais de gestion affichés (TER) de l\'ETF, donc transparents pour l\'investisseur.',
          'Précision de réplication : Les ETF synthétiques ont parfois une meilleure précision de réplication ("Tracking Error") que les ETF physiques grâce aux optimisations fiscales sur les dividendes d\'actions américaines.'
        ],
        examples: [
          {
            bad: {
              text: 'S\'interdire d\'investir sur les marchés américains et n\'acheter que des ETF d\'actions françaises par peur de l\'aspect technique des ETF synthétiques.',
              explanation: 'Vous passez à côté de plus de 60 % de la capitalisation boursière mondiale (représentée par les USA) et concentrez tous vos risques sur une seule zone géographique (la France ou l\'Europe).'
            },
            good: {
              text: 'Utiliser des ETF synthétiques (S&P 500 ou MSCI World) éligibles au PEA en toute confiance pour internationaliser massivement son épargne.',
              explanation: 'Vous profitez des géants de la Tech mondiale et d\'une diversification globale imbattable tout en restant dans le cadre fiscal idyllique du PEA français.'
            }
          }
        ],
        practicalTip: 'Ne craignez pas le mot "synthétique". En Europe, les ETF synthétiques respectent la réglementation stricte UCITS et ont prouvé leur solidité lors de toutes les crises majeures depuis 2008.',
        quickExercise: {
          prompt: 'En vos propres mots, expliquez à quoi sert un contrat d\'échange de performance (Swap) pour un ETF S&P 500 éligible au PEA.',
          placeholder: 'Le swap permet de...',
          guidance: 'Le swap permet d\'échanger la performance d\'un panier d\'actions physiques européennes éligibles au PEA contre la performance de l\'indice américain ciblé, rendant possible l\'investissement US dans le PEA.'
        }
      }
    },
    {
      id: 'm2-ch2',
      order: 2,
      content: {
        id: 'm2-ch2',
        title: '2. La puissance du DCA (Dollar Cost Averaging)',
        explanation: 'L\'une des plus grandes angoisses de l\'investisseur débutant est d\'investir au pire moment, juste avant un krach boursier. Essayer d\'anticiper les mouvements à court terme du marché ("Market Timing") est une stratégie perdante dans 99 % des cas.\n\nLa parade absolue s\'appelle le DCA (Dollar Cost Averaging). Cette méthode consiste à investir une somme d\'argent fixe à intervalles réguliers (par exemple, 150 € le 5 de chaque mois), peu importe que la bourse monte ou baisse.\n\nLorsque le marché baisse, votre somme fixe vous permet d\'acheter plus de parts d\'ETF. Lorsque le marché monte, votre somme fixe achète moins de parts. Sur le long terme, vous lissez mathématiquement votre prix d\'achat moyen et vous vous libérez totalement du stress lié aux variations quotidiennes du marché.',
        bulletPoints: [
          'Élimination des émotions : Vous n\'avez plus besoin de vous demander si c\'est "le bon moment" pour investir.',
          'Acheter bas mécaniquement : Le DCA vous force à acheter plus de parts quand les actions sont en solde.',
          'Discipline d\'épargne : Investir chaque mois dès la réception de son salaire permet d\'épargner en priorité absolue, avant de dépenser le reste.',
          'Simplicité d\'exécution : Une opération mensuelle rapide qui prend moins de 5 minutes sur votre téléphone.'
        ],
        examples: [
          {
            bad: {
              text: 'Garder son épargne sur un livret non productif pendant des mois en attendant "la prochaine grande crise" pour tout investir d\'un coup.',
              explanation: 'Pendant que vous attendez, le marché continue de monter. Lorsque la correction arrive enfin, le marché est souvent encore plus haut que lorsque vous avez commencé à attendre, et vous perdez l\'effet des intérêts composés.'
            },
            good: {
              text: 'Mettre en place un virement mensuel récurrent vers son PEA et acheter sa part d\'ETF chaque début de mois avec discipline.',
              explanation: 'Vous lissez le risque d\'entrée, profitez de chaque correction de marché et accumulez patiemment un capital colossal sans aucun stress mental.'
            }
          }
        ],
        practicalTip: 'Le DCA transforme la baisse des marchés en une bonne nouvelle : vous achetez des parts d\'ETF en réduction !',
        quickExercise: {
          prompt: 'Pourquoi le DCA est-il particulièrement adapté aux personnes salariées qui perçoivent un revenu mensuel fixe ?',
          placeholder: 'Votre explication...',
          guidance: 'Le DCA permet de faire coïncider vos flux de revenus réguliers (le salaire) avec vos investissements, favorisant une épargne indolore et automatique "payez-vous en premier".'
        }
      }
    },
    {
      id: 'm2-ch3',
      order: 3,
      content: {
        id: 'm2-ch3',
        title: '3. Composer son Portefeuille "Lazy" Idéal',
        explanation: 'La philosophie "Lazy" (fainéant en anglais) consiste à concevoir un portefeuille d\'une simplicité extrême, qui ne demande quasiment aucun arbitrage et prend moins de 10 minutes d\'entretien par an.\n\nLe nec plus ultra du portefeuille Lazy sur PEA se résume à une seule ligne : un ETF MSCI World. Cet unique produit couvre à lui seul l\'économie de 23 pays développés. \n\nSi vous souhaitez surpondérer les pays émergents (Chine, Inde, Brésil...) qui ne sont pas inclus dans l\'indice MSCI World classique, vous pouvez opter pour un portefeuille à 2 lignes : 90 % de MSCI World et 10 % de MSCI Emerging Markets. Rien de plus n\'est nécessaire pour égaler ou dépasser le rendement de la majorité des professionnels.',
        bulletPoints: [
          'Pas de superflu : Évitez de collectionner 15 ETF différents. Plus votre portefeuille a de lignes, plus il est difficile à gérer et plus les frais de courtage augmentent.',
          'Allocation 100 % Actions : Idéale si vous avez un horizon d\'investissement à long terme (10 ans et plus) et acceptez de voir votre capital fluctuer temporairement.',
          'Rééquilibrage simplifié : Avec seulement 1 ou 2 lignes, le maintien de votre répartition cible est un jeu d\'enfant.',
          'Poids des USA : L\'indice MSCI World contient environ 70 % d\'actions américaines, ce qui reflète la domination économique réelle de leurs multinationales.'
        ],
        examples: [
          {
            bad: {
              text: 'Acheter un ETF pour chaque pays (un ETF France, un ETF Allemagne, un ETF USA, un ETF Japon...) en pensant être mieux diversifié.',
              explanation: 'C\'est une fausse bonne idée : vous allez surpayer en frais de courtage pour passer 10 ordres différents chaque mois et faire des doublons inutiles.'
            },
            good: {
              text: 'Acheter un seul ETF global comme le MSCI World, ou au maximum y associer un ETF Emerging Markets.',
              explanation: 'Vous couvrez le globe entier avec un seul ou deux ordres d\'achat, minimisant les frais de transaction et l\'effort intellectuel requis.'
            }
          }
        ],
        practicalTip: 'Pour 95 % des particuliers, un portefeuille "MSCI World à 100 %" est la stratégie mathématiquement la plus efficace et la plus reposante mentalement.',
        quickExercise: {
          prompt: 'Si vous ciblez une allocation Lazy composée à 90 % d\'un ETF World et 10 % d\'un ETF Pays Émergents, et que vous investissez 200 € ce mois-ci, comment répartissez-vous cette somme ?',
          placeholder: 'Montants alloués à chaque ETF...',
          guidance: 'Allouez 180 € à l\'ETF World et 20 € à l\'ETF Pays Émergents. Note : avec les contraintes d\'arrondi au prix des parts (ex: part World à 400 €), vous adapterez les montants réels en arrondissant au plus près.'
        }
      }
    },
    {
      id: 'm2-ch4',
      order: 4,
      content: {
        id: 'm2-ch4',
        title: '4. La Stratégie Core-Satellite',
        explanation: 'Pour les investisseurs qui souhaitent pimenter un peu leur portefeuille tout en maintenant un profil de risque global maîtrisé, la stratégie **Core-Satellite** est l\'approche idéale.\n\nLe principe est simple : \n- Le **Core** (le cœur) représente 80 % à 90 % de votre portefeuille. Il est composé exclusivement d\'ETF très larges, stables et diversifiés (comme le MSCI World ou le S&P 500). Ce socle assure la performance globale de long terme de votre épargne.\n- Les **Satellites** représentent les 10 % à 20 % restants. Ce sont des ETF thématiques ou sectoriels (Technologie, Transition Énergétique, Eau, Intelligence Artificielle...) ou des ETF géographiques plus restreints. Ils servent à exprimer vos convictions personnelles fortes ou tenter de capter un supplément de performance (surperformance), sans jamais mettre en péril l\'ensemble de votre patrimoine boursier.',
        bulletPoints: [
          'Sécurisation majeure : Même si une thématique satellite s\'effondre, 90 % de votre argent reste investi de manière ultra-sécurisée sur l\'économie mondiale globale.',
          'Plaisir d\'investir : Permet d\'assouvir son envie de spéculer sur les secteurs du futur (comme la Tech ou la Santé) sans prendre de risques inconsidérés.',
          'Règle stricte : Ne laissez jamais la part des satellites dépasser la limite des 20 % maximum du capital global.'
        ],
        examples: [
          {
            bad: {
              text: 'Placer 80 % de son PEA sur un ETF thématique "Hydrogène Vert" sous prétexte que c\'est un secteur d\'avenir.',
              explanation: 'Si le secteur connaît une crise de croissance, traverse des régulations complexes ou subit une bulle sectorielle qui éclate, vous risquez de détruire la majeure partie de votre épargne de manière irréversible.'
            },
            good: {
              text: 'Placer 85 % sur un ETF MSCI World (Core) et 15 % répartis sur un ETF Technologie et un ETF Eau (Satellites).',
              explanation: 'Vous conservez un socle global indestructible tout en profitant des dynamiques de croissance des secteurs technologiques et écologiques majeurs.'
            }
          }
        ],
        practicalTip: 'Considérez les satellites comme des épices : un tout petit peu améliore le goût du plat, mais un excès rend le plat immangeable.',
        quickExercise: {
          prompt: 'Si vous avez un portefeuille de 50 000 €, quel montant maximum devriez-vous allouer à l\'ensemble de vos ETF satellites ?',
          placeholder: 'Montant en euros...',
          guidance: 'Le maximum recommandé de 20 % correspond à 10 000 €. Les 40 000 € restants (80 %) doivent impérativement demeurer sur votre socle Core (World / S&P 500).'
        }
      }
    },
    {
      id: 'm2-ch5',
      order: 5,
      content: {
        id: 'm2-ch5',
        title: '5. Comment passer concrètement un Ordre de Bourse',
        explanation: 'Acheter un ETF sur l\'application ou le site internet de votre courtier peut sembler intimidant la première fois. Il y a des chiffres qui bougent partout et des termes bizarres. Rassurez-vous, c\'est extrêmement simple et sécurisé si l\'on connaît les règles de base.\n\nLorsque vous achetez, vous devez saisir le code ISIN ou le code "ticker" de l\'ETF pour être sûr de sélectionner le bon produit. Ensuite, vous devez choisir le type d\'ordre de bourse :\n- **L\'ordre "Au Marché"** : Il s\'exécute instantanément au meilleur prix disponible à la seconde même. Idéal pour les ETF très liquides en milieu de journée.\n- **L\'ordre "À Cours Limité"** : Vous fixez le prix maximal que vous acceptez de payer pour une part. L\'ordre ne s\'exécutera que si le cours baisse sous ce prix fixé. C\'est l\'option la plus prudente pour maîtriser son prix d\'achat.',
        bulletPoints: [
          'Heures de trading : Passez toujours vos ordres de bourse lorsque les marchés financiers sont ouverts. Pour l\'Europe, entre 9h05 et 17h30. Évitez absolument le matin à l\'ouverture (9h00-9h05) ou le soir et le week-end car les spreads (écart achat/vente) sont élargis par les teneurs de marché.',
          'Quantité entière : Sur PEA, vous devez acheter des parts entières (1 part, 2 parts...). L\'achat de fractions de parts (ex: 0,5 part) n\'est pas autorisé par la loi.',
          'Frais de courtage : Ils sont directement affichés par votre courtier avant la validation finale. Vérifiez qu\'ils correspondent bien à votre grille tarifaire contractuelle.'
        ],
        examples: [
          {
            bad: {
              text: 'Passer un ordre "Au Marché" un dimanche soir ou un jour férié à 23h00.',
              explanation: 'L\'ordre sera enregistré et s\'exécutera dès l\'ouverture du marché le lundi à 9h00, un moment de forte volatilité et d\'écarts de prix élargis. Vous risquez de payer votre part d\'ETF sensiblement plus cher que prévu.'
            },
            good: {
              text: 'Passer un ordre d\'achat "À Cours Limité" ou "Au Marché" un mardi après-midi à 15h00 (quand les bourses européennes et américaines sont ouvertes simultanément).',
              explanation: 'La liquidité est alors maximale sur les ETF, les spreads sont extrêmement faibles, ce qui vous garantit d\'obtenir le meilleur prix réel possible sans mauvaises surprises.'
            }
          }
        ],
        practicalTip: 'Pour vos achats mensuels d\'ETF MSCI World ou S&P 500, utilisez de préférence l\'ordre "À Cours Limité" en plaçant une limite de prix très proche du cours actuel (quelques centimes au-dessus pour s\'assurer d\'une exécution rapide sans dérapage).',
        quickExercise: {
          prompt: 'Pourquoi est-il déconseillé de passer un ordre d\'achat d\'un ETF répliquant le marché américain à 10h00 du matin heure française ?',
          placeholder: 'Votre explication temporelle...',
          guidance: 'À 10h00 heure française, le marché américain est fermé (il ouvre à 15h30 heure de Paris). Bien que l\'ETF PEA soit coté à Paris, le teneur de marché applique un spread de sécurité plus élevé car les actions américaines sous-jacentes ne s\'échangent pas en direct.'
        }
      }
    },
    {
      id: 'm2-ch6',
      order: 6,
      content: {
        id: 'm2-ch6',
        title: '6. L\'Art du Rééquilibrage (Rebalancing)',
        explanation: 'Au fil du temps, les différents indices de votre portefeuille ne vont pas progresser au même rythme. Par exemple, si vous commencez avec 90 % de MSCI World et 10 % d\'Emerging Markets, au bout de deux ans, le MSCI World aura peut-être surperformé, décalant votre allocation réelle à 94 % / 6 %.\n\nLe **Rééquilibrage (Rebalancing)** consiste à ramener votre portefeuille à son allocation cible initiale. C\'est un exercice de gestion des risques crucial. Il vous force de manière totalement mécanique et sans émotion à appliquer la règle d\'or de la bourse : "Acheter bas et vendre haut" (en réallouant du capital vers l\'indice qui a temporairement moins bien performé).',
        bulletPoints: [
          'Fréquence recommandée : Inutile de rééquilibrer toutes les semaines. Une fois par an ou au maximum tous les six mois est largement suffisant.',
          'Méthode DCA indolore : Pour rééquilibrer, privilégiez l\'achat de parts supplémentaires de l\'ETF en retard avec votre épargne mensuelle, plutôt que la vente de l\'ETF gagnant (ce qui génère des frais de courtage).',
          'Vente (hors PEA / dans PEA) : Au sein du PEA, vous pouvez vendre des lignes pour en acheter d\'autres sans aucune fiscalité immédiate, profitez-en !'
        ],
        examples: [
          {
            bad: {
              text: 'Laisser un portefeuille dériver pendant des années sans surveillance, jusqu\'à ce qu\'un secteur volatil finisse par représenter 50 % de votre patrimoine global.',
              explanation: 'Vous êtes désormais exposé à un risque de perte majeure non maîtrisé, à l\'opposé de la philosophie de sécurité et de diversification initiale.'
            },
            good: {
              text: 'Vérifier la répartition de son portefeuille une fois par an (ex: chaque 2 janvier) et utiliser ses versements pour combler l\'écart de l\'ETF à la traîne.',
              explanation: 'Vous maintenez votre niveau de risque idéal de manière ordonnée, sans frais inutiles, et achetez mécaniquement les actifs en promotion.'
            }
          }
        ],
        practicalTip: 'Le rééquilibrage par l\'épargne fraîche est la méthode la plus simple : dirigez simplement vos prochains versements mensuels vers l\'ETF dont la part a glissé sous sa cible.',
        quickExercise: {
          prompt: 'Votre allocation cible est 80% World et 20% Emerging. Actuellement, votre portefeuille affiche 85% World et 15% Emerging. Que devez-vous faire lors de vos prochains investissements ?',
          placeholder: 'Votre plan de rééquilibrage...',
          guidance: 'Vous devez orienter vos prochains versements mensuels en priorité vers l\'ETF Emerging Markets jusqu\'à ce que sa proportion remonte à la cible de 20 %.'
        }
      }
    },
    {
      id: 'm2-ch7',
      order: 7,
      content: {
        id: 'm2-ch7',
        title: '7. Épargne de Précaution vs Épargne Bourse',
        explanation: 'Une erreur financière tragique consiste à placer l\'intégralité de ses économies en bourse d\'un coup, sans garder d\'argent liquide disponible à côté. C\'est le meilleur moyen de se retrouver piégé en cas de coup dur de la vie.\n\nAvant de verser un seul euro sur votre PEA, vous devez impérativement constituer votre **épargne de précaution**. Il s\'agit d\'une réserve de sécurité financière, liquide et garantie, disponible en quelques secondes pour financer les urgences (panne de voiture, réparation de chaudière, perte d\'emploi temporaire...).\n\nCette épargne doit être placée sur des livrets réglementés totalement exonérés d\'impôts et de risques, comme le Livret A, le LDDS (Livret de Développement Durable et Solidaire) ou le LEP (Livret d\'Épargne Populaire) si vous y êtes éligible.',
        bulletPoints: [
          'Montant idéal : On recommande généralement de conserver entre 3 et 6 mois de dépenses courantes sur vos livrets d\'épargne de précaution.',
          'Complète étanchéité : Cet argent n\'est pas un investissement. Même si son taux d\'intérêt semble bas face à l\'inflation, son rôle est d\'assurer votre sécurité et de protéger vos investissements en bourse.',
          'DCA protégé : Avoir une solide réserve de précaution vous évite de devoir vendre vos ETF à perte dans l\'urgence lors d\'un krach boursier.'
        ],
        examples: [
          {
            bad: {
              text: 'Placer toutes ses économies (10 000 €) sur son PEA en ETF S&P 500 et devoir tout revendre précipitamment au bout de 6 mois pour payer un remplacement de voiture en pleine baisse des marchés.',
              explanation: 'Vous perdez votre compteur fiscal PEA, matérialisez une perte financière de panique et détruisez votre stratégie d\'investissement de long terme.'
            },
            good: {
              text: 'Garder 5 000 € sur un Livret A pour les coups durs, et placer le reste de son capital et de son épargne mensuelle de manière sereine sur son PEA.',
              explanation: 'Vous êtes paré à toute éventualité. Votre investissement boursier peut fluctuer sans jamais perturber votre vie quotidienne ni menacer votre stabilité financière.'
            }
          }
        ],
        practicalTip: 'Considérez l\'épargne de précaution comme la fondation de votre maison financière. Sans fondations solides, l\'étage de l\'investissement boursier s\'écroulera à la première tempête.',
        quickExercise: {
          prompt: 'Si vos dépenses mensuelles incompressibles (loyer, nourriture, abonnements, assurances) s\'élèvent à 1 500 € par mois, quel montant de sécurité devriez-vous détenir sur vos livrets avant d\'investir en bourse ?',
          placeholder: 'Votre estimation de réserve de précaution...',
          guidance: 'Conservez entre 4 500 € (3 mois) et 9 000 € (6 mois) sur votre Livret A ou LDDS selon votre niveau de stabilité professionnelle (salarié vs indépendant).'
        }
      }
    },
    {
      id: 'm2-ch8',
      order: 8,
      content: {
        id: 'm2-ch8',
        title: '8. Modéliser des Scénarios d\'Épargne sur 30 ans',
        explanation: 'Pour rester motivé et discipliné sur une stratégie DCA pendant 10, 20 ou 30 ans, il est indispensable de comprendre visuellement le pouvoir du temps combiné au montant d\'épargne.\n\nInvestir de petites sommes de façon régulière produit des résultats bien plus spectaculaires que de gros versements désordonnés. Le tableau de modélisation suivant illustre la croissance d\'une épargne mensuelle à un taux de rendement annuel moyen réaliste de 7 % net de frais (qui est la performance historique moyenne de l\'indice mondial MSCI World sur les 40 dernières années) :\n\n- **100 € / mois** :\n  * En 10 ans : Capital total de 17 400 € (dont 12 000 € d\'apports et 5 400 € d\'intérêts).\n  * En 20 ans : Capital total de 52 000 € (dont 24 000 € d\'apports et 28 000 € d\'intérêts).\n  * En 30 ans : Capital total de 121 000 € (dont 36 000 € d\'apports et 85 000 € d\'intérêts).\n\n- **300 € / mois** :\n  * En 10 ans : Capital total de 52 200 €.\n  * En 20 ans : Capital total de 156 000 €.\n  * En 30 ans : Capital total de 363 000 € !',
        bulletPoints: [
          'Le point d\'inflexion : Remarquez comment entre la 20ème et la 30ème année, le capital fait plus que doubler alors que votre apport personnel n\'a augmenté que d\'un tiers. C\'est l\'explosion de la courbe exponentielle.',
          'Consistance : Mieux vaut investir 100 € par mois sans jamais s\'arrêter que 1 200 € d\'un coup une fois par an au hasard.',
          'Ajustement à l\'inflation : Au fil des ans et de vos augmentations de salaire, vous pourrez augmenter votre versement DCA pour protéger le pouvoir d\'achat réel de vos gains.'
        ],
        examples: [
          {
            bad: {
              text: 'Arrêter son plan d\'épargne boursière au bout de 3 ans sous prétexte que "les gains accumulés ne sont que de quelques centaines d\'euros".',
              explanation: 'Vous abandonnez au moment précis où le moteur des intérêts composés s\'apprête à monter en régime. La patience est la vertu absolue en investissement.'
            },
            good: {
              text: 'Maintenir son DCA fidèlement, année après année, en observant le solde grandir d\'abord lentement, puis de plus en plus vite.',
              explanation: 'Vous laissez la physique financière travailler pour vous et atteignez vos objectifs d\'indépendance patrimoniale à coup sûr.'
            }
          }
        ],
        practicalTip: 'Utilisez un simulateur d\'intérêts composés en ligne pour modéliser vos propres objectifs personnels et ajuster vos versements à votre budget réel.',
        quickExercise: {
          prompt: 'D\'après les chiffres ci-dessus pour une épargne de 300 € / mois sur 30 ans, quelle part du capital final (363 000 €) provient uniquement de l\'effet des intérêts générés (sachant que votre apport personnel est de 108 000 €) ?',
          placeholder: 'Votre calcul d\'intérêts...',
          guidance: 'Les intérêts représentent 255 000 € (363 000 - 108 000), soit plus de 70 % de la somme finale accumulée ! C\'est la magie de la huitième merveille du monde.'
        }
      }
    },
    {
      id: 'm2-ch9',
      order: 9,
      content: {
        id: 'm2-ch9',
        title: '9. Les ETF Responsables (ESG & ISR) sur PEA',
        explanation: 'De nombreux épargnants souhaitent donner du sens à leur argent et investir en conformité avec leurs valeurs environnementales, sociales et de gouvernance. C\'est désormais tout à fait possible sur le PEA grâce aux ETF labellisés **ESG** (Environmental, Social, and Governance) ou **ISR** (Investissement Socialement Responsable).\n\nCes ETF répliquent des indices dont les entreprises ont été rigoureusement notées et sélectionnées selon leur comportement éthique (réduction des émissions de carbone, égalité homme-femme, gouvernance transparente...) ou dont les secteurs controversés (armement, tabac, énergies fossiles denses...) ont été totalement exclus.',
        bulletPoints: [
          'Filtres ESG : Tri des entreprises sur des critères extra-financiers de qualité.',
          'Performance comparable : Historiquement, les ETF ESG/ISR affichent des performances très proches, voire parfois légèrement supérieures à celles des indices classiques de marché, balayant le vieux mythe selon lequel l\'éthique nuit au rendement.',
          'Disponibilité sur PEA : Les grands gestionnaires proposent d\'excellentes déclinaisons ISR d\'indices mondiaux (ex: Amundi MSCI World ESG Leaders) éligibles au PEA via Swap.',
          'Attention au Greenwashing : Lisez la fiche technique pour vérifier que les exclusions sectorielles correspondent bien à vos convictions personnelles.'
        ],
        examples: [
          {
            bad: {
              text: 'Penser que l\'on est obligé de financer le pétrole ou l\'armement pour gagner de l\'argent en bourse.',
              explanation: 'C\'est faux : les gammes d\'ETF ISR et climat se sont démocratisées et offrent une diversification optimale sans compromis sur votre rendement futur.'
            },
            good: {
              text: 'Remplacer son ETF World classique par sa version filtrée ESG/ISR ou climat chez son courtier pour aligner son épargne et sa conscience.',
              explanation: 'Vous soutenez activement la transition des entreprises vers de meilleures pratiques tout en développant efficacement votre patrimoine personnel.'
            }
          }
        ],
        practicalTip: 'Repérez le mot "ESG", "SRI" ou "Green" dans l\'intitulé officiel de l\'ETF pour identifier instantanément les versions éco-responsables éligibles au PEA.',
        quickExercise: {
          prompt: 'Que signifie l\'acronyme "ESG" qui qualifie de nombreux ETF modernes ?',
          placeholder: 'Signification de E, S, et G...',
          guidance: 'E pour Environnement (gestion des déchets, CO2), S pour Social (droits humains, bien-être au travail), et G pour Gouvernance (éthique des dirigeants, indépendance des conseils d\'administration).'
        }
      }
    },
    {
      id: 'm2-ch10',
      order: 10,
      content: {
        id: 'm2-ch10',
        title: '10. Se Préparer Mentalement aux Krachs Boursiers',
        explanation: 'La question n\'est pas de savoir SI un krach boursier surviendra, mais QUAND il surviendra. Durant votre parcours d\'investisseur de long terme, vous traverserez inévitablement une ou plusieurs crises majeures (récessions, tensions géopolitiques, paniques bancaires) où les marchés perdront 20 %, 30 % ou même 40 % de leur valeur en quelques semaines.\n\nCe moment est le test ultime de votre réussite financière. L\'investisseur non formé cède à la panique, vend au plus bas et perd son capital. L\'investisseur formé, lui, sait que les marchés financiers sont cycliques et rebondissent toujours. Mieux encore : il profite des crises pour acheter des parts d\'ETF de grande qualité à prix cassé.',
        bulletPoints: [
          'Leçon de l\'Histoire : Que ce soit après la bulle Internet de 2000, la crise des Subprimes de 2008, ou la crise du Covid-19 en 2020, les marchés boursiers mondiaux diversifiés ont TOUJOURS effacé leurs pertes et dépassé leurs sommets précédents.',
          'Pertes virtuelles : Une baisse de votre portefeuille sur votre écran n\'est qu\'une perte "papier". Elle ne devient réelle que si vous cliquez sur le bouton "Vendre".',
          'DCA en temps de crise : Continuer son DCA pendant une crise est la stratégie la plus lucrative qui soit. Vous accumulez un maximum de parts à bas coût, maximisant le rebond ultérieur.'
        ],
        examples: [
          {
            bad: {
              text: 'Paniquer lors d\'une baisse de 25 % du marché, liquider tout son portefeuille PEA en urgence et jurer de "ne plus jamais toucher à la bourse".',
              explanation: 'C\'est l\'erreur classique qui ruine un épargnant : vous vendez au pire moment, encaissez une perte réelle définitive et ratez le rebond historique qui suit généralement chaque crise.'
            },
            good: {
              text: 'Couper la télévision, ne plus regarder son solde boursier et maintenir rigoureusement son ordre d\'achat DCA mensuel habituel.',
              explanation: 'Vous achetez des parts d\'actions à prix discount et préparez activement la forte valorisation future de votre patrimoine lors de la reprise économique.'
            }
          }
        ],
        practicalTip: 'Considérez un krach boursier comme une période de soldes exceptionnelles dans votre grand magasin préféré. C\'est le moment d\'acheter, pas de fuir !',
        quickExercise: {
          prompt: 'Pourquoi un investisseur passif de 30 ans devrait-il techniquement se réjouir d\'un krach boursier temporaire ?',
          placeholder: 'Votre explication psychologique...',
          guidance: 'Parce qu\'il est en phase d\'accumulation de patrimoine. Il a encore 20 à 30 ans d\'achats mensuels devant lui. Les prix bas lui permettent de maximiser le nombre de parts acquises avant sa retraite.'
        }
      }
    }
  ]
};
