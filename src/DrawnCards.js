import React, { useState, useEffect } from "react";
import Card from "./Card";

/** DrawnCards
 *
 * Renders all drawn Cards
 *
 * Props:
 *  - cards
 *
 * Render Path:
 *  ShuffleApp -> DrawnCards -> Card
 */
function DrawnCards({ cards }) {
  return (
    <div className="DrawnCards">
      {cards.map((card) => (
        <Card key={card.code} card={card} />
      ))}
    </div>
  );
}

export default DrawnCards;
