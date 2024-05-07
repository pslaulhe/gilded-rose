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
      this.updateItemQuality(this.items[i]);
    }

    return this.items;
  }


  updateItemQuality(item: Item) {
    switch (item.name) {
      case 'Aged Brie':
        this.updateAgedBrie(item);
        break;
      case 'Backstage passes to a TAFKAL80ETC concert':
        this.updateBackstagePass(item);
        break;
      case 'Sulfuras, Hand of Ragnaros':
        // Sulfuras item remains unchanged
        break;
      case 'Conjured':
        this.updateItem(item,2);
        break;
      default:
        this.updateItem(item, 1);
        break;
    }
  }


  private updateAgedBrie(item: Item) {
    item.quality = Math.min(50, item.quality + 1);
    item.sellIn -= 1;

    if (item.sellIn < 0) {
      item.quality = Math.min(50, item.quality + 1);
    }
  }

  private updateBackstagePass(item: Item) {
    let qualityIncrease = this.getBackstagePassQualityIncrease(item);
    item.quality = Math.min(50, item.quality + qualityIncrease);
    item.sellIn -= 1;

    if (item.sellIn < 0) {
      item.quality = 0;
    }
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

  private updateItem(item: Item, degradingFactor: number){
    item.quality = Math.max(0, item.quality - degradingFactor);
    item.sellIn -= 1;
    if (item.sellIn < 0) {
      item.quality = Math.max(0, item.quality - degradingFactor);
    }
  }
}
