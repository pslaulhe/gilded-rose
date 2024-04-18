import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  it('should increase quality of aged brie when sell date is passed', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  });

  it('should increase quality of aged brie when sell date is not passed', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 5, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(1);
  });
});
