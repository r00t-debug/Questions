const domaine1 = [
  {text: "Existence d'un inventaire des actifs complet, précis, documenté, cohérent et à jour", name: 0, value: 0},
  {text: "Inventaire des actifs ayant accès à des informations au sein de l'organisme", name: 1, value: 0},
  {text: "Identification des dépendances entre les différents actifs", name: 2, value: 0},
  {text: "Propriétaires de l'actif", name: 3, value: 0},
  {text: "Elaboration et documentation des règles d'utilisation des actifs", name: 4, value: 0},
  {text: "Sensibilisation des employés et des partenaires aux exigences de sécurité des informations/actifs", name: 5, value: 0},
  {text: "Restitution des actifs de l'organisme en possession des employés lors de la cessation de leur emploi", name: 6, value: 0},
  {text: "Destruction de tout équipement disposant d'un support de stockage en cas de réforme", name: 7, value: 0},
  {text: "Classification des informations de l'organisme et des actifs par rapport aux exigences légales, la valeur, la criticité, la sensibilité, la divulgation ou la modification non autorisée", name: 8, value: 0},
  {text: "Classification des informations par rapport aux exigences métier de l'organisme", name: 9, value: 0},
  {text: "Classification des actifs en conformité avec la classification des informations", name: 10, value: 0},
  {text: "Association à des procédures de gestion de traitement, inclusion dans le processus de gestion et schématisation des niveaux de classification", name: 11, value: 0},
  {text: "Indication de la valeur des résultats de classification des actifs par rapport a leur importance", name: 12, value: 0},
  {text: "Mise en oeuvre, identification, indication sur la localisation et communication aux employés sur les procédures d'étiquetage des actifs", name: 13, value: 0},
  {text: "Elaboration et mise en oeuvre des procédures destinées pour la manipulation des actifs  conformément aux bonnes pratiques et à la législation et réglementation", name: 14, value: 0}
]

const domaine2 = [
  {text: "Définition des règles de sécurité lors de la collecte, le traitement, le stockage et la disposition des données personnelles des employés en conformité avec la législation et la réglementation", name: 0, value: 0},
  {text: "Elaboration des politiques et procédures de protection en cas de violation des données personnelles", name: 1, value: 0},
  {text: "Exécution d'une analyse DPIA (Data Protection Impact Assessment) des opérations de traitement envisagées, lorsque le traitement génère des risques élevés pour la vie privée", name: 2, value: 0},
  {text: "Identification des activités principales de l'organisme nécessitant la collecte et le traitement des données personnelles", name: 3, value: 0},
  {text: "Utilisation des données personnelles pendant la période nécessaire du traitement uniquement", name: 4, value: 0},
  {text: "Exactitude, complétude et mise a jour des données personnelles", name: 5, value: 0},
  {text: "Respect de la vie privée de la personne concerné lors du traitement de l'information", name: 6, value: 0},
  {text: "Possibilité a la personne concerné de lire et d'approuver toute politique en relation avec le traitement de leurs données personnelles", name: 7, value: 0},
  {text: "Application des mesures techniques et organisationnelles pour empêcher la divulgation, la modification et la destruction des données a caractère personnel", name: 8, value: 0},
  {text: "Avertissement de l'autorité et la personne concerné lors de la divulgation, l'altération ou la destruction des données a caractère personnel sur des réseaux de communication électroniques ouvert au public", name: 9, value: 0},
  {text: "Mise a jour d'un inventaire des violations et prise de mesures de remédiation des données a caractère personnel", name: 10, value: 0},
  {text: "Collection des données necessaires seulement, et destruction des informations personnelles identifiable de manière sécurisée", name: 11, value: 0},
  {text: "Déploiement des mesures pour assurer la sécurité des données personnelles", name: 12, value: 0},
  {text: "Mise a jour d'un inventaire des violations et prise de mesures de remédiation des données a caractère personnel par les fournisseurs de services", name: 13, value: 0},
  {text: "Identification, autorisation et mise en place des mesures de supervision lors de l'envoi de données sensibles à l'étranger", name: 14, value: 0},
  {text: "Interdiction de transférer des données susceptibles de porter atteinte à la sécurité publique ou aux intérêts vitaux du pays", name: 15, value: 0}
]

