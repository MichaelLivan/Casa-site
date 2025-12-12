import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Send, Check, AlertCircle } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // EmailJS precisa ser configurado com seus IDs
    // Substitua com seus próprios IDs do EmailJS
    emailjs.send(
      'YOUR_SERVICE_ID', // e.g., 'service_1234567'
      'YOUR_TEMPLATE_ID', // e.g., 'template_1234567'
      {
        from_name: formData.name,
        reply_to: formData.email,
        phone: formData.phone,
        message: formData.message
      },
      'YOUR_USER_ID' // e.g., 'user_1234567'
    )
    .then((response) => {
      setStatus({
        submitted: true,
        success: true,
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setLoading(false);
    })
    .catch((error) => {
      console.error('Erro ao enviar e-mail:', error);
      setStatus({
        submitted: true,
        success: false,
        message: 'Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.'
      });
      setLoading(false);
    });
  };
  
  // Para fins de demonstração, vamos simular o envio do e-mail
  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simular um atraso de envio
    setTimeout(() => {
      setStatus({
        submitted: true,
        success: true,
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setLoading(false);
    }, 1500);
  };
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
      <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-church-blue">Envie-nos uma mensagem</h3>
      
      {status.submitted && (
        <div className={`mb-4 sm:mb-6 p-3 sm:p-4 rounded-lg ${status.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
          <div className="flex items-center">
            {status.success ? (
              <Check className="mr-2 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
            ) : (
              <AlertCircle className="mr-2 flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
            )}
            <p className="text-sm sm:text-base">{status.message}</p>
          </div>
        </div>
      )}
      
      <form onSubmit={handleDemoSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nome Completo*</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">E-mail*</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Telefone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
            />
          </div>
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensagem*</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="form-input"
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="btn-primary w-full flex items-center justify-center"
          disabled={loading}
        >
          {loading ? (
            <span className="animate-spin h-5 w-5 mr-3 border-2 border-white border-t-transparent rounded-full"></span>
          ) : (
            <Send size={18} className="mr-2" />
          )}
          {loading ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;