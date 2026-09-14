import { ModuleData } from '../types';

export const module3Data: ModuleData = {
  id: 'module-3',
  tierRequired: 3,
  title: 'Niveau 3 : Optimisation, Fiscalité & Sélection d\'ETF',
  tagline: 'Devenir totalement autonome : analyser les fiches techniques des ETF, optimiser la fiscalité complexe et surmonter les crises.',
  description: 'Apprenez à dénicher les meilleurs ETF grâce à l\'analyse des indicateurs avancés (Tracking Error, Devise, Encours), maîtrisez les règles de sortie du PEA et dotez-vous d\'un mental d\'acier face aux tempêtes de marché.',
  duration: 'Durée estimée : 60-70 minutes',
  badge: 'Expertise Totale',
  exerciseType: 'investor_quiz',
  checklistTitle: 'Checklist : Maîtrisez-vous les aspects techniques et fiscaux avancés ?',
  checklist: [
    {
      id: 'm3-c1',
      text: 'Savoir lire le DICI/KID d\'un ETF pour identifier ses frais réels et son mode de réplication.',
      category: 'technique'
    },
    {
      id: 'm3-c2',
      text: 'Vérifier l\'encours (AUM) d\'un ETF avant de l\'acheter (minimum 100 millions d\'euros pour éviter le risque de fermeture).',
      category: 'selection'
    },
    {
      id: 'm3-c3',
      text: 'Identifier les codes ISIN des ETF phares éligibles au PEA (Amundi, iShares, BNP Paribas).',
      category: 'pratique'
    },
    {
      id: 'm3-c4',
      text: 'Comprendre l\'impact des prélèvements sociaux (17,2 %) et de l\'assiette fiscale lors d\'un retrait partiel du PEA.',
      category: 'fiscalite'
    },
    {
      id: 'm3-c5',
      text: 'Connaître l\'historique des krachs boursiers et savoir pourquoi les marchés rebondissent toujours à long terme.',
      category: 'psychologie'
    }
  ],
  chapters: [
    {
      id: 'm3-ch1',
      order: 1,
      content: {
        id: 'm3-ch1',
        title: '1. Décoder la fiche technique d\'un ETF',
        explanation: 'Avant d\'investir votre argent durement gagné dans un ETF, vous devez être capable de l\'analyser comme un pro. Pour cela, chaque ETF dispose d\'un document légal obligatoire : le DICI (Document d\'Information Clé pour l\'Investisseur) ou KID en anglais, ainsi que d\'une fiche technique.\n\nVoici les critères cruciaux à passer au crible :\n1. Les frais de gestion réels (TER - Total Expense Ratio) : Ils doivent idéalement se situer sous la barre des 0,40 % par an pour le PEA.\n2. L\'encours du fonds (AUM - Assets Under Management) : Privilégiez les ETF gérant au moins 100 millions d\'euros (ou équivalent) pour éviter que le gestionnaire ne décide de fermer ou de fusionner le fonds en raison d\'un manque de rentabilité.\n3. La méthode de réplication : Physique (le fonds achète réellement les actions) ou Synthétique (via Swap de performance, indispensable pour les indices hors Europe dans le PEA).\n4. La politique de distribution des dividendes : Capitalisation (les dividendes sont réinvestis automatiquement dans l\'ETF, idéal pour le PEA) ou Distribution (les dividendes sont versés en espèces sur votre compte espèce PEA).',
        bulletPoints: [
          'Code ISIN : L\'identifiant unique de 12 caractères de l\'ETF (ex: LU1681043599 pour le MSCI World Amundi). Cherchez toujours l\'ISIN précis pour ne pas vous tromper.',
          'Écart de suivi (Tracking Error) : Mesure la capacité de l\'ETF à coller au plus près de son indice de référence. Plus elle est proche de zéro, meilleur est l\'ETF.',
          'Devise de référence vs Devise de cotation : Un ETF peut être libellé en Dollars (USD) mais négocié en Euros (EUR) sur Euronext Paris. Le risque de change dépend de la devise des actions sous-jacentes, pas de la devise de cotation.',
          'Norme UCITS : Garantit que l\'ETF respecte les directives de protection des épargnants européens.'
        ],
        examples: [
          {
            bad: {
              text: 'Acheter un ETF de petite taille (encours de 8 millions d\'euros) juste parce que ses frais affichés sont de 0,05 % inférieurs aux autres.',
              explanation: 'Le risque est grand que l\'émetteur ferme le fonds d\'ici quelques mois. Vous serez alors remboursé en cash, ce qui peut vous forcer à réinvestir avec de nouveaux frais de courtage, ou pire, si cela se produit hors PEA, déclencher de la fiscalité prématurée.'
            },
            good: {
              text: 'Choisir des ETF de référence gérés par des émetteurs solides (Amundi/Lyxor, BNP Paribas, BlackRock/iShares) avec des encours massifs (plusieurs centaines de millions ou milliards d\'euros).',
              explanation: 'Vous bénéficiez d\'une liquidité maximale (écart d\'achat/vente très serré) et d\'une sécurité totale quant à la pérennité de votre investissement boursier.'
            }
          }
        ],
        practicalTip: 'Trouvez toutes ces informations gratuitement et comparez les ETF facilement sur des sites spécialisés et indépendants comme JustETF.com.',
        quickExercise: {
          prompt: 'Quels sont les deux principaux avantages à choisir un ETF "Capitalisant" (marqué "Acc" ou "C") plutôt que "Distribuant" ("Dist" ou "D") pour son PEA ?',
          placeholder: 'Les deux avantages...',
          guidance: '1. Réinvestissement automatique sans frais de courtage (intérêt composé maximal). 2. Aucune action manuelle requise de votre part pour réinvestir les petits dividendes reçus.'
        }
      }
    },
    {
      id: 'm3-ch2',
      order: 2,
      content: {
        id: 'm3-ch2',
        title: '2. Sélection d\'ETF incontournables pour le PEA',
        explanation: 'Pour vous faire gagner du temps et vous éviter de faire de mauvais choix, voici une liste sélective des ETF "piliers" les plus populaires et les plus solides pour bâtir votre stratégie sur PEA français.\n\n- **ETF MSCI World (Diversification Globale)** :\n  * *Amundi MSCI World UCITS ETF (EUR) - Acc* (Code ISIN : LU1681043599). C\'est l\'ETF World éligible PEA le plus célèbre. Ses frais sont de 0,38 % par an. Notez que la part coûte environ 300 à 450 €, ce qui peut être élevé pour les petits budgets mensuels.\n  * *iShares MSCI World Swap PEA UCITS ETF - Acc* (Code ISIN : IE0002XZ62T2). Une alternative récente de BlackRock avec une part beaucoup plus accessible (autour de 5 €) et des frais très bas de 0,25 % par an.\n\n- **ETF S&P 500 (Les 500 géants américains)** :\n  * *BNP Paribas Easy S&P 500 UCITS ETF - Acc* (Code ISIN : FR0011550185). Frais de seulement 0,15 % par an. Un excellent choix pour s\'exposer aux USA.\n  * *Amundi PEA S&P 500 UCITS ETF - Acc* (Code ISIN : FR0013412285). Une autre option compétitive.\n\n- **ETF STOXX 600 (Les 600 plus grandes entreprises européennes)** :\n  * *BNP Paribas Easy MSCI Europe UCITS ETF* ou *Amundi PEA Europe* pour diversifier spécifiquement sur notre continent.\n\n- **ETF MSCI Emerging Markets (Pays émergents)** :\n  * *Amundi PEA MSCI Emerging Markets UCITS ETF - Acc* (Code ISIN : FR0013412020) pour ajouter une touche de croissance asiatique et sud-américaine (frais : 0,30 % par an).',
        bulletPoints: [
          'Unité de part : Choisissez l\'ETF BlackRock MSCI World PEA si vous souhaitez investir des petites sommes (ex: 50 €/mois) car la part d\'Amundi MSCI World requiert d\'investir plus de 400 € d\'un coup.',
          'Émetteurs majeurs : Amundi est le leader européen de l\'ETF, BNP Paribas a une excellente gamme "Easy", et BlackRock (iShares) est le numéro un mondial.',
          'Tracking de performance : Tous ces ETF ont des historiques de performance irréprochables depuis plus de 10 ans.'
        ],
        examples: [
          {
            bad: {
              text: 'Acheter un ETF exotique ou sectoriel (ex: ETF "Intelligence Artificielle" ou "Crypto") à forts frais en pensant surperformer à tous les coups.',
              explanation: 'Ces ETF thématiques sont souvent lancés au sommet de la bulle d\'une tendance de mode. Ils ont des frais élevés (0,60%+) et sont extrêmement volatils, menant souvent à de grosses pertes.'
            },
            good: {
              text: 'Bâtir son portefeuille sur un ETF MSCI World ou un combo simple World (85%) + S&P 500 (15%) de grands gestionnaires de fonds.',
              explanation: 'Vous misez sur des actifs solides, très liquides, hautement réglementés et historiquement très rentables à long terme.'
            }
          }
        ],
        practicalTip: 'Faites simple. Un portefeuille composé à 100 % d\'un ETF MSCI World bat plus de 90 % des portefeuilles gérés de manière complexe par des conseillers financiers bancaires.',
        quickExercise: {
          prompt: 'Si vous disposez d\'un budget de 100 € par mois à investir sur votre PEA, quel ETF MSCI World parmi ceux cités ci-dessus devriez-vous choisir ?',
          placeholder: 'Code ISIN ou nom de l\'ETF...',
          guidance: 'Le iShares MSCI World Swap PEA (IE0002XZ62T2) est l\'option idéale car le prix de sa part (autour de 5 €) s\'adapte parfaitement à votre budget mensuel de 100 €.'
        }
      }
    },
    {
      id: 'm3-ch3',
      order: 3,
      content: {
        id: 'm3-ch3',
        title: '3. Fiscalité complexe & Retraits du PEA',
        explanation: 'C\'est au moment de sortir l\'argent de votre PEA que se concentre toute la subtilité de la fiscalité française. Si vous effectuez un retrait partiel ou total après les 5 ans de vie de votre plan, vos gains sont exonérés d\'impôt sur le revenu, mais ils restent soumis aux **prélèvements sociaux de 17,2 %**.\n\nLe calcul de la taxe ne s\'applique pas sur le montant total que vous retirez, mais uniquement sur la quote-part de **plus-value** (gain net) contenue dans votre retrait. Le fisc utilise une formule d\'assiette taxable mathématique pour déterminer quelle part de votre retrait constitue un remboursement de votre capital initial (non taxé) et quelle part constitue du gain (taxé à 17,2 %).',
        bulletPoints: [
          'Calcul de la plus-value : Assiette taxable = Retrait × [1 - (Total des versements / Valeur totale du PEA)].',
          'Conséquence du retrait après 5 ans : Vous pouvez effectuer un retrait partiel sans clôturer votre PEA, et vous conservez le droit de faire de nouveaux versements par la suite.',
          'Conséquence du retrait avant 5 ans : Clôture immédiate obligatoire du plan et imposition des gains à la flat-tax de 30 % (dont 17,2 % de prélèvements sociaux et 12,8 % d\'impôt sur le revenu).'
        ],
        examples: [
          {
            bad: {
              text: 'S\'imaginer que si l\'on retire 1 000 € d\'un PEA qui vaut 10 000 € (contenant 2 000 € de plus-value globale), on va devoir payer 17,2 % sur la totalité des 1 000 € retirés.',
              explanation: 'C\'est faux. Seule la fraction de gain présente dans ces 1 000 € (soit 20 % du retrait, cad 200 €) sera soumise aux prélèvements sociaux. Vous ne paierez donc que 17,2 % de 200 € = 34,40 € de taxes.'
            },
            good: {
              text: 'Laisser son capital travailler le plus longtemps possible, et effectuer des retraits partiels uniquement après la date anniversaire des 5 ans pour préserver l\'enveloppe fiscale active.',
              explanation: 'Vous optimisez mathématiquement votre impôt, conservez l\'avantage fiscal actif pour vos futures économies et évitez toute pénalité de clôture anticipée.'
            }
          }
        ],
        practicalTip: 'Remplissez scrupuleusement vos déclarations pré-remplies, mais rassurez-vous : c\'est votre courtier français qui calcule et prélève automatiquement ces taxes lors de vos retraits pour les reverser au fisc (système du prélèvement à la source).',
        quickExercise: {
          prompt: 'Votre PEA a 6 ans d\'ancienneté. Sa valeur globale est de 20 000 €, pour un total de versements de 15 000 € (vous avez donc 5 000 € de gains). Vous retirez 2 000 €. Quelle somme d\'impôts et de charges allez-vous payer ?',
          placeholder: 'Votre calcul fiscal...',
          guidance: 'Le gain représente 25 % de la valeur globale (5 000 / 20 000). Votre retrait de 2 000 € contient donc 25 % de gains, soit 500 € taxables. Vous paierez 17,2 % de 500 € = 86 € de prélèvements sociaux.'
        }
      }
    },
    {
      id: 'm3-ch4',
      order: 4,
      content: {
        id: 'm3-ch4',
        title: '4. Transférer son PEA de A à Z',
        explanation: 'Si vous possédez actuellement un PEA dans une banque traditionnelle (comme le LCL, la Caisse d\'Épargne, le Crédit Mutuel, etc.) et que vous réalisez l\'ampleur des frais qui détruisent votre épargne, sachez que vous avez le droit de le transférer.\n\nLe **transfert de PEA** est une opération légale garantie par l\'État français. Elle vous permet de déménager l\'intégralité de votre portefeuille boursier d\'un courtier à un autre sans perdre votre antériorité fiscale. Le compteur d\'ancienneté de votre plan ne repart PAS à zéro. C\'est le nouveau courtier qui prend en charge l\'intégralité des démarches administratives une fois que vous avez signé sa demande de transfert.',
        bulletPoints: [
          'Conservation des lignes : Vous pouvez transférer vos actions et ETF en l\'état (transfert de titres) ou vendre vos lignes en espèces au préalable pour transférer un solde liquide plus rapidement.',
          'Frais de transfert : Ils sont encadrés par la loi Pacte et plafonnés à un maximum de 15 € par ligne transférée, et 150 € au total pour l\'ensemble du dossier.',
          'Remboursement des frais : La quasi-totalité des bons courtiers en ligne (BoursoBank, Fortuneo, Bourse Direct) vous remboursent à 100 % les frais de transfert facturés par votre ancienne banque boursière pour vous accueillir.'
        ],
        examples: [
          {
            bad: {
              text: 'Fermer soi-même son PEA dans sa banque physique pour aller en réouvrir un autre chez un courtier en ligne pas cher.',
              explanation: 'C\'est une grave erreur financière : la fermeture volontaire déclenche l\'imposition immédiate de tous vos gains accumulés et remet définitivement à zéro votre précieux compteur de 5 ans d\'ancienneté fiscale.'
            },
            good: {
              text: 'Ouvrir un compte chez un courtier en ligne et remplir le formulaire de demande de transfert en fournissant son dernier relevé de portefeuille PEA.',
              explanation: 'Le nouveau courtier gère le transfert en direct avec l\'ancienne banque. Vous conservez votre ancienneté fiscale, économisez des milliers d\'euros de frais futurs et obtenez le remboursement de vos frais de transfert.'
            }
          }
        ],
        practicalTip: 'Le transfert de titres peut prendre du temps (souvent entre 2 et 6 semaines). Durant cette période, vous ne pourrez pas passer d\'ordres de bourse sur vos lignes. C\'est tout à fait normal.',
        quickExercise: {
          prompt: 'Pourquoi le transfert de PEA est-il largement supérieur à la fermeture suivie d\'une réouverture ?',
          placeholder: 'Votre réponse sur l\'avantage fiscal...',
          guidance: 'Le transfert permet de conserver intégralement l\'historique et l\'antériorité fiscale de votre PEA (votre compteur d\'âge fiscal reste inchangé), évitant toute imposition immédiate.'
        }
      }
    },
    {
      id: 'm3-ch5',
      order: 5,
      content: {
        id: 'm3-ch5',
        title: '5. Vivre de son PEA : La Rente Passive',
        explanation: 'Après des décennies d\'épargne disciplinée en DCA, votre capital boursier a grossi de manière colossale grâce aux intérêts composés. Le moment est venu de récolter les fruits de votre patience et d\'organiser votre **rente passive**.\n\nPour vivre de vos investissements sans jamais vider votre capital de manière définitive, les experts financiers mondiaux s\'appuient sur la célèbre "Règle des 4 %" (issue de l\'étude de Trinity College). Cette règle démontre que si vous retirez chaque année 4 % de la valeur globale de votre portefeuille d\'actions diversifié, votre capital a plus de 95 % de chances de ne jamais s\'épuiser sur une période de 30 ans, car la croissance moyenne du marché compense largement vos retraits.',
        bulletPoints: [
          'Le mécanisme de la rente : Vous effectuez des retraits partiels réguliers (ex: mensuels ou trimestriels) de votre PEA fiscalement optimisé.',
          'Arbitrage de rentier : Vous vendez de petites fractions de parts de vos ETF capitalisants pour générer la trésorerie nécessaire à vos dépenses.',
          'Alternative distributive : Convertir une partie de ses ETF capitalisants en ETF distribuants au sein du PEA pour percevoir des dividendes réguliers en cash sans avoir à vendre ses parts manuellement.'
        ],
        examples: [
          {
            bad: {
              text: 'Retirer 10 % de son portefeuille chaque année dès la première année de sa retraite financière.',
              explanation: 'Vous prenez un risque majeur d\'épuisement rapide de votre capital boursier, surtout si le marché traverse une crise prolongée au début de votre retraite (risque de séquence des rendements).'
            },
            good: {
              text: 'Viser un taux de retrait prudent situé entre 3 % et 4 % par an de son capital global pour assurer la pérennité éternelle de son patrimoine.',
              explanation: 'Votre capital continue de grandir à long terme et de générer une rente passive régulière et sécurisée, à l\'abri des fluctuations du marché.'
            }
          }
        ],
        practicalTip: 'Calculez votre "Chiffre d\'Indépendance Financière" : divisez vos dépenses annuelles par 0,04. C\'est le capital cible que vous devez accumuler pour devenir totalement libre grâce aux 4 %.',
        quickExercise: {
          prompt: 'Si vous avez besoin d\'une rente mensuelle de 2 000 € (soit 24 000 € par an) pour vivre confortablement, quel capital devez-vous détenir sur votre PEA en appliquant la règle des 4 % ?',
          placeholder: 'Capital total cible...',
          guidance: 'Le calcul est : 24 000 € / 0,04 = 600 000 €. Avec un portefeuille de 600 000 € en ETF diversifiés, vous pouvez retirer 2 000 € par mois de manière passive et durable.'
        }
      }
    },
    {
      id: 'm3-ch6',
      order: 6,
      content: {
        id: 'm3-ch6',
        title: '6. Comprendre et Gérer le Risque de Change',
        explanation: 'Lorsque vous achetez un ETF mondial (MSCI World) ou un ETF américain (S&P 500) sur votre PEA en Euro, vous êtes indirectement exposé aux fluctuations du cours des monnaies étrangères (notamment le Dollar US). C\'est ce qu\'on appelle le **risque de change**.\n\nPourquoi ? Parce que l\'ETF réplique la valeur d\'entreprises américaines cotées en Dollars. Si l\'économie américaine progresse mais que l\'Euro se renforce massivement face au Dollar, la valeur de vos parts d\'ETF convertie en Euros peut baisser temporairement, même si les actions américaines grimpent. Inversement, si le Dollar se renforce face à l\'Euro, vos gains sont amplifiés en Euros.',
        bulletPoints: [
          'Devise de cotation vs sous-jacente : Votre courtier affiche l\'ETF en Euros (cotation), mais la valeur réelle repose sur les devises sous-jacentes des entreprises (USD, Yen, Franc Suisse...).',
          'ETF Couverts (Hedged) : Certains ETF intègrent une protection financière systématique (un hedging) contre le risque de change de l\'Euro. Ils portent la mention "Hedged" ou "EUR Daily Hedged".',
          'Coût de la couverture : Les contrats financiers de couverture de change ont un coût non négligeable (0,1 % à 0,3 % de frais en plus par an) qui pèse sur la performance de long terme.'
        ],
        examples: [
          {
            bad: {
              text: 'N\'acheter que des ETF "Hedged" pour un investissement de 20 ans par peur de voir l\'Euro fluctuer face au Dollar.',
              explanation: 'Sur une si longue période, les fluctuations des monnaies tendent à s\'équilibrer d\'elles-mêmes. En payant les frais de couverture chaque année, vous réduisez inutilement vos performances cumulées de plusieurs milliers d\'euros.'
            },
            good: {
              text: 'Acheter des ETF classiques non couverts (non hedged) pour son épargne de long terme.',
              explanation: 'Vous économisez les frais de couverture de change et profitez pleinement de la croissance mondiale globale. Les variations de devises agissent d\'ailleurs souvent comme un amortisseur naturel lors des crises.'
            }
          }
        ],
        practicalTip: 'Pour un horizon de placement supérieur à 10 ans, le risque de change est statistiquement neutre. Évitez les ETF couverts qui sont plus chers et sous-performent à long terme.',
        quickExercise: {
          prompt: 'Si l\'Euro s\'effondre face au Dollar américain, quel sera l\'impact immédiat sur la valeur de votre ETF S&P 500 non couvert libellé en Euro ?',
          placeholder: 'Impact sur vos parts en Euros...',
          guidance: 'La valeur de votre ETF convertie en Euros va augmenter mécaniquement ! Vos actifs libellés en USD valent plus cher lorsqu\'ils sont traduits en Euros dépréciés.'
        }
      }
    },
    {
      id: 'm3-ch7',
      order: 7,
      content: {
        id: 'm3-ch7',
        title: '7. Les Alternatives aux Actions : Monétaire & Obligations',
        explanation: 'Le PEA est une enveloppe formidable dédiée à 100 % aux actions. Cependant, à mesure que vous vous approchez de la retraite ou de votre objectif de sortie, vous pouvez souhaiter réduire la volatilité globale de votre capital en diversifiant avec des actifs plus sûrs.\n\nIl existe des astuces légales pour s\'exposer à des obligations d\'État ou à des taux monétaires garantis au sein même de votre PEA :\n- **Les ETF Monétaires (PEA-PME / ETF CNO)** : Ils répliquent l\'indice de taux d\'intérêt au jour le jour de la zone euro (ESTR). Ils ne connaissent aucune volatilité et progressent de manière stable selon les décisions de la Banque Centrale Européenne (BCE).\n- **Les ETF Obligations d\'État** : Répliquent la performance de paniers de dettes souveraines éligibles au PEA par réplication synthétique.',
        bulletPoints: [
          'Sécurisation du capital : Permet de placer ses liquidités au sein du PEA en cas de forte incertitude boursière sans payer d\'impôts de sortie.',
          'Alternative au compte espèce : Le compte espèces de votre PEA ne rapporte aucun intérêt. Placer vos liquidités en attente d\'opportunités sur un ETF monétaire est donc très astucieux.',
          'Simplicité d\'arbitrage : Permet de rééquilibrer son portefeuille entre actions et actifs sûrs en un clic.'
        ],
        examples: [
          {
            bad: {
              text: 'Laisser 20 000 € d\'espèces non investies dormir sur le compte espèces du PEA pendant 3 ans.',
              explanation: 'Cet argent perd de sa valeur réelle chaque jour à cause de l\'inflation. Il aurait pu produire des intérêts garantis et réguliers s\'il avait été placé sur un simple ETF monétaire.'
            },
            good: {
              text: 'Placer ses liquidités d\'attente ou sécuriser son portefeuille à l\'approche de la sortie fiscale en achetant un ETF Monétaire éligible PEA (comme Lyxor Smart Overnight ESTR).',
              explanation: 'Vous faites fructifier votre capital résiduel de manière 100 % sécurisée, au taux de la banque centrale, tout en restant protégé par l\'enveloppe fiscale du PEA.'
            }
          }
        ],
        practicalTip: 'Recherchez l\'ETF "Lyxor Smart Overnight Return UCITS ETF C-EUR" (Code ISIN : LU1190417599) qui est l\'ETF monétaire de référence éligible au PEA en France.',
        quickExercise: {
          prompt: 'Pourquoi un ETF monétaire répliquant l\'Ester (ESTR) est-il totalement sans risque par rapport à un ETF Actions S&P 500 ?',
          placeholder: 'Votre explication du risque...',
          guidance: 'L\'Ester réplique les taux d\'intérêt interbancaires fixés par la BCE. Il progresse de façon linéaire sans subir de krach ni de fluctuations liées à la valorisation boursière des entreprises.'
        }
      }
    },
    {
      id: 'm3-ch8',
      order: 8,
      content: {
        id: 'm3-ch8',
        title: '8. Déclarer ses Impôts Bourse (PEA)',
        explanation: 'La paperasse et la déclaration d\'impôts annuelle sont une source de stress importante pour de nombreux Français. C\'est pourtant l\'une des forces majeures du PEA : sa simplicité fiscale absolue au quotidien.\n\nTant que vous ne retirez pas d\'argent de votre PEA, vous n\'avez **absolument rien à déclarer** au fisc ! Peu importe que vous ayez réalisé 50 000 € de gains latents, que vous ayez acheté et revendu 100 fois vos ETF, ou que vous ayez perçu d\'importants dividendes sur votre compte espèces : aucun événement fiscal n\'est déclenché au sein de l\'enveloppe fermée.',
        bulletPoints: [
          'Pas de déclaration annuelle : Aucun calcul de plus-value complexe à fournir chaque année lors de votre déclaration de revenus classique.',
          'IFU (Imprimé Fiscal Unique) : Lorsque vous effectuez enfin un retrait après 5 ans, votre courtier français transmet automatiquement les calculs à l\'administration fiscale.',
          'Case dédiée : Le montant imposable calculé (uniquement les prélèvements sociaux de 17,2 %) est automatiquement pré-rempli dans votre déclaration de revenus en ligne (généralement en case 2BH).'
        ],
        examples: [
          {
            bad: {
              text: 'S\'épuiser à noter chaque opération d\'achat d\'ETF de son PEA dans un cahier ou un tableur complexe dans le but de le déclarer aux impôts l\'année suivante.',
              explanation: 'C\'est une perte de temps totale. La réglementation française isole le PEA de l\'impôt annuel ordinaire pour encourager la détention passive.'
            },
            good: {
              text: 'Laisser son courtier en ligne français transmettre l\'IFU de manière automatique au fisc uniquement l\'année où vous décidez d\'effectuer un retrait.',
              explanation: 'Vous profitez d\'une tranquillité administrative complète pendant des décennies de capitalisation tranquille.'
            }
          }
        ],
        practicalTip: 'Privilégiez toujours un courtier établi ou ayant une succursale en France. Ils vous fourniront l\'IFU pré-calculé. Les courtiers étrangers (comme Degiro, Interactive Brokers ou Trade Republic) requièrent de faire les calculs de déclaration fiscale à la main, ce qui est extrêmement fastidieux hors PEA.'
        // Note: pas de quick exercise pour ce chapitre technique
      }
    },
    {
      id: 'm3-ch9',
      order: 9,
      content: {
        id: 'm3-ch9',
        title: '9. Successions, Donations et Décès : Le PEA',
        explanation: 'Personne n\'aime penser aux accidents de la vie ou à la mort, mais la transmission de son patrimoine est un sujet majeur de gestion de patrimoine de long terme.\n\nQue se passe-t-il pour votre PEA en cas de décès de son titulaire ?\nMalheureusement, le décès entraîne la **clôture automatique et immédiate du plan**. L\'enveloppe fiscale disparaît. Cependant, l\'historique des gains n\'est pas pénalisé fiscalement : les gains cumulés sont totalement exonérés d\'impôt sur le revenu, peu importe l\'âge du PEA au moment du décès. Seuls les prélèvements sociaux de 17,2 % restent dus. Les titres (actions et ETF) ou les espèces présents sont alors transférés sur un compte-titres classique ou intégrés dans l\'actif successoral de la succession pour être partagés entre vos héritiers.',
        bulletPoints: [
          'Exonération d\'impôt sur le revenu au décès : Sécurise la transmission des gains latents à vos enfants ou proches sans pénalité de durée de détention.',
          'Donation impossible : Contrairement à un compte-titres ordinaire, vous ne pouvez pas "donner" un PEA de votre vivant à vos enfants. Vous devez d\'abord le clôturer (retrait) ou faire une donation de somme d\'argent.',
          'Frais de succession bancaires : Les banques physiques appliquent des frais de traitement de succession très élevés sur les comptes bourse. Les courtiers en ligne sont généralement beaucoup plus modérés.'
        ],
        examples: [
          {
            bad: {
              text: 'S\'imaginer qu\'en cas de décès, l\'État va confisquer ou lourdement taxer à 30 % la totalité des gains de votre PEA qui a moins de 5 ans d\'ancienneté.',
              explanation: 'C\'est faux : la règle du décès exonère par dérogation les gains d\'impôt sur le revenu (12,8 %) dès le premier jour, protégeant ainsi vos héritiers.'
            },
            good: {
              text: 'Inscrire son PEA dans une vision globale de transmission patrimoniale en s\'assurant que vos proches connaissent l\'existence de votre compte d\'investissement en ligne.',
              explanation: 'Vous sécurisez la transmission fluide de vos valeurs mobilières acquises de manière passive dans le respect des règles fiscales successorales.'
            }
          }
        ],
        practicalTip: 'Rédigez un document récapitulatif simple de tous vos comptes d\'épargne et d\'investissement (banques, courtiers) à conserver en lieu sûr chez vous ou chez votre notaire pour faciliter le travail de recherche de vos héritiers.'
      }
    },
    {
      id: 'm3-ch10',
      order: 10,
      content: {
        id: 'm3-ch10',
        title: '10. Check-list Finale d\'Audit de votre Portefeuille',
        explanation: 'Félicitations ! Vous disposez désormais de toutes les compétences théoriques et pratiques nécessaires pour piloter votre patrimoine boursier en totale autonomie comme un véritable professionnel indépendant.\n\nPour garder le cap et vous assurer que votre stratégie ne dérive pas, voici la check-list d\'audit annuel rapide que vous devriez dérouler chaque année en janvier :\n1. **Vérifier l\'allocation réelle** : Vos pourcentages d\'ETF correspondent-ils toujours à votre cible ? (ex: 90/10). Sinon, rééquilibrez avec vos prochains versements.\n2. **Surveiller l\'évolution des frais (TER)** : L\'émetteur de votre ETF a-t-il modifié ses tarifs ? Y a-t-il un concurrent moins cher sur le marché éligible PEA ?\n3. **Auditer l\'encours (AUM)** : L\'encours de vos ETF est-il toujours supérieur à 100 millions d\'euros ?\n4. **Faire le point sur l\'épargne de précaution** : Votre réserve de sécurité est-elle toujours dimensionnée à vos dépenses de vie actuelles ?\n5. **Maintenir la discipline de fer** : Avez-vous continué vos versements automatisés sans tenter de deviner l\'avenir de la bourse ?',
        bulletPoints: [
          'Simplicité absolue : Si vous avez un portefeuille Lazy à 100 % MSCI World, cet audit annuel complet ne vous prendra pas plus de 5 minutes chrono !',
          'Ajustement du budget : Profitez de ce moment pour augmenter légèrement votre virement mensuel DCA si vos revenus ont progressé l\'année passée.',
          'Indépendance d\'esprit : Restez fidèle à votre plan. Ne laissez aucune rumeur de marché perturber le mécanisme géométrique de vos intérêts composés.'
        ],
        practicalTip: 'Notez la date de votre audit annuel dans votre calendrier personnel (par exemple, le premier samedi de chaque nouvelle année) pour instaurer un rituel d\'hygiène financière durable.',
        quickExercise: {
          prompt: 'Êtes-vous prêt à lancer officiellement votre plan d\'investissement passif sur PEA dès aujourd\'hui et à vous y tenir sur le long terme ?',
          placeholder: 'Votre engagement personnel d\'investisseur...',
          guidance: 'Le meilleur moment pour planter un arbre était il y a 20 ans. Le deuxième meilleur moment est aujourd\'hui. Lancez-vous !'
        }
      }
    }
  ]
};