const domaine3 = [
  {text: "Etablissement d'une politique de contrôle d'accès en determinant les règles, les droits et les restrictions d'accès appropriés aux fonctions de l'utilisateur de ces actifs", name: 0, value: 0},
  {text: "Mise en oeuvre d'un processus formel de gestion des accès a tout type d'utilisateur, de tous les systèmes et de tout les services d'information", name: 1, value: 0},
  {text: "Existence d'une politique relative à l'utilisation des réseaux et services", name: 2, value: 0},
  {text: "Mise en place des mesures nécessaires pour l'identification, la détection, la protection et la supervision des comptes a privilèges", name: 3, value: 0},
  {text: "Responsabilité de l'utilisation et la protection des informations secrètes d’authentification", name: 4, value: 0},
  {text: "Mise en place des contrôles adéquats pour maitriser les risques liés à tout type d'accès à distance en dehors du périmètre de sécurité", name: 5, value: 0}
]

const domaine4 = [
  {text: "Etablissement d'une politique d'utilisation sécurisée des appareils mobiles", name: 0, value: 0},
  {text: "Existence d'un inventaire détaillé des appareils mobiles qui accèdent aux ressources de l'organisme", name: 1, value: 0},
  {text: "Identification du niveau de protection nécessaire des appareils mobiles selon le niveau de classification des informations stockées et traitées", name: 2, value: 0},
  {text: "Approbation de chaque connexion d'un appareil mobile au  réseau interne selon sa politique d'utilisation", name: 3, value: 0},
  {text: "L'utilisation des techniques cryptographiques pour protéger la confidentialité et l'intégrité", name: 4, value: 0},
  {text: "Utilisation des mécanismes d'authentification forts", name: 5, value: 0},
  {text: "Etablissement des mesures à suivre en cas de perte des appareils comme la localisation et la suppression des données", name: 6, value: 0},
  {text: "Consideration du contrôle technique, procédural, administratif et de la sensibilisation dans le cas d'accès à la messagerie de l'organisme", name: 7, value: 0},
  {text: "Procedure d'effacement total de données de l'appareil mobile suivant la politique en vigueur, en cas de fin d'usage", name: 8, value: 0},
  {text: "Sauvegarde des données stockées dans les appareils mobiles dans le cloud, supports de stockage externes", name: 9, value: 0}
]

const domaine5 = [
  {text: "Mise en place d'une politique pour la prise en charge des mécanismes de conception et de gestion sécurisées de l'infrastructure réseau", name: 0, value: 0},
  {text: "Elaboration, application et maintenance d'une architecture réseau en prenant en consideration le model de defense multicouches", name: 1, value: 0},
  {text: "Établissement d'une politique de segmentation du réseau avec un cloisonnement physique ou logique", name: 2, value: 0},
  {text: "Protection des données qui transitent dans le réseau afin de garantir leur intégrité et leur confidentialité", name: 3, value: 0},
  {text: "Protection de manière appropriée l'information transitant par la messagerie électronique, et mise en place les mesures nécessaires pour maintenir la sécurité du système de messagerie de l'organisme à un niveau acceptable", name: 4, value: 0},
  {text: "Sécurisation de communications à caractère confidentiel", name: 5, value: 0},
  {text: "Mettre en garde les missionnaires contre les risques de sécurité encourus lors des déplacements à l'étranger", name: 6, value: 0}
]

const domaine6 = [
  {text: "Existence d'une politique pour la gestion de l'acquisition, et le la mise à jour et le développement des produits et services informatiques", name: 0, value: 0},
  {text: "Mise en oeuvre des exigences de sécurité des systèmes d'information", name: 1, value: 0},
  {text: "Suivi d'une procedure de gestion de changement apportés aux logiciels et applications", name: 2, value: 0},
  {text: "Suivi d'un processus de gestion des mises à jour des systèmes", name: 3, value: 0},
  {text: "Existence des principes d'ingénierie de la sécurité des systèmes d'informations", name: 4, value: 0},
  {text: "Contrôle de l'installation des logiciels sur les systèmes opérationnels", name: 5, value: 0},
  {text: "Protection des données de test et du code source des applicatifs", name: 6, value: 0},
  {text: "Utilisation correcte des applications pour éviter les erreurs, la perte, les modifications non autorisées ou l'utilisation abusive d'informations", name: 7, value: 0},
  {text: "Surveillance et contrôle du développement externalisé des logiciels", name: 8, value: 0}
]

