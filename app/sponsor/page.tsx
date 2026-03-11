"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Heading,
  Text,
  TiltCard,
  Container,
  Badge,
} from "../components/ui";

const stats = [
  { value: "15K+", label: "Impressions" },
  { value: "500+", label: "Members" },
  { value: "1,000+", label: "Email List" },
  { value: "#1", label: "of 41 Clubs" },
];

const whyCards = [
  {
    title: "Multi-Channel Reach",
    body: "Your brand featured across Instagram, X (Twitter), LinkedIn, Discord, our website, and through in-person signage and mentions at the event. Gold and Silver tiers also get access to our 1,000+ person email blast.",
  },
  {
    title: "Proven Track Record",
    body: "Our fall hackathon generated 15,000+ impressions and attracted sponsors like Polymarket, Ether.fi, Acorns, and StreetSmart. We know how to run a high-quality event and deliver value to our partners.",
  },
  {
    title: "Engaged Community",
    body: "500+ signups last semester, active case competitions, and a Discord buzzing with technical discussion. These aren't passive followers \u2014 they're builders who ship real projects.",
  },
  {
    title: "AI-Native Audience",
    body: "Our members are actively building with Claude, exploring MCP servers, agentic workflows, and full-stack AI applications. This is a technical audience that evaluates and adopts new tools.",
  },
];

const tiers = [
  {
    name: "Gold",
    price: "$3,000",
    note: "Maximum visibility",
    features: [
      "Logo on website, all socials, and event materials",
      "Marketing across Instagram, X, LinkedIn, Discord",
      "Inclusion in 1,000+ person email blast",
      "Prominent in-person branding at HackASU",
      "Speaking slot or product demo opportunity",
      "Mention in event opening and closing ceremonies",
    ],
  },
  {
    name: "Silver",
    price: "$1,000",
    note: "Strong presence",
    features: [
      "Logo on website, all socials, and event materials",
      "Marketing across Instagram, X, LinkedIn, Discord",
      "Inclusion in 1,000+ person email blast",
      "In-person branding at HackASU",
      "Mention during event announcements",
    ],
  },
  {
    name: "Bronze",
    price: "$500",
    note: "Community supporter",
    features: [
      "Logo on event social media posts",
      "Marketing across Instagram, X, LinkedIn, Discord",
      "Recognized as an official HackASU partner",
      "Shoutout during event",
    ],
  },
];

const comparisonRows = [
  { benefit: "Website logo placement", gold: true, silver: true, bronze: false },
  { benefit: "Social media marketing (IG, X, LinkedIn, Discord)", gold: true, silver: true, bronze: true },
  { benefit: "1,000+ email blast inclusion", gold: true, silver: true, bronze: false },
  { benefit: "In-person event branding", gold: true, silver: true, bronze: false },
  { benefit: "Speaking slot / product demo", gold: true, silver: false, bronze: false },
  { benefit: "Opening & closing ceremony mention", gold: true, silver: false, bronze: false },
];

