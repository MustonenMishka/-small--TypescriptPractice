import {View} from "./View";
import {User, UserProps} from "../models/User";
import {UserShow} from "./UserShow";
import {UserForm} from "./UserForm";


export class UserEdit extends View<User, UserProps>{
    regionsMap(): { [p: string]: string } {
        return {
            UserShow: ".user-show",
            UserForm: ".user-form"
        }
    }

    viewNesting(): void {
        new UserShow(this.regions.UserShow, this.model).render();
        new UserForm(this.regions.UserForm, this.model).render();
    }

    template(): string {
        return `
            <div class="user-show"></div>
            <div class="user-form"></div>
        `;
    }
}