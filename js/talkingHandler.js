import Talking from "./talking.js";
import Talking2Decision from "./talking2Decision.js";
import Talking3Decision from "./talking3Decision.js";
import Talking4Decision from "./talking4Decision.js";
import Hologram from "./hologram.js";
import HologramEmotion from "./hologramEmotion.js";
import Message from "./message.js";
import Selfspeech from "./selfspeech.js";
import Hologramm from "./hologram.js";

export default class TalkingHandler {
  constructor(name) {
    this.name = name;
    this.start = new Talking();
    this.empty1 = new Talking();
    this.empty2 = new Talking();
    this.empty3 = new Talking();
    this.empty4 = new Talking();
    this.empty5 = new Talking();
    this.empty6 = new Talking();
    this.empty7 = new Talking();
    this.empty8 = new Talking();
    this.empty9 = new Talking();
    this.empty10 = new Talking();
    this.empty11 = new Talking();
    this.empty12 = new Talking();
    //this.hologramAnimation1-n=new Talking();
    this.end = new Talking();

    //szene 1

    //Mentor Talking
    this.mentorTalking1 = new Talking(
      305,
      630,
      700,
      100,
      "Dr. Merton",
      "Die Welt entwickelt sich sehr viel schneller weiter als dir bewusst ist."
    );
    this.mentorTalking2 = new Talking(
      305,
      630,
      700,
      100,
      "Dr. Merton",
      "Der technologische Fortschritt schleicht sich an, wodurch den meisten gar nicht auffällt, dass all diese Science-Fiction-Filme gar nicht so weit von unserer Realität entfernt sind."
    );
    this.mentorTalking3 = new Talking(
      305,
      630,
      700,
      100,
      "Dr. Merton",
      "Somit wird uns gar nicht die Zeit gegeben, um darüber nachzudenken, was das tatsächlich für uns bedeutet."
    );
    this.mentorTalking4 = new Talking(
      305,
      630,
      700,
      100,
      "Dr. Merton",
      "Aus diesem Grund brauche ich dich!"
    );
    this.mentorTalking5 = new Talking(
      305,
      630,
      700,
      100,
      "Dr. Merton",
      "Sag mal, wieso ist es eigentlich so dunkel hier drin?"
    );
    this.mentorTalking6 = new Talking(
      305,
      630,
      700,
      100,
      "Dr. Merton",
      "Also, nochmal zum Thema zurück: Unser Unternehmen ist dabei, wirklich drastische Entscheidungen zu treffen und das bereitet mir Sorgen."
    );
    this.mentorTalking7 = new Talking(
      305,
      630,
      700,
      100,
      "Dr. Merton",
      "Diese Maschine hier ist ein Teleporter, die dich in ein paralleles Universum transportieren wird, das schon um einiges fortschrittlicher ist als unseres."
    );
    this.mentorTalking8 = new Talking(
      305,
      630,
      700,
      100,
      "Dr. Merton",
      "Ob das ungefährlich ist? Natürlich! Zumindest soweit ich weiß, hehe…"
    );
    this.mentorTalking9 = new Talking(
      305,
      630,
      700,
      100,
      "Dr. Merton",
      "Also! Bevor wir anfangen muss ich dich noch einmal fragen, ob du diese Mission wirklich antreten möchtest. Bist du dabei?"
    );
    this.mentorTalking10 = new Talking(
      305,
      630,
      700,
      100,
      "Dr. Merton",
      "*seufz* Na gut. Trotzdem danke, dass du hergekommen bist. Dann muss ich mir wohl jemand anderen suchen…"
    );
    this.mentorTalking11 = new Talking(
      305,
      630,
      700,
      100,
      "Dr. Merton",
      "Fantastisch! Dann erkläre ich dir noch einmal kurz die wichtigsten Dinge."
    );
    this.mentorTalking12 = new Talking(
      305,
      630,
      700,
      100,
      "Dr. Merton",
      "Hier sind Kontaktlinsen, über die ich dich kontaktieren werde."
    );
    this.mentorTalking13 = new Talking(
      305,
      630,
      700,
      100,
      "Dr. Merton",
      "Darüber erhältst du Aufträge von mir, bei denen du Entscheidungen treffen musst."
    );
    this.mentorTalking14 = new Talking(
      305,
      630,
      700,
      100,
      "Dr. Merton",
      "Du musst mit ihnen außerdem dokumentieren, wie du dich in diesen Situationen fühlst."
    );
    this.mentorTalking15 = new Talking(
      305,
      630,
      700,
      100,
      "Dr. Merton",
      "Über dein Profil kannst du jederzeit sehen, was du tun sollst und schon geschafft hast."
    );
    this.mentorTalking16 = new Talking(
      305,
      630,
      700,
      100,
      "Dr. Merton",
      "In dieser Welt besitzt du eine ID, die alle Informationen über dich zugänglich macht. Also bitte geh vorsichtig damit um!"
    );
    this.mentorTalking16_1 = new Talking(
      305,
      630,
      700,
      100,
      "Dr. Merton",
      "Der Teleporter funktioniert allerdings nur für 24 Stunden,  das bedeutet danach kann ich dich nicht mehr zurückholen."
    );
    this.mentorTalking17 = new Talking(
      305,
      630,
      700,
      100,
      "Dr. Merton",
      "Alles verstanden?"
    );
    this.mentorTalking18 = new Talking(
      305,
      630,
      700,
      100,
      "Dr. Merton",
      "Kein Problem."
    );
    this.mentorTalking19 = new Talking(
      305,
      630,
      700,
      100,
      "Dr. Merton",
      "Sehr gut! Bitte unterschreibe dieses Formular, dann kann es losgehen."
    );
    this.mentorTalking19_1 = new Talking(
      305,
      630,
      700,
      100,
      "Dr. Merton",
      "Gut, dann steht deiner Mission nichts mehr im Weg. Betritt die Kapsel, sobald du bereit bist."
    );
    this.mentorTalking20 = new Talking(
      305,
      630,
      700,
      100,
      "Dr. Merton",
      "Ich wünsche dir viel Glück auf deiner Reise."
    );

    //Decitions
    this.talking2Decision1 = new Talking2Decision(
      305,
      630,
      340,
      100,
      "",
      "Tut mir Leid, das ist mir zu riskant.",
      "Ja, du kannst auf mich zählen."
    );
    this.talking2Decision2 = new Talking2Decision(
      305,
      630,
      340,
      100,
      "",
      " Nein, wiederhol das bitte.",
      " Ja, verstanden."
    );

    //Szene 2
    this._hologram1 = new Hologram(
      360,
      150,
      "Hallo " +
        this.name.name.join("") +
        ", ich hoffe, du bist gut angekommen. In dieser Welt bist du keine Person mehr, sondern nur noch eine ID-Nummer, unter der alles über dich abgespeichert wird, vergiss das nicht.\n\nDu hast jetzt gleich ein Bewerbungsgespräch bei NanoGen Corporation. Bitte mach dich auf den Weg."
    );

    this.selfSpeech1 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "Wow, meine Wohnung habe ich gepflegter in Erinnerung…\n\nBevor ich losgehe, sollte ich das Handy einpacken."
    );
    this.selfSpeechArray1 = [
      "Die Stadt ist kaum noch wiederzuerkennen.",
      "Ist es wirklich morgens? Es sieht so düster aus…",
      "Es wohnen so viele Menschen auf einem Fleck.",
    ];
    this._selfSpeech2 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      random(this.selfSpeechArray1)
    );
    this.selfSpeech3 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "Ich kann noch nicht rausgehen, ich brauche erst das Handy."
    );
    this.selfSpeech4 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "Wie möchte ich zum Bewerbungsgespräch fahren?"
    );
    this.talking3Decision1 = new Talking3Decision(
      305,
      630,
      220,
      100,
      "",
      "Fahrrad",
      "Auto",
      "Bahn"
    );

    //Szene 3
    this.selfSpeech23 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "Dieses Viertel ist deutlich besser erhalten als meine Wohngegend."
    );
    this.selfSpeech24 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "Erstaunlich, dass sie selbst eine Kamera in ihrem Büro hat. Ist das nicht total unangenehm?"
    );

    this._bossTalking1 = new Talking(
      305,
      630,
      700,
      100,
      "Venus",
      "Guten Tag, " +
        this.name.name.join("") +
        "\nIch bin Venus Lee, freut mich Sie kennenzulernen."
    );
    this.bossTalking1_1 = new Talking(
      305,
      630,
      700,
      100,
      "Venus",
      "Ich hoffe, Sie haben gut hierher gefunden. Am besten wir beginnen direkt."
    );
    this.bossTalking2 = new Talking(
      305,
      630,
      700,
      100,
      "Venus",
      "Was sind Ihre Stärken?"
    );
    this.bossTalking2_1 = new Talking(
      305,
      630,
      700,
      100,
      "Venus",
      "Das klingt toll, denn das sehen wir bei NanoGen als wichtige Qualität an."
    );
    this.bossTalking3 = new Talking(
      305,
      630,
      700,
      100,
      "Venus",
      "Was sind Ihre Schwächen?"
    );
    this.bossTalking4 = new Talking(
      305,
      630,
      700,
      100,
      "Venus",
      "Danke für Ihre Ehrlichkeit."
    );

    this.bossTalking5 = new Talking(
      305,
      630,
      700,
      100,
      "Venus",
      "Haben Sie denn Fragen an mich?"
    );
    this.bossTalking6 = new Talking(
      305,
      630,
      700,
      100,
      "Venus",
      "Nun… Uns ist die Sicherheit der Allgemeinheit wichtig und wir tun alles, um diese zu gewährleisten."
    );
    this.bossTalking7 = new Talking(
      305,
      630,
      700,
      100,
      "Venus",
      "Unsere Angestellten sind unsere Vertreter, also müssen wir sicherstellen, dass all ihre Aktionen auch vertretbar sind. Und natürlich, dass sie effizient für unser Unternehmen sind."
    );
    this.bossTalking8 = new Talking(
      305,
      630,
      700,
      100,
      "Venus",
      "Wir arbeiten daran, das volle Potenzial des technischen Fortschritts auszuschöpfen. Dafür müssen wir sehr stark abwägen, was unser Unternehmen benachteiligen könnte."
    );
    this.bossTalking9 = new Talking(
      305,
      630,
      700,
      100,
      "Venus",
      "Zuletzt bräuchten wir nur noch Ihre ID, damit wir Sie guten Gewissens einstellen können."
    );
    this.bossTalking10 = new Talking(
      305,
      630,
      700,
      100,
      "Venus",
      "Sie scheinen wohl etwas verbergen zu wollen, in unserem Unternehmen ist Offenheit und Ehrlichkeit essentiell."
    );
    this.bossTalking11 = new Talking(
      305,
      630,
      700,
      100,
      "Venus",
      "Wir können Ihnen hier leider keine Stelle anbieten, vielen Dank für Ihre Bewerbung."
    );
    this.bossTalking12 = new Talking(
      305,
      630,
      700,
      100,
      "Venus",
      "Dankeschön, bitte warten Sie einen Moment."
    );
    this.bossTalking13 = new Talking(305, 630, 700, 100, "Venus", "…");
    this.bossTalkingArray = [1, 2, 3];
    if (random(this.bossTalkingArray) === 1) {
      this.bossTalking14 = new Talking(
        305,
        630,
        700,
        100,
        "Venus",
        "Wie bitte? Ich fasse es nicht!"
      );
      this.bossTalking15 = new Talking(
        305,
        630,
        700,
        100,
        "Venus",
        "Tut mir leid, hiermit beende ich das Bewerbungsgespräch! Versuchen Sie es woanders!"
      );
    } else {
      this.bossTalking14 = new Talking(
        305,
        630,
        700,
        100,
        "Venus",
        "Alles klar, dann steht Ihrer Einstellung in unserem Unternehmen nichts mehr im Weg."
      );
      this.bossTalking15 = new Talking(
        305,
        630,
        700,
        100,
        "Venus",
        "Ich schicke Ihnen die nötigen Dokumente zu und wenn Sie sich für uns entscheiden, melden Sie sich bitte innerhalb der nächsten zwei Wochen. Auf Wiedersehen."
      );
    }

    this.talking4Decision1 = new Talking4Decision(
      140,
      630,
      540,
      90,
      "Ich bin sehr leidenschaftlich.",
      "Ich arbeite sehr sorgfältig.",
      "Ich behalte immer einen kühlen Kopf.",
      "Ich bin kompromissbereit."
    );
    this.talking4Decision2 = new Talking4Decision(
      140,
      630,
      540,
      90,
      "Ich lasse mich schnell ablenken.",
      "Ich bin zu perfektionistisch.",
      "Ich überarbeite mich oft.",
      "Ich bin manchmal etwas stur."
    );
    this.talking4Decision3 = new Talking4Decision(
      140,
      630,
      540,
      90,
      "Wie gehen Sie mit den Daten Ihrer Kunden um?",
      "Wie sehr werden Ihre Arbeitnehmer kontrolliert?",
      "Sind Ihre Produkte auch für Ärmere zugänglich?",
      "Ich habe keine Fragen."
    );
    this.talking2Decision3 = new Talking2Decision(
      305,
      630,
      340,
      100,
      "",
      "Nein, ich will meine Privatsphäre behalten.",
      "Ja, ich habe nichts zu verbergen."
    );

    this.selfSpeech5 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "Übergebe ich ihr meine ID?"
    );
    this.hologramEmotion1 = new HologramEmotion(
      360,
      150,
      "Wie hast du dich gefühlt?"
    );

    //scene 4

    this.hologram2 = new Hologram(
      360,
      150,
      "Hallo, ich bin es nochmal. Hoffentlich lief das Bewerbungsgespräch gut. Nicht, dass es für dich tatsächlich relevant wäre. Jedenfalls hast du eine Benachrichtigung auf deinem Handy erhalten. Du solltest sie öffnen."
    );
    this._message1 = new Message(
      520,
      150,
      280,
      450,
      "Hallo [Name].\n\nDu hast Pastell als deine Partnerin angegeben.\nWir haben sie in einem Video auf Insta Connect identifizieren können.\nHier findest du den Link zu dem Video.\n\nTrust is Power,\nInsta Connect"
    );
    this.selfSpeech6 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "Möchte ich mir das Video ansehen?"
    );
    this.talking2Decision4 = new Talking2Decision(
      305,
      630,
      340,
      100,
      "",
      "Nein, ich möchte nicht alles kontrollieren, was meine Freundin tut.",
      "Ja, es ist doch nur ein Video"
    );
    this.selfSpeech7 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "Im Video sehe ich meine Freundin mit einer Person, die ich nicht kenne, in einer Bar stehen."
    );
    this.selfSpeech8 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "Ich höre nicht, was sie sagen, aber ich sehe, wie sie sich immer näherkommen."
    );
    this.selfSpeech9 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "War das etwa ein Kuss? Sie gehen gemeinsam aus der Bar raus…"
    );

    this.selfSpeech10 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "Rufe ich meine Freundin an?"
    );
    this.talking2Decision5 = new Talking2Decision(
      305,
      630,
      340,
      100,
      "",
      "Nein, das ist nicht nötig.",
      "Ja, ich möchte das mit ihr klären."
    );
    this._partnerTalking1 = new Talking(
      305,
      630,
      700,
      100,
      "Pastell",
      " Hi " +
        this.name.name.join("") +
        "! Du hast dich heute noch gar nicht gemeldet."
    );
    this.partnerTalking2 = new Talking(
      305,
      630,
      700,
      100,
      "Pastell",
      "Ist alles in Ordnung? Warum rufst du an?"
    );
    this.userTalking1 = new Talking(
      305,
      630,
      700,
      100,
      "Ich",
      "Insta Connect hat mir gerade ein Video von dir in einer Bar geschickt."
    );
    this.partnerTalking3 = new Talking(
      305,
      630,
      700,
      100,
      "Pastell",
      "Was für ein Video? Kannst du es mir schicken?"
    );
    this.partnerTalking4 = new Talking(
      305,
      630,
      700,
      100,
      "Pastell",
      "Warte, ich schau es mir kurz an."
    );
    this.partnerTalking5 = new Talking(305, 630, 700, 100, "Pastell", "...");
    this.partnerTalking6 = new Talking(
      305,
      630,
      700,
      100,
      "Pastell",
      "Das- Äh, das ist nicht so wie es aussieht!"
    );
    this.partnerTalking7 = new Talking(
      305,
      630,
      700,
      100,
      "Pastell",
      "Solar und ich sind spontan in diese neue Bar gegangen und dann war da dieser Typ und hat mir ganz viele Drinks ausgegeben..."
    );
    this.partnerTalking8 = new Talking(
      305,
      630,
      700,
      100,
      "Pastell",
      "...und ich war total betrunken und ich wusste selbst nicht mehr was genau ich da gemacht habe."
    );
    this.talking2Decision6 = new Talking2Decision(
      305,
      630,
      340,
      100,
      "",
      "Ich glaube dir. Sei in Zukunft bitte vorsichtiger.",
      "Du sahst in dem Video ziemlich nüchtern aus."
    );
    this._partnerTalking9 = new Talking(
      305,
      630,
      700,
      100,
      "Pastell",
      "Danke für dein Verständnis, " +
        this.name.name.join("") +
        "!\n\nIch hoffe, wir können es einfach vergessen."
    );
    this.partnerTalking10 = new Talking(
      305,
      630,
      700,
      100,
      "Pastell",
      "Willst du mir etwa vorwerfen, dass ich lüge?\n\nIch hatte mehr Vertrauen von dir erwartet!"
    );
    this.userTalking2 = new Talking(
      305,
      630,
      700,
      100,
      "Ich",
      "Ich muss auflegen, es klingelt an der Tür."
    );
    this.userTalking3 = new Talking(
      305,
      630,
      700,
      100,
      "Ich",
      "Ich muss auflegen, es klingelt an der Tür."
    );
    this.partnerTalking11 = new Talking(
      305,
      630,
      700,
      100,
      "Pastell",
      "Alles klar, vielleicht sprechen wir später weiter.\n\nBis dann!"
    );
    this.partnerTalking12 = new Talking(
      305,
      630,
      700,
      100,
      "Pastell",
      "Wie auch immer, Tschüss."
    );
    this.hologramEmotion2 = new HologramEmotion(
      360,
      150,
      "Wie hast du dich gefühlt?"
    );

    //scene5
    this._workerTalking1 = new Talking(
      305,
      630,
      700,
      100,
      "Zero",
      "Sie sind" + this.name.name.join("") + ", right?"
    );
    this.workerTalking2 = new Talking(
      305,
      630,
      700,
      100,
      "Zero",
      "Mein Name ist Zero Amin. Ich komme im Auftrag der Alpha Wohnungszentrale."
    );
    this.workerTalking3 = new Talking(
      305,
      630,
      700,
      100,
      "Zero",
      "Vielleicht haben Sie mitbekommen, dass es vor Kurzem wieder einen Einbruch in diesem Gebäude gab."
    );
    this.workerTalking4 = new Talking(
      305,
      630,
      700,
      100,
      "Zero",
      "Aus diesem Grund sind wir rechtlich dazu verpflichtet, Ihnen bessere Sicherheitsmaßnahmen anzubieten."
    );
    this.workerTalking5 = new Talking(
      305,
      630,
      700,
      100,
      "Zero",
      "Sie haben die Möglichkeit, eine neue Tür einbauen zu lassen. Die ist basically einbruchsicher, trust me."
    );
    this.workerTalking6 = new Talking(
      305,
      630,
      700,
      100,
      "Zero",
      "Sie lässt sich nur noch elektronisch durch Gesichtserkennung öffnen, Sie brauchen nicht mal mehr einen Schlüssel!"
    );
    this.workerTalking7 = new Talking(
      305,
      630,
      700,
      100,
      "Zero",
      "Alpha beteiligt sich an den Kosten, das wird dann gar nicht teuer für Sie."
    );
    this.workerTalking8 = new Talking(
      305,
      630,
      700,
      100,
      "Zero",
      "Also, wollen Sie das Angebot annehmen?"
    );
    this.workerTalking9 = new Talking(
      305,
      630,
      700,
      100,
      "Zero",
      "Amazing! Wir fangen gleich heute Abend mit der Installation an. \n\nGoodbye!"
    );
    this.workerTalking10 = new Talking(
      305,
      630,
      700,
      100,
      "Zero",
      "What a pity!"
    );
    this.workerTalking11 = new Talking(
      305,
      630,
      700,
      100,
      "Zero",
      "Überlegen Sie es sich einfach nochmal und kommen Sie auf uns zu, wenn Sie Ihre Meinung ändern.\n\nGoodbye!"
    );

    this.talking2Decision7 = new Talking2Decision(
      305,
      630,
      340,
      100,
      "",
      "Ja, das klingt super.",
      "Nein, ich lehne fürs Erste ab."
    );
    this.hologram3 = new Hologram(
      360,
      150,
      " Hi! Hoffe alles ist gut bei dir. Du sollst den Abend am besten noch nutzen, um dir die Welt ein bisschen anzuschauen. Pass auf dich auf, wir sehen uns morgen!"
    );
    //scene 6
    this.selfSpeech25 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "Die Musik hier klingt total anders als bei uns. Läuft das hier in den Charts?"
    );
    this.selfSpeech26 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "Die meisten sind wohl alleine gekommen. Vermutlich sind Freunde im echten Leben hier nicht mehr ganz so üblich."
    );
    this._friend1Talking1 = new Talking(
      305,
      630,
      700,
      100,
      "Finnick",
      "Hey " +
        this.name.name.join("") +
        ", was geht? Ich wollte fragen, ob du Bock hast feiern zu gehen."
    );
    this.friend1Talking2 = new Talking(
      305,
      630,
      700,
      100,
      "Finnick",
      "Nice, wir holen dich ab. Bis gleich!"
    );
    this.friend1Talking3 = new Talking(
      305,
      630,
      700,
      100,
      "Finnick",
      "Typisch. Naja, dein Pech! Dann verpasst du eben den ganzen Spaß. \n\nVielleicht bekommen wir dich ja das nächste Mal dazu, bis dann!"
    );
    this.friend1Talking4 = new Talking(
      305,
      630,
      700,
      100,
      "Finnick",
      "That’s the spirit! Wir-"
    );

    this.talking4Decision4 = new Talking4Decision(
      140,
      630,
      540,
      90,
      "Klar, ich bin dabei!",
      "Sorry, ich bin heute echt müde…",
      "Bombe, wir lassen es heute krachen!",
      "Ich gehe nicht so gerne feiern."
    );
    this.fbi = new Talking();
    this.fbi2 = new Talking(
      305,
      630,
      700,
      100,
      "FBI",
      "Wir nehmen sie fest wegen einer Bombenwarnung!"
    );
    this.selfSpeech11 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "Ich verbringe den Abend zu Hause, wenn auch nicht ganz so ruhig durch die Bauarbeiten im gesamten Gebäude."
    );
    this.selfSpeech12 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "Als die Arbeiter der Alpha Wohnungszentrale nach einigen Stunden endlich gegangen sind, schlafe ich langsam ein."
    );
    //scene7
    this.friend1Talking5 = new Talking(
      305,
      630,
      700,
      100,
      "Finnick",
      "Es fühlt sich so gut an mal wieder unter Menschen zu sein. So in real life mein ich."
    );
    this.friend2Talking1 = new Talking(
      305,
      630,
      700,
      100,
      "Castiel",
      "Ohne Mist, das ist gefühlt der letzte Ort, an dem man noch so richtig offline kommuniziert."
    );
    this.friend3Talking1 = new Talking(
      305,
      630,
      700,
      100,
      "Nova",
      "Ach was, ihr versucht es einfach nicht genug, es gibt doch voll viele Möglichkeiten."
    );
    this.friend1Talking6 = new Talking(
      305,
      630,
      700,
      100,
      "Finnick",
      "Die meisten sind doch kaum noch offen dafür sich zu unterhalten, wenn sie auch online sein können."
    );
    this.friend2Talking2 = new Talking(
      305,
      630,
      700,
      100,
      "Castiel",
      "Deswegen sind wir ja hier!"
    );
    this._friend2Talking3 = new Talking(
      305,
      630,
      700,
      100,
      "Castiel",
      "Ich feier es total, dass du heute mal dabei bist, " +
        this.name.name.join("")
    );
    this.friend2Talking4 = new Talking(
      305,
      630,
      700,
      100,
      "Castiel",
      "Komm, ich geb Shots aus."
    );
    this.friend3Talking2 = new Talking(
      305,
      630,
      700,
      100,
      "Nova",
      "Ugh, warum musst du so langweilig sein?"
    );
    this.friend1Talking7 = new Talking(
      305,
      630,
      700,
      100,
      "Finnick",
      "Halt’s Maul, Nova. Wir akzeptieren deine Entscheidung. Dann darfst du eben heute Abend Babysitter spielen."
    );
    this.friend2Talking5 = new Talking(
      305,
      630,
      700,
      100,
      "Castiel",
      "Hahaha yeah! Go hard or go home!"
    );
    this.friend1Talking8 = new Talking(
      305,
      630,
      700,
      100,
      "Finnick",
      "Alright, let’s go!"
    );
    this.talking2Decision8 = new Talking2Decision(
      305,
      630,
      340,
      100,
      "",
      "Nee, heute lieber nicht…",
      "Da sag ich nicht Nein."
    );
    //scene8
    this.selfSpeech13 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "Ich erinnere mich, wie wir gemeinsam zur Bar liefen und ich irgendwann nicht mehr mitzählen konnte, wie viele Shots mir in die Hand gedrückt wurden."
    );
    this.selfSpeech14 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "Der restliche Abend ist vollständig aus meinem Gedächtnis gestrichen worden. Ich bin überrascht, dass ich es nach Hause geschafft habe."
    );
    this.selfSpeech15 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "Irgendwie tut meine Schulter weh…"
    );
    this._message2 = new Message(
      520,
      150,
      280,
      450,
      "Hallo [Name].\n\nWir haben dich in einem Video auf Insta Connect identifizieren können.\nHier findest du den Link zu dem Video.\n\nTrust is Power,\nInsta Connect"
    );
    this.selfSpeech16 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "Oh nein. Das Video zeigt mich, wie ich auf einem Tisch stehe und lauthals zur Musik mitschreie."
    );
    this.selfSpeech17 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "Scheinbar hielt ich es für eine gute Idee, der Menge eine Tanzperformance zu liefern."
    );
    this.selfSpeech18 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "Kurz darauf liege ich auf dem Boden. Das erklärt dann wohl die Schulterschmerzen."
    );
    this.selfSpeech19 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "… Na super, das Video hat schon 2 Millionen Views."
    );
    this.selfSpeech20 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "Hier wurde eingebrochen! Ich hätte die Sicherheitstür installieren lassen sollen…"
    );
    this.selfSpeech21 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "Sie haben recht. Ich verbringe den Abend damit, meine Freunde von Dummheiten abzuhalten und nach einigen Stunden gehe ich endlich erschöpft nach Hause. "
    );
    this.selfSpeech22 = new Selfspeech(
      305,
      630,
      700,
      100,
      "Ich",
      "Ich schaffe es nicht mal, mich umzuziehen bevor ich einschlafe."
    );
    this.hologram4 = new Hologram(
      360,
      150,
      "Guten Morgen. Ich hoffe, du bist schon wach, denn die Zeit läuft bald ab. Ich habe fürs Erste genug Informationen gesammelt und du warst wirklich eine große Hilfe.\n\nIch möchte dir erklären, worum es bei dieser Mission eigentlich geht."
    );
    this.hologram4_1 = new Hologramm(
      360,
      150,
      "Eventuell hast du bemerkt, dass es dort weniger Privatsphäre gibt als gewohnt. Ich habe beobachtet, an welchen Stellen du durch deine Entscheidungen überwacht wurdest.\n\nHier ist das Ergebnis:"
    );
    this.hologramEvaluation = new Talking();
    this.hologram5 = new Hologram(
      360,
      150,
      "Waren dir die Konsequenzen deines Verhaltens bewusst?\n\nEs war nötig dir diese Informationen zu geben, denn ich habe eine wichtige Frage an dich.\n\nMöchtest du zu unserer Welt zurückkehren?"
    );
    this.talking2Decision9 = new Talking2Decision(
      305,
      630,
      340,
      100,
      "",
      "Ja, bitte bring mich zurück.",
      "Nein, ich möchte Teil dieser Welt sein."
    );
    this.hologram6 = new Hologram(
      360,
      150,
      "Verstanden. Vielen Dank für deine Teilnahme an der Mission."
    );
    this.hologramEmotion3 = new HologramEmotion(
      360,
      150,
      "Wie hast du dich gefühlt?"
    );
    this.hologramEmotion4 = new HologramEmotion(
      360,
      150,
      "Wie hast du dich gefühlt?"
    );

    //scene1
    this.activeTalk = this.start;
    // this.activeTalk = this.mentorTalking1;
    this.mentorTalking1.changeNext(this.mentorTalking2, this);
    this.mentorTalking1.changeNext(this.mentorTalking2, this);
    this.mentorTalking2.changeNext(this.mentorTalking3, this);
    this.mentorTalking3.changeNext(this.mentorTalking4, this);
    this.mentorTalking4.changeNext(this.mentorTalking5, this);
    this.mentorTalking5.changeNext(this.mentorTalking6, this);
    this.mentorTalking6.changeNext(this.mentorTalking7, this);
    this.mentorTalking7.changeNext(this.mentorTalking8, this);
    this.mentorTalking8.changeNext(this.mentorTalking9, this);
    this.mentorTalking9.changeNext(this.talking2Decision1, this);
    this.talking2Decision1.changeNext1(this.mentorTalking10, this); // window.location.reload();
    this.talking2Decision1.changeNext2(this.mentorTalking11, this);
    this.mentorTalking10.changeNext(this.end, this);
    this.mentorTalking11.changeNext(this.mentorTalking12, this);
    this.mentorTalking12.changeNext(this.mentorTalking13, this);
    this.mentorTalking13.changeNext(this.mentorTalking14, this);
    this.mentorTalking14.changeNext(this.mentorTalking15, this);
    this.mentorTalking15.changeNext(this.mentorTalking16, this);
    this.mentorTalking16.changeNext(this.mentorTalking16_1, this);
    this.mentorTalking16_1.changeNext(this.mentorTalking17, this);
    this.mentorTalking17.changeNext(this.talking2Decision2, this);
    this.talking2Decision2.changeNext1(this.mentorTalking18, this);
    this.talking2Decision2.changeNext2(this.mentorTalking19, this);
    this.mentorTalking18.changeNext(this.mentorTalking12, this);
    this.mentorTalking19.changeNext(this.empty2, this);
    this.mentorTalking19_1.changeNext(this.empty3, this);
    this.mentorTalking20.changeNext(this.empty4, this);
    //scene2
    this._hologram1.changeNext(this.selfSpeech1, this);
    this.selfSpeech1.changeNext(this.empty5, this);
    this.selfSpeech3.changeNext(this.empty5, this);
    // this._selfSpeech2.changeNext(this.empty5, this);
    this.selfSpeech4.changeNext(this.talking3Decision1, this);
    // this.talking3Decision1.changeNext1(this.empty6, this);
    // this.talking3Decision1.changeNext2(this.empty6, this);
    // this.talking3Decision1.changeNext3(this.empty6, this);
    //scene3
    this._bossTalking1.changeNext(this.bossTalking1_1, this);
    this.bossTalking1_1.changeNext(this.bossTalking2, this);
    this.bossTalking2.changeNext(this.talking4Decision1, this);
    this.talking4Decision1.changeNext1(this.bossTalking2_1, this);
    this.talking4Decision1.changeNext2(this.bossTalking2_1, this);
    this.talking4Decision1.changeNext3(this.bossTalking2_1, this);
    this.talking4Decision1.changeNext4(this.bossTalking2_1, this);
    this.bossTalking2_1.changeNext(this.bossTalking3, this);
    this.bossTalking3.changeNext(this.talking4Decision2, this);
    this.talking4Decision2.changeNext1(this.bossTalking4, this);
    this.talking4Decision2.changeNext2(this.bossTalking4, this);
    this.talking4Decision2.changeNext3(this.bossTalking4, this);
    this.talking4Decision2.changeNext4(this.bossTalking4, this);
    this.bossTalking4.changeNext(this.bossTalking5, this);
    this.bossTalking5.changeNext(this.talking4Decision3, this);
    this.talking4Decision3.changeNext1(this.bossTalking6, this);
    this.talking4Decision3.changeNext2(this.bossTalking7, this);
    this.talking4Decision3.changeNext3(this.bossTalking8, this);
    this.talking4Decision3.changeNext4(this.bossTalking9, this);
    this.bossTalking6.changeNext(this.bossTalking5, this);
    this.bossTalking7.changeNext(this.bossTalking5, this);
    this.bossTalking8.changeNext(this.bossTalking5, this);
    this.bossTalking9.changeNext(this.selfSpeech5, this);
    this.selfSpeech5.changeNext(this.talking2Decision3, this);
    // this.talking2Decision3.changeNext1(this.bossTalking10, this);
    // this.talking2Decision3.changeNext2(this.bossTalking12, this);
    this.bossTalking10.changeNext(this.bossTalking11, this);
    this.bossTalking11.changeNext(this.hologramEmotion1, this); //hologramAnimation2
    this.bossTalking12.changeNext(this.bossTalking13, this);
    this.bossTalking13.changeNext(this.bossTalking14, this);
    this.bossTalking14.changeNext(this.bossTalking15, this);
    this.bossTalking15.changeNext(this.hologramEmotion1, this);
    //scene4
    this.hologram2.changeNext(this._message1, this);
    this._message1.changeNext(this.selfSpeech6, this);
    this.selfSpeech6.changeNext(this.talking2Decision4, this);
    // this.talking2Decision4.changeNext1(this.empty7, this);
    // this.talking2Decision4.changeNext2(this.selfSpeech7, this);
    this.selfSpeech7.changeNext(this.selfSpeech8, this);
    this.selfSpeech8.changeNext(this.selfSpeech9, this);
    this.selfSpeech9.changeNext(this.selfSpeech10, this);
    this.selfSpeech10.changeNext(this.talking2Decision5, this);
    this.talking2Decision5.changeNext1(this.hologramEmotion2, this);
    this.talking2Decision5.changeNext2(this._partnerTalking1, this);
    this._partnerTalking1.changeNext(this.partnerTalking2, this);
    this.partnerTalking2.changeNext(this.userTalking1, this);
    this.userTalking1.changeNext(this.partnerTalking3, this);
    this.partnerTalking3.changeNext(this.partnerTalking4, this);
    this.partnerTalking4.changeNext(this.partnerTalking5, this);
    this.partnerTalking5.changeNext(this.partnerTalking6, this);
    this.partnerTalking6.changeNext(this.partnerTalking7, this);
    this.partnerTalking7.changeNext(this.partnerTalking8, this);
    this.partnerTalking7.changeNext(this.talking2Decision6, this);
    this.talking2Decision6.changeNext1(this._partnerTalking9, this);
    this.talking2Decision6.changeNext2(this.partnerTalking10, this);
    this._partnerTalking9.changeNext(this.empty8, this);
    this.partnerTalking10.changeNext(this.empty9, this);
    this.userTalking2.changeNext(this.partnerTalking11, this);
    this.userTalking3.changeNext(this.partnerTalking12, this);
    this.partnerTalking11.changeNext(this.hologramEmotion2, this);
    this.partnerTalking12.changeNext(this.hologramEmotion2, this);
    //scene5
    this._workerTalking1.changeNext(this.workerTalking2, this);
    this.workerTalking2.changeNext(this.workerTalking3, this);
    this.workerTalking3.changeNext(this.workerTalking4, this);
    this.workerTalking4.changeNext(this.workerTalking5, this);
    this.workerTalking5.changeNext(this.workerTalking6, this);
    this.workerTalking6.changeNext(this.workerTalking7, this);
    this.workerTalking7.changeNext(this.workerTalking8, this);
    this.workerTalking8.changeNext(this.talking2Decision7, this);
    // this.talking2Decision7.changeNext1(this.workerTalking9, this);
    // this.talking2Decision7.changeNext2(this.workerTalking10, this);
    this.workerTalking9.changeNext(this.hologram3, this);
    this.workerTalking10.changeNext(this.workerTalking11, this);
    this.workerTalking11.changeNext(this.hologram3, this);
    this.hologram3.changeNext(this.empty11, this);
    //scene6
    this._friend1Talking1.changeNext(this.talking4Decision4, this);
    // this.talking4Decision4.changeNext1(this.friend1Talking2, this);
    this.talking4Decision4.changeNext2(this.friend1Talking3, this);
    this.talking4Decision4.changeNext3(this.friend1Talking4, this);
    this.talking4Decision4.changeNext4(this.friend1Talking3, this);
    this.friend1Talking3.changeNext(this.selfSpeech11, this);
    this.selfSpeech11.changeNext(this.selfSpeech12, this);
    this.friend1Talking2.changeNext(this.empty12, this);
    this.fbi2.changeNext(this.end, this);
    //scene7
    this.friend1Talking5.changeNext(this.friend2Talking1, this);
    this.friend2Talking1.changeNext(this.friend3Talking1, this);
    this.friend3Talking1.changeNext(this.friend1Talking6, this);
    this.friend1Talking6.changeNext(this.friend2Talking2, this);
    this.friend2Talking2.changeNext(this._friend2Talking3, this);
    this._friend2Talking3.changeNext(this.friend2Talking4, this);
    this.friend2Talking4.changeNext(this.talking2Decision8, this);
    // this.talking2Decision8.changeNext1(this.friend3Talking2, this);
    // this.talking2Decision8.changeNext2(this.friend1Talking8, this);
    this.friend3Talking2.changeNext(this.friend1Talking7, this);
    this.friend1Talking7.changeNext(this.friend2Talking5, this);
    //scene8
    this.friend1Talking8.changeNext(this.selfSpeech13, this);
    this.selfSpeech13.changeNext(this.selfSpeech14, this);
    this.selfSpeech14.changeNext(this.selfSpeech15, this);
    this.selfSpeech15.changeNext(this._message2, this);
    this._message2.changeNext(this.selfSpeech16, this);
    this.selfSpeech16.changeNext(this.selfSpeech17, this);
    this.selfSpeech17.changeNext(this.selfSpeech18, this);
    this.selfSpeech18.changeNext(this.selfSpeech19, this);
    this.selfSpeech19.changeNext(this.hologramEmotion3, this);
    this.selfSpeech20.changeNext(this.hologramEmotion4, this);
    this.hologram4.changeNext(this.hologram4_1, this);
    this.hologram4_1.changeNext(this.hologramEvaluation, this);
    // this.hologramEvaluation.changeNext(this.hologram5, this);
    this.friend1Talking7.changeNext(this.selfSpeech21, this);
    this.selfSpeech21.changeNext(this.selfSpeech22, this);
    this.selfSpeech22.changeNext(this.hologramEmotion4, this);
    this.hologram5.changeNext(this.talking2Decision9, this);
    this.talking2Decision9.changeNext1(this.hologram6, this);
    this.talking2Decision9.changeNext2(this.hologram6, this);
    this.hologram6.changeNext(this.end, this);
    this.selfSpeech12.changeNext(this.hologramEmotion4, this);
  }
