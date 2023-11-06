import styles from "@/styles/page.module.css";
import PageTemplate from "@/components/PageTemplate";

import ProductToRetailer from "@/components/ProductToSell";

export default function Page() {
  return (
    <PageTemplate>
      <ProductToRetailer />
    </PageTemplate>
  );
}
