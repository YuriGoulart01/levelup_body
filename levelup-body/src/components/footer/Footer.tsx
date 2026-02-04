import { InstagramLogo, LinkedinLogo, EnvelopeSimple, Phone } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';

function Footer() {
  const date = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center bg-black text-white">
        <div className="container flex flex-col items-center py-10 px-4">
          
          
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            
            
            <div>
              <h2 className="text-2xl font-bold uppercase mb-4">
                LevelUp<span className="text-orange-600">Body</span>
              </h2>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Transforme sua sala em uma academia completa. Treinos guiados por profissionais para você alcançar sua melhor versão, sem sair de casa.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:scale-110 transition-transform">
                  <LinkedinLogo size={28} className="text-gray-300 hover:text-orange-500 transition-colors" />
                </a>
                
                
                <a 
                  href="https://www.instagram.com/levelupbodyjs10/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:scale-110 transition-transform"
                >
                  <InstagramLogo size={28} className="text-gray-300 hover:text-orange-500 transition-colors" />
                </a>
                
              </div>
            </div>

            
            <div>
              <h3 className="text-lg font-bold mb-4 text-orange-500">Links Rápidos</h3>
              <ul className="flex flex-col gap-2 text-gray-400 text-sm">
                <li>
                    <Link to="/home" className="hover:text-white hover:underline transition-all">Home</Link>
                </li>
                <li>
                    <Link to="/perfil" className="hover:text-white hover:underline transition-all">Meu Perfil</Link>
                </li>
                <li>
                    <Link to="/cadastro" className="hover:text-white hover:underline transition-all">Cadastrar-se</Link>
                </li>
                <li>
                    <Link to="/login" className="hover:text-white hover:underline transition-all">Entrar</Link>
                </li>
              </ul>
            </div>

            
            <div>
              <h3 className="text-lg font-bold mb-4 text-orange-500">Explore os Treinos</h3>
              <ul className="flex flex-col gap-2 text-gray-400 text-sm">
                <li className="hover:text-white cursor-pointer transition-colors">Musculação em Casa</li>
                <li className="hover:text-white cursor-pointer transition-colors">Cardio Intenso (HIIT)</li>
                <li className="hover:text-white cursor-pointer transition-colors">Yoga e Flexibilidade</li>
                <li className="hover:text-white cursor-pointer transition-colors">Dança Fitness</li>
              </ul>
            </div>

            
            <div>
              <h3 className="text-lg font-bold mb-4 text-orange-500">Fale Conosco</h3>
              <ul className="flex flex-col gap-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <EnvelopeSimple size={20} className="text-orange-500" />
                  suporte@levelupbody.com
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={20} className="text-orange-500" />
                  +55 (11) 99999-9999
                </li>
                <li className="mt-4 text-xs text-gray-500">
                  Atendimento: Seg - Sex, das 9h às 18h
                </li>
              </ul>
            </div>
          </div>

          
          <div className="w-full h-[1px] bg-zinc-800 my-4"></div>

          
          <div className="w-full flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>© {date} LevelUpBody. Todos os direitos reservados.</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <span className="hover:text-gray-300 cursor-pointer">Política de Privacidade</span>
              <span className="hover:text-gray-300 cursor-pointer">Termos de Uso</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Footer;