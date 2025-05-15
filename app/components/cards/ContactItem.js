'use client';

export default function ContactItem({ title, content, isLink, href }) {
  // Check if this is a WhatsApp link
  const isWhatsApp = href && href.includes('wa.me');
  
  // For WhatsApp number, only remove the country code and parentheses but keep area code
  let displayContent = content;
  if (isWhatsApp && content.includes('+52 (899)')) {
    displayContent = content.replace('+52 (', '').replace(')', '');
  }
  
  return (
    <div className="mb-4">
      <h4 className="text-sm font-medium text-[#64748b] mb-1">{title}</h4>
      {isLink ? (
        isWhatsApp ? (
          <a 
            href={href} 
            className="group inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg hover:bg-[#128C7E] transition-all shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06),inset_0_1px_0_0_rgba(255,255,255,0.2)] hover:shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05),inset_0_1px_0_0_rgba(255,255,255,0.2)]"
          >
            <span>{displayContent}</span>
            <div className="h-5 w-px bg-white/40 mx-2"></div>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-5 h-5 transition-transform duration-500 group-hover:rotate-360"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>
        ) : (
          <a 
            href={href} 
            className="text-[#3b82f6] hover:text-[#1d4ed8] transition-colors"
          >
            {content}
          </a>
        )
      ) : (
        <p className="text-[#334155]">{content}</p>
      )}
    </div>
  );
} 