export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-base-200 bg-opacity-50 z-50">
      <div className="loading-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <p className="mt-4 text-primary font-medium">Cargando...</p>
    </div>
  );
} 