const domaine7 = [
  {text: "Documentation et mise a disposition des procédures d'exploitation du système d'information aux utilisateurs concernés", name: 0, value: 0},
  {text: "Contrôle des changements apportés à l'organisation, aux processus métier, aux systèmes et moyens de traitement de l'information ayant une incidence sr les objectifs de la sécurité de l'information", name: 1, value: 0},
  {text: "Surveillance et ajustement de l'utilisation des ressources et projections sur les dimensionnements futurs", name: 2, value: 0},
  {text: "Séparation des environnements de développement, de test et d'exploitation", name: 3, value: 0},
  {text: "Mise en oeuvre des mesures de détection, de prévention et de récupération contre les logiciels malveillants", name: 4, value: 0},
  {text: "Etablissement d'une politique de sauvegarde de l'information et des systèmes d'information", name: 5, value: 0},
]

const domaine8 = [
  {text: "Elaboration d'une cartographie détaillée des systèmes critiques et designation des personnes en charge de leurs gestion", name: 0, value: 0},
  {text: "Evaluation régulière des risques et des audits de conformité sur les risques constituant les systèmes d'information critiques", name: 1, value: 0},
  {text: "Etablissement, documentation et test d'un plan de contingence et de résilience pour les systèmes d'information critiques", name: 2, value: 0},
  {text: "Organisation des cyber-exercices pour tester le degré de préparation et de réponse aux incidents cybernétiques", name: 3, value: 0},
  {text: "Réalisation régulière des tests d'intrusions (réseau et application)", name: 4, value: 0},
  {text: "Identification et classification des points de sortie des informations afin de minimiser les risques liés aux fuites d'informations", name: 5, value: 0},
  {text: "Surveillances des flux échangés dans le système d'information en analysant les flux de communication transitant sur le réseau pour rechercher les événements susceptible d'affecter la sécurité des SIC", name: 6, value: 0},
  {text: "Isolation physique de l'infrastructure des systèmes critiques du reste des systèmes dans les centres de données (data center)", name: 7, value: 0},
  {text: "Discrétion dans la localisation géographique des infrastructures des systèmes critiques de souveraineté", name: 8, value: 0},
  {text: "Réglementation stricte de l'intervention des parties externes sur les systèmes critiques", name: 9, value: 0},
  {text: "Stockage des composants de rechange pour assure le fonctionnement pendant les périodes de crise", name: 10, value: 0},
  {text: "Utilisation de plusieurs fournisseurs pour l'approvisionnement en matière de composants critiques identifiés", name: 11, value: 0},
]

const domaine9 = [
  {text: "Définition d'une stratégie pour le modèle de déploiement et le type de service et les données qui doivent être ou pas stockés ou traitées dans les services cloud", name: 0, value: 0},
  {text: "Analyse des risques et mise en oeuvre des mesures de sécurité appropriés avant chaque demande de service cloud", name: 1, value: 0},
  {text: "Utilisation des canaux de communication sécurisés entre les systèmes internes de l'organisme et les services cloud", name: 2, value: 0},
  {text: "Compréhension et maintien de l'endroit où l'information soit stockée ou traitée avec les restrictions applicables dans l'environnement cloud", name: 3, value: 0},
  {text: "Assurance d'un plan de migration des données et des systèmes après la cessation de relation de service", name: 4, value: 0},
  {text: "Signature des accords de niveau de services avec le fournisseur du service cloud pour chaque service hébergé suivant la matrice de criticité du service fourni", name: 5, value: 0},
  {text: "Mise en disposition par le fournisseur aux clients des outils nécessaires pour la gestion des services cloud", name: 6, value: 0},
  {text: "Assurance d'une séparation entre les différents clients des services cloud", name: 7, value: 0},
  {text: "Disposition d'un cadre de gouvernance de la sécurité par le fournisseur de services cloud", name: 8, value: 0},
]

