import Link from 'next/link';

interface PageHeaderProps {
  title: string;
  breadcrumb: { label: string; href: string }[];
  backgroundImage: string;
}

export default function PageHeader({
  title,
  breadcrumb,
  backgroundImage,
}: PageHeaderProps) {
  return (
    <div
      className="relative bg-cover bg-center h-64"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center relative z-10">
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <nav className="text-white">
          <ol className="list-none p-0 inline-flex">
            {breadcrumb.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && <span className="mx-2">/</span>}
                <Link href={item.href} className="hover:text-green-400">
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
