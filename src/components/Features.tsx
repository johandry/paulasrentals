import React from 'react';
import { Shield, Clock, Heart, Map } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Verified Properties",
      description: "All our properties are thoroughly vetted for quality and safety"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your rental needs"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Tenant-First Approach",
      description: "We prioritize your comfort and satisfaction"
    },
    {
      icon: <Map className="h-8 w-8" />,
      title: "Prime Locations",
      description: "Access to properties in the most desirable neighborhoods"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}