const domaine10 = [
  {text: "Développement, implémentation et mise a jour régulière d'une politique d'utilisation des mesures cryptographiques en conformité avec la politique de sécurité générale de l'organisme", name: 0, value: 0},
  {text: "Réalisation des audits de conformité pour éviter les violations de la réglementation appliquée en Algérie et de toute exigence de sécurité", name: 1, value: 0},
  {text: "Déploiement des contrôles cryptographiques en garantissant le respect des exigences légales, réglementaires et contractuelles Algériennes", name: 2, value: 0},
  {text: "Application des mesures de sécurité cryptographiques sur les actifs de l'organisme en se basant sur le schéma global de classification des données", name: 3, value: 0},
  {text: "Revue périodique et approbation des exigences de sécurité pour les mesures cryptographiques par la Direction de l'organisme", name: 4, value: 0},
  {text: "Adoption des algorithmes et normes de cryptages qui ont été testés, approuvés et qui ont atteint une maturité élevée", name: 5, value: 0},
  {text: "En cas d'échange d'informations avec des organismes étrangers hors du pays. Conformité de l'organisme aux exigences liées aux mesures cryptographiques du pays de l'organisme tiers", name: 6, value: 0},
  {text: "Conformité des fournisseurs ou prestataires de services aux exigences liées à l'usage des mesures cryptographiques de l'organisme", name: 7, value: 0},
  {text: "Protection des données sensibles ou classifiées au repos et en transit en tenant compte des résultats de l'appréciation des risques", name: 8, value: 0},
  {text: "Mise en place des moyens pour la préservation et la restauration des informations cryptées classifiées ou sensibles pour le besoin d'une investigation ou suite a une indisponibilité", name: 9, value: 0},
  {text: "Mise en place des mesures procédurales et technique pour la préservation des clés de cryptages lors de la récupération des données", name: 10, value: 0},
  {text: "Mise en place des contrôles administratifs, techniques et physiques pour la protection des clés tout au long de leur cycle de vie", name: 11, value: 0},
  {text: "Protection physique des clés cryptographiques secrètes et privées dans des Modules de Sécurité Physiques (MSP) ou d'autres dispositifs physiques", name: 12, value: 0},
]

const domaine11 = [
  {text: "Développement et approbation d'une politique de sécurité physique et des procédures associées", name: 0, value: 0},
  {text: "Limitation de l'accès aux centres de données, serveurs, équipements réseaux et infrastructure au personnel autorisé uniquement", name: 1, value: 0},
  {text: "Définition des périmètre de sécurité pour protéger les zones hébergeant des informations sensibles et les systèmes critiques", name: 2, value: 0},
  {text: "Protection des zones sécurisées par des contrôles d'accès adéquats à l'entrée", name: 3, value: 0},
  {text: "Conception et application des mesures de sécurité physiques aux bureaux, aux salles et aux équipements", name: 4, value: 0},
  {text: "Conception et application des mesures de sécurité physiques contre les désastres naturels, les attaques malveillantes ou les accidents", name: 5, value: 0},
  {text: "Contrôle et isolement des points d'accès par lesquels des personnes non autorisées peuvent pénétrer de façon a éviter les accès non autorisés", name: 6, value: 0},
  {text: "Localisation et protection du matériel de manière a réduire les risques liés aux menaces et dangers environnementaux et accès non autorisés", name: 7, value: 0},
  {text: "Protection du matériel des coupure de courant et autres perturbations dues à une défaillance des services généraux", name: 8, value: 0},
  {text: "Protection des câbles électriques et de télécommunication transportant des données ou supportant les services d'information", name: 9, value: 0},
  {text: "Entretien correct du matériel pour garantir sa disponibilité permanente et son intégrité", name: 10, value: 0},
  {text: "Application des mesures de sécurité au matériel utilisé hors des locaux de l'organisme en tenant compte des différents risques associés au travail hors site", name: 11, value: 0},
  {text: "Protection du matériel non surveillé hors des locaux", name: 12, value: 0},
]

