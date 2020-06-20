import Talking from "./talking.js";
import TalkingDecision from "./talkingDecision.js";
// import Button from "./button.js";

//Talking

export default class TalkingHandler {
  constructor() {
    //szene 1
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
    this.talkingDecision1 = new TalkingDecision(
      305,
      630,
      340,
      100,
      "Ich",
      "Tut mir Leid, das ist mir zu riskant.",
      "Ja, du kannst auf mich zählen."
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
    this.mentorTalking9.changeNext(this.talkingDecision1, this);
    this.talkingDecision1.changeNext1(this.mentorTalking10, this);
    this.talkingDecision1.changeNext2(this.mentorTalking11, this);
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
}
