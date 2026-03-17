import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card, Heading, Text } from "../components/ui";

// the contents are hardcoded for
// type of each FAQ item with question and answer
type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

// FAQ items, we can add more items here as needed.
const FAQ_ITEMS: ReadonlyArray<FaqItem> = [
  {
    question:
      "Why did I not receive API credits even after attending the meeting and redeeming them?",
    answer: (
      <>
        This usually happens if you submit the Org ID from your personal account
        instead of your ASU school account, or if the Org ID is copied from{" "}
        <a
          href="https://claude.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          claude.ai
        </a>{" "}
        instead of{" "}
        <a
          href="https://platform.anthropic.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          platform.anthropic.com
        </a>
        .
      </>
    ),
  },
  {
    question:
      "I filled out and submitted the form at /redeem. Why do I still not have access?",
    answer:
      "Submitting the application alone is not enough. You must attend a meeting in person to receive access.",
  },
  {
    question: "Where can I check the latest meeting announcement?",
    answer: (
      <>
        Use this order of sources: Discord{" "}
        <a
          href="https://discord.com/channels/1414342988259262516/1414342989383340044"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          #announcements
        </a>
        , then your email,{" "}
        <a
          href="https://www.instagram.com/asu.cbc/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Instagram
        </a>
        , then{" "}
        <a
          href="https://x.com/asuclaude"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          X
        </a>
        , and{" "}
        <a
          href="https://www.linkedin.com/company/claude-builder-club-asu/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          LinkedIn
        </a>
        .
      </>
    ),
  },
];

export default function FaqPage() {
  return (
    <div className="max-h-full flex flex-col">
      <Header />
      <main className="font-sans flex-1 pt-4 px-4 pb-0 sm:pt-8 sm:px-8 md:p-20">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-3">
            <Heading level="h1" animate={false}>Frequently Asked Questions</Heading>
            <Text size="xl" variant="secondary">
              Quick answers for access, API credits, and meeting verification.
            </Text>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {FAQ_ITEMS.map((item) => (
              <Card key={item.question} gradient animated={false}>
                <Heading level="h4" animate={false} className="mb-2">{item.question}</Heading>
                <Text size="lg" variant="secondary">{item.answer}</Text>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
