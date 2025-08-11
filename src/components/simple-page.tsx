interface SimplePageProps {
  title: string;
  description: string;
}

export function SimplePage({ title, description }: SimplePageProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
        {description}
      </p>
      <div className="mt-8 p-6 bg-slate-50 dark:bg-slate-900 rounded-lg">
        <p className="text-sm text-slate-500">
          This page is under development. Please check back soon for more information.
        </p>
      </div>
    </div>
  );
}
