import Talking from "./talking.js";
import Talking2Decision from "./talking2Decision.js";
import Talking3Decition from "./talking3Desition.js";
import Talking4Desition from "./talking4Desition.js";
import Hologram from "./hologram.js";

export default class TalkingHandler {
  constructor(name) {
    this.name = name;
    this.empty1 = new Talking();
    this.empty2 = new Talking();
    this.empty3 = new Talking();
    this.empty4 = new Talking();
    this.empty5 = new Talking();
    this.empty6 = new Talking();

    //szene 1

    //Mentor Talking
    this.mentorTalking1 = new Talking(
      305,
      630,
      700,
      100,
      "Mentor",
      "Die Welt entwickelt sich sehr viel schneller weiter, als dir bewusst ist."
    );

    this.mentorTalking2 = new Talking(
      305,
      630,
      700,
      100,
      "Mentor",
      "Der technologische Fortschritt schleicht sich an, so dass einem gar nicht auffällt, dass all diese Science-Fiction-Filme gar nicht so weit von unserer Realität entfernt sind."
    );
    // mentorTalking2.clicked = this.display;
    this.mentorTalking3 = new Talking(
      305,
      630,
      700,
      100,
      "Mentor",
      "Und aus diesem Grund wird uns gar nicht die Zeit gegeben, um darüber nachzudenken, was das tatsächlich für uns bedeutet."
    );
    this.mentorTalking4 = new Talking(
      305,
      630,
      700,
      100,
      "Mentor",
      "Aus diesem Grund brauche ich dich."
    );
    this.mentorTalking5 = new Talking(
      305,
      630,
      700,
      100,
      "Mentor",
      "Sag mal, wieso ist es eigentlich so dunkel hier drin?"
    );
    this.mentorTalking6 = new Talking(
      305,
      630,
      700,
      100,
      "Mentor",
      "Also, nochmal zum Thema zurück, unser Unternehmen ist dabei wirklich drastische Entscheidungen zu treffen und das bereitet mir Sorgen."
    );
    this.mentorTalking7 = new Talking(
      305,
      630,
      700,
      100,
      "Mentor",
      "Diese Maschine hier wird dich in ein paralleles Universum transportieren, das schon um einiges fortschrittlicher ist als unseres."
    );
    this.mentorTalking8 = new Talking(
      305,
      630,
      700,
      100,
      "Mentor",
      "Ob das ungefährlich ist? Natürlich! Zumindest soweit ich weiß, hehe…"
    );
    this.mentorTalking9 = new Talking(
      305,
      630,
      700,
      100,
      "Mentor",
      "Also! Bevor wir anfangen muss ich dich noch einmal fragen, ob du diese Mission wirklich antreten möchtest. Bist du dabei?"
    );
    this.mentorTalking10 = new Talking(
      305,
      630,
      700,
      100,
      "Mentor",
      "*seufz* Na gut, trotzdem danke, dass du hergekommen bist, dann muss ich mir wohl jemanden anderes suchen…"
    );
    this.mentorTalking11 = new Talking(
      305,
      630,
      700,
      100,
      "Mentor",
      "Fantastisch! Dann erkläre ich dir noch einmal kurz die wichtigsten Dinge."
    );
    this.mentorTalking12 = new Talking(
      305,
      630,
      700,
      100,
      "Mentor",
      "Sobald du in deiner Wohnung ankommst findest du dort Kontaktlinsen, über die ich dich kontaktieren werde."
    );
    this.mentorTalking13 = new Talking(
      305,
      630,
      700,
      100,
      "Mentor",
      "Darüber erhältst du Aufträge von mir, in denen du Entscheidungen treffen musst."
    );
    this.mentorTalking14 = new Talking(
      305,
      630,
      700,
      100,
      "Mentor",
      "Über dein Handy musst du dokumentieren, wie du dich in diesen Situationen fühlst"
    );
    this.mentorTalking15 = new Talking(
      305,
      630,
      700,
      100,
      "Mentor",
      "Über dein Profil kannst du jederzeit sehen, was du tun musst und schon geschafft hast."
    );
    this.mentorTalking16 = new Talking(
      305,
      630,
      700,
      100,
      "Mentor",
      "In dieser Welt besitzt du eine ID, die alle Informationen über dich zugänglich macht, also bitte geh vorsichtig damit um."
    );
    this.mentorTalking17 = new Talking(
      305,
      630,
      700,
      100,
      "Mentor",
      "Alles verstanden?"
    );
    this.mentorTalking18 = new Talking(
      305,
      630,
      700,
      100,
      "Mentor",
      "Kein Problem."
    );
    this.mentorTalking19 = new Talking(
      305,
      630,
      700,
      100,
      "Mentor",
      "Sehr gut, bitte füll dieses Formular aus, dann kann es losgehen."
    );
    this.mentorTalking20 = new Talking(
      305,
      630,
      700,
      100,
      "Mentor",
      "Ich wünsche dir viel Glück auf der Reise."
    );

    //Decitions
    this.talking2Decision1 = new Talking2Decision(
      305,
      630,
      340,
      100,
      "Ich",
      "Tut mir Leid, das ist mir zu riskant.",
      "Ja, du kannst auf mich zählen."
    );
    this.talking2Decision2 = new Talking2Decision(
      305,
      630,
      340,
      100,
      "Ich",
      " Nein, wiederhol das bitte.",
      " Ja, verstanden."
    );

    //Szene 2

    this._hologram1 = new Hologram(
      360,
      150,
      "Hallo " +
        this.name.name.join("") +
        ", ich hoffe du bist gut angekommen. In dieser Welt hast du jetzt gleich ein Bewerbungsgespräch im [Gebäude?]. Bitte mach dich auf den Weg."
    );

    this.selfSpeeche1 = new Talking(
      305,
      630,
      700,
      100,
      "Ich",
      "Wow, meine Wohnung habe ich gepflegter in Erinnerung… \nBevor ich losgehe, sollte ich das Handy einpacken."
    );
    this.selfSpeecheArray1 = [
      "Die Stadt ist kaum noch wiederzuerkennen.",
      " Ist es wirklich morgens? Es sieht so düster aus…",
      "Es wohnen so viele Menschen auf einem Fleck.",
    ];
    this.selfSpeeche2 = new Talking(
      305,
      630,
      700,
      100,
      "Ich",
      random(this.selfSpeecheArray1)
    );
    this.selfSpeeche3 = new Talking(
      305,
      630,
      700,
      100,
      "Ich",
      "Ich kann noch nicht rausgehen, ich brauche erst das Handy."
    );
    this.selfSpeeche4 = new Talking(
      305,
      630,
      700,
      100,
      "Ich",
      "Wie möchte ich zum Bewerbungsgespräch fahren?"
    );
    this.talking3Decision1 = new Talking3Decition(
      305,
      630,
      220,
      100,
      "Ich",
      " Fahrrad",
      "Auto",
      "Bahn"
    );

    //Szene 3

    this._bossTalking1 = new Talking(
      305,
      630,
      700,
      100,
      "Chefin",
      "Guten Tag, " +
        this.name.name.join("") +
        "\nIch hoffe Sie haben gut hierher gefunden. Am besten wir beginnen direkt."
    );
    this.bossTalking2 = new Talking(
      305,
      630,
      700,
      100,
      "Chefin",
      "Was sind Ihre Stärken?"
    );
    this.talking4Desition1 = new Talking4Desition(
      285,
      630,
      355,
      90,
      "Ich bin sehr leidenschaftlich.",
      " Ich arbeite sehr sorgfältig.",
      "Ich behalte immer einen kühlen Kopf.",
      "Ich weiß es nicht so genau…"
    );

    this.activeTalk = this.mentorTalking1;
    this.mentorTalking1.changeNext(this.mentorTalking2, this);
    this.mentorTalking2.changeNext(this.mentorTalking3, this);
    this.mentorTalking3.changeNext(this.mentorTalking4, this);
    this.mentorTalking4.changeNext(this.mentorTalking5, this);
    this.mentorTalking5.changeNext(this.mentorTalking6, this);
    this.mentorTalking6.changeNext(this.mentorTalking7, this);
    this.mentorTalking7.changeNext(this.mentorTalking8, this);
    this.mentorTalking8.changeNext(this.mentorTalking9, this);
    this.mentorTalking9.changeNext(this.talking2Decision1, this);
    this.talking2Decision1.changeNext1(this.mentorTalking10, this);
    this.talking2Decision1.changeNext2(this.mentorTalking11, this);
    this.mentorTalking10.changeNext(this.empty1, this);
    this.mentorTalking11.changeNext(this.mentorTalking12, this);
    this.mentorTalking12.changeNext(this.mentorTalking13, this);
    this.mentorTalking13.changeNext(this.mentorTalking14, this);
    this.mentorTalking14.changeNext(this.mentorTalking15, this);
    this.mentorTalking15.changeNext(this.mentorTalking16, this);
    this.mentorTalking16.changeNext(this.mentorTalking17, this);
    this.mentorTalking17.changeNext(this.talking2Decision2, this);
    this.talking2Decision2.changeNext1(this.mentorTalking18, this);
    this.talking2Decision2.changeNext2(this.mentorTalking19, this);
    this.mentorTalking18.changeNext(this.mentorTalking12, this);
    this.mentorTalking19.changeNext(this.empty2, this);
    this.mentorTalking20.changeNext(this.empty4, this);
    this._hologram1.changeNext(this.selfSpeeche1, this);
    this.selfSpeeche1.changeNext(this.empty5, this);
    this.selfSpeeche3.changeNext(this.empty5, this);
    this.selfSpeeche4.changeNext(this.talking3Decision1, this);
    this.talking3Decision1.changeNext1(this.empty6, this);
    this.talking3Decision1.changeNext2(this.empty6, this);
    this.talking3Decision1.changeNext3(this.empty6, this);
    this._bossTalking1.changeNext(this.bossTalking2, this);
    this.bossTalking2.changeNext(this.talking4Desition1, this);
  }

  get hologram1() {
    this._hologram1.text =
      "Hallo " +
      this.name.name.join("") +
      ", ich hoffe du bist gut angekommen. In dieser Welt hast du jetzt gleich ein Bewerbungsgespräch im [Gebäude?]. Bitte mach dich auf den Weg.";

    return this._hologram1;
  }
  get bossTalking1() {
    this._bossTalking1.text =
      "Guten Tag, " +
      this.name.name.join("") +
      "\nIch hoffe Sie haben gut hierher gefunden. Am besten wir beginnen direkt.";

    return this._bossTalking1;
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
