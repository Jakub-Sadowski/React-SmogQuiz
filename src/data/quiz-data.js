import React from 'react';

const QUESTION_DATA = [
  {
    question: <span>Spośród 20 najbardziej zanieczyszczonych miast na świecie, aż 15 znajduje się w:</span>,
    answers: [
      <span>Chinach</span>,
      <span>Polsce</span>,
      <span>Bułgarii</span>,
      <span>Indiach</span>
    ],
    correct: 3
  },
  {
    question: <span>Jedna z większych katastrof smogowych miała miejsce w 1952 roku w Londynie. Na tę tragedie, w której szacuje się, że zmarło około: </span>,
    answers: [
      <span>500 osób</span>,
      <span>5 tysięcy osób</span>,
      <span>40 osób</span>,
      <span>30 tysięcy osób</span>
    ],
    correct: 1
  },
  {
    question: <span>Które zdanie jest prawdziwe?</span>,
    answers: [
      <span>Smog nie jest szkodliwy dla zdrowia</span>,
      <span>Polska nie ma problemu ze smogiem.</span>,
      <span>Spaliny samochodowe generują większość smogu.</span>,
      <span>Powietrze w domu może być jeszcze gorsze niż na zewnątrz.</span>
    ],
    correct: 3
  },
  {
    question: <span>Jaki związek ma Kaplica Sykstyńska i zanieczyszczenie powietrza?</span>,
    answers: [
      <span>Dochody ze zwiedzania kaplicy są przeznaczane na walkę ze smogiem</span>,
      <span>Freski w kaplicy przedstawiają chmury smogu.</span>,
      <span>Księża ocieplają kaplicę paląc śmieci.</span>,
      <span>Wydychany dwutlenek węgla przez tłumy odwiedzających powoduje wybielanie fresków w kaplicy.</span>
    ],
    correct: 3
  },
  {
    question: <span>Które ze zdań jest prawdziwe?</span>,
    answers: [
      <span>W najbardziej uprzemysłowionych miastach Chin, jak Beijing noszenie maski antysmogowej u dzieci i dorosłych to naturalna czynność.</span>,
      <span> Zdarza się, że w Chinach z powodu smogu odwołuje się lekcje w szkołach.</span>,
      <span>W niektóre dni z powodu smogu widoczność potrafi być ograniczona do dziesięciu metrów.</span>,
      <span>Wszystkie odpowiedzi są poprawne.</span>
    ],
    correct: 3
  },
  {
    question: <span>Ile czasu zabrało w Chinach stworzenie cegły za pomocą wsysania zanieczyszczonego powietrza przez odkurzacz!</span>,
    answers: [
      <span>12 h przez 3 miesiące</span>,
      <span>24 h przez tydzień</span>,
      <span>10h przez 9 miesięcy</span>,
      <span>5 godzin dziennie przez ponad 3 miesiące.</span>
    ],
    correct: 3
  },
  {
    question: <span>Nazwa smog pochodzi od:</span>,
    answers: [
      <span>Od dymu wychodzącego z paszczy smoka.</span>,
      <span>Połączenia dwóch wyrazów - „smoke” (dym) i „fog” (mgła).</span>,
      <span>Połączenia dwóch wyrazów - „smoke” (dym) i „log” (kłoda).</span>,
      <span>Wszystkie odpowiedzi są poprawne.</span>
    ],
    correct: 1
  },
  {
    question: <span>Smog skraca życie. Długotrwałe narażenie na jego działanie może odebrać nawet:</span>,
    answers: [
      <span>Rok życia</span>,
      <span>20 lat życia</span>,
      <span>9 lat życia</span>,
      <span>4 lata życia</span>
    ],
    correct: 2
  },
  {
    question: <span>W 2017 roku powstała wieża Smog Free Tower, której zadaniem jest oczyszczanie powietrza.Co tworzy z zebranego pyłu?</span>,
    answers: [
      <span>Obuwie</span>,
      <span>Kosmetyki</span>,
      <span>Paliwo</span>,
      <span>Biżuterię</span>
    ],
    correct: 3
  }
];

export default QUESTION_DATA;
