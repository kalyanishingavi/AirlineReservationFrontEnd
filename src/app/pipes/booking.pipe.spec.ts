import { BookingPipe } from './booking.pipe';

describe('BookingPipe', () => {
  it('create an instance', () => {
    const pipe = new BookingPipe();
    expect(pipe).toBeTruthy();
  });
});
