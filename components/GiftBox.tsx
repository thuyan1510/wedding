import React from 'react';
import { Gift, Copy } from 'lucide-react';
import Reveal from './Reveal';

const BankCard: React.FC<{
  bankName: string;
  accountName: string;
  accountNumber: string;
  qrCode: string;
}> = ({ bankName, accountName, accountNumber, qrCode }) => {
    
  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    alert(`Copied ${accountNumber} to clipboard!`);
  };

  return (
    <div className="bg-white p-3 md:p-6 rounded-lg shadow-md border border-gray-100 flex flex-col items-center text-center w-full md:max-w-[280px]">
      <img src={qrCode} alt="QR Code" className="w-20 h-20 md:w-32 md:h-32 mb-2 md:mb-4 mix-blend-multiply" />
      <h4 className="font-bold text-gray-800 text-xs md:text-base">{bankName}</h4>
      <p className="text-gray-600 text-[10px] md:text-sm mb-1 truncate w-full">{accountName}</p>
      <div className="flex items-center justify-center space-x-1 md:space-x-2 bg-gray-50 px-2 md:px-3 py-1 rounded-full mt-1 cursor-pointer hover:bg-gray-100 transition-colors w-full" onClick={handleCopy}>
        <span className="font-mono text-wedding-gold font-bold text-[10px] md:text-sm truncate">{accountNumber}</span>
        <Copy size={10} className="text-gray-400 shrink-0" />
      </div>
    </div>
  );
};

const GiftBox: React.FC = () => {
  return (
    <section className="h-screen w-full snap-start bg-white border-t border-gray-100 flex flex-col justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center w-full">
        <Reveal animation="fade-up">
            <div className="inline-block p-2 md:p-3 rounded-full bg-wedding-pink/20 mb-3 md:mb-6">
            <Gift size={20} className="text-wedding-accent md:w-8 md:h-8" />
            </div>
            <h2 className="font-serif text-2xl md:text-4xl text-gray-800 mb-2 md:mb-4">Wedding Gift</h2>
            <p className="text-gray-500 mb-6 md:mb-12 max-w-lg mx-auto text-xs md:text-base px-2">
            Your presence is the greatest gift.
            </p>
        </Reveal>
        
        {/* Mobile: Grid 2 cols | Desktop: Flex */}
        <div className="grid grid-cols-2 md:flex md:flex-row gap-3 md:gap-8 justify-center items-center">
          <Reveal animation="slide-left" delay={200} className="w-full">
            <BankCard 
                bankName="Vietcombank"
                accountName="LÊ TÚ NAM"
                accountNumber="1234 5678 9999"
                qrCode="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=123456789999"
            />
          </Reveal>
          <Reveal animation="slide-right" delay={300} className="w-full">
           <BankCard 
            bankName="Vietcombank"
            accountName="BÙI THỊ THÚY AN"
            accountNumber="9876 5432 1111"
            qrCode="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=987654321111"
          />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default GiftBox;