export default function InsightsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">Insights</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground">Market commentary, research, and guides.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <article key={i} className="rounded-lg border p-6">
            <h3 className="text-lg font-semibold">Sample Article {i}</h3>
            <p className="mt-2 text-sm text-muted-foreground">Preview of a research note or market update.</p>
          </article>
        ))}
      </div>
    </div>
  );
}


