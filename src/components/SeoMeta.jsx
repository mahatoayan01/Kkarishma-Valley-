import { useEffect } from 'react';
import { RESTAURANT } from '../data/restaurant';

export default function SeoMeta({ title, description }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${RESTAURANT.name}`
      : `${RESTAURANT.name} | Garden Dining & North Indian Flavours in Bengaluru`;
    document.title = fullTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        description ||
          `${RESTAURANT.name} - Relaxed open garden dining, private thatched huts, and tandoori delicacies in Banashankari 6th Stage, Bengaluru.`
      );
    }
  }, [title, description]);

  return null;
}

