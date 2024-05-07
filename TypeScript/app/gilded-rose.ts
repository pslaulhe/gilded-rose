export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.updateItem(this.items[i]);
    }

    return this.items;
  }


  updateItem(item: Item) {
    if (item.name === 'Sulfuras, Hand of Ragnaros') return;

    item.sellIn -= 1;
    const sellInQualityModifierFactor = item.sellIn < 0 ? 2 : 1;
    let qualityModifier: number;

    if (item.name === 'Aged Brie') {
      qualityModifier = 1 * sellInQualityModifierFactor;
    } else  if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      qualityModifier = item.sellIn < 0 ? -item.quality : this.getBackstagePassQualityIncrease(item);
    } else if (item.name === 'Conjured') {
      qualityModifier = -2 * sellInQualityModifierFactor;
    } else {
      qualityModifier = -1 * sellInQualityModifierFactor;
    }

    this.updateItemQuality(item, qualityModifier);
  }

  private getBackstagePassQualityIncrease(item: Item) {
    if (item.sellIn < 0) {
      return 0;
    } else if (item.sellIn < 6) {
      return 3;
    } else if (item.sellIn < 11) {
      return 2;
    } else {
      return 1;
    }
  }

  private updateItemQuality(item: Item, qualityModifier: number){
    item.quality = Math.min(50, Math.max(0, item.quality + qualityModifier));
  }
}
