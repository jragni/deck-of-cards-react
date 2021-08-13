import React from "react";

/** Card
 *
 * Renders image of card
 *
 * Props:
 *  - card like { image, images, code, suit, value }
 *
 * DrawnCards  -> Card
 *
 */
function Card({ card }) {
  return (
    <div className="Card">
      <img src={card.image} alt={`Card of ${card.code}`}></img>;
    </div>
  );
}

export default Card;

