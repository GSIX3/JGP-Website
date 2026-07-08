import { useEffect, useMemo, useState } from "react";
import "../styles/products.css";
import { site } from "../content/site";
import SectionHeader from "../components/SectionHeader";
import {
  overviewCategories,
  type Medicine,
  type OverviewCategory,
} from "../content/products";

function getCategoryCount(
  medicines: Medicine[],
  category: OverviewCategory,
): number {
  return medicines.filter((item) =>
    category.formCategories.includes(item.category),
  ).length;
}

export default function Products() {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch("/data/medicines.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to load catalog (${res.status})`);
        }
        return res.json() as Promise<Medicine[]>;
      })
      .then((data) => {
        if (!cancelled) {
          setMedicines(data);
          setLoading(false);
        }
      })
      .catch((err: Error) => {
        if (!cancelled) {
          setLoadError(err.message);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const category of overviewCategories) {
      counts.set(category.id, getCategoryCount(medicines, category));
    }
    return counts;
  }, [medicines]);

  return (
    <section id="products" className="products-page">
      <div className="products-inner">
        <SectionHeader
          title={
            <>
              <span className="products-title-accent">Product</span>
              <span className="products-title-dark">Categories</span>
            </>
          }
          subtitle={site.shortDescription}
        />

        {loading && <p className="products-status">Loading catalog…</p>}
        {loadError && (
          <p className="products-status products-status--error">{loadError}</p>
        )}

        <div className="products-grid">
        {overviewCategories.map((category) => {
          const count = categoryCounts.get(category.id) ?? 0;

          return (
            <article className="product-card" key={category.id}>
              <img
                className="product-card__image"
                src={category.image}
                alt=""
                loading="lazy"
              />
              <div className="product-card__overlay" aria-hidden="true" />
              <div className="product-card__content">
                <h3>{category.name}</h3>
                <p className="product-card__desc">{category.description}</p>
                {!loading && !loadError && count > 0 && (
                  <p className="product-card__count">{count} products</p>
                )}
              </div>
            </article>
          );
        })}
        </div>
      </div>
    </section>
  );
}
