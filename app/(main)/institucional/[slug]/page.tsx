import { getPageBySlug } from '@/lib/pages';
import { RichContent } from '@/components/RichContent/RichContent';
import { notFound } from 'next/navigation';

interface InstitucionalPageProps {
  params: {
    slug: string;
  };
}

export default async function InstitucionalPage({ params }: InstitucionalPageProps) {
  const page = await getPageBySlug(params.slug);

  if (!page || page.section !== 'institucional') {
    notFound();
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">{page.title}</h1>
      <RichContent content={page.content} className="mt-6" />
    </div>
  );
}
