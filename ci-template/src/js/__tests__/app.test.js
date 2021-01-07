import healthIndicator from '../app';

test('проверка индикации жизни при здоровье 50', () => {
  const player = { name: 'Маг', health: 50 };
  const received = healthIndicator(player);
  const expected = 'healthy';
  expect(received).toBe(expected);
});


test('проверка индикации жизни при здоровье 90', () => {
  const player = { name: 'Маг', health: 90 };
  const received = healthIndicator(player);
  const expected = 'healthy';
  expect(received).toBe(expected);
});

test('проверка индикации жизни при здоровье 0', () => {
  const player = { name: 'Маг', health: 0 };
  const received = healthIndicator(player);
  const expected = 'critical';
  expect(received).toBe(expected);
});

test('проверка индикации жизни при здоровье 49', () => {
  const player = { name: 'Маг', health: 49 };
  const received = healthIndicator(player);
  const expected = 'wounded';
  expect(received).toBe(expected);
});

test('проверка индикации жизни при здоровье 14', () => {
  const player = { name: 'Маг', health: 14 };
  const received = healthIndicator(player);
  const expected = 'critical';
  expect(received).toBe(expected);
});

test('проверка индикации жизни при здоровье 15', () => {
    const player = { name: 'Маг', health: 15 };
    const received = healthIndicator(player);
    const expected = 'wounded';
    expect(received).toBe(expected);
  });
  