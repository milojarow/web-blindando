'use client';

export default function ContactItem({ title, content, isLink, href }) {
  return (
    <div className="mb-4">
      <h4 className="text-sm font-medium text-[#64748b] mb-1">{title}</h4>
      {isLink ? (
        <a 
          href={href} 
          className="text-[#3b82f6] hover:text-[#1d4ed8] transition-colors"
        >
          {content}
        </a>
      ) : (
        <p className="text-[#334155]">{content}</p>
      )}
    </div>
  );
} 