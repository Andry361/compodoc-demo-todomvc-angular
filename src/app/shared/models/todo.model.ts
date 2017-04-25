import { superString } from '../interfaces/interfaces';

/**
 * The todo class
 * See {@link TodoStore} for service using it
 */
export class Todo {
    /**
     * Completed status
     */
    completed: Boolean;
    /**
     * Editing status
     */
    editing: Boolean;

    /**
     * Just for Compodoc feature demo
     */
    oneProperty: superString;

    /**
     * Title
     */
    private _title: string;
    get title() {
        return this._title;
    }
    set title(value: string) {
        this._title = value.trim();
    }

    static classMethod() {
        return 'hello';
    }

    constructor(title: string) {
        this.completed = false;
        this.editing = false;
        this.title = title.trim();
    }

    /**
     *  fakeMethod !!
     *  @example <caption>Usage of fakeMethod</caption>
     *  returns true;
     *  fakeMethod()
     */
    fakeMethod(): boolean {
        return true;
    }
}