const audienceStats = [
  { value: "15K+", label: "Impressions (last hackathon)" },
  { value: "1,000+", label: "Emails" },
  { value: "890+", label: "Discord members" },
  { value: "500+", label: "Semester signups" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring" as const,
      stiffness: 80,
      damping: 20,
    },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

function CheckIcon({ checked }: { checked: boolean }) {
  return (
    <span
      className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
        checked
          ? "bg-[var(--theme-text-accent)]/15 text-[var(--theme-text-accent)]"
          : "bg-[var(--theme-text-primary)]/5 text-[var(--theme-text-primary)]/30"
      }`}
    >
      {checked ? "\u2713" : "\u2014"}
    </span>
  );
}

export default function SponsorPage() {
  return (
    <div className="min-h-[100dvh] relative overflow-x-hidden">
      <Header />
      <main className="pb-24 pt-12 sm:pt-16">
        {/* Hero */}
        <Container size="lg" className="text-center space-y-6 mb-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="space-y-5"
          >
            <motion.div variants={fadeUp}>
              <Text
                size="sm"
                variant="accent"
                className="uppercase tracking-[0.25em] font-medium"
              >
                ASU Claude Builder Club presents
              </Text>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Heading
                level="h1"
                animate={false}
                gradient
                className="text-5xl sm:text-6xl md:text-7xl"
              >
                HackASU
              </Heading>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Text
                size="lg"
                variant="secondary"
                className="max-w-xl mx-auto"
              >
                Arizona&apos;s premier AI hackathon. 72 hours of building,
                learning, and shipping &mdash; powered by the largest Claude
                Builder Club in the nation.
              </Text>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Text size="sm" variant="secondary" className="opacity-60">
                March 20 &ndash; 22, 2026 &middot; Arizona State University,
                Tempe
              </Text>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap justify-center gap-6 sm:gap-10 pt-4"
            >
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-3xl sm:text-4xl font-bold text-[var(--theme-text-primary)]">
                    {s.value}
                  </p>
                  <p className="text-xs uppercase tracking-[0.12em] text-[var(--theme-text-primary)]/50 mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </Container>

        {/* Why HackASU */}
        <Container size="lg" animate className="space-y-8 mt-8">
          <div>
            <Text
              size="sm"
              variant="secondary"
              className="uppercase tracking-[0.35em]"
            >
              Why HackASU
            </Text>
            <Heading level="h2" animate={false} className="mt-2">
              Put your brand in front of the builders shaping tomorrow
            </Heading>
            <Text
              size="base"
              variant="secondary"
              className="mt-4 max-w-2xl leading-relaxed"
            >
              ASU&apos;s Claude Builder Club is the largest among 41 universities
              nationwide, with 1,000+ email subscribers and 890+ Discord members.
              HackASU brings together ambitious student engineers, designers, and
              entrepreneurs for a weekend of intensive building with
              cutting-edge AI tools. Your sponsorship puts your brand directly
              in front of this highly engaged, technically fluent audience.
            </Text>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {whyCards.map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
              >
                <TiltCard
                  glareMaxOpacity={0.1}
                  tiltMaxAngleX={6}
                  tiltMaxAngleY={6}
                  scale={1.01}
                  transitionSpeed={600}
                  hoverable
                  gradient
                  tiltClassName="h-full"
                  className="h-full"
                >
                  <Heading
                    level="h6"
                    animate={false}
                    className="!text-lg sm:!text-xl mb-2 font-semibold"
                  >
                    {card.title}
                  </Heading>
                  <Text
                    variant="secondary"
                    size="sm"
                    className="!text-sm leading-6"
                  >
                    {card.body}
                  </Text>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </Container>

        {/* Sponsorship Tiers */}
        <Container size="lg" animate className="space-y-8 mt-8">
          <div>
            <Text
              size="sm"
              variant="secondary"
              className="uppercase tracking-[0.35em]"
            >
              Sponsorship Tiers
            </Text>
            <Heading level="h2" animate={false} className="mt-2">
              Choose your level of partnership
            </Heading>
          </div>

          {/* Platinum Banner */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            <TiltCard
              glareMaxOpacity={0.08}
              tiltMaxAngleX={4}
              tiltMaxAngleY={4}
              scale={1.01}
              transitionSpeed={600}
              hoverable
              gradient
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-2">
                  <Badge variant="accent" size="sm">
                    Platinum Sponsor &mdash; Secured
                  </Badge>
                  <Heading
                    level="h4"
                    animate={false}
                    className="!text-xl sm:!text-2xl"
                  >
                    Anthropic
                  </Heading>
                  <Text variant="secondary" size="sm">
                    Our founding partner and title sponsor. Anthropic provides
                    free Claude Pro access and API credits to every club member.
                  </Text>
                </div>
                <div className="relative h-12 w-36 sm:h-16 sm:w-44 flex-shrink-0">
                  <Image
                    src="/assets/hackathon/sponsors/anthropic.png"
                    alt="Anthropic logo"
                    fill
                    sizes="176px"
                    className="object-contain drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)] dark:invert dark:hue-rotate-180"
                  />
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Tier Cards */}
          <div className="grid gap-6 lg:grid-cols-3">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
              >
                <TiltCard
                  glareMaxOpacity={0.12}
                  tiltMaxAngleX={6}
                  tiltMaxAngleY={6}
                  scale={1.02}
                  transitionSpeed={600}
                  hoverable
                  gradient
                  tiltClassName="h-full"
                  className="h-full"
                >
                  <div className="space-y-4">
                    <Badge variant="accent" size="sm">
                      {tier.name}
                    </Badge>
                    <div>
                      <p className="text-4xl font-bold text-[var(--theme-text-accent)]">
                        {tier.price}
                      </p>
                      <Text
                        variant="secondary"
                        size="sm"
                        className="mt-1 opacity-60"
                      >
                        {tier.note}
                      </Text>
                    </div>
                    <ul className="space-y-3 pt-2">
                      {tier.features.map((f) => (
                        <li key={f} className="flex items-start gap-2.5">
                          <span className="text-[var(--theme-text-accent)] text-sm mt-0.5 flex-shrink-0">
                            &rarr;
                          </span>
                          <Text
                            variant="secondary"
                            size="sm"
                            className="!text-sm leading-snug"
                          >
                            {f}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          {/* Comparison Table */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="space-y-4"
          >
            <Text
              size="sm"
              variant="secondary"
              className="uppercase tracking-[0.35em]"
            >
              At a Glance
            </Text>
            <div className="overflow-x-auto rounded-xl border-2 border-[var(--theme-card-border)]">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--theme-card-border)]">
                    <th className="px-4 py-3 text-left text-xs uppercase tracking-wider text-[var(--theme-text-primary)]/50 font-medium">
                      Benefit
                    </th>
                    <th className="px-4 py-3 text-center text-xs uppercase tracking-wider text-[var(--theme-text-accent)] font-medium">
                      Gold
                    </th>
                    <th className="px-4 py-3 text-center text-xs uppercase tracking-wider text-[var(--theme-text-primary)]/60 font-medium">
                      Silver
                    </th>
                    <th className="px-4 py-3 text-center text-xs uppercase tracking-wider text-[var(--theme-text-primary)]/40 font-medium">
                      Bronze
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr
                      key={row.benefit}
                      className={
                        i < comparisonRows.length - 1
                          ? "border-b border-[var(--theme-card-border)]/50"
                          : ""
                      }
                    >
                      <td className="px-4 py-3 text-[var(--theme-text-primary)]/70">
                        {row.benefit}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <CheckIcon checked={row.gold} />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <CheckIcon checked={row.silver} />
                      </td>
                      <td className="px-4 py-3 text-center">
                        <CheckIcon checked={row.bronze} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </Container>

        {/* Audience */}
        <Container size="lg" animate className="space-y-8 mt-8">
          <div>
            <Text
              size="sm"
              variant="secondary"
              className="uppercase tracking-[0.35em]"
            >
              Our Reach
            </Text>
            <Heading level="h2" animate={false} className="mt-2">
              The numbers behind the club
            </Heading>
            <Text
              size="base"
              variant="secondary"
              className="mt-4 max-w-2xl leading-relaxed"
            >
              We&apos;re not just the biggest Claude Builder Club &mdash;
              we&apos;re one of the most active student AI communities in the
              country. Here&apos;s what our last semester looked like.
            </Text>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {audienceStats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
              >
                <TiltCard
                  glareMaxOpacity={0.08}
                  tiltMaxAngleX={6}
                  tiltMaxAngleY={6}
                  scale={1.01}
                  transitionSpeed={600}
                  hoverable
                  gradient
                  tiltClassName="h-full"
                  className="h-full text-center"
                >
                  <p className="text-3xl sm:text-4xl font-bold text-[var(--theme-text-primary)]">
                    {s.value}
                  </p>
                  <Text variant="secondary" size="sm" className="mt-2">
                    {s.label}
                  </Text>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <TiltCard
                glareMaxOpacity={0.1}
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                scale={1.01}
                transitionSpeed={600}
                hoverable
                gradient
                tiltClassName="h-full"
                className="h-full"
              >
                <Heading
                  level="h6"
                  animate={false}
                  className="!text-lg sm:!text-xl mb-2 font-semibold"
                >
                  Previous Sponsors
                </Heading>
                <Text
                  variant="secondary"
                  size="sm"
                  className="!text-sm leading-6"
                >
                  Anthropic (Platinum), Polymarket (Gold), Ether.fi (Bronze),
                  Base (Bronze), Acorns, StreetSmart &mdash; companies that
                  trust us to connect them with the next generation of builders.
                </Text>
              </TiltCard>
            </motion.div>
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <TiltCard
                glareMaxOpacity={0.1}
                tiltMaxAngleX={6}
                tiltMaxAngleY={6}
                scale={1.01}
                transitionSpeed={600}
                hoverable
                gradient
                tiltClassName="h-full"
                className="h-full"
              >
                <Heading
                  level="h6"
                  animate={false}
                  className="!text-lg sm:!text-xl mb-2 font-semibold"
                >
                  Platforms
                </Heading>
                <Text
                  variant="secondary"
                  size="sm"
                  className="!text-sm leading-6"
                >
                  Instagram, X (Twitter), LinkedIn, Discord, 1,000+ email list,
                  claudebuilder.club, and in-person events on ASU&apos;s Tempe
                  campus.
                </Text>
              </TiltCard>
            </motion.div>
          </div>
        </Container>

        {/* CTA */}
        <Container size="sm" animate className="text-center space-y-6 mt-8">
          <Text
            size="sm"
            variant="secondary"
            className="uppercase tracking-[0.35em]"
          >
            Let&apos;s Build Together
          </Text>
          <Heading level="h2" animate={false}>
            Become a HackASU sponsor
          </Heading>
          <Text variant="secondary" size="base" className="max-w-lg mx-auto">
            Get in touch with our sponsorship team to discuss partnership
            opportunities, custom packages, or in-kind sponsorships.
          </Text>
          <div className="flex flex-col items-center gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-transparent bg-[var(--theme-button-bg)] px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02] hover:bg-[var(--theme-button-hover-bg)] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--theme-text-accent)]"
            >
              Get in Touch &rarr;
            </Link>
            <Text variant="secondary" size="sm" className="opacity-60">
              or email us at{" "}
              <Link
                href="mailto:shivenshekar01@gmail.com"
                className="text-[var(--theme-text-accent)] hover:underline"
              >
                shivenshekar01@gmail.com
              </Link>
            </Text>
          </div>
        </Container>

        <div className="mt-16">
          <Footer />
        </div>
      </main>
    </div>
  );
}
