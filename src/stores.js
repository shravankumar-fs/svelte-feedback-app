import { writable } from 'svelte/store';

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit ut numquam similique pariatur aspernatur cupiditate porro deleniti ea ipsum adipisci reprehenderit, sequi fuga consectetur debitis ducimus laudantium consequatur in.',
  },
  {
    id: 2,
    rating: 9,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit ut numquam similique pariatur aspernatur cupiditate porro deleniti ea ipsum adipisci reprehenderit, sequi fuga consectetur debitis ducimus laudantium consequatur in.',
  },
  {
    id: 3,
    rating: 8,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis sit ut numquam similique pariatur aspernatur cupiditate porro deleniti ea ipsum adipisci reprehenderit, sequi fuga consectetur debitis ducimus laudantium consequatur in.',
  },
]);