const domaine12 = [
  {text: "Possession des autorisations nécessaires auprès des autorités concernées pour l'acquisition et l'exploitation de l'IoT", name: 0, value: 0},
  {text: "Assurance du fonctionnement de l'IoT avec la dernière version stable de son système d'exploitation et de son micrologiciel(firmware)", name: 1, value: 0},
  {text: "Assurance de l'absence des vulnérabilités ou défauts connus en exigeant la fourniture éventuelle d'un document de conformité avec les standards", name: 2, value: 0},
  {text: "Assurance de la réception des mises à jour logicielles régulières", name: 3, value: 0},
  {text: "Assurance de la non inclusion des informations d'authentification fixées ou codées en dur utilisées pour l'administration à distance, la fourniture de mises à jour ou la communication", name: 4, value: 0},
  {text: "Assurance de l'utilisation des protocoles et technologies standards non obsolètes par l'IoT", name: 5, value: 0},
  {text: "Changement de la configuration par défaut de l'IoT, cela inclut le nom du compte et le mot de passe", name: 6, value: 0},
  {text: "Démilitarisation(DMZ) de la mise en place des IoT sur réseau", name: 7, value: 0},
  {text: "Assurance de la protection physique des objets", name: 8, value: 0},
  {text: "Activation de toutes les fonctionnalités de journalisation d'alertes ou de notification sur les événements de sécurité", name: 9, value: 0},
  {text: "Désactivation des services et protocoles inutiles", name: 10, value: 0},
]

const domaine13 = [
  {text: "Définition et mise en oeuvre d'une politique et procédures de gestion et d'analyse des journaux ainsi que la surveillance des infrastructures et des systèmes d'information", name: 0, value: 0},
  {text: "Arrêt d'une liste d'évènements et d'activités qui doivent être créés, tenus à jour, vérifiés régulièrement et archivés", name: 1, value: 0},
  {text: "Mise en place d'un système de gestion de la journalisation permettant d'enregistrer, maintenir et analyser périodiquement les évènements liés à la sécurité de l'information", name: 2, value: 0},
  {text: "Conservation des journaux d'évènements durant une période préalablement définie afin de faciliter les opérations d'audit et d'investigations", name: 3, value: 0},
  {text: "Protection de la disponibilité, la confidentialité et l'intégrité des journaux d'évènement", name: 4, value: 0},
  {text: "Veille à ce que le système de journalisation ne soit accessible que par les personnes autorisées", name: 5, value: 0},
  {text: "Synchronisation automatique des horloges de l'ensemble des systèmes de traitement de l'information dans une source de référence temporelle unique", name: 6, value: 0},
]

const domaine14 = [
  {text: "Etablissement d'une politique pour gérer la réponse aux incidents de sécurité de l'information incluant des procédures d'identification, de signalement, d'enregistrement, d'intervention et d'escalade d'incidents ainsi qu'une définition claire d'un incident ou évènement de sécurité", name: 0, value: 0},
  {text: "Création d'une équipe de réponse aux incidents de sécurité(CERT) pour une meilleure prise en charge des incidents", name: 1, value: 0},
  {text: "Définition des lignes directrices pour aider les utilisateurs à identifier et signaler les incidents, ainsi que les données pertinentes à collecter avant, pendant et après un incident", name: 2, value: 0},
  {text: "Signalement immédiat par les utilisateurs du SI de toute atteinte à la sécurité, tentative de violation et tout faille de sécurité soit à l'entité responsable de la gestion des incidents de l'organisme, soit aux autorités externes", name: 3, value: 0},
  {text: "Enregistrement des incidents déclarés avec un identifiant unique pour faciliter le suivi", name: 4, value: 0},
  {text: "Présentation des informations conformément aux dispositions légales relatives à la présentation de preuves auprès des juridictions compétentes", name: 5, value: 0},
  {text: "Evaluation des incidents par rapport a la catégorie, l'impact et la fréquence", name: 6, value: 0},
  {text: "Reprise d'activité par l'ensemble du personnel et l'équipe de sécurité de l'information en fonction de la nature de l'incident et du plan d'action élaboré", name: 7, value: 0},
  {text: "Réalisation d'une analyse détaillée pour identifier les points forts et faibles de l'infrastructure une fois la reprise des activités est terminée", name: 8, value: 0},
  {text: "Considération de contrôles préventifs pour éviter la récurrence de l'incident", name: 9, value: 0},
  {text: "Identification des exigences légales et réglementation applicables pour la collecte des preuves en enquêtes d'investigation", name: 10, value: 0},
]

