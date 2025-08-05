import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    console.log('Formulário enviado:', formData);
    alert('Obrigado! Entraremos em contato em breve.');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pronto para dar o primeiro passo rumo à Irlanda? Nossa equipe está aqui para 
            orientá-lo em toda sua jornada migratória.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Agende sua Consulta Gratuita
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">WhatsApp/Telefone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="mt-1"
                        placeholder="+55 (11) 99999-9999"
                      />
                    </div>
                    <div>
                      <Label htmlFor="service">Serviço de Interesse</Label>
                      <Select onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Selecione um serviço" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Visto de Estudante</SelectItem>
                          <SelectItem value="work">Permissão de Trabalho</SelectItem>
                          <SelectItem value="family">Reunificação Familiar</SelectItem>
                          <SelectItem value="residence">Residência Permanente</SelectItem>
                          <SelectItem value="business">Visto de Investidor</SelectItem>
                          <SelectItem value="citizenship">Cidadania Irlandesa</SelectItem>
                          <SelectItem value="other">Outro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Mensagem *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="mt-1 min-h-32"
                      placeholder="Conte-nos sobre seus planos para a Irlanda, sua situação atual e como podemos ajudá-lo..."
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-green-800 hover:bg-green-700 text-white py-3"
                  >
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-green-800 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Telefone Brasil</p>
                    <p className="text-gray-600">+55 (11) 3456-7890</p>
                    <p className="font-medium text-gray-900 mt-2">Telefone Irlanda</p>
                    <p className="text-gray-600">+353 1 234 5678</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-green-800 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">E-mail</p>
                    <p className="text-gray-600">contato@goodwinimmigration.ie</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-green-800 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Escritório Dublin</p>
                    <p className="text-gray-600">
                      123 O'Connell Street<br />
                      Dublin 1, Irlanda
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-green-800 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Horário</p>
                    <p className="text-gray-600">
                      Segunda - Sexta: 9h às 18h (GMT)<br />
                      Atendimento Brasil: 14h às 22h
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-green-800 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">Atendimento Personalizado</h3>
                <p className="text-green-100 mb-4">
                  Oferecemos atendimento em português para brasileiros em 
                  todos os horários comerciais, tanto do Brasil quanto da Irlanda.
                </p>
                <Button variant="secondary" className="w-full">
                  WhatsApp Direto
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}