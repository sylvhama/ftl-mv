import React from "react";

import styles from "./list.module.css";

const ships = [
  { name: "Kestrel", layouts: [true, true, false] },
  { name: "Engi", layouts: [true, true, false] },
  { name: "Federation", layouts: [true, true, true] },
  { name: "Zoltan", layouts: [true, true, true] },
  { name: "Lanius", layouts: [false, true] },
  { name: "Stealth", layouts: [true, true, true] },
  { name: "Rock", layouts: [true, true, false] },
  { name: "Slug", layouts: [false, true, true] },
  { name: "Mantis", layouts: [true, true, false] },
  { name: "Crystal", layouts: [true, true] }
];

const List = () => (
  <section className={styles.grid}>
    {ships.map(ship => (
      <article className={styles.ship} key={ship.name}>
        <h3>{ship.name}</h3>
        <ol type="A">
          {ship.layouts.map(layout => (
            <li>{layout ? "✅" : "❌"}</li>
          ))}
        </ol>
      </article>
    ))}
  </section>
);

export default List;
