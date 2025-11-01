import { atom } from "jotai";
import { Dealer } from "../data/generator";
export const distributorAtom = atom("");
export const dealersAtom = atom<Dealer[]>([]);
export const dealerIdsAtom = atom((get) => {
  // Get the current value from usersAtom
  const dealers = get(dealersAtom);

  // Map the array to a new array containing only the IDs
  return dealers.map((dealer) => dealer.id);
});
