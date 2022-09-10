import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';
jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'test';
  const message = 'Cargando...';

  test('debe demostrar el loading inicialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    //screen.debug();
    expect(screen.getByText(message));
    expect(screen.getByText(category));
  });

  test('debe demostrar items cuando se cargan las imagenes useFetchGifs', () => {
    const gifs = [
      {
        id: 'test1',
        title: 'Test1',
        url: 'www.test1.com',
      },
      {
        id: 'test2',
        title: 'Test2',
        url: 'www.test2.com',
      },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
