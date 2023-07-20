import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';
import Instruction from './components/Instruction';
import userEvent from "@testing-library/user-event";
import Card from './components/Card';

describe('App', () => {
    it('renders score ', () => {
        render(<Instruction/>)
        expect(screen.getByRole("heading", { level: 4}).textContent).toMatch(/Score: /i)
    })

    it('should call click function when clicked', async () => {
        const clickCard = vi.fn()
        const user = userEvent.setup();
        const pokemonList = [{name: "bulbasaur"}]
        render(<Card clickCard={clickCard} pokemonList={pokemonList} />)
        const card = screen.getByRole("img", { id: "bulbasaur" });
        await user.click(card)
        expect(clickCard).toHaveBeenCalled()
    })
})


describe('Instruction', () => {
    it('renders headline', () => {
      render(<Instruction />);
      expect(screen.getByRole('heading', {level: 1}).textContent).toMatch(/Gotta click 'em all/i)
      // check if App components renders headline
    });
  });

/*
describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});
*/