'use client';

export default function CardContact({ icon, title, children }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
      <div className="flex items-center mb-5">
        <div className="mr-3" style={{ color: icon.color }}>
          {icon.component}
        </div>
        <h3 className="text-xl font-semibold text-[#1e293b]">{title}</h3>
      </div>
      <div className="text-left">
        {children}
      </div>
    </div>
  );
} 