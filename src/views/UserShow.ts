import {View} from "./View";
import {User, UserProps} from "../models/User";

export class UserShow extends View<User, UserProps>{
    template(): string {
        return `
            <div>User Detail</div>
            <div>User name: ${this.model.get('name')}</div>
            <div>User age: ${this.model.get('age')}</div>
        `;
    }
}