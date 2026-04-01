import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Card } from "@/app/components/ui/card";

interface LobbyProps {
  onBack: () => void;
}

export function Lobby({ onBack }: LobbyProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    city: "",
    phone: "",
    idCard: "",
    email: "",
    company: "",
    companyType: "",
    legalRep: "",
    address: "",
    businessTime: "",
    branches: "",
    website: "",
    facebook: "",
    instagram: "",
    valueDifference: "",
    targetContact: "",
    attemptedContact: "",
    connectionIssue: "",
    connectionResult: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Formulario enviado exitosamente!");
    // Reset form
    setFormData({
      fullName: "",
      city: "",
      phone: "",
      idCard: "",
      email: "",
      company: "",
      companyType: "",
      legalRep: "",
      address: "",
      businessTime: "",
      branches: "",
      website: "",
      facebook: "",
      instagram: "",
      valueDifference: "",
      targetContact: "",
      attemptedContact: "",
      connectionIssue: "",
      connectionResult: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 hover:text-orange-600 font-medium mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Volver
        </button>

        <Card className="p-8 rounded-3xl shadow-lg border-2 border-gray-300 bg-white">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Formulario Lobby</h2>
          <p className="text-gray-700 mb-8 leading-relaxed">
            Queremos ayudarte a conectar, a que puedas generar nuevas oportunidades de negocio y
            conectar con quien o quienes tu necesites para que puedas realizar las acciones comerciales
            que desees.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Nombre Completo */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Nombre Completo:</label>
              <Input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full py-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500 bg-gray-100"
                required
              />
            </div>

            {/* Ciudad en que vives */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Ciudad en que vives:</label>
              <Input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full py-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500 bg-gray-100"
                required
              />
            </div>

            {/* Teléfono */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Teléfono:</label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full py-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500 bg-gray-100"
                required
              />
            </div>

            {/* Carnet de identidad */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Carnet de identidad:</label>
              <Input
                type="text"
                name="idCard"
                value={formData.idCard}
                onChange={handleChange}
                className="w-full py-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500 bg-gray-100"
                required
              />
            </div>

            {/* Correo electrónico */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Correo electrónico:</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500 bg-gray-100"
                required
              />
            </div>

            {/* Empresa o servicio(s) que brindas */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Empresa o servicio(s) que brindas:
              </label>
              <Input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full py-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500 bg-gray-100"
                required
              />
            </div>

            {/* Tipo de empresa */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Tipo de empresa:</label>
              <Input
                type="text"
                name="companyType"
                value={formData.companyType}
                onChange={handleChange}
                className="w-full py-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500 bg-gray-100"
                required
              />
            </div>

            {/* Representante legal */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Representante legal:</label>
              <Input
                type="text"
                name="legalRep"
                value={formData.legalRep}
                onChange={handleChange}
                className="w-full py-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500 bg-gray-100"
                required
              />
            </div>

            {/* Dirección */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Dirección:</label>
              <Input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full py-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500 bg-gray-100"
                required
              />
            </div>

            {/* ¿Cuánto tiempo tiene que abriste tu empresa o que ofreces los servicios que brindas */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                ¿Cuánto tiempo tiene que abriste tu empresa o que ofreces los servicios que brindas:
              </label>
              <Input
                type="text"
                name="businessTime"
                value={formData.businessTime}
                onChange={handleChange}
                className="w-full py-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500 bg-gray-100"
                required
              />
            </div>

            {/* ¿Cuentas con sucursales? */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                ¿Cuentas con sucursales? Si tu respuesta es positiva menciona cuantas y donde están:
              </label>
              <textarea
                name="branches"
                value={formData.branches}
                onChange={handleChange}
                rows={3}
                className="w-full py-4 px-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500 resize-none bg-gray-100"
                required
              />
            </div>

            {/* Página Web */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Página Web:</label>
              <Input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full py-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500 bg-gray-100"
              />
            </div>

            {/* Nombre de Fan Page de Facebook */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Nombre de Fan Page de Facebook:
              </label>
              <Input
                type="text"
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
                className="w-full py-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500 bg-gray-100"
              />
            </div>

            {/* Nombre de cuenta de Instagram */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Nombre de cuenta de Instagram:
              </label>
              <Input
                type="text"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                className="w-full py-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500 bg-gray-100"
              />
            </div>

            {/* Menciona la diferencia de valor */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Menciona la diferencia de valor de lo que ofreces con lo que ya existe en el mercado:
              </label>
              <textarea
                name="valueDifference"
                value={formData.valueDifference}
                onChange={handleChange}
                rows={4}
                className="w-full py-4 px-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500 resize-none bg-gray-100"
                required
              />
            </div>

            {/* ¿Con qué empresa profesional o persona deseas contactarte? */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                ¿Con qué empresa profesional o persona deseas contactarte?:
              </label>
              <Input
                type="text"
                name="targetContact"
                value={formData.targetContact}
                onChange={handleChange}
                className="w-full py-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500 bg-gray-100"
                required
              />
            </div>

            {/* ¿Has intentado contactar anteriormente? */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                ¿Has intentado contactar anteriormente?
              </label>
              <Input
                type="text"
                name="attemptedContact"
                value={formData.attemptedContact}
                onChange={handleChange}
                className="w-full py-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500 bg-gray-100"
                required
              />
            </div>

            {/* ¿Por qué no pudiste hacer el nexo o lograr tu objetivo? */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                ¿Por qué no pudiste hacer el nexo o lograr tu objetivo?
              </label>
              <textarea
                name="connectionIssue"
                value={formData.connectionIssue}
                onChange={handleChange}
                rows={3}
                className="w-full py-4 px-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500 resize-none bg-gray-100"
                required
              />
            </div>

            {/* ¿Qué sucedería si lograrás esa conexión? */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                ¿Qué sucedería si lograrás esa conexión?
              </label>
              <textarea
                name="connectionResult"
                value={formData.connectionResult}
                onChange={handleChange}
                rows={3}
                className="w-full py-4 px-4 rounded-2xl border-2 border-gray-300 focus:border-orange-500 resize-none bg-gray-100"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="text-orange-500 hover:text-orange-600 font-bold text-base transition-colors cursor-pointer inline-block"
              >
                Enviar Formulario
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}