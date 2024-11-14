import CoreConecpt from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function () {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConecpt key={conceptItem.title} {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}
