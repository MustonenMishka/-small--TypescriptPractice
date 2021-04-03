import {User, UserProps} from "../models/User";
import {View} from "./View";

export class UserForm extends View<User, UserProps>{
    eventsMap(): { [key: string]: () => void } {
        return {
            "click:.set-age": this.onSetAgeClick,
            "click:.set-name": this.onSetNameClick,
            "click:.save": this.onSaveClick,
        }
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge();
    }

    onSetNameClick = (): void => {
        const input = <HTMLInputElement>this.parent.querySelector('.name-input');
        if (input) {
            const name = input.value;
            this.model.set({name});
        }
    }

    onSaveClick = (): void => {
        this.model.save();
    }

    template(): string {
        return `
            <div>
                <input type="text" class="name-input" placeholder="${this.model.get('name')}"/>
                <button class="set-name">Change Name</button>
                <button class="set-age">Set random age</button>
                <button class="save">Save</button>
            </div>
        `
    }
}