import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { 
  Briefcase, 
  GraduationCap, 
  MapPin
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: GraduationCap,
      title: "Vistos de Estudante",
      description: "Facilitamos sua entrada na Irlanda através de programas educacionais reconhecidos.",
      features: ["Visto de Estudante", "Intercâmbio", "Cursos de Inglês", "Ensino Superior"]
    },
    {
      icon: Briefcase,
      title: "Permissão de Trabalho",
      description: "Orientamos sobre como obter autorização para trabalhar legalmente na Irlanda.",
      features: ["Work Permit", "Employment Permit", "General Employment", "Critical Skills"]
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nossos Principais Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Especializamos nos serviços mais procurados por brasileiros 
            que desejam viver, trabalhar ou estudar na Irlanda.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-green-200">
              <CardHeader>
                <div className="bg-green-100 p-3 rounded-full w-fit mb-4">
                  <service.icon className="h-8 w-8 text-green-800" />
                </div>
                <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <span className="w-2 h-2 bg-green-800 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-green-50 rounded-2xl p-8 text-center">
          <MapPin className="h-12 w-12 text-green-800 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Outros Serviços Disponíveis
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Além dos serviços destacados acima, também oferecemos assessoria para reunificação familiar, 
            residência permanente, cidadania irlandesa e vistos de investidor. Entre em contato para 
            conhecer nossa gama completa de serviços personalizados para brasileiros.
          </p>
          <Button className="bg-green-800 hover:bg-green-700 text-white px-8 py-3">
            Ver Todos os Serviços
          </Button>
        </div>
      </div>
    </section>
  );
}