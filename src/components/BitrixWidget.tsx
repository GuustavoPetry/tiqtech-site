import { useEffect } from "react";

export default function BitrixWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.bitrix24.com.br/b29807247/crm/site_button/loader_3_w8ntqt.js?" +
      Math.floor(Date.now() / 60000);
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // remove quando o componente desmontar
    };
  }, []);

  return null; // não precisa renderizar nada no JSX
}