//this.name.name wird mit der Methode get aufgerufen, da this.name.name sonst erst in der function draw aufgerufen wird
  get selfSpeech2() {
    if (this.activeTalk != this._selfSpeech2) {
      this._selfSpeech2.text = random(this.selfSpeechArray1);
      return this._selfSpeech2;
    }
  }
  get hologram1() {
    this._hologram1.text =
      "Hallo " +
      this.name.name.join("") +
      ", ich hoffe du bist gut angekommen. In dieser Welt bist du keine Person mehr, sondern nur noch eine ID-Nummer, unter der alles über dich abgespeichert wird, vergiss das nicht.\n\nDu hast jetzt gleich ein Bewerbungsgespräch bei NanoGen Corporation. Bitte mach dich auf den Weg.";

    return this._hologram1;
  }
  get bossTalking1() {
    this._bossTalking1.text =
      "Guten Tag, " +
      this.name.name.join("") +
      ".\n\nIch bin Venus Lee, freut mich Sie kennenzulernen.";

    return this._bossTalking1;
  }

  get message1() {
    this._message1.text =
      "Hallo " +
      this.name.name.join("") +
      ".\n\nDu hast Pastell als deine Partnerin angegeben.\nWir haben sie in einem Video auf Insta Connect identifizieren können.\nHier findest du den Link zu dem Video.\n\nTrust is Power,\nInsta Connect";
    return this._message1;
  }
  get partnerTalking1() {
    this._partnerTalking1.text =
      " Hi " +
      this.name.name.join("") +
      "! Du hast dich heute noch gar nicht gemeldet.";
    return this._partnerTalking1;
  }
  get partnerTalking9() {
    this._partnerTalking9.text =
      "Danke für dein Verständnis, " +
      this.name.name.join("") +
      "!\n\nIch hoffe, wir können es einfach vergessen.";
    return this._partnerTalking9;
  }
  get workerTalking1() {
    this._workerTalking1.text =
      "Sie sind " + this.name.name.join("") + ", right?";
    return this._workerTalking1;
  }
  get friend1Talking1() {
    this._friend1Talking1.text =
      "Hey " +
      this.name.name.join("") +
      ", was geht? Ich wollte fragen, ob du Bock hast feiern zu gehen.";
    return this._friend1Talking1;
  }
  get friend2Talking3() {
    this._friend2Talking3.text =
      "Ich feier es total, dass du heute mal dabei bist, " +
      this.name.name.join("");
    return this._friend2Talking3;
  }
  get message2() {
    this._message2.text =
      "Hallo " +
      this.name.name.join("") +
      ".\n\nWir haben dich in einem Video auf Insta Connect identifizieren können.\nHier findest du den Link zu dem Video.\n\nTrust is Power,\nInsta Connect";
    return this._message2; 
  }

  mouseMoved() {
    this.activeTalk.mouseMoved();
  }

  display() {
    this.activeTalk.display();
  }
  mouseClicked() {
    this.activeTalk.mouseClicked();
  }
  getName() {
    this.name = this.name.name.join("");
    return this.name;
  }
}
