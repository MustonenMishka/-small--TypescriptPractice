import {Collection} from "../models/Collection";

export abstract class CollectionView<T, K> {
    constructor(public parent: Element, public collection: Collection<T, K>) {
        this.bindModel()
    }

    abstract itemTemplate(model: T): string;

    bindModel(): void {
        this.collection.on('change', () => {
            this.render();
        });
    }

    render(): void {
        this.parent.innerHTML = '';

        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.collection.models.reduce((markup: string, item) => markup + this.itemTemplate(item), '');

        this.parent.append(templateElement.content)
    }
}