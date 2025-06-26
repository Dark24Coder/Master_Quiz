const questionsData = {
  informatique: 
    // -----------QUESTIONS INFORMATIQUES GENERALE----------
  [
    {
    question: "Que signifie l'acronyme CPU en informatique ?",
    options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Control Processing Unit"],
    answer: "Central Processing Unit"
  },
  {
    question: "Quel composant stocke temporairement les données pendant l'exécution d’un programme ?",
    options: ["Disque dur", "Carte mère", "Mémoire vive (RAM)", "Processeur"],
    answer: "Mémoire vive (RAM)"
  },
  {
    question: "Quel est le rôle principal d’un système d’exploitation ?",
    options: ["Envoyer des emails", "Contrôler le matériel et gérer les logiciels", "Compiler les programmes", "Créer des documents"],
    answer: "Contrôler le matériel et gérer les logiciels"
  },
  {
    question: "Que représente l’adresse IP 127.0.0.1 ?",
    options: ["L'adresse du routeur", "L'adresse d’un serveur DNS", "L’adresse locale (localhost)", "L’adresse du fournisseur d’accès"],
    answer: "L’adresse locale (localhost)"
  },
  {
    question: "Quel langage est principalement utilisé pour créer des pages web ?",
    options: ["HTML", "Python", "C++", "Java"],
    answer: "HTML"
  },
  {
    question: "Quelle est la fonction d'un pare-feu (firewall) ?",
    options: ["Accélérer la connexion Internet", "Bloquer les publicités", "Protéger le réseau contre les intrusions", "Gérer les mots de passe"],
    answer: "Protéger le réseau contre les intrusions"
  },
  {
    question: "Quel est le système d’exploitation développé par Apple ?",
    options: ["Windows", "Linux", "macOS", "Android"],
    answer: "macOS"
  },
  {
    question: "Quel périphérique est une unité de sortie ?",
    options: ["Clavier", "Souris", "Écran", "Scanner"],
    answer: "Écran"
  },
  {
    question: "Quel protocole est utilisé pour consulter des sites Web ?",
    options: ["FTP", "HTTP", "SMTP", "SSH"],
    answer: "HTTP"
  },
  {
    question: "Que signifie SSD ?",
    options: ["Simple System Device", "Solid State Drive", "Secure Software Disk", "System Storage Device"],
    answer: "Solid State Drive"
  },
  {
    question: "Lequel des éléments suivants est un logiciel de traitement de texte ?",
    options: ["Microsoft Excel", "PowerPoint", "Word", "Photoshop"],
    answer: "Word"
  },
  {
    question: "Quel est l’équivalent open source de Microsoft Office ?",
    options: ["Google Docs", "LibreOffice", "Adobe Acrobat", "Notepad++"],
    answer: "LibreOffice"
  },
  {
    question: "Quelle commande permet de lister les fichiers sous Linux ?",
    options: ["ls", "cd", "pwd", "mkdir"],
    answer: "ls"
  },
  {
    question: "Lequel de ces formats est une image ?",
    options: [".exe", ".jpg", ".docx", ".mp3"],
    answer: ".jpg"
  },
  {
    question: "Quel composant est considéré comme le « cerveau » de l'ordinateur ?",
    options: ["RAM", "Carte graphique", "Processeur", "Carte réseau"],
    answer: "Processeur"
  },
  {
    question: "Quel langage est principalement utilisé pour écrire des scripts systèmes sur Linux ?",
    options: ["Python", "C#", "Shell", "Java"],
    answer: "Shell"
  },
  {
    question: "Quel est le rôle du DNS sur Internet ?",
    options: ["Protéger les réseaux", "Traduire les noms de domaine en adresses IP", "Envoyer des emails", "Gérer les cookies"],
    answer: "Traduire les noms de domaine en adresses IP"
  },
  {
    question: "Qu’est-ce qu’un octet ?",
    options: ["1 bit", "4 bits", "8 bits", "16 bits"],
    answer: "8 bits"
  },
  {
    question: "Quel format de fichier est utilisé pour les feuilles de calcul ?",
    options: [".doc", ".xlsx", ".ppt", ".txt"],
    answer: ".xlsx"
  },
  {
    question: "Quel outil Google permet de stocker des fichiers en ligne ?",
    options: ["Gmail", "Google Docs", "Google Drive", "Google Maps"],
    answer: "Google Drive"
  },
  {
    question: "Quelle est la principale fonction de la mémoire cache ?",
    options: ["Stocker les fichiers", "Augmenter l’espace disque", "Accélérer l’accès aux données du processeur", "Envoyer des données sur Internet"],
    answer: "Accélérer l’accès aux données du processeur"
  },
  {
    question: "Quel logiciel permet la navigation sur Internet ?",
    options: ["Chrome", "Word", "Excel", "Photoshop"],
    answer: "Chrome"
  },
  {
    question: "Quel acronyme désigne le réseau local ?",
    options: ["WAN", "LAN", "VPN", "HTML"],
    answer: "LAN"
  },
  {
    question: "Que signifie HTTPS ?",
    options: ["HyperText Transfer Protocol Secure", "High Text Transfer Protocol Standard", "HyperTerminal Text System", "Hyperlink Transfer Protocol Server"],
    answer: "HyperText Transfer Protocol Secure"
  },
  {
    question: "Qu'est-ce qu'un malware ?",
    options: ["Une mise à jour", "Un périphérique", "Un logiciel malveillant", "Un type de processeur"],
    answer: "Un logiciel malveillant"
  },
  {
    question: "Quel est l’acronyme de l’unité de mesure de la fréquence d’un processeur ?",
    options: ["Mb", "GHz", "Kg", "RPM"],
    answer: "GHz"
  },
  {
    question: "Quel langage est principalement utilisé pour le développement d'applications Android ?",
    options: ["Python", "Kotlin", "Swift", "PHP"],
    answer: "Kotlin"
  },
  {
    question: "Quelle est l’utilité principale d’un compilateur ?",
    options: ["Modifier les fichiers", "Exécuter un programme", "Traduire le code source en langage machine", "Créer une base de données"],
    answer: "Traduire le code source en langage machine"
  },
  {
    question: "Que signifie l’abréviation URL ?",
    options: ["User Request Link", "Uniform Resource Locator", "Unified Routing Line", "Universal Render Logic"],
    answer: "Uniform Resource Locator"
  },
  {
    question: "Quel outil est utilisé pour surveiller l’activité réseau sur un ordinateur ?",
    options: ["Antivirus", "Pare-feu", "Analyseur de paquets (sniffer)", "Compilateur"],
    answer: "Analyseur de paquets (sniffer)"
  },
  {
    question: "Quel système de fichiers est utilisé par défaut sous Windows ?",
    options: ["ext4", "NTFS", "FAT16", "XFS"],
    answer: "NTFS"
  },
  {
    question: "Que signifie le terme 'open source' ?",
    options: ["Logiciel payant", "Code source fermé", "Logiciel librement accessible et modifiable", "Logiciel uniquement pour Windows"],
    answer: "Logiciel librement accessible et modifiable"
  },
  {
    question: "Quel type de logiciel est Microsoft Excel ?",
    options: ["Navigateur web", "Tableur", "Éditeur de texte", "Compilateur"],
    answer: "Tableur"
  },
  {
    question: "Lequel de ces systèmes est basé sur Linux ?",
    options: ["Windows 11", "macOS", "Ubuntu", "iOS"],
    answer: "Ubuntu"
  },
  {
    question: "Que permet de faire la commande 'ping' ?",
    options: ["Scanner un virus", "Tester la connectivité réseau", "Formater un disque", "Ouvrir un fichier"],
    answer: "Tester la connectivité réseau"
  },
  {
    question: "Quel est le rôle principal d’un serveur DNS ?",
    options: ["Gérer les emails", "Attribuer les adresses IP", "Traduire les noms de domaine", "Crypter les connexions"],
    answer: "Traduire les noms de domaine"
  },
  {
    question: "Qu’est-ce qu’une adresse MAC ?",
    options: ["Adresse postale", "Adresse d'un site web", "Identifiant unique d’une carte réseau", "Adresse email"],
    answer: "Identifiant unique d’une carte réseau"
  },
  {
    question: "Quel composant permet de connecter un ordinateur à Internet via un réseau câblé ?",
    options: ["Carte graphique", "Carte mère", "Carte réseau Ethernet", "Disque dur"],
    answer: "Carte réseau Ethernet"
  },
  {
    question: "Quel est l’intérêt de la virtualisation ?",
    options: ["Accélérer Internet", "Exécuter plusieurs systèmes d’exploitation sur une seule machine", "Améliorer l’autonomie", "Créer des graphiques"],
    answer: "Exécuter plusieurs systèmes d’exploitation sur une seule machine"
  },
  {
    question: "Quel langage est le plus utilisé pour la programmation Web côté client ?",
    options: ["Java", "Python", "C++", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "Quelle extension de fichier correspond à un exécutable sous Windows ?",
    options: [".exe", ".txt", ".docx", ".jpg"],
    answer: ".exe"
  },
  {
    question: "Quelle est la capacité typique d’un octet ?",
    options: ["1024 bits", "256 bits", "8 bits", "1 bit"],
    answer: "8 bits"
  },
  {
    question: "Qu'est-ce qu'un algorithme ?",
    options: ["Une image", "Un langage", "Un ensemble d'instructions logiques", "Un périphérique"],
    answer: "Un ensemble d'instructions logiques"
  },
  {
    question: "Quel type de virus chiffre les fichiers pour demander une rançon ?",
    options: ["Spyware", "Ransomware", "Adware", "Trojan"],
    answer: "Ransomware"
  },
  {
    question: "Quel composant gère les calculs graphiques ?",
    options: ["Carte son", "Carte réseau", "Carte graphique (GPU)", "Processeur (CPU)"],
    answer: "Carte graphique (GPU)"
  },
  {
    question: "Quel type de logiciel est Google Chrome ?",
    options: ["Système d'exploitation", "Navigateur web", "Antivirus", "Base de données"],
    answer: "Navigateur web"
  },
  {
    question: "Qu’est-ce qu’un cookie informatique ?",
    options: ["Une application mobile", "Un fichier temporaire contenant des données utilisateur", "Un virus", "Un outil de programmation"],
    answer: "Un fichier temporaire contenant des données utilisateur"
  },
  {
    question: "Quel système d’exploitation est principalement utilisé sur les serveurs Web ?",
    options: ["Windows", "macOS", "Linux", "Android"],
    answer: "Linux"
  },
  {
    question: "Quelle est l’unité de mesure de la vitesse de transfert de données ?",
    options: ["Watts", "Octets", "Hertz", "bps (bits per second)"],
    answer: "bps (bits per second)"
  },
  {
    question: "Quel est le rôle d’un antivirus ?",
    options: ["Accélérer l’ordinateur", "Gérer les connexions réseau", "Protéger contre les logiciels malveillants", "Installer les programmes"],
    answer: "Gérer les connexions réseau"
  },
  {
    question: "Quel est le rôle d’un système de gestion de base de données (SGBD) ?",
    options: ["Créer des graphiques", "Compiler du code", "Gérer, stocker et manipuler les données", "Naviguer sur Internet"],
    answer: "Gérer, stocker et manipuler les données"
  },
  {
    question: "Quel langage est le plus utilisé pour interroger une base de données relationnelle ?",
    options: ["HTML", "Python", "SQL", "Java"],
    answer: "SQL"
  },
  {
    question: "Quel est le rôle principal d'un routeur ?",
    options: ["Stocker les fichiers", "Imprimer les documents", "Acheminer les paquets de données sur un réseau", "Protéger contre les virus"],
    answer: "Acheminer les paquets de données sur un réseau"
  },
  {
    question: "Quel composant permet de stocker les données de façon permanente ?",
    options: ["RAM", "SSD", "Carte mère", "Processeur"],
    answer: "SSD"
  },
  {
    question: "Quelle technologie permet de connecter des appareils sans fil à courte distance ?",
    options: ["Wi-Fi", "Bluetooth", "Ethernet", "NFC"],
    answer: "Bluetooth"
  },
  {
    question: "Que signifie l’acronyme PDF ?",
    options: ["Portable Document Format", "Personal Data File", "Public Data Framework", "Program Document File"],
    answer: "Portable Document Format"
  },
  {
    question: "Quel outil permet de versionner du code source ?",
    options: ["Git", "SSH", "FTP", "Nginx"],
    answer: "Git"
  },
  {
    question: "Quel est le rôle du BIOS dans un ordinateur ?",
    options: ["Contrôler Internet", "Gérer les périphériques USB", "Démarrer l'ordinateur et initialiser le matériel", "Lancer les applications"],
    answer: "Démarrer l'ordinateur et initialiser le matériel"
  },
  {
    question: "Quel est l’équivalent d’un dossier sous Windows dans le terminal Linux ?",
    options: ["Répertoire", "Bloc", "Unité", "Fichier"],
    answer: "Répertoire"
  },
  {
    question: "Quelle est la fonction principale d’un fichier exécutable ?",
    options: ["Afficher des images", "Lancer un programme", "Stocker du texte", "Compresser des fichiers"],
    answer: "Lancer un programme"
  },
  {
    question: "Quelle extension est utilisée pour un fichier JavaScript ?",
    options: [".js", ".java", ".html", ".css"],
    answer: ".js"
  },
  {
    question: "Que fait la commande 'mkdir' sous Linux ?",
    options: ["Supprime un fichier", "Affiche la date", "Crée un répertoire", "Liste les fichiers"],
    answer: "Crée un répertoire"
  },
  {
    question: "Quelle unité est la plus petite en informatique ?",
    options: ["Byte", "Bit", "Ko", "Mo"],
    answer: "Bit"
  },
  {
    question: "Quel outil est utilisé pour sécuriser une connexion réseau ?",
    options: ["VPN", "HTTP", "DNS", "Ping"],
    answer: "VPN"
  },
  {
    question: "Quel système de fichiers est le plus utilisé sur Linux ?",
    options: ["FAT32", "NTFS", "ext4", "XFS"],
    answer: "ext4"
  },
  {
    question: "Qu’est-ce que le cloud computing ?",
    options: ["Un type de processeur", "Un logiciel de sauvegarde", "L’utilisation de ressources informatiques à distance", "Un nouveau langage"],
    answer: "L’utilisation de ressources informatiques à distance"
  },
  {
    question: "Quel est le rôle de la RAM dans un ordinateur ?",
    options: ["Stocker les fichiers définitivement", "Assurer la connexion Internet", "Stocker temporairement les données utilisées par les programmes", "Exécuter les antivirus"],
    answer: "Stocker temporairement les données utilisées par les programmes"
  },
  {
    question: "Que fait un navigateur Web ?",
    options: ["Crée des programmes", "Exécute du code Java", "Affiche des pages web", "Gère les périphériques"],
    answer: "Affiche des pages web"
  },
  {
    question: "Quelle commande Linux permet de changer de répertoire ?",
    options: ["ls", "cd", "pwd", "rm"],
    answer: "cd"
  },
  {
    question: "Quel format de fichier est un document Word ?",
    options: [".pdf", ".txt", ".docx", ".xls"],
    answer: ".docx"
  },
  {
    question: "Que signifie l’abréviation 'IoT' ?",
    options: ["Input on Time", "Internet of Things", "Internal Operation Transfer", "Interface of Technology"],
    answer: "Internet of Things"
  },
  {
    question: "Quel langage est utilisé pour le style des pages web ?",
    options: ["JavaScript", "HTML", "Python", "CSS"],
    answer: "CSS"
  },
  {
    question: "Qu’est-ce que le phishing ?",
    options: ["Un virus qui efface les fichiers", "Une technique de piratage par email frauduleux", "Un type de pare-feu", "Un logiciel de messagerie"],
    answer: "Une technique de piratage par email frauduleux"
  },
  {
    question: "Quel élément matériel permet la connexion Wi-Fi ?",
    options: ["Carte réseau sans fil", "RAM", "Processeur", "Disque dur"],
    answer: "Carte réseau sans fil"
  },
  {
    question: "Quel terme désigne le redémarrage d’un ordinateur sans interruption d’alimentation ?",
    options: ["Power off", "Boot", "Restart", "Reset"],
    answer: "Restart"
  },
  {
    question: "Quel est le rôle d’un antivirus ?",
    options: ["Créer des virus", "Analyser et bloquer les logiciels malveillants", "Sauvegarder les fichiers", "Gérer les mots de passe"],
    answer: "Analyser et bloquer les logiciels malveillants"
  },
  {
    question: "Que signifie l’acronyme HTML ?",
    options: ["HyperText Markup Language", "HighText Machine Language", "HyperTabular Mark Language", "HyperText Markdown Language"],
    answer: "HyperText Markup Language"
  },
  {
    question: "Quel langage est souvent utilisé pour développer des applications iOS ?",
    options: ["Java", "Kotlin", "Swift", "Dart"],
    answer: "Swift"
  },
  {
    question: "Quelle commande Linux permet de supprimer un fichier ?",
    options: ["rm", "del", "erase", "remove"],
    answer: "rm"
  },
  {
    question: "Qu’est-ce qu’un réseau peer-to-peer (P2P) ?",
    options: ["Un réseau sans routeur", "Un réseau où chaque ordinateur agit comme client et serveur", "Un réseau public", "Un réseau sécurisé par mot de passe"],
    answer: "Un réseau où chaque ordinateur agit comme client et serveur"
  },
  {
    question: "Quel est le rôle d’un switch dans un réseau ?",
    options: ["Bloquer les connexions", "Stocker les fichiers", "Rediriger les paquets entre les appareils d’un réseau local", "Connecter Internet aux téléphones"],
    answer: "Rediriger les paquets entre les appareils d’un réseau local"
  },
  {
    question: "Qu’est-ce qu’une API ?",
    options: ["Application Public Interface", "Advanced Program Integration", "Application Programming Interface", "Automated Protocol Interface"],
    answer:  "Application Programming Interface"
  },
  {
    question: "Quelle est l’utilité du protocole HTTPS ?",
    options: ["Créer des pages web", "Envoyer des emails", "Sécuriser la navigation web", "Télécharger plus rapidement"],
    answer: "Sécuriser la navigation web"
  },
  {
    question: "Que permet la commande 'pwd' dans un terminal Linux ?",
    options: ["Afficher les fichiers cachés", "Afficher le chemin du répertoire courant", "Créer un répertoire", "Fermer la session"],
    answer: "Afficher le chemin du répertoire courant"
  },
  {
    question: "Qu’est-ce qu’un fichier '.zip' ?",
    options: ["Un fichier image", "Un fichier de base de données", "Un fichier exécutable", "Un fichier compressé"],
    answer: "Un fichier compressé"
  },
  {
    question: "Quel langage est utilisé pour interroger une base de données ?",
    options: ["SQL", "HTML", "CSS", "XML"],
    answer: "SQL"
  },
  {
    question: "Lequel est un langage de programmation compilé ?",
    options: ["Java", "HTML", "CSS", "Markdown"],
    answer: "Java"
  },
  {
    question: "Quel périphérique permet de numériser un document papier ?",
    options: ["Imprimante", "Scanner", "Modem", "Écran tactile"],
    answer: "Scanner"
  },
  {
    question: "Quel protocole est utilisé pour envoyer des emails ?",
    options: ["HTTP", "SMTP", "FTP", "DNS"],
    answer: "SMTP"
  },
  {
    question: "Qu'est-ce qu'un fichier binaire ?",
    options: ["Un fichier texte lisible", "Un fichier compressé", "Un fichier contenant du code machine", "Un fichier image"],
    answer: "Un fichier contenant du code machine"
  },
  {
    question: "Quel outil est utilisé pour créer des diagrammes UML ?",
    options: ["Photoshop", "Word", "StarUML", "Excel"],
    answer: "StarUML"
  },
  {
    question: "Quelle est la fonction de la touche Ctrl + Z ?",
    options: ["Refaire une action", "Annuler la dernière action", "Copier le texte", "Fermer une application"],
    answer: "Annuler la dernière action"
  },
  {
    question: "Que fait la commande 'cp' sous Linux ?",
    options: ["Changer de répertoire", "Copier un fichier", "Compresser un dossier", "Changer les permissions"],
    answer: "Copier un fichier"
  },
  {
    question: "Lequel de ces systèmes est propriétaire ?",
    options: ["Ubuntu", "Debian", "Windows", "Fedora"],
    answer: "Windows"
  },
  {
    question: "Quel composant relie tous les éléments de l’ordinateur ?",
    options: ["Le disque dur", "La carte mère", "La RAM", "Le clavier"],
    answer: "La carte mère"
  },
  {
    question: "Quelle technologie permet de lire les CD et DVD ?",
    options: ["Bluetooth", "Laser", "Radio", "Magnétisme"],
    answer: "Laser"
  },
  {
    question: "Que fait un système RAID ?",
    options: ["Crée des sauvegardes dans le cloud", "Gère plusieurs disques durs pour la performance ou la redondance", "Contrôle les droits des utilisateurs", "Protéger les fichiers avec un mot de passe"],
    answer: "Gère plusieurs disques durs pour la performance ou la redondance"
  },
  {
    question: "Quel est le système de fichiers utilisé par macOS ?",
    options: ["ext4", "NTFS", "APFS", "FAT32"],
    answer: "APFS"
  },
  {
    question: "Que permet la commande 'sudo' sous Linux ?",
    options: ["Changer d’utilisateur", "Lancer une commande avec les privilèges administrateur", "Afficher les processus", "Copier un fichier"],
    answer: "Lancer une commande avec les privilèges administrateur"
  },
  {
    question: "Que signifie l’abréviation LAN ?",
    options: ["Large Area Network", "Local Access Network", "Local Area Network", "Limited Access Network"],
    answer: "Local Area Network"
  }
  ],

  // --------QUESTIONS DEVELOPPEMENT WEB------------------
  web:[
    {
    question: "Quel langage est utilisé pour structurer une page web ?",
    options: ["JavaScript", "CSS", "HTML", "Python"],
    answer: "HTML"
  },
  {
    question: "Quel langage permet de styliser les éléments HTML ?",
    options: ["Java", "PHP", "CSS", "SQL"],
    answer: "CSS"
  },
  {
    question: "Quel langage est principalement utilisé pour rendre une page web interactive ?",
    options: ["HTML", "JavaScript", "CSS", "Python"],
    answer: "JavaScript"
  },
  {
    question: "Que signifie l’acronyme CSS ?",
    options: ["Cascading Style Sheets", "Creative Style System", "Coded Style Sheet", "Central Style Syntax"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "Quel est l’élément HTML pour créer un lien hypertexte ?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    answer: "<a>"
  },
  {
    question: "Quelle balise est utilisée pour insérer une image dans HTML ?",
    options: ["<image>", "<img>", "<pic>", "<src>"],
    answer: "<img>"
  },
  {
    question: "Quel langage est exécuté côté client ?",
    options: ["PHP", "Python", "JavaScript", "SQL"],
    answer: "JavaScript"
  },
  {
    question: "Quelle méthode HTTP est utilisée pour envoyer des données à un serveur ?",
    options: ["GET", "POST", "FETCH", "SEND"],
    answer: "POST"
  },
  {
    question: "Quel attribut HTML permet de rendre un champ de formulaire obligatoire ?",
    options: ["required", "validate", "obligatoire", "check"],
    answer: "required"
  },
  {
    question: "Quelle propriété CSS permet de changer la couleur du texte ?",
    options: ["background-color", "text-color", "color", "font-color"],
    answer: "color"
  },
  {
    question: "Quel framework JavaScript est développé par Facebook ?",
    options: ["Vue.js", "Angular", "React", "jQuery"],
    answer: "React"
  },
  {
    question: "Quel est le rôle de Node.js ?",
    options: ["Créer des pages HTML", "Styliser les pages web", "Exécuter JavaScript côté serveur", "Créer des bases de données"],
    answer: "Exécuter JavaScript côté serveur"
  },
  {
    question: "Quelle base de données est souvent utilisée avec JavaScript côté serveur ?",
    options: ["MySQL", "MongoDB", "Oracle", "PostgreSQL"],
    answer: "MongoDB"
  },
  {
    question: "Quel outil permet de gérer les versions de code ?",
    options: ["Docker", "Git", "Webpack", "Nginx"],
    answer: "Git"
  },
  {
    question: "Quel est le rôle de l’attribut 'action' dans une balise <form> ?",
    options: ["Spécifie la méthode HTTP", "Définit la cible du formulaire", "Définit l’apparence du formulaire", "Ajoute un bouton"],
    answer: "Définit la cible du formulaire"
  },
  {
    question: "Quel protocole est utilisé pour sécuriser les sites web ?",
    options: ["FTP", "HTTP", "HTTPS", "SMTP"],
    answer: "HTTPS"
  },
  {
    question: "Quel mot-clé JavaScript est utilisé pour déclarer une variable ?",
    options: ["var", "int", "def", "declare"],
    answer: "var"
  },
  {
    question: "Quelle méthode JavaScript permet d’ajouter un élément à la fin d’un tableau ?",
    options: ["push()", "append()", "add()", "insert()"],
    answer: "push()"
  },
  {
    question: "Quelle extension de fichier est associée à une feuille de style CSS ?",
    options: [".html", ".css", ".js", ".scss"],
    answer: ".css"
  },
  {
    question: "Quelle balise HTML est utilisée pour insérer un fichier JavaScript ?",
    options: ["<script>", "<js>", "<code>", "<javascript>"],
    answer: "<script>"
  },
  {
    question: "Quel outil permet d’inspecter le code HTML et CSS dans le navigateur ?",
    options: ["GitHub", "FTP", "DevTools", "NPM"],
    answer: "DevTools"
  },
  {
    question: "Quel attribut HTML permet d’ouvrir un lien dans un nouvel onglet ?",
    options: ["target='_blank'", "newtab='true'", "href='external'", "link='blank'"],
    answer: "target='_blank'"
  },
  {
    question: "Quel mot-clé JavaScript est utilisé pour créer une fonction ?",
    options: ["function", "def", "proc", "method"],
    answer: "function"
  },
  {
    question: "Quel framework CSS permet de créer rapidement des interfaces responsives ?",
    options: ["Bootstrap", "React", "Vue", "Django"],
    answer: "Bootstrap"
  },
  {
    question: "Que signifie l’acronyme DOM en JavaScript ?",
    options: ["Document Object Model", "Data Oriented Module", "Dynamic Output Map", "Design Object Markup"],
    answer: "Document Object Model"
  },
    {
    question: "Quel langage côté serveur est souvent associé à une base de données MySQL ?",
    options: ["Python", "PHP", "Ruby", "Go"],
    answer: "PHP"
  },
  {
    question: "Quel attribut CSS permet de rendre un site responsive ?",
    options: ["width: auto", "flex-direction", "media queries", "overflow"],
    answer: "media queries"
  },
  {
    question: "Quel outil permet de gérer les paquets JavaScript ?",
    options: ["Composer", "Yarn", "Docker", "Xampp"],
    answer: "Yarn"
  },
  {
    question: "Quel est le rôle de l’attribut 'placeholder' dans un champ de formulaire ?",
    options: ["Valider la saisie", "Donner un exemple de texte", "Masquer le champ", "Rendre le champ obligatoire"],
    answer: "Donner un exemple de texte"
  },
  {
    question: "Quelle est la syntaxe correcte pour un commentaire en CSS ?",
    options: ["// commentaire", "<!-- commentaire -->", "/* commentaire */", "# commentaire"],
    answer: "/* commentaire */"
  },
  {
    question: "Quelle extension de fichier est utilisée pour un script JavaScript ?",
    options: [".html", ".css", ".js", ".json"],
    answer: ".js"
  },
  {
    question: "Quel langage est utilisé dans les fichiers .ejs ?",
    options: ["JavaScript", "PHP", "Ruby", "Python"],
    answer: "JavaScript"
  },
  {
    question: "Quel framework JavaScript est basé sur le concept de composants ?",
    options: ["React", "jQuery", "Bootstrap", "SASS"],
    answer: "React"
  },
  {
    question: "Quelle propriété CSS permet d'aligner horizontalement un élément dans un flex ?",
    options: ["align-items", "text-align", "justify-content", "margin"],
    answer: "justify-content"
  },
  {
    question: "Quel outil compile les fichiers SCSS en CSS ?",
    options: ["Parcel", "Webpack", "Node", "Sass"],
    answer: "Sass"
  },
  {
    question: "Quel protocole est utilisé pour les API REST ?",
    options: ["SMTP", "FTP", "HTTP", "SSH"],
    answer: "HTTP"
  },
  {
    question: "Quel est le rôle de Express.js ?",
    options: ["Créer des interfaces", "Styler des composants", "Créer des applications web en Node.js", "Compiler du JavaScript"],
    answer: "Créer des applications web en Node.js"
  },
  {
    question: "Quelle méthode JavaScript permet de parcourir tous les éléments d’un tableau ?",
    options: ["loop()", "forEach()", "each()", "iterate()"],
    answer: "forEach()"
  },
  {
    question: "Quel attribut HTML permet d’envoyer automatiquement un formulaire au changement ?",
    options: ["autopost", "onchange", "submit", "action-change"],
    answer: "onchange"
  },
  {
    question: "Quelle commande Git permet de cloner un dépôt distant ?",
    options: ["git init", "git clone", "git pull", "git fetch"],
    answer: "git clone"
  },
  {
    question: "Quel framework CSS est basé sur des classes utilitaires ?",
    options: ["Bulma", "Bootstrap", "Tailwind CSS", "Materialize"],
    answer: "Tailwind CSS"
  },
  {
    question: "Quel élément HTML sert à créer une liste non ordonnée ?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: "<ul>"
  },
  {
    question: "Quelle commande NPM permet d’installer une dépendance localement ?",
    options: ["npm start", "npm run", "npm install", "npm build"],
    answer: "npm install"
  },
  {
    question: "Quel langage est souvent utilisé avec Flask ?",
    options: ["Ruby", "PHP", "Python", "Java"],
    answer: "Python"
  },
  {
    question: "Quel outil permet d’héberger du code en ligne avec Git ?",
    options: ["Heroku", "GitHub", "Netlify", "MongoDB"],
    answer: "GitHub"
  },
  {
    question: "Quelle balise HTML est utilisée pour les tableaux ?",
    options: ["<div>", "<table>", "<grid>", "<section>"],
    answer: "<table>"
  },
  {
    question: "Que fait la propriété 'z-index' en CSS ?",
    options: ["Définit la position verticale", "Contrôle la superposition des éléments", "Crée des colonnes", "Masque un élément"],
    answer: "Contrôle la superposition des éléments"
  },
  {
    question: "Quel est le rôle de 'async' dans une fonction JavaScript ?",
    options: ["Lancer une boucle", "Effectuer une opération synchronisée", "Définir une promesse", "Permettre l’usage de await"],
    answer: "Permettre l’usage de await"
  },
  {
    question: "Quelle méthode permet de convertir un objet JavaScript en JSON ?",
    options: ["JSON.parse()", "JSON.stringify()", "object.toJSON()", "JSON.convert()"],
    answer: "JSON.stringify()"
  },
  {
    question: "Quel est le rôle de l’élément <head> dans un document HTML ?",
    options: ["Afficher le titre dans le body", "Inclure les scripts et styles", "Contenir le texte visible", "Créer un en-tête graphique"],
    answer: "Inclure les scripts et styles"
  },
  {
    question: "Quelle propriété CSS permet de changer la taille du texte ?",
    options: ["font-size", "text-size", "size", "text-style"],
    answer: "font-size"
  },
  {
    question: "Quel attribut HTML est utilisé pour donner un identifiant unique à un élément ?",
    options: ["class", "id", "name", "ref"],
    answer: "id"
  },
  {
    question: "Quelle fonction JavaScript arrondit un nombre à l'entier le plus proche ?",
    options: ["Math.ceil()", "Math.floor()", "Math.round()", "Math.fix()"],
    answer: "Math.round()"
  },
  {
    question: "Quelle balise HTML est utilisée pour inclure un fichier CSS ?",
    options: ["<style>", "<css>", "<link>", "<stylesheet>"],
    answer: "<link>"
  },
  {
    question: "Quel est le rôle de la propriété 'position: absolute' en CSS ?",
    options: [
      "Place un élément par rapport à la page entière",
      "Le rend invisible",
      "Le fixe en bas de la page",
      "Le centre horizontalement",
    ],
    answer: "Place un élément par rapport à la page entière"
  },
  {
    question: "Quel type de base de données est MongoDB ?",
    options: ["Relationnelle", "NoSQL", "SQL", "Orientée graphe"],
    answer: "NoSQL"
  },
  {
    question: "Quelle méthode JavaScript est utilisée pour filtrer un tableau ?",
    options: ["filter()", "map()", "reduce()", "sort()"],
    answer: "filter()"
  },
  {
    question: "Quel outil permet de transformer du code moderne en JavaScript compatible avec tous les navigateurs ?",
    options: ["Babel", "Webpack", "Vite", "Node.js"],
    answer: "Babel"
  },
  {
    question: "Quelle fonction JavaScript déclenche une alerte ?",
    options: ["alert()", "popup()", "notify()", "message()"],
    answer: "alert()"
  },
  {
    question: "Quel est le rôle de l’attribut 'name' dans un champ de formulaire HTML ?",
    options: [
      "Définit un style CSS",
      "Spécifie la classe",
      "Identifie la donnée côté serveur",
      "Ajoute un label au champ"
    ],
    answer: "Identifie la donnée côté serveur"
  },
  {
    question: "Quelle extension est utilisée pour les fichiers React ?",
    options: [".jsx", ".react", ".jsr", ".view"],
    answer: ".jsx"
  },
  {
    question: "Quelle commande permet d’initialiser un projet Node.js ?",
    options: ["npm init", "node create", "npm start", "npm install"],
    answer: "npm init"
  },
  {
    question: "Quel outil JavaScript permet d’exécuter du code asynchrone de manière élégante ?",
    options: ["setTimeout", "callback", "promises", "setInterval"],
    answer: "promises"
  },
  {
    question: "Quelle balise HTML est utilisée pour regrouper les lignes d’un tableau ?",
    options: ["<row>", "<thead>", "<group>", "<tr>"],
    answer: "<thead>"
  },
  {
    question: "Quel élément HTML est utilisé pour créer un champ de saisie ?",
    options: ["<input>", "<field>", "<text>", "<box>"],
    answer: "<input>"
  },
  {
    question: "Quelle méthode JavaScript permet de trier un tableau ?",
    options: ["sort()", "order()", "arrange()", "filter()"],
    answer: "sort()"
  },
  {
    question: "Quel mot-clé permet de déclarer une constante en JavaScript ?",
    options: ["const", "let", "define", "fix"],
    answer: "const"
  },
  {
    question: "Quelle fonction est utilisée pour intercepter un clic sur un bouton ?",
    options: ["onclick", "onhover", "ontouch", "onpress"],
    answer: "onclick"
  },
  {
    question: "Quelle balise est utilisée pour afficher une vidéo en HTML ?",
    options: ["<video>", "<media>", "<movie>", "<mp4>"],
    answer: "<video>"
  },
  {
    question: "Quel mot-clé permet de créer une classe en JavaScript ?",
    options: ["object", "define", "class", "structure"],
    answer: "class"
  },
  {
    question: "Quel outil permet de créer un environnement virtuel local ?",
    options: ["Docker", "Git", "Heroku", "MongoDB"],
    answer: "Docker"
  },
  {
    question: "Quelle commande Git permet d’envoyer du code vers un dépôt distant ?",
    options: ["git push", "git pull", "git clone", "git init"],
    answer: "git push"
  },
  {
    question: "Quel attribut HTML permet de désactiver un champ de formulaire ?",
    options: ["disabled", "readonly", "hidden", "inactive"],
    answer: "disabled"
  },
  {
    question: "Quelle méthode JavaScript permet d’ajouter un élément en début de tableau ?",
    options: ["push()", "unshift()", "insert()", "prepend()"],
    answer: "unshift()"
  },
  {
    question: "Quel framework utilise la directive v-for ?",
    options: ["React", "Vue.js", "Angular", "jQuery"],
    answer: "Vue.js"
  },
    {
    question: "Quel est le rôle de l’attribut 'rel' dans une balise <link> ?",
    options: ["Définir le chemin du fichier", "Spécifier le type MIME", "Décrire la relation avec le document", "Activer le JavaScript"],
    answer: "Décrire la relation avec le document"
  },
  {
    question: "Quelle est la structure correcte d'une fonction fléchée en JavaScript ?",
    options: [
      "() => {}",
      "function() => {}",
      "() -> {}",
      "function => {}"
    ],
    answer: "() => {}"
  },
  {
    question: "Quel protocole est principalement utilisé pour communiquer avec une API REST ?",
    options: ["SSH", "HTTP", "SMTP", "TCP"],
    answer: "HTTP"
  },
  {
    question: "Quelle balise HTML est utilisée pour afficher du texte important en gras ?",
    options: ["<em>", "<strong>", "<bold>", "<b>"],
    answer: "<strong>"
  },
  {
    question: "Quel attribut CSS permet de rendre un texte en italique ?",
    options: ["font-style", "text-transform", "font-weight", "text-style"],
    answer: "font-style"
  },
  {
    question: "Quel outil permet de surveiller les modifications de fichiers en développement ?",
    options: ["Nodemon", "Webpack", "Babel", "TypeScript"],
    answer: "Nodemon"
  },
  {
    question: "Quelle balise HTML est utilisée pour créer une liste ordonnée ?",
    options: ["<ul>", "<ol>", "<li>", "<list>"],
    answer: "<ol>"
  },
  {
    question: "Quelle méthode HTTP est utilisée pour mettre à jour une ressource ?",
    options: ["GET", "DELETE", "UPDATE", "PUT"],
    answer: "PUT"
  },
  {
    question: "Quelle propriété CSS permet de centrer un élément avec Flexbox ?",
    options: ["align-items: center", "justify-content: center", "text-align: center", "margin: auto"],
    answer: "justify-content: center"
  },
  {
    question: "Quel mot-clé JavaScript est utilisé pour gérer les erreurs ?",
    options: ["try", "error", "handle", "throw"],
    answer: "try"
  },
  {
    question: "Quel format est souvent utilisé pour échanger des données entre serveur et client ?",
    options: ["XML", "CSV", "TXT", "JSON"],
    answer: "JSON"
  },
  {
    question: "Quelle méthode JavaScript vérifie si un élément est dans un tableau ?",
    options: ["check()", "contains()", "includes()", "has()"],
    answer: "includes()"
  },
  {
    question: "Quelle propriété CSS permet de faire un fond en dégradé ?",
    options: ["background-color", "background-image", "gradient", "linear-gradient"],
    answer: "linear-gradient"
  },
  {
    question: "Quel langage est utilisé pour interroger des bases de données relationnelles ?",
    options: ["NoSQL", "MongoDB", "SQL", "Node.js"],
    answer: "SQL"
  },
  {
    question: "Quelle balise HTML permet d'intégrer un fichier audio ?",
    options: ["<audio>", "<sound>", "<media>", "<mp3>"],
    answer: "<audio>"
  },
  {
    question: "Que retourne 'typeof null' en JavaScript ?",
    options: ["'null'", "'undefined'", "'object'", "'boolean'"],
    answer: "'object'"
  },
  {
    question: "Quel outil permet de déployer une application web statique gratuitement ?",
    options: ["MongoDB", "Netlify", "Express.js", "Docker"],
    answer: "Netlify"
  },
  {
    question: "Quel mot-clé permet de créer une boucle en JavaScript ?",
    options: ["loop", "repeat", "while", "foreach"],
    answer: "while"
  },
  {
    question: "Quel est le rôle de l’attribut 'defer' dans une balise <script> ?",
    options: [
      "Retarde l’exécution du script jusqu’à la fin du chargement du HTML",
      "Empêche l’exécution du script",
      "Charge le script en priorité",
      "Exécute le script en boucle"
    ],
    answer: "Retarde l’exécution du script jusqu’à la fin du chargement du HTML"
  },
  {
    question: "Quelle méthode de console permet d'afficher des erreurs ?",
    options: ["console.log()", "console.warn()", "console.debug()", "console.error()"],
    answer: "console.error()"
  },
  {
    question: "Quel outil permet de compiler du TypeScript en JavaScript ?",
    options: ["TSC", "Babel", "Node", "Webpack"],
    answer: "TSC"
  },
  {
    question: "Quel framework front-end utilise les fichiers .vue ?",
    options: ["Angular", "React", "Vue.js", "Svelte"],
    answer: "Vue.js"
  },
  {
    question: "Quelle balise HTML est utilisée pour créer un saut de ligne ?",
    options: ["<br>", "<p>", "<hr>", "<line>"],
    answer: "<br>"
  },
  {
    question: "Que permet la méthode fetch() en JavaScript ?",
    options: [
      "Exécuter du code PHP",
      "Récupérer des données d’une URL",
      "Afficher une alerte",
      "Lancer une animation CSS"
    ],
    answer: "Récupérer des données d’une URL"
  },
  {
    question: "Quelle propriété CSS permet de faire défiler du contenu masqué ?",
    options: ["overflow", "scroll", "display", "visibility"],
    answer: "overflow"
  }
  ],

// ---------------QUESTIONS CULTURE GENERQLE----------------------
culture:[
    {
    question: "Quel est le plus grand pays du monde en superficie ?",
    options: ["Chine", "États-Unis", "Canada", "Russie"],
    answer: "Russie"
  },
  {
    question: "Qui a écrit *Les Misérables* ?",
    options: ["Victor Hugo", "Émile Zola", "Molière", "Albert Camus"],
    answer: "Victor Hugo"
  },
  {
    question: "Quel est le symbole chimique de l’or ?",
    options: ["Ag", "Au", "Fe", "Pb"],
    answer: "Au"
  },
  {
    question: "Quel océan borde la côte ouest de l’Afrique ?",
    options: ["Océan Atlantique", "Océan Indien", "Océan Arctique", "Océan Pacifique"],
    answer: "Océan Atlantique"
  },
  {
    question: "Combien de continents existe-t-il sur Terre ?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    question: "Quel est le fleuve le plus long du monde ?",
    options: ["Amazone", "Nil", "Yangtsé", "Mississippi"],
    answer: "Amazone"
  },
  {
    question: "Quel pays a inventé les Jeux Olympiques ?",
    options: ["Italie", "Grèce", "France", "Chine"],
    answer: "Grèce"
  },
  {
    question: "Qui a peint la Joconde ?",
    options: ["Michel-Ange", "Léonard de Vinci", "Raphaël", "Van Gogh"],
    answer: "Léonard de Vinci"
  },
  {
    question: "Quelle est la capitale de l’Australie ?",
    options: ["Sydney", "Melbourne", "Canberra", "Perth"],
    answer: "Canberra"
  },
  {
    question: "Dans quel pays se trouve le Taj Mahal ?",
    options: ["Pakistan", "Inde", "Népal", "Bangladesh"],
    answer: "Inde"
  },
  {
    question: "Qui a découvert la loi de la gravitation universelle ?",
    options: ["Galilée", "Newton", "Einstein", "Copernic"],
    answer: "Newton"
  },
  {
    question: "Quel est le plus grand désert du monde ?",
    options: ["Sahara", "Désert d’Arabie", "Antarctique", "Gobi"],
    answer: "Antarctique"
  },
  {
    question: "Quelle est la capitale du Brésil ?",
    options: ["Rio de Janeiro", "São Paulo", "Brasília", "Recife"],
    answer: "Brasília"
  },
  {
    question: "Qui a écrit *Roméo et Juliette* ?",
    options: ["Shakespeare", "Molière", "Corneille", "Hugo"],
    answer: "Shakespeare"
  },
  {
    question: "Quel est l’élément principal de l’air ?",
    options: ["Oxygène", "Hydrogène", "Azote", "Carbone"],
    answer: "Azote"
  },
  {
    question: "Combien y a-t-il de pays dans l’Union Européenne (en 2024) ?",
    options: ["27", "28", "29", "26"],
    answer: "27"
  },
  {
    question: "Quel est l’auteur du *Petit Prince* ?",
    options: ["Antoine de Saint-Exupéry", "Jules Verne", "Paul Éluard", "Jean de La Fontaine"],
    answer: "Antoine de Saint-Exupéry"
  },
  {
    question: "Quelle est la langue officielle du Brésil ?",
    options: ["Espagnol", "Français", "Portugais", "Anglais"],
    answer: "Portugais"
  },
  {
    question: "Quel est l’animal symbole de la sagesse ?",
    options: ["Chouette", "Chat", "Renard", "Tigre"],
    answer: "Chouette"
  },
  {
    question: "Quel pays a pour capitale Oslo ?",
    options: ["Suède", "Norvège", "Danemark", "Finlande"],
    answer: "Norvège"
  },
  {
    question: "Quel est le plus grand organe du corps humain ?",
    options: ["Le foie", "Le cœur", "Le cerveau", "La peau"],
    answer: "La peau"
  },
  {
    question: "Quel est l’artiste célèbre pour *Le Cri* ?",
    options: ["Edvard Munch", "Pablo Picasso", "Andy Warhol", "Gustav Klimt"],
    answer: "Edvard Munch"
  },
  {
    question: "Qui a été le premier président des États-Unis ?",
    options: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
    answer: "George Washington"
  },
  {
    question: "Quel est le pays le plus peuplé du monde ?",
    options: ["Inde", "Chine", "États-Unis", "Indonésie"],
    answer: "Inde"
  },
  {
    question: "Quel est le plus grand océan de la planète ?",
    options: ["Atlantique", "Arctique", "Pacifique", "Indien"],
    answer: "Pacifique"
  },
    {
    question: "Quelle est la capitale de la Turquie ?",
    options: ["Istanbul", "Ankara", "Izmir", "Antalya"],
    answer: "Ankara"
  },
  {
    question: "Combien de dents possède un adulte en bonne santé ?",
    options: ["28", "30", "32", "36"],
    answer: "32"
  },
  {
    question: "Dans quel pays se trouve la Tour de Pise ?",
    options: ["France", "Italie", "Espagne", "Portugal"],
    answer: "Italie"
  },
  {
    question: "Quel est l’instrument de musique à cordes typique de l’Espagne ?",
    options: ["Violoncelle", "Banjo", "Guitare", "Mandoline"],
    answer: "Guitare"
  },
  {
    question: "Quel est l’auteur de *L'Étranger* ?",
    options: ["Victor Hugo", "Albert Camus", "Jean-Paul Sartre", "Romain Gary"],
    answer: "Albert Camus"
  },
  {
    question: "Qui est le dieu principal de la mythologie grecque ?",
    options: ["Hadès", "Hermès", "Poséidon", "Zeus"],
    answer: "Zeus"
  },
  {
    question: "Combien de joueurs composent une équipe de volley-ball ?",
    options: ["5", "6", "7", "11"],
    answer: "6"
  },
  {
    question: "Quel est le plus long fleuve d’Europe ?",
    options: ["Danube", "Volga", "Loire", "Rhin"],
    answer: "Volga"
  },
  {
    question: "Qui a peint *Guernica* ?",
    options: ["Salvador Dalí", "Claude Monet", "Pablo Picasso", "Frida Kahlo"],
    answer: "Pablo Picasso"
  },
  {
    question: "Quel pays a pour monnaie le Yen ?",
    options: ["Chine", "Japon", "Corée du Sud", "Thaïlande"],
    answer: "Japon"
  },
  {
    question: "Combien de zéros comporte un milliard ?",
    options: ["6", "7", "8", "9"],
    answer: "9"
  },
  {
    question: "Quel est le sport national au Brésil ?",
    options: ["Basket-ball", "Volleyball", "Football", "Handball"],
    answer: "Football"
  },
  {
    question: "Qui est l’auteur de *1984* ?",
    options: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Jules Verne"],
    answer: "George Orwell"
  },
  {
    question: "Quel est le métal liquide à température ambiante ?",
    options: ["Mercure", "Plomb", "Zinc", "Argent"],
    answer: "Mercure"
  },
  {
    question: "Quelle ville est surnommée la 'Ville Lumière' ?",
    options: ["Londres", "Paris", "New York", "Rome"],
    answer: "Paris"
  },
  {
    question: "Quel continent est aussi un pays ?",
    options: ["Afrique", "Europe", "Australie", "Amérique"],
    answer: "Australie"
  },
  {
    question: "Qui a dit 'Je pense, donc je suis' ?",
    options: ["Platon", "Socrate", "Descartes", "Aristote"],
    answer: "Descartes"
  },
  {
    question: "Quel pays a remporté la Coupe du Monde 2018 ?",
    options: ["Brésil", "Allemagne", "France", "Argentine"],
    answer: "France"
  },
  {
    question: "Quel est le plus petit pays du monde ?",
    options: ["Saint-Marin", "Monaco", "Vatican", "Liechtenstein"],
    answer: "Vatican"
  },
  {
    question: "Quel est l’élément chimique dont le symbole est 'Na' ?",
    options: ["Azote", "Sodium", "Nickel", "Néon"],
    answer: "Sodium"
  },
  {
    question: "Qui est l’auteur de la saga *Harry Potter* ?",
    options: ["Stephen King", "J.K. Rowling", "J.R.R. Tolkien", "Suzanne Collins"],
    answer: "J.K. Rowling"
  },
  {
    question: "Combien de couleurs contient le drapeau de la France ?",
    options: ["2", "3", "4", "5"],
    answer: "3"
  },
  {
    question: "Quelle est la langue la plus parlée au monde (en natifs) ?",
    options: ["Anglais", "Hindi", "Espagnol", "Chinois mandarin"],
    answer: "Chinois mandarin"
  },
  {
    question: "Dans quel pays est née la démocratie ?",
    options: ["Italie", "France", "Grèce", "Allemagne"],
    answer: "Grèce"
  },
  {
    question: "Quelle est la capitale du Canada ?",
    options: ["Toronto", "Ottawa", "Vancouver", "Montréal"],
    answer: "Ottawa"
  },
    {
    question: "Quelle est la capitale de l’Inde ?",
    options: ["Mumbai", "New Delhi", "Bangalore", "Chennai"],
    answer: "New Delhi"
  },
  {
    question: "Quel est le nom du président français élu en 2017 et réélu en 2022 ?",
    options: ["François Hollande", "Emmanuel Macron", "Nicolas Sarkozy", "Jean-Luc Mélenchon"],
    answer: "Emmanuel Macron"
  },
  {
    question: "Quel pays est célèbre pour la muraille de plus de 20 000 km ?",
    options: ["Chine", "Inde", "Japon", "Corée du Sud"],
    answer: "Chine"
  },
  {
    question: "Quel est le plus haut sommet du monde ?",
    options: ["Mont Kilimandjaro", "Mont Blanc", "Everest", "K2"],
    answer: "Everest"
  },
  {
    question: "Dans quel pays est né le philosophe Karl Marx ?",
    options: ["France", "Allemagne", "Angleterre", "Russie"],
    answer: "Allemagne"
  },
  {
    question: "Quelle planète est la plus proche du Soleil ?",
    options: ["Terre", "Vénus", "Mars", "Mercure"],
    answer: "Mercure"
  },
  {
    question: "Quel est le plus grand lac d’Afrique ?",
    options: ["Lac Tchad", "Lac Tanganyika", "Lac Victoria", "Lac Malawi"],
    answer: "Lac Victoria"
  },
  {
    question: "Quel pays a pour capitale Hanoï ?",
    options: ["Thaïlande", "Vietnam", "Philippines", "Indonésie"],
    answer: "Vietnam"
  },
  {
    question: "Quel philosophe grec est le maître de Platon ?",
    options: ["Socrate", "Aristote", "Épicure", "Zénon"],
    answer: "Socrate"
  },
  {
    question: "Quel est le deuxième pays le plus peuplé au monde ?",
    options: ["Chine", "Inde", "États-Unis", "Indonésie"],
    answer: "Chine"
  },
  {
    question: "Quel est le jour de la fête nationale française ?",
    options: ["11 novembre", "1er mai", "14 juillet", "8 mai"],
    answer: "14 juillet"
  },
  {
    question: "Quel scientifique a développé la théorie de la relativité ?",
    options: ["Isaac Newton", "Stephen Hawking", "Nikola Tesla", "Albert Einstein"],
    answer: "Albert Einstein"
  },
  {
    question: "Dans quel pays se trouve la ville de Marrakech ?",
    options: ["Tunisie", "Égypte", "Maroc", "Algérie"],
    answer: "Maroc"
  },
  {
    question: "Quelle est la langue officielle de l’Argentine ?",
    options: ["Portugais", "Anglais", "Espagnol", "Italien"],
    answer: "Espagnol"
  },
  {
    question: "Quel monument célèbre se trouve à Rome ?",
    options: ["La tour Eiffel", "Le Colisée", "Big Ben", "Le Parthénon"],
    answer: "Le Colisée"
  },
  {
    question: "Quel pays est surnommé le pays du Soleil-Levant ?",
    options: ["Chine", "Japon", "Corée du Sud", "Thaïlande"],
    answer: "Japon"
  },
  {
    question: "Combien de côtés a un hexagone ?",
    options: ["5", "6", "7", "8"],
    answer: "6"
  },
  {
    question: "Quel écrivain est l’auteur de *Notre-Dame de Paris* ?",
    options: ["Voltaire", "Rabelais", "Victor Hugo", "Zola"],
    answer: "Victor Hugo"
  },
  {
    question: "Quel animal figure sur le drapeau de l’Espagne ?",
    options: ["Aigle", "Taureau", "Lion", "Aucun"],
    answer: "Aucun"
  },
  {
    question: "Quelle est la monnaie utilisée en Allemagne ?",
    options: ["Franc", "Dollar", "Livre", "Euro"],
    answer: "Euro"
  },
  {
    question: "Dans quel pays se situe la ville de Dubrovnik ?",
    options: ["Italie", "Croatie", "Grèce", "Monténégro"],
    answer: "Croatie"
  },
  {
    question: "Quelle est la capitale de la Corée du Sud ?",
    options: ["Pyongyang", "Busan", "Tokyo", "Séoul"],
    answer: "Séoul"
  },
  {
    question: "Qui a écrit *Le Rouge et le Noir* ?",
    options: ["Maupassant", "Stendhal", "Zola", "Flaubert"],
    answer: "Stendhal"
  },
  {
    question: "Quelle est la durée d’un mandat présidentiel en France ?",
    options: ["4 ans", "5 ans", "6 ans", "7 ans"],
    answer: "5 ans"
  },
  {
    question: "Quel est l’organe qui filtre le sang dans le corps humain ?",
    options: ["Cœur", "Poumons", "Foie", "Reins"],
    answer: "Reins"
  },
  {
    question: "Quel pays a remporté la première Coupe du Monde de football en 1930 ?",
    options: ["Brésil", "Allemagne", "Argentine", "Uruguay"],
    answer: "Uruguay"
  },
  {
    question: "Quel est le nom de la galaxie dans laquelle se trouve la Terre ?",
    options: ["Andromède", "Voie lactée", "Galaxie du Sagittaire", "Alpha Centauri"],
    answer: "Voie lactée"
  },
  {
    question: "Quelle est la capitale de la Suède ?",
    options: ["Oslo", "Copenhague", "Stockholm", "Helsinki"],
    answer: "Stockholm"
  },
  {
    question: "Combien de couleurs a un arc-en-ciel ?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    question: "Quel écrivain a créé le personnage de Sherlock Holmes ?",
    options: ["Agatha Christie", "Stephen King", "Arthur Conan Doyle", "Jules Verne"],
    answer: "Arthur Conan Doyle"
  },
  {
    question: "Quel est le nom du président actuel des États-Unis (2024) ?",
    options: ["Donald Trump", "Joe Biden", "Barack Obama", "Kamala Harris"],
    answer: "Joe Biden"
  },
  {
    question: "Quelle ville française est célèbre pour son festival de cinéma ?",
    options: ["Paris", "Lyon", "Cannes", "Nice"],
    answer: "Cannes"
  },
  {
    question: "Quel animal est le plus rapide du monde ?",
    options: ["Guepard", "Aigle", "Autruche", "Panthère"],
    answer: "Guepard"
  },
  {
    question: "Quel est l’inventeur de l’imprimerie ?",
    options: ["Galilée", "Gutenberg", "Léonard de Vinci", "Newton"],
    answer: "Gutenberg"
  },
  {
    question: "Quel est l’organe principal du système respiratoire ?",
    options: ["Cœur", "Estomac", "Poumons", "Reins"],
    answer: "Poumons"
  },
  {
    question: "Quelle est la capitale de l’Iran ?",
    options: ["Téhéran", "Bagdad", "Kaboul", "Islamabad"],
    answer: "Téhéran"
  },
  {
    question: "Quel est le nom du plus célèbre tableau de Van Gogh ?",
    options: ["Les Tournesols", "La Nuit étoilée", "Le Cri", "La Joconde"],
    answer: "La Nuit étoilée"
  },
  {
    question: "Combien de jours compte une année bissextile ?",
    options: ["364", "365", "366", "367"],
    answer: "366"
  },
  {
    question: "Quelle est la capitale de l’Éthiopie ?",
    options: ["Khartoum", "Addis-Abeba", "Lusaka", "Kampala"],
    answer: "Addis-Abeba"
  },
  {
    question: "Quelle planète est surnommée la planète rouge ?",
    options: ["Mars", "Vénus", "Jupiter", "Saturne"],
    answer: "Mars"
  },
  {
    question: "Quel est le symbole chimique de l’oxygène ?",
    options: ["O", "Ox", "Og", "Oz"],
    answer: "O"
  },
  {
    question: "Quel est l’ancien nom du Bénin ?",
    options: ["Dahomey", "Haïti", "Gao", "Kankan"],
    answer: "Dahomey"
  },
  {
    question: "Quel pays a accueilli les Jeux Olympiques de 2020 (reportés en 2021) ?",
    options: ["Chine", "France", "Japon", "Brésil"],
    answer: "Japon"
  },
  {
    question: "Quel est le plus long os du corps humain ?",
    options: ["Humérus", "Tibia", "Fémur", "Radius"],
    answer: "Fémur"
  },
  {
    question: "Qui a peint la fresque de la Chapelle Sixtine ?",
    options: ["Raphaël", "Michel-Ange", "Léonard de Vinci", "Caravage"],
    answer: "Michel-Ange"
  },
  {
    question: "Quel pays africain est le plus peuplé ?",
    options: ["Égypte", "Éthiopie", "Nigeria", "Afrique du Sud"],
    answer: "Nigeria"
  },
  {
    question: "Quel est le nom du volcan situé à Naples ?",
    options: ["Etna", "Stromboli", "Fuji", "Vésuve"],
    answer: "Vésuve"
  },
  {
    question: "Quelle est la capitale de la Côte d'Ivoire ?",
    options: ["Abidjan", "Yamoussoukro", "Bouaké", "Daloa"],
    answer: "Yamoussoukro"
  },
  {
    question: "Quel pays a pour capitale Reykjavik ?",
    options: ["Norvège", "Finlande", "Islande", "Suède"],
    answer: "Islande"
  },
  {
    question: "Quel fleuve traverse Paris ?",
    options: ["Rhin", "Loire", "Seine", "Garonne"],
    answer: "Seine"
  }
],


  // -------------------QUESTIONS SPORT------------------------------
  sport: [ {
    question: "Quel pays est surnommé les 'Springboks' en rugby ?",
    options: ["Australie", "Angleterre", "Afrique du Sud", "Nouvelle-Zélande"],
    answer: "Afrique du Sud"
  },
  {
    question: "Quelle surface est utilisée à Roland-Garros ?",
    options: ["Gazon", "Dur", "Terre battue", "Synthétique"],
    answer: "Terre battue"
  },
  {
    question: "Quel est le nom de l'ancien stade du Real Madrid ?",
    options: ["Parc des Princes", "Old Trafford", "Santiago Bernabéu", "Camp Nou"],
    answer: "Santiago Bernabéu"
  },
  {
    question: "Quel est le sport de prédilection de Khabib Nurmagomedov ?",
    options: ["Boxe", "MMA", "Judo", "Taekwondo"],
    answer: "MMA"
  },
  {
    question: "Quel footballeur camerounais a joué au FC Barcelone et à l'Inter Milan ?",
    options: ["Rigobert Song", "Samuel Eto’o", "Patrick Mboma", "Clinton N'Jie"],
    answer: "Samuel Eto’o"
  },
  {
    question: "Quel pays a remporté l'Euro 2016 ?",
    options: ["France", "Allemagne", "Portugal", "Espagne"],
    answer: "Portugal"
  },
  {
    question: "Quel est le nom du célèbre cycliste français quintuple vainqueur du Tour de France ?",
    options: ["Julian Alaphilippe", "Bernard Hinault", "Laurent Jalabert", "Raymond Poulidor"],
    answer: "Bernard Hinault"
  },
  {
    question: "Quel est le sport où l’on effectue des 'slam dunks' ?",
    options: ["Football", "Basket-ball", "Volleyball", "Handball"],
    answer: "Basket-ball"
  },
  {
    question: "Quel pays a remporté la Coupe du Monde de cricket 2023 ?",
    options: ["Inde", "Australie", "Angleterre", "Pakistan"],
    answer: "Australie"
  },
  {
    question: "Quel pays domine historiquement le hockey sur glace ?",
    options: ["États-Unis", "Suède", "Canada", "Allemagne"],
    answer: "Canada"
  },
  {
    question: "Dans quelle ville se joue la finale de la NBA si l’équipe de l’Est reçoit ?",
    options: ["La ville varie", "Miami", "Chicago", "Boston"],
    answer: "La ville varie"
  },
  {
    question: "Combien de joueurs forment une équipe de baseball ?",
    options: ["7", "8", "9", "10"],
    answer: "9"
  },
  {
    question: "Quel sport est représenté par la NBA ?",
    options: ["Baseball", "Football américain", "Basket-ball", "Hockey"],
    answer: "Basket-ball"
  },
  {
    question: "Dans quel sport pratique-t-on le 'penalty shootout' ?",
    options: ["Tennis", "Football", "Golf", "Cyclisme"],
    answer: "Football"
  },
  {
    question: "Quel est le sport d’équipe pratiqué avec un ballon ovale ?",
    options: ["Basket-ball", "Football", "Rugby", "Volley-ball"],
    answer: "Rugby"
  },
  {
    question: "Combien de reprises dans un combat de boxe olympique ?",
    options: ["2", "3", "5", "6"],
    answer: "3"
  },
  {
    question: "Quel athlète français a remporté la médaille d’or du décathlon à Londres 2012 ?",
    options: ["Kévin Mayer", "Christophe Lemaitre", "Teddy Tamgho", "Renaud Lavillenie"],
    answer: "Kévin Mayer"
  },
  {
    question: "Quel est le nom du championnat anglais de football ?",
    options: ["La Liga", "Bundesliga", "Premier League", "Serie A"],
    answer: "Premier League"
  },
  {
    question: "Quel sport utilise une raquette et un volant ?",
    options: ["Tennis", "Badminton", "Squash", "Tennis de table"],
    answer: "Badminton"
  },
  {
    question: "Quel est le record de buts en une saison de Ligue 1 ?",
    options: ["38", "41", "44", "50"],
    answer: "44"
  },
  {
    question: "Combien de disciplines y a-t-il en athlétisme ?",
    options: ["10", "20", "24", "plus de 40"],
    answer: "plus de 40"
  },
  {
    question: "Quel est le nom du célèbre tournoi africain de basketball ?",
    options: ["AfroBasket", "CAN Basket", "NBA Africa", "Basket Africa Cup"],
    answer: "AfroBasket"
  },
  {
    question: "Quel pays africain a participé à la demi-finale de la Coupe du Monde 2022 ?",
    options: ["Sénégal", "Nigeria", "Maroc", "Cameroun"],
    answer: "Maroc"
  },
  {
    question: "Quel athlète détient le record du lancer du javelot ?",
    options: ["Jan Zelezny", "Andreas Thorkildsen", "Neeraj Chopra", "Johannes Vetter"],
    answer: "Jan Zelezny"
  },
  {
    question: "Dans quel sport utilise-t-on une planche et des vagues ?",
    options: ["Ski nautique", "Canoë", "Surf", "Plongée"],
    answer: "Surf"
  },
  {
    question: "Quel joueur de football est célèbre pour son geste appelé 'la roulette' ?",
    options: ["Pelé", "Cristiano Ronaldo", "Zinédine Zidane", "Ronaldinho"],
    answer: "Zinédine Zidane"
  },
  {
    question: "Combien de médailles d’or a remporté Michael Phelps aux JO ?",
    options: ["18", "20", "22", "23"],
    answer: "23"
  },
  {
    question: "Quel est le record du monde du marathon chez les hommes (en 2024) ?",
    options: ["2h01", "2h00", "1h59", "2h03"],
    answer: "1h59"
  },
  {
    question: "Combien de minutes dure un match de handball (hors prolongations) ?",
    options: ["50", "60", "70", "90"],
    answer: "60"
  },
  {
    question: "Quel est le sport d’équipe le plus pratiqué dans le monde ?",
    options: ["Basket-ball", "Baseball", "Football", "Volley-ball"],
    answer: "Football"
  },
  {
    question: "Dans quel sport retrouve-t-on l’expression 'ace' ?",
    options: ["Golf", "Tennis", "Rugby", "Athlétisme"],
    answer: "Tennis"
  },
  {
    question: "Quel pays a remporté la CAN 2021 ?",
    options: ["Cameroun", "Égypte", "Sénégal", "Tunisie"],
    answer: "Sénégal"
  },
  {
    question: "Quel joueur est surnommé CR7 ?",
    options: ["Cristiano Ronaldo", "Carlos Rodriguez", "Cristian Romero", "Cafu"],
    answer: "Cristiano Ronaldo"
  },
  {
    question: "Quelle discipline est associée à Simone Biles ?",
    options: ["Natation", "Gymnastique", "Athlétisme", "Plongeon"],
    answer: "Gymnastique"
  },
  {
    question: "Quel est le sport principal aux États-Unis en nombre de spectateurs ?",
    options: ["Baseball", "Football américain", "Basket-ball", "Hockey sur glace"],
    answer: "Football américain"
  },
  {
    question: "Quel pays a remporté la Coupe du Monde féminine 2019 ?",
    options: ["Allemagne", "France", "États-Unis", "Angleterre"],
    answer: "États-Unis"
  },
  {
    question: "Quel joueur de tennis a le plus de titres en Grand Chelem (hommes) en 2024 ?",
    options: ["Roger Federer", "Novak Djokovic", "Rafael Nadal", "Pete Sampras"],
    answer: "Novak Djokovic"
  },
  {
    question: "Quelle est la taille officielle d’un terrain de basket NBA ?",
    options: ["24x12 m", "26x13 m", "28x15 m", "30x17 m"],
    answer: "28x15 m"
  },
  {
    question: "Combien de joueurs sur le terrain en football américain (par équipe) ?",
    options: ["9", "10", "11", "12"],
    answer: "11"
  },
  {
    question: "Quel footballeur a remporté le plus de Ballons d’Or ?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Michel Platini", "Zinedine Zidane"],
    answer: "Lionel Messi"
  },
  {
    question: "Quelle est la distance d’un demi-marathon ?",
    options: ["10 km", "15 km", "21,097 km", "25 km"],
    answer: "21,097 km"
  },
  {
    question: "Dans quel sport peut-on gagner par ippon ?",
    options: ["Judo", "Karaté", "Taekwondo", "Boxe"],
    answer: "Judo"
  },
  {
    question: "Quel est le nom du trophée décerné au vainqueur de la NBA ?",
    options: ["Larry O'Brien Trophy", "NBA World Cup", "Final MVP", "Michael Jordan Cup"],
    answer: "Larry O'Brien Trophy"
  },
  {
    question: "Combien de temps dure un match de boxe professionnelle (poids lourds) ?",
    options: ["10 rounds", "12 rounds", "15 rounds", "8 rounds"],
    answer: "12 rounds"
  },
  {
    question: "Quel est le pays d’origine du taekwondo ?",
    options: ["Chine", "Corée du Sud", "Japon", "Vietnam"],
    answer: "Corée du Sud"
  },
  {
    question: "Quelle distance fait un 400 mètres haies ?",
    options: ["400 m", "410 m", "390 m", "420 m"],
    answer: "400 m"
  },
  {
    question: "Quel club africain est le plus titré en Ligue des Champions CAF ?",
    options: ["TP Mazembe", "Espérance Tunis", "Al Ahly", "Wydad Casablanca"],
    answer: "Al Ahly"
  },
  {
    question: "Quel est le record du saut à la perche masculin (2024) ?",
    options: ["6,10 m", "6,15 m", "6,20 m", "6,23 m"],
    answer: "6,23 m"
  },
  {
    question: "Quel athlète détient le record du saut en longueur ?",
    options: ["Mike Powell", "Carl Lewis", "Usain Bolt", "Christian Taylor"],
    answer: "Mike Powell"
  },
  {
    question: "Quel pays a remporté la Coupe du Monde féminine 2023 ?",
    options: ["Allemagne", "Angleterre", "Espagne", "Brésil"],
    answer: "Espagne"
  },
    {
    question: "Quel basketteur est surnommé 'King James' ?",
    options: ["Michael Jordan", "Kobe Bryant", "Stephen Curry", "LeBron James"],
    answer: "LeBron James"
  },
  {
    question: "Quel pays a remporté la Coupe du Monde de football en 2014 ?",
    options: ["Argentine", "Brésil", "Allemagne", "Pays-Bas"],
    answer: "Allemagne"
  },
  {
    question: "Combien de médailles d'or Usain Bolt a-t-il remportées aux Jeux Olympiques ?",
    options: ["6", "7", "8", "9"],
    answer: "8"
  },
  {
    question: "Dans quel sport évolue Rafael Nadal ?",
    options: ["Football", "Tennis", "Rugby", "Cyclisme"],
    answer: "Tennis"
  },
  {
    question: "Quel club de football est surnommé 'Les Reds' ?",
    options: ["Arsenal", "Manchester United", "Liverpool", "AC Milan"],
    answer: "Liverpool"
  },
  {
    question: "Quel pays organise les Jeux Olympiques de 2024 ?",
    options: ["Japon", "États-Unis", "France", "Chine"],
    answer: "France"
  },
  {
    question: "Quel est le sport pratiqué par Tony Parker ?",
    options: ["Football", "Basket-ball", "Tennis", "Cyclisme"],
    answer: "Basket-ball"
  },
  {
    question: "Dans quel sport utilise-t-on un 'putter' ?",
    options: ["Baseball", "Golf", "Hockey", "Tennis"],
    answer: "Golf"
  },
  {
    question: "Combien de joueurs composent une équipe de handball sur le terrain ?",
    options: ["5", "6", "7", "8"],
    answer: "7"
  },
  {
    question: "Quel club a remporté la CAN 2019 ?",
    options: ["Sénégal", "Algérie", "Nigéria", "Ghana"],
    answer: "Algérie"
  },
  {
    question: "Quelle joueuse a remporté le plus de titres en Grand Chelem ?",
    options: ["Serena Williams", "Steffi Graf", "Martina Navrátilová", "Margaret Court"],
    answer: "Martina Navrátilová"
  },
  {
    question: "Quel est le pays d'origine du rugby ?",
    options: ["Australie", "Irlande", "Angleterre", "Afrique du Sud"],
    answer: "Angleterre"
  },
  {
    question: "Quel joueur a remporté le Ballon d’Or 2023 ?",
    options: ["Kylian Mbappé", "Erling Haaland", "Lionel Messi", "Kevin De Bruyne"],
    answer: "Lionel Messi"
  },
  {
    question: "Dans quel sport évolue Novak Djokovic ?",
    options: ["Tennis", "Rugby", "Football", "Escrime"],
    answer: "Tennis"
  },
  {
    question: "Quel est le nombre de trous dans un parcours de golf standard ?",
    options: ["9", "12", "15", "18"],
    answer: "18"
  },
  {
    question: "Quel athlète a été surnommé 'The Greatest' ?",
    options: ["Michael Phelps", "Muhammad Ali", "Pelé", "Usain Bolt"],
    answer: "Muhammad Ali"
  },
  {
    question: "Quel est le sport le plus populaire au monde ?",
    options: ["Basket-ball", "Tennis", "Football", "Cricket"],
    answer: "Football"
  },
  {
    question: "Quel pays a remporté la Coupe du Monde de rugby 2019 ?",
    options: ["Angleterre", "Afrique du Sud", "Nouvelle-Zélande", "France"],
    answer: "Afrique du Sud"
  },
  {
    question: "Quel nageur a remporté le plus de médailles olympiques ?",
    options: ["Mark Spitz", "Ian Thorpe", "Ryan Lochte", "Michael Phelps"],
    answer: "Michael Phelps"
  },
  {
    question: "Quel est le nom de la compétition de clubs européens en basket ?",
    options: ["EuroBasket", "EuroLeague", "Champions League Basket", "Basket Cup"],
    answer: "EuroLeague"
  },
  {
    question: "Quel footballeur détient le record de buts en Ligue des Champions ?",
    options: ["Cristiano Ronaldo", "Lionel Messi", "Robert Lewandowski", "Karim Benzema"],
    answer: "Cristiano Ronaldo"
  },
  {
    question: "Dans quel sport utilise-t-on un tatami ?",
    options: ["Karaté", "Boxe", "Escrime", "Lutte"],
    answer: "Karaté"
  },
  {
    question: "Quelle est la couleur du maillot du leader du Tour de France ?",
    options: ["Vert", "Rouge", "Jaune", "Bleu"],
    answer: "Jaune"
  },
  {
    question: "Quelle ville a accueilli la Coupe du Monde 1998 ?",
    options: ["Rome", "Londres", "Madrid", "Paris"],
    answer: "Paris"
  },
  {
    question: "Quel est le sport le plus pratiqué en Afrique de l’Ouest ?",
    options: ["Basket-ball", "Athlétisme", "Football", "Handball"],
    answer: "Football"
  },
  {
    question: "Quel pays a remporté la Coupe du Monde de football 2018 ?",
    options: ["Brésil", "Allemagne", "France", "Argentine"],
    answer: "France"
  },
  {
    question: "Combien de joueurs composent une équipe de football sur le terrain ?",
    options: ["9", "10", "11", "12"],
    answer: "11"
  },
  {
    question: "Quel est le surnom de l’équipe nationale de football du Brésil ?",
    options: ["Les Bleus", "La Roja", "La Seleção", "Les Diables Rouges"],
    answer: "La Seleção"
  },
  {
    question: "Qui détient le record du monde du 100 mètres ?",
    options: ["Usain Bolt", "Tyson Gay", "Justin Gatlin", "Yohan Blake"],
    answer: "Usain Bolt"
  },
  {
    question: "Combien de sets faut-il gagner pour remporter un match de tennis masculin en Grand Chelem ?",
    options: ["2", "3", "4", "5"],
    answer: "3"
  },
  {
    question: "Dans quel sport utilise-t-on le terme 'touchdown' ?",
    options: ["Rugby", "Football américain", "Basket-ball", "Hockey"],
    answer: "Football américain"
  },
  {
    question: "Quel est le sport national du Japon ?",
    options: ["Karaté", "Judo", "Sumo", "Kendo"],
    answer: "Sumo"
  },
  {
    question: "Combien de points vaut un tir à 3 points au basket-ball ?",
    options: ["1", "2", "3", "4"],
    answer: "3"
  },
  {
    question: "Quel pays a accueilli les Jeux Olympiques d'été en 2021 ?",
    options: ["Chine", "France", "Japon", "Brésil"],
    answer: "Japon"
  },
  {
    question: "Dans quel sport peut-on réaliser un 'strike' ?",
    options: ["Tennis", "Bowling", "Golf", "Boxe"],
    answer: "Bowling"
  },
  {
    question: "Qui a remporté 7 titres de Formule 1 ?",
    options: ["Lewis Hamilton", "Sebastian Vettel", "Michael Schumacher", "Fernando Alonso"],
    answer: "Michael Schumacher"
  },
  {
    question: "Quelle est la durée d’un match de football (hors prolongations) ?",
    options: ["80 minutes", "90 minutes", "100 minutes", "120 minutes"],
    answer: "90 minutes"
  },
  {
    question: "Combien de joueurs sur le terrain dans une équipe de volley-ball ?",
    options: ["5", "6", "7", "8"],
    answer: "6"
  },
  {
    question: "Quel pays a remporté la Coupe d’Afrique des Nations 2023 ?",
    options: ["Sénégal", "Côte d’Ivoire", "Maroc", "Égypte"],
    answer: "Côte d’Ivoire"
  },
  {
    question: "Quel footballeur est surnommé « La Pulga » ?",
    options: ["Cristiano Ronaldo", "Kylian Mbappé", "Lionel Messi", "Neymar"],
    answer: "Lionel Messi"
  },
  {
    question: "Dans quel sport utilise-t-on une crosse ?",
    options: ["Tennis", "Rugby", "Hockey sur glace", "Basket-ball"],
    answer: "Hockey sur glace"
  },
  {
    question: "Quelle nation détient le plus de titres en Coupe du Monde de football ?",
    options: ["Allemagne", "Italie", "Argentine", "Brésil"],
    answer: "Brésil"
  },
  {
    question: "Combien de joueurs composent une équipe de rugby à XV ?",
    options: ["11", "13", "15", "17"],
    answer: "15"
  },
  {
    question: "Qui a remporté Roland-Garros en 2022 chez les hommes ?",
    options: ["Rafael Nadal", "Novak Djokovic", "Carlos Alcaraz", "Stefanos Tsitsipas"],
    answer: "Rafael Nadal"
  },
  {
    question: "Quel pays a organisé la Coupe du Monde de football 2022 ?",
    options: ["Russie", "États-Unis", "Qatar", "Arabie Saoudite"],
    answer: "Qatar"
  },
  {
    question: "Quel club a remporté la Ligue des Champions 2024 ?",
    options: ["Real Madrid", "Manchester City", "Bayern Munich", "Liverpool"],
    answer: "Real Madrid"
  },
  {
    question: "Combien de points faut-il pour gagner un set au tennis de table ?",
    options: ["11", "15", "21", "25"],
    answer: "11"
  },
  {
    question: "Combien de temps dure un quart-temps au basket-ball NBA ?",
    options: ["10 minutes", "12 minutes", "15 minutes", "20 minutes"],
    answer: "12 minutes"
  },
  {
    question: "Quel est le nom du célèbre tournoi de tennis qui se joue sur gazon ?",
    options: ["Roland-Garros", "US Open", "Wimbledon", "Australian Open"],
    answer: "Wimbledon"
  },
  {
    question: "Dans quel sport peut-on faire un « hat-trick » ?",
    options: ["Tennis", "Football", "Basket-ball", "Athlétisme"],
    answer: "Football"
  }
  ],
};