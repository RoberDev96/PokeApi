import { create } from 'zustand';

export const usePokemonStore = create((set) => ({
  Poke: [],
  selectPoke: null,
  setPoke: (pokemons) => set({ 
    Poke: pokemons 
  }),
  setselectPoke: (name) => set({ 
    selectPoke: name 
  }) 
}));