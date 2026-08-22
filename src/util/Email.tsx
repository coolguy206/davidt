interface EmailProps {
  className?: string;
}

export function Email({ className }: EmailProps) {
  const user = 'davidthanphilom';
  const domain = 'msn.com';
  const fullEmail = `${user}@${domain}`;
  const subject = 'Job Application: David Thanphilom - Software Engineer';
  const encodedSubject = encodeURIComponent(subject);

  return (
    <a
      href={`mailto:${fullEmail}?subject=${encodedSubject}`}
      className={`transition-colors duration-200 hover:text-gold ${className}`}
    >
      {/* Displays beautifully to humans, but bots reading raw HTML can't easily scrape it */}
      {user}&#64;{domain}
    </a>
  );
}
