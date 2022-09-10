import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas en <AddCategory />', () => {
  test('debe cambiar el valor de la caja de texto ', () => {
    render(<AddCategory onAddCategory={() => {}} />);
    const input = screen.getByRole('textbox');
    fireEvent.input(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  test('debe de llamar onAddCategory si el input tiene un valor', () => {
    const inputValue = 'test';
    const onAddCategory = jest.fn();

    render(<AddCategory onAddCategory={onAddCategory} />);

    const input = screen.getByRole('textbox');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: inputValue } });
    fireEvent.submit(form);
    // screen.debug();
    expect(input.value).toBe('');

    expect(onAddCategory).toHaveBeenCalled();
    expect(onAddCategory).toHaveBeenCalledTimes(1);
    expect(onAddCategory).toHaveBeenCalledWith(inputValue);
  });

  test('no debe de llamar onAddCategory si el input esta vacio', () => {
    const onAddCategory = jest.fn();
    render(<AddCategory onAddCategory={onAddCategory} />);
    const form = screen.getByRole('form');

    expect(onAddCategory).toHaveBeenCalledTimes(0);
    expect(onAddCategory).not.toHaveBeenCalled();
  });
});
