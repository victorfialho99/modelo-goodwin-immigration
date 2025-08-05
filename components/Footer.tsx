import { Scale, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-600 p-2 rounded-lg">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Goodwin Immigration</h3>
                <p className="text-sm text-gray-400">Brasil - Irlanda</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Conectando brasileiros ao sonho irlandês através da excelência em direito de imigração.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-green-400 cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Visto de Estudante</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Permissão de Trabalho</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Reunificação Familiar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Residência Permanente</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cidadania Irlandesa</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Blog Brasil-Irlanda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guia do Imigrante</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custo de Vida Irlanda</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portal do Cliente</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li><strong>Brasil:</strong> +55 (11) 3456-7890</li>
              <li><strong>Irlanda:</strong> +353 1 234 5678</li>
              <li>contato@goodwinimmigration.ie</li>
              <li>Dublin 1, Irlanda</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Goodwin Immigration. Todos os direitos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
              <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}