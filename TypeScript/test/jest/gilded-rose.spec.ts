import { Item, GildedRose } from '@/gilded-rose';

describe('Gilded Rose', () => {
  // Common items
  it('should decrease quality of item when sell date is not passed', () => {
    const gildedRose = new GildedRose([new Item('Whatever', 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(9);
  });

  it('should not decrease the quality when its 0', () => {
    const gildedRose = new GildedRose([new Item('Whatever', 1, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it('should decrease quality of item when sell date is passed', () => {
    const gildedRose = new GildedRose([new Item('Whatever', 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });

  it('should decrease sellin by 1 for normal items', () => {
    const gildedRose = new GildedRose([new Item('Whatever', 5, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
  });

  //--------------------------------
  // Backstage item
  it('should increase quality of backstage passes by 2 when sell date lower or equals to 10 and greater than 5', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  });

  it('should increase quality of backstage passes by 3 when sell date lower or equals to 5 and greater than 0', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 5, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);
  });

  it('should set quality of backstage passes to 0 when sell date is 0', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 0, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

  it('should not increase the quality when its 50', () => {
    const gildedRose = new GildedRose([new Item('Backstage passes to a TAFKAL80ETC concert', 1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  //--------------------------------
  // Aged Brie item
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

  it('should not increase the quality if its already 50', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 5, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

  //--------------------------------
  // Sulfuras item
  it('should not decrease sellin when item is Sulfuras', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(5);
  });

  it('should not update the quality of Sulfuras', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras, Hand of Ragnaros', 5, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
  });

  //--------------------------------
  // Conjured item
  it('should decrease quality of conjured item by 2 when sell date is not passed', () => {
    const gildedRose = new GildedRose([new Item('Conjured', 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
  });

  it('should decrease quality of conjured item by 4 when sell date is passed', () => {
    const gildedRose = new GildedRose([new Item('Conjured', 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(6);
  });

  it('should not decrease quality of conjured item if its already 0', () => {
    const gildedRose = new GildedRose([new Item('Conjured', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });
});
