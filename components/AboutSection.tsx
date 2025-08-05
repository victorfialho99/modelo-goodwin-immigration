import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { GraduationCap, Scale, Star, Users, Target, Eye, Heart } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sobre a Goodwin Immigration
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos um escritório especializado em imigração brasileira para a Irlanda, 
            comprometido em oferecer soluções jurídicas eficazes e personalizadas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-6">
                <div className="bg-green-800 p-3 rounded-full mr-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Dra. Quezia Goodwin</h3>
                  <p className="text-gray-600">Advogada Especialista em Imigração para Irlanda</p>
                </div>
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Com mais de 10 anos de experiência em direito de imigração irlandês, a Dra. Quezia Goodwin 
                é reconhecida por sua abordagem dedicada e resultados excepcionais. Formada em Direito 
                Internacional e especializada em imigração européia, ela já ajudou centenas de brasileiros a 
                realizar o sonho de viver na Irlanda.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-green-800 mr-3" />
                  <span className="text-gray-700">Especialização em Direito Europeu (Trinity College Dublin)</span>
                </div>
                <div className="flex items-center">
                  <Scale className="h-5 w-5 text-green-800 mr-3" />
                  <span className="text-gray-700">Membro da Law Society of Ireland</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-green-800 mr-3" />
                  <span className="text-gray-700">Certificação em Imigração Brasileira-Irlandesa</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Missão com design atraente */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-600 p-3 rounded-full mr-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Nossa Missão</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Facilitar a jornada de imigração de brasileiros para a Irlanda com 
                  excelência jurídica, transparência total e dedicação pessoal a cada cliente.
                </p>
              </CardContent>
            </Card>
            
            {/* Visão com design atraente */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-600 p-3 rounded-full mr-4">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Nossa Visão</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Ser reconhecido como o escritório de imigração mais confiável e eficiente 
                  para brasileiros na Irlanda, construindo pontes entre culturas e sonhos.
                </p>
              </CardContent>
            </Card>
            
            {/* Valores com design atraente */}
            <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-600 p-3 rounded-full mr-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">Nossos Valores</h4>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <Badge variant="secondary" className="bg-orange-200 text-orange-800 justify-center py-2">Integridade</Badge>
                  <Badge variant="secondary" className="bg-orange-200 text-orange-800 justify-center py-2">Excelência</Badge>
                  <Badge variant="secondary" className="bg-orange-200 text-orange-800 justify-center py-2">Transparência</Badge>
                  <Badge variant="secondary" className="bg-orange-200 text-orange-800 justify-center py-2">Dedicação</Badge>
                  <Badge variant="secondary" className="bg-orange-200 text-orange-800 justify-center py-2">Humanização</Badge>
                  <Badge variant="secondary" className="bg-orange-200 text-orange-800 justify-center py-2">Resultados</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}