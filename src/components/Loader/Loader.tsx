"use client";

import { useState, useEffect } from "react";
import styles from "./Loader.module.scss";

export default function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className={styles.loader}>
      <div className={styles.loaderBox}>
        {Array.from({ length: 9 }, (_, i) => (
          <div key={i} className={styles.loaderBoxItem} />
        ))}
      </div>
    </div>
  );
}
