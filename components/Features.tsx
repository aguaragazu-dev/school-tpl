import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Zap, Globe, Users, Shield } from 'lucide-react';

const features = [
  {
    title: 'Lightning Fast',
    description: 'Our platform is optimized for speed and performance.',
    icon: Zap,
  },
  {
    title: 'Global Reach',
    description: 'Connect with users from all around the world.',
    icon: Globe,
  },
  {
    title: 'Community Driven',
    description: 'Join a thriving community of like-minded individuals.',
    icon: Users,
  },
  {
    title: 'Secure & Private',
    description:
      'Your data is protected with state-of-the-art security measures.',
    icon: Shield,
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="transition-transform hover:scale-105">
              <CardHeader>
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