const domaine15 = [
  {text: "Etablissement d'une politique et d'un plan de continuité et de reprise des activités basé sur les scénarios de risques", name: 0, value: 0},  
  {text: "Alignement de la gestion des risques liés à la continuité avec les politiques et procédures de gestion des risques de l'organisme", name: 1, value: 0},  
  {text: "Définition des catégories de désastres en fonction de leurs gravités et localisation par le plan de continuité des activités", name: 2, value: 0},  
  {text: "Inclusion des exigences en matière de la sécurité de l'information et des mesures de protection appropriées", name: 3, value: 0},  
  {text: "Formation des parties prenantes et du personnel au fonctionnement du plan et des processus opérationnels connexes", name: 4, value: 0},  
  {text: "Etablissement d'une procédure de test du plan de continuité et de reprise des activités après sinistre(DRP)", name: 5, value: 0},  
  {text: "Utilisation d'une variété de techniques et de tests ainsi que des indicateurs de performance afin de s'assurer de l'efficacité du plan", name: 6, value: 0},  
  {text: "Participation de toutes les parties prenantes impliquées dans le plan de continuité et de reprise des activités aux tests de plan", name: 7, value: 0},  
  {text: "Revue périodique ou suite à un changement majeur du plan de continuité et de reprise des activités", name: 8, value: 0},  
]

const domaine16 = [
  {text: "Développement d'une politique et des procédures associées pour intégrer les exigences de sécurité avant, pendant et après le contrat de travail", name: 0, value: 0},
  {text: "Etablissement d'un règlement intérieur et vérification que les employés, fournisseurs ou tierces parties doivent accepter et signer le contrat de travail et le règlement intérieur", name: 1, value: 0},
  {text: "Définition des rôles et responsabilités en termes de la sécurité de l'information dans le contrat d'embauche et dans le règlement intérieur", name: 2, value: 0},
  {text: "Etablissement d'une procédure pour la vérification des antécédents(l'historique du travail, casier judiciaire, certificats et diplômes)", name: 3, value: 0},
  {text: "Signature d'un accord de confidentialité et de non divulgation avant d'avoir accès aux ressources de l'organisme", name: 4, value: 0},
  {text: "Etablissement d'un plan de communication et un mécanisme de sensibilisation pour informer les employés des politiques et procédures de sécurité auxquelles ils doivent se conformer", name: 5, value: 0},
  {text: "Test et évaluation de l'efficacité du programme de formation et sensibilisation pour identifier les points à améliorer", name: 6, value: 0},
  {text: "Définition d'un processus disciplinaire formel pour les violations de la sécurité de l'information conformément aux exigences légales et réglementaires", name: 7, value: 0},
  {text: "Restitution des actifs et révocation des droits d'accès des utilisateurs lors de la cessation de l'emploi", name: 8, value: 0},
]

const domaine17 = [
  {text: "Etablissement et revue d'une politique d'usage des réseaux sociaux pour être conforme aux lois et exigences en matière de régulation et de sécurité", name: 0, value: 0},
  {text: "Evaluation des plateformes de réseaux sociaux appropriées pour soutenir la stratégie globale et les objectifs de l'organisme", name: 1, value: 0},
  {text: "Identification et classification des comptes réseaux sociaux de l'organisme, seul les utilisateurs autorisés ont accès aux comptes", name: 2, value: 0},
  {text: "Mise en place d'un mécanisme de prédiction, détection et de protection contre les bots qui sont utilisés pour influencer l'opinion publique sur un sujet particulier", name: 3, value: 0},
  {text: "Revue régulière et implémentation des contrôles pour détecter les contenus inappropriés et contenant du code malveillant", name: 4, value: 0},
  {text: "Utilisation du profil de l'organisme sur les réseaux sociaux pour la promotion des produits et services de l'organisme", name: 5, value: 0},
  {text: "Interdiction aux employés ayant des comptes personnels sur les réseaux sociaux d'utiliser le même profil pour communiquer directement ou indirectement au nom de l'organisme", name: 6, value: 0},
  {text: "Responsabilité sur la sécurité, la confidentialité et les risque inhérent à l'envoi de contenu sur les réseaux sociaux", name: 7, value: 0},
  {text: "Protection des comptes des réseaux sociaux avec des mécanismes d'authentification forts", name: 8, value: 0},
  {text: "Interdiction aux employés de mettre dans leurs profils les détails de leur fonction, le nom de leur employeur et les équipements qui sont en train de gérer", name: 9, value: 0},
  {text: "Interdiction d'utiliser les emails de l'organisme pour créer des comptes sur les réseaux sociaux", name: 10, value: 0},
  {text: "Méfiance des liens partagés ou des pièces jointes via des services de messagerie des réseaux sociaux", name: 11, value: 0},
]

