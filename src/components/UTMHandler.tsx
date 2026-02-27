import { useEffect } from "react";

function UTMHandler() {
  useEffect(() => {
    const url = new URL(window.location.href);

    // Só adiciona se não existir utm_source
    if (!url.searchParams.has("utm_source")) {
      url.searchParams.set("utm_source", "tiqtech-site");
      url.searchParams.set("utm_medium", "organico");
      url.searchParams.set("utm_campaign", "trafego-direto");
      url.searchParams.set("utm_content", "form-bitrix24");
      url.searchParams.set("utm-term", "bitrix-professional");


      window.history.replaceState({}, "", url);
    }
  }, []);

  return null;
}

export default UTMHandler;