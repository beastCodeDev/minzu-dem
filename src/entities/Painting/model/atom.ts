import { atom } from 'jotai';
import { atomWithDefault } from 'jotai/utils';
import { Painting } from './types';
import { loadPaingings } from '../api';

export interface ApiRequest {
  type: 'MH' | 'MES';
}

export const paintingsAtom = atomWithDefault<Painting[] | null>((_get) => null);

export const setPaintingsAtom = atom<
  Painting[] | null,
  unknown[],
  Promise<void>
>(
  (get) => get(paintingsAtom),
  async (_get, set) => {
    // todo: make api req

    const response = await loadPaingings();

    console.log(response);
    if (response.data) {
      set(paintingsAtom, response.data);
    }
  },
);