const domaine18 = [
  {text: "Etablissement et revue régulière d'une politique de développement sécurisée des applications", name: 0, value: 0},
  {text: "Limitation et contrôle de l'attribution des rôles et l'utilisation des droits d'accès", name: 1, value: 0},
  {text: "Désignation d'une personne qui aura la responsabilité du système développé", name: 2, value: 0},
  {text: "Réalisation d'une analyse de risques dans le cadre du traitement des informations compte tenu de leur catégories dès le commencement de tout projet", name: 3, value: 0},
  {text: "Conformité du code source aux bonnes pratiques de codage", name: 4, value: 0},
  {text: "Considération des points faibles de sécurité inhérents aux langages de programmation lors du développement des applications", name: 5, value: 0},
  {text: "Prise de mesures maximales pour éviter les canaux de communication et les malwares dans les logiciels développés", name: 6, value: 0},
  {text: "Utiliser des données de tests spécialement prévues à des fins de développement", name: 7, value: 0},
  {text: "Développement et maintenance d'une documentation tout au long de la vie du projet", name: 8, value: 0},
  {text: "Etablissement d'une communication efficace entre les différentes parties concernées par le projet", name: 9, value: 0},
]

const domaine19 = [
  {text: "Considération de la sécurité de l'information dans toutes les phases de la gestion des projets", name: 0, value: 0},
  {text: "Inclusion des exigences de sécurité de l'information dans la méthodologie et les procédures de gestion des changements", name: 1, value: 0},
  {text: "Intégration des exigences de sécurité de l'information dès les premières phases des projets", name: 2, value: 0},
  {text: "Ajout et suivi régulier des risques cybernétiques dans le registre des risques du projet", name: 3, value: 0},
  {text: "Traitement et revue régulière des incidences sur la sécurité de l'information pour tout les projets", name: 4, value: 0},
  {text: "Identification et attribution des rôles et responsabilités en matière de sécurité de l'information à des fonctions spécifiques définies dans les méthodes de gestion de projet", name: 5, value: 0},
]

const domaine20 = [
  {text: "Etablissement et documentation des exigences de sécurité liées à l'accès des prestataires de services aux actifs de l'organisme", name: 0, value: 0},
  {text: "Conformité des cahiers des charges d'acquisition des solutions matérielles ou logicielles avec le RNSI", name: 1, value: 0},
  {text: "Evaluation des risques pour identifier les exigences de sécurités avant d'accorder l'accès à une partie externe", name: 2, value: 0},
  {text: "Respect des objectifs, des politiques, des normes et des procédures de sécurité adoptés par l'organisme", name: 3, value: 0},
  {text: "Etablissement d'un plan de communication avec les tierces parties en cas d'un incident de sécurité", name: 4, value: 0},
  {text: "Limitation des informations partagées avec les fournisseurs", name: 5, value: 0},
  {text: "Surveillance régulière des accès des tierces parties aux informations et aux systèmes d'information de l'organisme", name: 6, value: 0},
  {text: "Elaboration et signature d'une charte fournisseur par l'intervenant du prestataire avant chaque intervention sur site ou à distance", name: 7, value: 0},
  {text: "Signature d'un accord individuel de confidentialité par chaque personne concernée par le fournisseur", name: 8, value: 0},
  {text: "Limitation et contrôle de l'accès au système d'information de l'organisme au personnel de l'organisme externe", name: 9, value: 0},
  {text: "Conservation d'une visibilité sur les activités de la sécurité telles par le fournisseur de services", name: 10, value: 0},
  {text: "Communication des modifications apportées à la fourniture des services et produits par les tierces parties à l'organisme impacté", name: 11, value: 0},
]


export {
  domaine1,
  domaine2,
  domaine3,
  domaine4,
  domaine5,
  domaine6,
  domaine7,
  domaine8,
  domaine9,
  domaine10,
  domaine11,
  domaine12,
  domaine13,
  domaine14,
  domaine15,
  domaine16,
  domaine17,
  domaine18,
  domaine19,
  domaine20,
}