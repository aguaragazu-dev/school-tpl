import { getPageBySlug } from '@/lib/pages';
import { RichContent } from '@/components/RichContent/RichContent';
import { notFound } from 'next/navigation';

interface NivelPageProps {
  params: {
    level: string;
    slug: string;
  };
}

export default async function NivelPage({ params }: NivelPageProps) {
  const page = await getPageBySlug(params.slug);

  if (!page || page.section !== 'niveles' || page.subsection !== params.level) {
    notFound();
  }

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold mb-8">{page.title}</h1>
      <RichContent content={page.content} className="mt-6" />
    </div>
  );
}
