import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto grid grid-cols-2 gap-8 px-4 py-12 sm:grid-cols-3 md:grid-cols-5">
        <div className="col-span-2 sm:col-span-1">
          <div className="text-sm text-muted-foreground">© {new Date().getFullYear()} Growth Capital</div>
          <p className="mt-2 max-w-xs text-sm text-muted-foreground">Institutional-grade wealth management for ambitious investors.</p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/careers" className="hover:underline">Careers</Link></li>
            <li><Link href="/partners" className="hover:underline">Partners</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/insights" className="hover:underline">Insights</Link></li>
            <li><Link href="/events" className="hover:underline">Events</Link></li>
            <li><Link href="/calculators" className="hover:underline">Calculators</Link></li>
            <li><Link href="/faq" className="hover:underline">FAQs</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/legal/terms" className="hover:underline">Terms of Use</Link></li>
            <li><Link href="/legal/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link href="/legal/cookies" className="hover:underline">Cookie Policy</Link></li>
            <li><Link href="/legal/disclosures" className="hover:underline">Disclosures</Link></li>
            <li><Link href="/legal/accessibility" className="hover:underline">Accessibility</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold">Contact</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>contact@growthcapital.com</li>
            <li>+91-00000 00000</li>
            <li>M-F 9:00–18:00</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}


