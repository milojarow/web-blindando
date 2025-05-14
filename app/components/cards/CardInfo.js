'use client';

export default function CardInfo({ title, content }) {
  return (
    <div className="text-center">
      <h4 className="text-xl font-semibold mb-4">{title}</h4>
      <p className="text-gray-700 text-lg">
        {content}
      </p>
    </div>
  );
} 