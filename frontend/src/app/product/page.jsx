import styles from "@/styles/page.module.css";
import PageTemplate from "@/components/PageTemplate";

import ProductFromRawMaterial from "@/components/ProductFromRawMaterial";

export default function Page() {
  return (
    <PageTemplate>
      <ProductFromRawMaterial />
    </PageTemplate>
  );
}
