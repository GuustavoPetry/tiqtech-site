import { useEffect, useRef } from "react";

export default function FormularioBitrix() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement("script");
    script.src =
      'https://cdn.bitrix24.com.br/b29807247/crm/form/loader_53.js?' +
      Math.floor(Date.now() / 180000);

    script.async = true;
    script.dataset.b24Form = "inline/53/1zf4jg";
    script.dataset.skipMoving = "true";

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = ""; // limpa ao desmontar
      }
    };
  }, []);

  return (
    <div>
      <div ref={containerRef}></div>
    </div>
  );
}
