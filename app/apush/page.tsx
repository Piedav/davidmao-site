"use client";
import Header from "../components/Header";
import { useEffect, useState } from "react";

type Section = {
  id: number;
  image: string;
  alt: string;
  choices: string[];
  correctOrder: string[];
};

type ShuffledSection = Section & {
  shuffledChoices: string[];
};

const sections: Section[] = [
  {
    id: 1,
    image: "/apush/timeline1.png",
    alt: "APUSH timeline 1",
    choices: [
      "The coming of the French and English",
      "The Critical Period: from Confederation to Constitution",
      "The Revolutionary Era",
      "The coming of the Spanish",
      "The colonial period",
    ],
    correctOrder: [
      "The coming of the Spanish",
      "The coming of the French and English",
      "The colonial period",
      "The Revolutionary Era",
      "The Critical Period: from Confederation to Constitution",
    ],
  },
  {
    id: 2,
    image: "/apush/timeline2.png",
    alt: "APUSH timeline 2",
    choices: [
      "Manifest Destiny",
      "The Civil War",
      "Jeffersonian Republicanism",
      "Reconstruction",
      "The Gilded Age",
      "The Industrial Revolution",
      "The 2nd Industrial Revolution",
      "Sectionalism",
      "Era of Good Feelings",
      "Era of the Common Man/Age of Jackson",
    ],
    correctOrder: [
      "Jeffersonian Republicanism",
      "Era of Good Feelings",
      "Sectionalism",
      "The Industrial Revolution",
      "Era of the Common Man/Age of Jackson",
      "Manifest Destiny",
      "The Civil War",
      "Reconstruction",
      "The Gilded Age",
      "The 2nd Industrial Revolution",
    ],
  },
  {
    id: 3,
    image: "/apush/timeline3.png",
    alt: "APUSH timeline 3",
    choices: [
      "Information Age",
      "The Progressive Era",
      "The Great Depression",
      "Age of Imperialism",
      "Civil Rights Movement",
      "War on Terror",
      "World War II",
      "The Vietnam Era",
      "World War I",
      "The Cold War",
    ],
    correctOrder: [
      "Age of Imperialism",
      "The Progressive Era",
      "World War I",
      "The Great Depression",
      "World War II",
      "The Cold War",
      "The Vietnam Era",
      "Civil Rights Movement",
      "Information Age",
      "War on Terror",
    ],
  },
];

