import {User, UserProps} from "../models/User";
import {CollectionView} from "./CollectionView";

export class UserCollection extends CollectionView<User, UserProps>{
    itemTemplate(model: User): string {
        return `
            <div>User Detail:</div>
            <div>User name: ${model.get('name')}</div>
            <div>User age: ${model.get('age')}</div>
            <hr>
        `;
    }
}