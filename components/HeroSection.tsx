import { Button } from "./ui/button";
import { Award, Users, Globe } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function HeroSection() {
  return (
    <section id="inicio" className="bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Frase inicial */}
        <div className="text-center mb-12">
          <p className="text-2xl lg:text-3xl text-green-200 mb-2">
            Mais do que uma firma de consultoria de imigração na Irlanda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Seu Sonho de Viver na <span className="text-green-300">Irlanda</span> Começa Aqui
            </h1>
            <p className="text-xl mb-8 text-green-100 leading-relaxed">
              Especialistas em imigração brasileira para a Irlanda com mais de 10 anos de experiência. 
              Transformamos seu sonho irlandês em realidade com segurança jurídica e dedicação total.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-white text-green-900 hover:bg-green-50 px-8 py-3">
                Consulta Gratuita
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-900 px-8 py-3">
                Nossos Serviços
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-green-800 p-3 rounded-full w-fit mx-auto mb-2">
                  <Award className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold">300+</div>
                <div className="text-sm text-green-200">Brasileiros na Irlanda</div>
              </div>
              <div className="text-center">
                <div className="bg-green-800 p-3 rounded-full w-fit mx-auto mb-2">
                  <Users className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm text-green-200">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="bg-green-800 p-3 rounded-full w-fit mx-auto mb-2">
                  <Globe className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm text-green-200">Taxa de Aprovação</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1594736797933-d0b22d3fabb7?w=500&h=600&fit=crop&crop=face"
                alt="Dra. Quezia Goodwin em frente ao tribunal irlandês"
                className="rounded-2xl shadow-2xl w-96 h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-green-900 p-4 rounded-xl shadow-lg">
                <h3 className="font-bold text-lg">Dra. Quezia Goodwin</h3>
                <p className="text-sm text-green-700">Especialista em Imigração</p>
                <p className="text-xs text-green-600">Dublin, Irlanda</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}