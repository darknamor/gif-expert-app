import { render, screen, fireEvent } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
  test('Should match the snapshot', () => {
    const { container } = render(<GifExpertApp />);

    expect(container).toMatchSnapshot();
    //screen.debug();
  });
  test('should Add new categories', () => {
    const { container } = render(<GifExpertApp />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    //disparo los eventos para agregar 3 categorias nuevas
    fireEvent.input(input, { target: { value: 'test' } });
    fireEvent.submit(form); //agrega test

    fireEvent.input(input, { target: { value: 'test' + '2' } });
    fireEvent.submit(form); //agrega test2

    fireEvent.input(input, { target: { value: 'test' + '3' } });
    fireEvent.submit(form); //agrega test3

    //Espero que se hallan agregado 3 categorías cuyos nombres aparecen en etiquetas h3
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(3);
    //screen.debug();
  });
  test('Should not add a repeated category', () => {
    render(<GifExpertApp />);
    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    //disparo los eventos para agregar una categoría
    fireEvent.input(input, { target: { value: 'test' } });
    fireEvent.submit(form); //agrega test

    //Intento agregar la misma categoria
    fireEvent.input(input, { target: { value: 'test' } });
    fireEvent.submit(form); //intento agregar test nuevamente

    //espero que no agregue la misma categoría y sólo esté agregada la primera vez
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBe(1);
    screen.debug();
  });
});
