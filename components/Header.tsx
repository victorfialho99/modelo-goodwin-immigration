import { Button } from "./ui/button";
import { Scale } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-green-800 p-2 rounded-lg">
              <Scale className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Goodwin Immigration</h1>
              <p className="text-sm text-gray-600">Imigração Brasil - Irlanda</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-green-800 transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-green-800 transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-gray-700 hover:text-green-800 transition-colors">
              Serviços
            </a>
            <a href="#contato" className="text-gray-700 hover:text-green-800 transition-colors">
              Contato
            </a>
          </nav>
          
          <Button className="bg-green-800 hover:bg-green-700 text-white">
            Consulta Gratuita
          </Button>
        </div>
      </div>
    </header>
  );
}