function shuffle<T>(array: T[]): T[] {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function getLabels(count: number): string[] {
  return Array.from({ length: count }, (_, i) => String.fromCharCode(65 + i));
}

export default function APUSHTimelinePracticePage() {
  const [shuffledSections, setShuffledSections] = useState<ShuffledSection[]>(
    sections.map((section) => ({
      ...section,
      shuffledChoices: section.choices,
    }))
  );

  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [results, setResults] = useState<Record<number, string>>({});

  useEffect(() => {
    setShuffledSections(
      sections.map((section) => ({
        ...section,
        shuffledChoices: shuffle(section.choices),
      }))
    );
  }, []);

  function answerKey(sectionId: number, label: string) {
    return `${sectionId}-${label}`;
  }

  function updateAnswer(sectionId: number, label: string, value: string) {
    setAnswers((prev) => ({
      ...prev,
      [answerKey(sectionId, label)]: value,
    }));
  }

  function checkSection(section: ShuffledSection) {
    const labels = getLabels(section.correctOrder.length);

    const userAnswers = labels.map(
      (label) => answers[answerKey(section.id, label)]?.trim() ?? ""
    );

    if (userAnswers.some((answer) => !answer)) {
      setResults((prev) => ({
        ...prev,
        [section.id]: "Please fill in all fields.",
      }));
      return;
    }

    let score = 0;
    const wrong: string[] = [];

    for (let i = 0; i < userAnswers.length; i++) {
      const answerNumber = Number(userAnswers[i]);

      if (
        !Number.isInteger(answerNumber) ||
        answerNumber < 1 ||
        answerNumber > section.shuffledChoices.length
      ) {
        setResults((prev) => ({
          ...prev,
          [section.id]: `Invalid input. Make sure every answer is a number from 1 to ${section.shuffledChoices.length}.`,
        }));
        return;
      }

      const selectedChoice = section.shuffledChoices[answerNumber - 1];
      const correctChoice = section.correctOrder[i];

      if (selectedChoice === correctChoice) {
        score += 1;
      } else {
        wrong.push(labels[i]);
      }
    }

    let result = `${score}/${section.correctOrder.length}, reload the page to reshuffle`;

    if (wrong.length > 0) {
      result += `\nQuestions missed: ${wrong.join(" ")}`;
    }

    setResults((prev) => ({
      ...prev,
      [section.id]: result,
    }));
  }

  return (
    <main className="page">
        <Header />
        <div className="content">
            <div style={{ textAlign: "center" }}>
                <h1>APUSH Timeline Test Practice</h1>

                <p className="lead">
                    made by David Mao 8/27/2025 (Shoutout Yuvaan cause he PM'ed me)
                    <br />
                    Note: question order is randomized when the page is refreshed.
                </p>
            </div>
            <div className="card">
                {shuffledSections.map((section) => {
                const labels = getLabels(section.correctOrder.length);

                return (
                    <section className="timelineSection" key={section.id}>
                    <img src={section.image} alt={section.alt} className="timeline" />

                    <div className="choices">
                        {section.shuffledChoices.map((choice, index) => (
                        <p key={choice}>
                            {index + 1}. {choice}
                        </p>
                        ))}
                    </div>

                    <div className="answerGrid">
                        {labels.map((label) => (
                        <label key={label} className="answerRow">
                            <span>{label}</span>
                            <input
                            value={answers[answerKey(section.id, label)] ?? ""}
                            onChange={(e) =>
                                updateAnswer(section.id, label, e.target.value)
                            }
                            placeholder={`1 to ${section.correctOrder.length}`}
                            inputMode="numeric"
                            />
                        </label>
                        ))}
                    </div>

                    <button onClick={() => checkSection(section)}>
                        Check Answer
                    </button>

                    <div className="output">
                        {results[section.id] ?? "Output will appear here…"}
                    </div>
                    </section>
                );
                })}
            </div>
        </div>

      <style jsx>{`
        .page {
            min-height: 100vh;
            width: 100%;
            margin: 0;
            padding: 0;
        }
        .content {
            max-width: 760px;
            width: 100%;
            margin: 0 auto;
            padding: 2rem 1rem 3rem;

        }
        h1 {
          font-size: clamp(1.8rem, 3vw, 2.4rem);
          margin-bottom: 0.25rem;
        }

        .lead {
          opacity: 0.8;
          margin-top: 0;
          line-height: 1.5;
        }

        .card {
          background: rgba(0, 0, 0, 0.035);
          padding: 1rem;
          border-radius: 16px;
        }

        .timelineSection {
          margin-bottom: 2.5rem;
          padding-bottom: 2rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.12);
        }

        .timelineSection:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }

        .timeline {
          width: 100%;
          max-width: 700px;
          height: auto;
          display: block;
          margin-bottom: 1rem;
          border-radius: 10px;
        }

        .choices {
          margin-bottom: 1rem;
        }

        .choices p {
          margin: 0.35rem 0;
        }

        .answerGrid {
          display: grid;
          gap: 0.6rem;
          margin-bottom: 1rem;
          grid-template-columns: repeat(5, minmax(0, 1fr));
        }

        .answerRow {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        }

        .answerRow input {
        width: 100%;
        max-width: 160px;
        }

        input,
        button {
          font: inherit;
          padding: 0.6rem 0.8rem;
          border-radius: 10px;
          border: 1px solid rgba(0, 0, 0, 0.15);
        }

        input {
          max-width: 160px;
        }

        button {
          cursor: pointer;
          font-weight: 700;
          background: white;
        }

        button:hover {
          background: rgba(255, 255, 255, 0.75);
        }

        .output {
          white-space: pre-wrap;
          min-height: 2.5rem;
          margin-top: 0.8rem;
          font-weight: 600;
        }

        @media (prefers-color-scheme: dark) {
          .card {
            background: rgba(255, 255, 255, 0.08);
          }

          .timelineSection {
            border-bottom-color: rgba(255, 255, 255, 0.15);
          }

          input,
          button {
            border-color: rgba(255, 255, 255, 0.2);
            background: rgba(255, 255, 255, 0.08);
            color: inherit;
          }

          button:hover {
            background: rgba(255, 255, 255, 0.14);
          }
        }
      `}</style>
    </main>
  );
}